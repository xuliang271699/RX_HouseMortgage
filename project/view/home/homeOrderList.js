/**
 * Created by xuliang on 2017/8/15.
 */


import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ListView
} from 'react-native';


import {
    SwRefreshScrollView, //支持下拉刷新的ScrollView
    SwRefreshListView, //支持下拉刷新和上拉加载的ListView
    RefreshStatus, //刷新状态 用于自定义下拉刷新视图时使用
    LoadMoreStatus //上拉加载状态 用于自定义上拉加载视图时使用
} from 'react-native-swRefresh'

import {apiWaitOrder} from '../../api/apiUrl'


import {ScreenWidth, ScreenHeight} from '../../system/system'
import {key_userInfo}  from '../../asyncStore/stroreKey'
import NetUtils from '../../http/netUtils'
import SorageUtils from '../../utils/sorageUtils'

import OrderItemView from '../../view/item/orderItemView'


/**
 * 订单列表页面(目前就做一个吧),做下拉刷新的而已了
 *
 */
export default class HomeOrderListView extends Component {

    _page = 1
    _dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    _userInfo;
    params;
    _dataList=[];

    constructor(props) {
        super(props);
        this.state = {
            dataSource: this._dataSource.cloneWithRows(['1', '2', '3'])
        }
    }


    componentDidMount() {
        let current = this;

        SorageUtils._load(key_userInfo, function (ret) {
            current._userInfo = ret;
            current.params = {userId: ret.userId, pageNumber: current._page, pageSize: 10};
        })
        let timer = setTimeout(() => {
            clearTimeout(timer)
            this.refs.listView.beginRefresh()
        }, 500) //自动调用开始刷新 新增方法
    }


    render() {
        return (
            <SwRefreshListView
                dataSource={this.state.dataSource}
                ref="listView"
                renderRow={(rowData) => <View>
                    <OrderItemView data={rowData}></OrderItemView>
                </View>}
                onRefresh={this._onListRefersh.bind(this)}//设置下拉刷新的方法 传递参数end函数 当刷新操作结束时
                onLoadMore={this._onLoadMore.bind(this)} //设置上拉加载执行的方法 传递参数end函数 当刷新操作结束时 end函数可接受一个bool值参数表示刷新结束后是否已经无更多数据了。
                //isShowLoadMore={false} //可以通过state控制是否显示上拉加载组件，可用于数据不足一屏或者要求数据全部加载完毕时不显示上拉加载控件
                customRefreshView={(refresStatus, offsetY) => {
                    return (<Text>{'状态:' + refresStatus + ',' + offsetY}</Text>)
                }} //自定义下拉刷新视图参数，refresStatus是上面引入的RefreshStatus类型，对应刷新状态各个状态。offsetY对应下拉的偏移量,可用于定制动画。自定义视图必须通过customRefreshViewHeight指定高度
                customRefreshViewHeight={100} //自定义刷新视图时必须指定高度
            />)
    }

    /**
     * 模拟刷新
     * @param end
     * @private
     */
    _onListRefersh(end) {
        _page = 1;
        let currentView = this;
        this._dataList=[]
        NetUtils.post(apiWaitOrder, this.params, function (ret) {
            //数据重新设置
            if (ret != null && ret.data != null && ret.data.rows != null) {
                currentView.setState({dataSource: currentView._dataSource.cloneWithRows(ret.data.rows)})
                for(i=0;i<ret.data.rows.length;i++){
                    currentView._dataList.push(ret.data.rows[i])
                }
                currentView.end()
            }

        })
    }

    /**
     * 模拟加载更多
     * @param end
     * @private
     */
    _onLoadMore(end) {
        this._page++
        let currentView = this;
        this.params = {userId: this._userInfo.userId, pageNumber: this._page, pageSize: 10};
        NetUtils.post(apiWaitOrder, this.params, function (ret) {
            //数据重新设置
            if (ret != null && ret.data != null && ret.data.rows != null) {
                // currentView._dataList=currentView._dataList.concat(ret.data.rows)
                
                for(i=0;i<ret.data.rows.length;i++){
                    currentView._dataList.push(ret.data.rows[i]);
                }
                
                
                currentView.setState({dataSource: currentView._dataSource.cloneWithRows(currentView._dataList)})
                currentView.end()
            }
        })
    }


    /*--tip--:如果刷新和加载在同一个方法里，对于传递的参数end()函数无需区分。
     onRefresh中的end()函数 中接受参数没有任何关系 只要调用end()函数就会结束刷新或加载*/

}


const styles = StyleSheet.create({

        parent: {
            flexDirection: 'column',
            flex: 1,
            backgroundColor: '#ffffff',

        },

        image: {
            height: 20,
            width: 20,
            marginLeft: 8,
            marginTop: 14,
            flex: 1,
            resizeMode: 'contain'
        },

        line: {
            height: 16,
            width: ScreenWidth,
            backgroundColor: '#FAF0E6'
        },

        title: {
            fontSize: 12,
            marginLeft: 20,
            textAlign: 'left',
            marginTop: 14,
            flex: 3
        },

        iconBack: {
            height: 12,
            width: 12,
            marginLeft: 8,
            marginTop: 18,
            flex: 1,
            resizeMode: 'contain'
        },

        containers: {
            flexDirection: 'row',
            height: 40
            // justifyContent: 'center',
        }

    })
;



