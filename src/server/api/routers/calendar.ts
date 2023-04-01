import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const calendarRouter = createTRPCRouter({
  getMonthIndexEntries: protectedProcedure
    .input(
      z.object({
        month: z.string(),
        year: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (!input)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid input",
        });

      const { year, month } = input;

      const days = await ctx.prisma.day.findMany({
        where: {
          month: month,
          year: year,
          userId: ctx.session.user.id,
        },
      });

      return days || [];
    }),
});
