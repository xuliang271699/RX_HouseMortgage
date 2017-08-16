/**
 * Created by xuliang on 2017/8/3.
 */

export default class UserInfo {
    userInfo: String

    constructor(userInfo: String) {
        this._userInfo = userInfo;
    }


    get userInfo(): String {
        return this._userInfo;
    }

    set setUserInfo(value: String) {
        this._userInfo = value;
    }
}

/**
 * 用来保存用户信息
 * @type {UserInfo}
 */
export const currentUserInfo = new UserInfo();