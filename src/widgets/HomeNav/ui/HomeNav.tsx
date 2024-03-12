import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Group, Header, Div } from '@vkontakte/vkui'
import { NavButton } from '@/shared/ui'

const HomeNav = () => {
    const routeNavigator = useRouteNavigator()

    return (
        <Group header={<Header mode='secondary'>Навигация</Header>} style={{maxWidth: '40vw', width:'100%', margin: 'auto'}}>
            <Div>
                <NavButton onClick={() => routeNavigator.push('first_task')}>Первое задание</NavButton>
            </Div>
            <Div>
                <NavButton onClick={() => routeNavigator.push('second_task')}>Второе задание</NavButton>
            </Div>
        </Group>
    )
}

export default HomeNav
