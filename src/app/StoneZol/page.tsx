
import MyStack from '@/widgets/Stack/MyStack';
import '@/app/StoneZol/StoneZol.scss';
import '@/app/globals.scss'
import { Suspense, type FC } from 'react';

interface StoneZolPageProps {}

const StoneZolPage: FC<StoneZolPageProps> = () => {
    return (
        <div className='StoneZolPage'>
             <MyStack/>
        </div>
    );
}

export default StoneZolPage;
