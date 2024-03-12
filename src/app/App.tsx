import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Home } from '@/pages/Home';
import { FirstTask } from '@/pages/FirstTask';
import { SecondTask } from '@/pages/SecondTask';
import { DEFAULT_VIEW_PANELS } from '@/shared/config/RouterConfig/routes';

export const App = () => {
    const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

    return (
        <SplitLayout>
            <SplitCol>
                <View activePanel={activePanel}>
                    <Home id='home' />
                    <FirstTask id='first_task' />
                    <SecondTask id='second_task' />
                </View>
            </SplitCol>
        </SplitLayout>
    )
};
