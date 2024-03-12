import { FC } from 'react'
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { CatForm } from '@/widgets/CatForm'

export const FirstTask: FC<NavIdProps> = ({ id }) => {
    const routeNavigator = useRouteNavigator()

    return (
        <Panel id={id} centered={true}>

            <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
                Первое задание
            </PanelHeader>

            <CatForm />
			
        </Panel>
    )
}
