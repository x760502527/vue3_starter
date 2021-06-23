import { $http } from '/@/utils/http/axios';

enum Api {
  getDept = '/pipelines',
}

/**
 * @description: Get sample list value
 */

export const getDept = (params) =>
  $http.get({
    url: Api.getDept,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
