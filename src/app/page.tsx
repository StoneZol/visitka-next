import '@/app/globals.scss'
import UserCardStartPage from '@/widgets/UserCardStartPage/UserCardStartPage';
import MyContacts from '@/widgets/Contacts/MyContacts';
import { Stone_Zol} from '@/shared/Users';
import { FC } from 'react';

const Index: FC= () => {
    return (
                <div className='MainPage'>
                    <UserCardStartPage user={Stone_Zol}/>
                    <MyContacts user={Stone_Zol} grayScale={true}/>
                </div>
    );
};

export default Index