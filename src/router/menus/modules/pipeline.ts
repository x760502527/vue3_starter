import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const pipeline: MenuModule = {
  orderNo: 1,
  menu: {
    name: t('routes.pipeline.pipeline'),
    path: '/pipeline',
    children: [
      {
        path: 'historyData',
        name: t('routes.pipeline.historyData'),
      },
      {
        path: 'historyAlarm',
        name: t('routes.pipeline.historyAlarm'),
      },
      {
        path: 'alarmAnalysis',
        name: t('routes.pipeline.alarmAnalysis'),
      },
      {
        path: 'info',
        name: t('routes.pipeline.info'),
      },
      {
        path: 'point',
        name: t('routes.pipeline.point'),
      },
      {
        path: 'marker',
        name: t('routes.pipeline.marker'),
      },
      {
        path: 'relation',
        name: t('routes.pipeline.relation'),
      },
    ],
  },
};
export default pipeline;
