import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const equipment: MenuModule = {
  orderNo: 2,
  menu: {
    name: t('routes.equipment.equipment'),
    path: '/equipment',
    children: [
      {
        path: 'historyData',
        name: t('routes.equipment.historyData'),
      },
      {
        path: 'historyAlarm',
        name: t('routes.equipment.historyAlarm'),
      },
      {
        path: 'alarmAnalysis',
        name: t('routes.equipment.alarmAnalysis'),
      },
      {
        path: 'info',
        name: t('routes.equipment.info'),
      },
    ],
  },
};
export default equipment;
