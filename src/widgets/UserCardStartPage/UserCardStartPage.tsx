import type { FC } from 'react';
import '@/widgets/UserCardStartPage/UserCardStartPage.scss'

interface User {
    userName: string;
    img: string;
    about: string;
    background?: string;
}

interface UserCardStartPageProps {
    user: User;
}

const UserCardStartPage: FC<UserCardStartPageProps> = ({user}) => {
    return (
        <div className='UserCardStartPage' style={{backgroundImage: `url(${user.background})`}}>
            <div className='TextBlockBox'>
                <div className='TextBlock'>
                    <span className={'glitch userName'} data-text={user.userName}>{user.userName}</span>
                    <span className={'glitch about'} data-text={user.about}> {user.about}</span>
                </div>
            </div>
            <div className={'ImageBlock'}>
                <img src={user.img } alt={user.userName} />
            </div>
            <div className='Effect'></div>
        </div>
    );
}

export default UserCardStartPage;
