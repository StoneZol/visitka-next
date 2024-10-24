import type { FC } from 'react';
import '@/widgets/UserCardStartPage/UserCardStartPage.scss'

import { Rubik_Mono_One } from 'next/font/google'
import bgStoneZol from '@/shared/Static/backgrounds/bgStoneZolv2.webp'
import b3 from '@/shared/Static/avatars/b3.webp'

import { User } from '@/shared/Users';
import Link from 'next/link';
import Image from 'next/image';


const rubikMono = Rubik_Mono_One({
    preload: true,
    subsets: ['cyrillic'],
    weight: '400',

})
interface UserCardStartPageProps {
    user: User;
}

const UserCardStartPage: FC<UserCardStartPageProps> = ({user}) => {
    return (
        // <div className={`UserCardStartPage ${rubikMono.className}`} style={{backgroundImage: `url(${user.background})`}}>
        <div className={`UserCardStartPage ${rubikMono.className}`} style={{backgroundImage: `url(${bgStoneZol.src})`}}>
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
                <Image src={b3.src} alt={user.userName} layout="responsive" height={100} width={100} loading='lazy' />
                </Link>
            </div>
            <div className='Effect'></div>
        </div>
    );
}

export default UserCardStartPage;
