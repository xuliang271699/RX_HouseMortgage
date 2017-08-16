/**
 * Created by xuliang on 2017/8/4.
 */

export default class HomeItemBean {
    _title: String
    _icon = 'icon'


    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get icon() {
        return this._icon;
    }

    set icon(value) {
        this._icon = value;
    }
}

/**
 * 当前item的类型
 * @type {[*]}
 */
export const types = ['type1', 'type2', 'type3', 'type4', 'type5', 'type6']
