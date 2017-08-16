/**
 * Created by xuliang on 2017/7/20.
 */

/**
 * 欢迎界面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    InteractionManager,
} from 'react-native';



import LoginView from './view/loginView';

import {resetAction} from './navigtor/pushNavigtor'

export default class WelcomeView extends Component {

    state: { //可以不写，我这里写是为了去除flow警告
        fadeAnim: Object,
    };




    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), //设置初始值
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,//初始值
            {
                toValue: 1,
                duration: 1500,

            }//结束值
        ).start();//开始


        setTimeout(() => {
            console.log("1。5秒后跳转")
            const {navigate} = this.props.navigation   //.navigation;
            navigate('login')    //("login");
        }, 1500);
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }


    render() {
        return (<View style={styles.container}>
            <Image style={styles.welcome} source={require('../img/login_img_logo.png')}></Image>
            <Animated.Text style={{textAlign: 'center', opacity: this.state.fadeAnim}}>welcome to my app</Animated.Text>
        </View>);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        width: 200,
        height: 200,
    },
    textAnim: {

        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});