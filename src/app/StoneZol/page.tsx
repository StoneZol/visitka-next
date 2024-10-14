import '@/app/StoneZol/StoneZol.scss';
import '@/app/globals.scss'
import { type FC } from 'react';

import MyStack from '@/widgets/Stack/MyStack';
// import MyContacts from '@/widgets/Contacts/MyContacts';
import { Stone_Zol } from '@/shared/Users';
import UserShapka from '@/widgets/UserShapka/UserShapka';


const StoneZolPage: FC = () => {
    return (
        <div className='StoneZolPage'>
            <UserShapka user={Stone_Zol}/>
             <MyStack/>
             {/* <MyContacts user={Stone_Zol}/> */}
        </div>
    );
}

export default StoneZolPage;
