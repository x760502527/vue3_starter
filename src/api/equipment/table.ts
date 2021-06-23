import { $http } from '/@/utils/http/axios';

enum Api {
  info = '/equipment',
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
