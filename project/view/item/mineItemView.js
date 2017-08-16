/**
 * Created by xuliang on 2017/8/1.
 */
// 我的

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    InteractionManager,
    TouchableHighlight
} from 'react-native';


import {ScreenWidth, ScreenHeight} from '../../system/system'


/**
 * 首页的item，要改需要title和icon数据
 */
export default class HomeItemView extends Component {


    render() {
        let itemData = this.props.data;
        let postion = this.props.postion;


        return (

            <View style={styles.parent}>
                <TouchableHighlight
                    onPress={this.onViewClick}
                    underlayColor='#FAF0E6'
                >
                    <View style={styles.containers}>
                        <Image style={styles.image} source={require('../../../img/content_icon_message.png')}></Image>
                        <Text style={styles.title}>{itemData.name}</Text>
                        <Image style={styles.iconBack} source={require('../../../img/content_icon_arrow.png')}></Image>
                    </View>
                </TouchableHighlight>
                <View style={[styles.line, {height: 0.5}]}/>
                {
                    itemData.needLine == true ?
                        <View style={styles.line}/>
                        :
                        null

                }
            </View>
        );
    }

    /**
     * 点击
     */
    onViewClick() {

    }
}


const
    styles = StyleSheet.create({

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