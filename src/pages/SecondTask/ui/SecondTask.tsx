import { FC } from 'react'
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AgeForm } from '@/widgets/AgeForm'

export const SecondTask: FC<NavIdProps> = ({ id }) => {
    const routeNavigator = useRouteNavigator()

    return (
        <Panel id={id} centered={true}>

            <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
                Второе задание
            </PanelHeader>
			
            <AgeForm/>
			
        </Panel>
    )
}
