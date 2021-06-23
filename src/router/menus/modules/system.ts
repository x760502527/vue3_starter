import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const system: MenuModule = {
  orderNo: 2,
  menu: {
    name: t('routes.system.system'),
    path: '/system',
    children: [
      {
        path: 'center',
        name: t('routes.system.center'),
      },
      {
        path: 'account',
        name: t('routes.system.account'),
      },
      {
        path: 'role',
        name: t('routes.system.role'),
      },
      {
        path: 'reset',
        name: t('routes.system.reset'),
      },
      {
        path: 'dept',
        name: t('routes.system.dept'),
      },
    ],
  },
};
export default system;
