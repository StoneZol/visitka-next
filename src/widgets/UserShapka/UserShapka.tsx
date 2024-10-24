import type { FC } from 'react';
import '@/widgets/UserShapka/UserShapka.scss'

import { User } from '@/shared/Users';
// import Link from 'next/link';
import { Rubik_Mono_One } from 'next/font/google';
import bgStoneZol from '@/shared/Static/backgrounds/bgStoneZolv2.webp';
import b3 from '@/shared/Static/avatars/b3.webp'
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
            <Image src={b3.src} alt={user.userName} layout="responsive" height={100} width={100} loading='lazy' />
        </div>
        <MyContacts user={user} showText={false} />
    </div>
    );
}

export default UserShapka;
