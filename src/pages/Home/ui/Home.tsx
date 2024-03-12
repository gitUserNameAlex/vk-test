import { FC } from 'react';
import { Panel, PanelHeader, NavIdProps } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { HomeNav } from '@/widgets/HomeNav';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id }) => {
    return (
        <Panel id={id}>

            <PanelHeader>Главная</PanelHeader>

            <HomeNav/>

        </Panel>
    );
};
