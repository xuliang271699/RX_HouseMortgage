/**
 * Created by xuliang on 2017/8/3.
 */

const apiHost = 'http://mortgage.worldunion.com.cn:8082/mortgage/app/';

const params="?deviceType=android&version=1&token=";

/**
 * 登录接口
 * @type {string}
 */
export const apiLogin = apiHost + "account/login"+params;//登录接口


export const apiWaitOrder = apiHost + "agencyOrder/queryAgencyOrder"+params;