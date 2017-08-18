/**
 * Created by xuliang on 2017/8/1.
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableHighlight,
} from 'react-native';


import {ScreenWidth, ScreenHeight} from '../../system/system'


import MainView from '../../view/main/main'


/**
 * 订单item界面
 */
export default class OrderItemView extends Component {


    render() {
        let itemData = this.props.data;
        // const { navigate } = this.props.navigation;
        return (<View style={styles.parent}>
            <TouchableHighlight
                onPress={this.onItemClick.bind(this)}
                underlayColor='#FAF0E6'
            >
                <View style={styles.containers}>
                    <Image style={styles.image} source={require('../../../img/content_icon_message.png')}></Image>
                    <Text style={styles.title}>标题是：{itemData.buyerName}</Text>
                    <Image style={styles.iconBack} source={require('../../../img/content_icon_arrow.png')}></Image>
                </View>
            </TouchableHighlight>
            <View style={[styles.line, {height: 0.5}]}/>
            {/*{*/}
                {/*itemData.needLine == true ?*/}
                    {/*<View style={styles.line}/>*/}
                    {/*:*/}
                    {/*null*/}
            {/*}*/}

        </View>)

    }


    onItemClick() {


    }

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
            fontSize: 18,
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
            height: 120
            // justifyContent: 'center',
        }

    })
;