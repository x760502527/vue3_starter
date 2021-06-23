import { $http } from '/@/utils/http/axios';

enum Api {
  info = '/pipelines',
}

/**
 * @description: Get sample list value
 */

export const info = (params) =>
  $http.get({
    url: Api.info,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
