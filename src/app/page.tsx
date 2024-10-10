import React from 'react';
import UserAvatar from '@/widgets/UserAvatar/UserAvatar';
// import '@/app/globals.scss'

const Index: React.FC = () => {
    return (
        <>
            <h1>Welcome to My App</h1>
            <UserAvatar src='https://avatars.githubusercontent.com/u/61286515?v=4' userName='Камень Зол'/>
        </>
    );
};

export default Index;
