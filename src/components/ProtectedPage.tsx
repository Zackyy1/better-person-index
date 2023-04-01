import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '@/components/Loader/Loader';

const ProtectedPage = ({ children }: any) => {
    const { status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === 'unauthenticated' && router.asPath !== '/login') {
            void router.push('/login');
        }
    }, [status, router]);
    if (status === 'loading') {
        return <Loader />;
    }
    return <>{children}</>;
};

export default ProtectedPage;