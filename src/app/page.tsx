import React from 'react';
import '@/app/globals.scss'
import UserCardStartPage from '@/widgets/UserCardStartPage/UserCardStartPage';
import { Stone_Zol } from '@/shared/Users';
import MyContacts from '@/widgets/Contacts/MyContacts';

const Index: React.FC = () => {
    return (
                <div className='MainPage'>
                    <UserCardStartPage user={Stone_Zol}/>
                    <MyContacts user={Stone_Zol} grayScale={true}/>
                    {/* <footer>Design&Create by: Stone_Zol</footer> */}
                </div>
    );
};

export default Index;
