import type {FC}from 'react';
import Image from 'next/image';
import './userAvatar.scss'

interface UserAvatarProps {
    src: string;
    userName: string;
}

const UserAvatar: FC<UserAvatarProps> = ({src='', userName=''}) => {
    return (<div className='UserAvatarBox'>
        <div className='UserAvatar'>
            <img src={src} alt={userName}/>
        </div>
    </div>);
}

export default UserAvatar;
