import type { FC } from 'react';
import { User } from '@/shared/Users';

interface StoneZolPageProps {
    user:User;
}

const StoneZolPage: FC<StoneZolPageProps> = () => {
    return (
        <div>StoneZol</div>
    );
}

export default StoneZolPage;
