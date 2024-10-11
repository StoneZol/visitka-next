'use client'
import type { FC } from 'react';
import '@/widgets/UserCardStartPage/UserCardStartPage.scss'

import { User } from '@/shared/Users';
import Link from 'next/link';


interface UserCardStartPageProps {
    user: User;
}

const UserCardStartPage: FC<UserCardStartPageProps> = ({user}) => {
    return (
        <div className='UserCardStartPage' style={{backgroundImage: `url(${user.background})`}}>
            <div className='TextBlockBox'>
                
                <div className='TextBlock'>
                    <Link href={user.link}>
                    <span className={'glitch userName'} data-text={user.userName}>{user.userName}</span>
                    <span className={'glitch about'} data-text={user.about}> {user.about}</span>
                    </Link>
                </div>
            </div>
            <div className={'ImageBlock'}>
            <Link href={user.link}>
                <img src={user.img } alt={user.userName}/>
                </Link>
            </div>
    
            <div className='Effect'></div>
        </div>
    );
}

export default UserCardStartPage;
