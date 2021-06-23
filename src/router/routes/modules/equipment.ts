import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const equipment: AppRouteModule = {
  path: '/equipment',
  name: 'equipment',
  component: LAYOUT,
  redirect: '/equipment/historyData',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.equipment.equipment'),
  },
  children: [
    {
      path: 'historyData',
      name: 'equipmentHistoryData',
      component: () => import('/@/views/equipment/historyData.vue'),
      meta: {
        title: t('routes.equipment.historyData'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'historyAlarm',
      name: 'equipmentHistoryAlarm',
      component: () => import('/@/views/equipment/historyAlarm.vue'),
      meta: {
        title: t('routes.equipment.historyAlarm'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'alarmAnalysis',
      name: 'equipmentAlarmAnalysis',
      component: () => import('/@/views/equipment/alarmAnalysis.vue'),
      meta: {
        title: t('routes.equipment.alarmAnalysis'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'info',
      name: 'equipmentInfo',
      component: () => import('/@/views/equipment/info/index.vue'),
      meta: {
        title: t('routes.equipment.info'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default equipment;
