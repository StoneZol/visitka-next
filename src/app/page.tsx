import React from 'react';
import '@/app/globals.scss'
import UserCardStartPage from '@/widgets/UserCardStartPage/UserCardStartPage';

interface User{
    userName: string;
    img: string;
    about: string;
    background?: string;
}

const user: User ={
    userName: 'Stone_Zol',
    img: 'https://avatars.githubusercontent.com/u/61286515?v=4',
    about: 'Frontendер',
    background: 'https://sotni.ru/wp-content/uploads/2023/08/kosmos-vzryv-planety-1.webp'
}

const user2: User ={
    userName: 'GriseoVul',
    img: 'https://avatars.githubusercontent.com/u/158820429?v=4',
    about: 'Backendер',
    background: 'https://fs.tonkosti.ru/sized/c1600x400/1w/kd/1wkdmbgts0ro4k80swkk0o8og.jpg'
}

const Index: React.FC = () => {
    return (
        <>
                <div className='MainPage'>
                    <UserCardStartPage user={user}/>
                    <br />
                    <UserCardStartPage user={user2}/>
                </div>
        </>
    );
};

export default Index;
