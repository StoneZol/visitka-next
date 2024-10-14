import type { FC } from 'react';
import '@/widgets/UserShapka/UserShapka.scss'

import { User } from '@/shared/Users';
// import Link from 'next/link';
import { Rubik_Mono_One } from 'next/font/google';
import bgStoneZol from '@/shared/Static/backgrounds/bgStoneZol.jpg';
import Image from 'next/image';
import MyContacts from '../Contacts/MyContacts';

interface UserShapkaProps {
    user: User;
}

const rubikMono = Rubik_Mono_One({
    preload: true,
    subsets: ['cyrillic'],
    weight: '400',

})

const UserShapka: FC<UserShapkaProps> = ({user}) => {
    return (
        <div className={`UserShapka ${rubikMono.className}`} style={{backgroundImage: `url(${bgStoneZol.src})`}}>
        <div className='TextBlockBox'>
            <div className='TextBlock'>
                    <span className={'glitch userName'} data-text={user.userName}>{user.userName}</span>
                    <span className={'glitch about'} data-text={user.about}> {user.about}</span>
            </div>
        </div>
        <div className={'ImageBlock'}>
            <Image src={user.img } alt={user.userName} layout="responsive" height={100} width={100} loading='lazy' />
        </div>
        <MyContacts user={user} showText={false} />
    </div>
    );
}

export default UserShapka;
