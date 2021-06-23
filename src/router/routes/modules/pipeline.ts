import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const pipeline: AppRouteModule = {
  path: '/pipeline',
  name: 'Pipeline',
  component: LAYOUT,
  redirect: '/pipeline/historyData',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.pipeline.pipeline'),
  },
  children: [
    {
      path: 'historyData',
      name: 'pipelineHistoryData',
      component: () => import('/@/views/pipeline/historyData.vue'),
      meta: {
        title: t('routes.pipeline.historyData'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'historyAlarm',
      name: 'pipelineHistoryAlarm',
      component: () => import('/@/views/pipeline/historyAlarm.vue'),
      meta: {
        title: t('routes.pipeline.historyAlarm'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'alarmAnalysis',
      name: 'pipelineAlarmAnalysis',
      component: () => import('/@/views/pipeline/alarmAnalysis.vue'),
      meta: {
        title: t('routes.pipeline.alarmAnalysis'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'info',
      name: 'pipelineInfo',
      component: () => import('/@/views/pipeline/info/index.vue'),
      meta: {
        title: t('routes.pipeline.info'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'point',
      name: 'pipelinePoint',
      component: () => import('/@/views/pipeline/point.vue'),
      meta: {
        title: t('routes.pipeline.point'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'marker',
      name: 'pipelineMarker',
      component: () => import('/@/views/pipeline/marker.vue'),
      meta: {
        title: t('routes.pipeline.marker'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'relation',
      name: 'pipelineRelation',
      component: () => import('/@/views/pipeline/relation.vue'),
      meta: {
        title: t('routes.pipeline.relation'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default pipeline;
