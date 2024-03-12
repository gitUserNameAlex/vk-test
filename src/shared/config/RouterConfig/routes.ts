import { createHashRouter, createPanel, createRoot, createView, RoutesConfig } from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
    HOME: 'home',
    FIRST_TASK: 'first_task',
    SECOND_TASK: 'second_task',
} as const

export const routes = RoutesConfig.create([
    createRoot(DEFAULT_ROOT, [
        createView(DEFAULT_VIEW, [
            createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
            createPanel(DEFAULT_VIEW_PANELS.FIRST_TASK, `/${DEFAULT_VIEW_PANELS.FIRST_TASK}`, []),
            createPanel(DEFAULT_VIEW_PANELS.SECOND_TASK, `/${DEFAULT_VIEW_PANELS.SECOND_TASK}`, [])
        ]),
    ]),
]);

export const router = createHashRouter(routes.getRoutes());
