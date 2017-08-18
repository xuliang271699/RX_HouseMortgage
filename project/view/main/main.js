/**
 * Created by xuliang on 2017/8/2.
 */

/**
 * 主应用界面
 */

import React, {Component} from 'react';

import {StackNavigator} from "react-navigation";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    InteractionManager,
    Alert
} from 'react-native';

//放弃，使用它来做下标签item
import TabNavigator from 'react-native-tab-navigator'

import HomeView from '../main/home'
import MineView from '../main/mine'
import {commStyle} from '../../style/commStyle'


export  default  class MainView extends Component {

    constructor(prop) {
        super();
        this.state = {
            selectIndex: 0,
        }


    }


    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    titleStyle={commStyle.title}
                    selected={0 == this.state.selectIndex}
                    renderIcon={() => <Image source={require('../../../img/home_icon_home.png')}
                                             style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={require('../../../img/home_icon_home_down.png')}
                                                     style={styles.icon}/>}
                    onPress={() => this.setState({selectIndex: 0})}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <HomeView currentView={this.props.navigation}/>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selected={1 == this.state.selectIndex}
                    titleStyle={commStyle.title}
                    renderIcon={() => <Image source={require('../../../img/tabbar_icon_me_nor.png')}
                                             style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={require('../../../img/tabbar_icon_me_down.png')}
                                                     style={styles.icon}/>}
                    onPress={() => this.setState({selectIndex: 1})}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <MineView/>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        )


    }

    goOrderList() {
        const {navigate} = this.props.navigation   //.navigation;
        navigate('orderList')
    }

}


const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        color: "#fb4747"
    }

});

