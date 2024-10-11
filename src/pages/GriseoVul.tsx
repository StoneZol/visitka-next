import type { FC } from 'react';
import UserCardStartPage from '@/widgets/UserCardStartPage/UserCardStartPage';
import {User, GriseoVul } from '@/shared/Users';


interface GriseoVulProps{
  user: User;
}

const GriseoVulPage: FC<GriseoVulProps> = () => {
  return (
    <div> GriseoVul</div>
  );
}

export default GriseoVulPage;

