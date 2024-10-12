import React from 'react';
import '@/app/globals.scss'
import UserCardStartPage from '@/widgets/UserCardStartPage/UserCardStartPage';
import { Stone_Zol } from '@/shared/Users';

const Index: React.FC = () => {
    return (
                <div className='MainPage'>
                    <UserCardStartPage user={Stone_Zol}/>
                </div>
    );
};

export default Index;
