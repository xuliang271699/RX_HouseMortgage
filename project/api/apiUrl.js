/**
 * Created by xuliang on 2017/8/3.
 */

const apiHost = 'http://mortgage.worldunion.com.cn:8082/mortgage/app/';
/**
 * 登录接口
 * @type {string}
 */
export const apiLogin = apiHost + "account/login";//登录接口

export const apiWaitOrder = apiHost + "agencyOrder/queryAgencyOrder";