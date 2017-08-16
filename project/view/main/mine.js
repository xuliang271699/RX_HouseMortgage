/**
 * Created by xuliang on 2017/8/1.
 */
// 我的

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
    ScrollView
} from 'react-native';

import {ScreenWidth, ScreenHeight} from '../../system/system'

import MineItemView from '../item/mineItemView'


export default class MineView extends Component {


    constructor(props) {
        super();
        this.state = {
            listItems: require('../../../json/mineItems.json')
        }
    }

    render() {
        return (<View style={style.container}>
            <ScrollView
                style={{borderColor: '#FAF0E6', borderWidth: 2}}
                contentContainerStyle={{paddingLeft: 0, paddingRight: 0,paddingBottom:40}}
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='never'
                showsVerticalScrollIndicator={true}
                scrollEnabled={true}
                pagingEnabled={true}
                horizontal={false}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    var msg = 'onContentSizeChange:' + contentWidth + ',' + contentHeight;
                    // ToastAndroid.show(msg, ToastAndroid.SHORT);
                }}
                onScroll={(e) => {
                    // console.warn('onScroll');
                }}>

                <View style={style.header}>
                    <Image style={style.headerImg} source={require('../../../img/content_img_head.png')}></Image>
                    <Text style={[style.text, {color: '#111111', fontSize: 14}]}>用户名：{}</Text>
                    <Text style={style.text}>用户名</Text>
                    <Text style={[style.text, {marginBottom: 8}]}>用户电话</Text>
                </View>

                <View style={{
                    height: 16,
                    width: ScreenWidth,
                    backgroundColor: '#FAF0E6'
                }}/>

                {
                    this.state.listItems.map((item, index) => {
                        return <MineItemView data={item} postion={index}></MineItemView>
                    })
                }

            </ScrollView>

        </View>);
    }
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAF0E6',
        width: ScreenWidth
    },
    header: {
        backgroundColor: '#fff',
        width: ScreenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImg: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 15,
        marginTop: 40
    },

    text: {
        fontSize: 12,
        color: '#888d91',
        marginTop: 8
    },

    list: {}

});