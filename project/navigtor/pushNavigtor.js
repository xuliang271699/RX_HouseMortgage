/**
 * Created by xuliang on 2017/7/20.
 */


/**
 * 注册所有的界面，用来进行跳转
 */
import React, {Component} from 'react'
import {
    View,
    AppRegistry
} from 'react-native';
// import {Navigator} from 'react-native-deprecated-custom-components'
import {StackNavigator} from 'react-navigation';

import WelcomeView from '../welcomeView';
import LoginView from  '../view/loginView'
import MainView from '../view/main/main'
import OrderListView from '../view/home/homeOrderList'
import {NavigationActions} from 'react-navigation';
// import HomeView from '../view/main/home'
// import MineView from '../view/main/mine'

class pushInitView extends Component {

    static navigationOptions = {
        title: 'Welcome',//设置标题内容
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View onPress={() => navigate('welome')}/>
        );
    }
}


// export const resetAction = NavigationActions.reset({
//     index:0,
//     actions:[
//         NavigationActions.navigate({routeName:'login'}),
//         NavigationActions.navigate({routeName:'main'}),
//     ]
//
// })


const SimpleApp = StackNavigator({
    //注册了view
    welome: {
        screen: WelcomeView, navigationOptions: {
            headerTitle: '欢迎界面'
        }
    },
    login: {
        screen: LoginView, navigationOptions: {
            headerTitle: '登录'
        }
    },
    main: {
        screen: MainView, navigationOptions: {
            headerTitle: '首页'
        }
    },
    orderList: {
        screen: OrderListView, navigationOptions: {
            headerTitle: '订单列表'
        }
    }
    // home: {
    //     screen: HomeView
    // },
    // mine: {
    //     screen: MineView
    // }
});

export default SimpleApp;