/**
 * Created by xuliang on 2017/8/1.
 */

// 列表首页

import React, {Component} from 'react';

import {StackNavigator, TabNavigator} from "react-navigation";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    InteractionManager,
    ListView,
} from 'react-native';

import HomeItemView from '../item/homeItemView'

export default class HomeView extends Component {


    constructor(props) {
        super();
        var itemDatas = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        let datas = require('../../../json/mainItems.json');

        this.state = {
            dataSource: itemDatas,
            data: datas
            //  .cloneWithRows(require('../../../json/mainItems.json')),
            // mainItemData: ,//显示的数据源
            // mainItemDatas:mainItemData.get("mainItems")
        }
    }


    render() {


        return (<View style={styles.myContainer}><ListView//
            dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
            renderRow={(rowData) => <HomeItemView data={rowData} parent={this}></HomeItemView>}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 8}}
        ></ListView></View>);
    }

    // 请求网络数据
    componentDidMount() {
        //为啥要在这里面请求网络数据呢？
        this.loadDataFromNet();
    }

    goList() {
        const {navigate} = this.props.navigation   //.navigation;
        navigate('orderList')
    }


    loadDataFromNet() {

    }

}

const styles = StyleSheet.create(
    {
        myContainer: {
            backgroundColor: '#FAF0E6'
        }

    }
);