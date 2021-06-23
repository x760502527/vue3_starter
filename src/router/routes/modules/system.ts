import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'system',
  component: LAYOUT,
  redirect: '/system/center',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.system.system'),
  },
  children: [
    {
      path: 'center',
      name: 'center',
      component: () => import('/@/views/system/center/index.vue'),
      meta: {
        title: t('routes.system.info'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'account',
      name: 'account',
      component: () => import('/@/views/system/account/index.vue'),
      meta: {
        title: t('routes.system.account'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('/@/views/system/role/index.vue'),
      meta: {
        title: t('routes.system.role'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'reset',
      name: 'reset',
      component: () => import('/@/views/system/reset.vue'),
      meta: {
        title: t('routes.system.reset'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'dept',
      name: 'dept',
      component: () => import('/@/views/system/dept/index.vue'),
      meta: {
        title: t('routes.system.dept'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default system;
