/**
 * Created by xuliang on 2017/7/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    TextInput,
    Alert,
    AsyncStorage
} from 'react-native';


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var UMNative = require('react-native').NativeModules.UmengNativeModule;

import MainView from '../view/main/main'

import CustomButton from '../comm/customButton'
// import PostLogin from '../http/loginPost'
// import NetUitl from  '../utils/netUtils'

import {apiLogin} from '../api/apiUrl'
import {add} from '../utils/mathUtils'
import UserInfo, {currentUserInfo} from '../source/useInfo'

import {event_login} from '../umeng/event'
// import {resetAction} from '../navigtor/pushNavigtor'

import {key_userInfo}  from '../asyncStore/stroreKey'
import {StackNavigator} from 'react-navigation';
import {NavigationActions} from 'react-navigation'

var ShareView = require('../utils/shareUtils');
var result = "result"

import NetUtils from '../http/netUtils'


import SorageUtils from '../utils/sorageUtils'




/**
 * 登录界面
 */
export default class LoginView extends Component {

    constructor(props) {
        super();

        this.state = {
            myName: "",
            myPassword: "",
            placeName: ""
        }


    }


    componentDidMount() {
        SorageUtils._getStorage()
        this.getUserInfo();
    }


    render() {
        return (<View style={styles.container}>
            <Image style={{marginTop: 74, width: 90, height: 90}}
                   source={require('../../img/login_img_logo.png')}></Image>
            <Text style={{fontSize: 20, marginTop: 15}}>盛泽按揭</Text>

            {/*{intPutName}*/}
            <TextInput
                style={styles.input}
                placeholder={this.state.placeName}
                onChangeText={(name) => this.setState({myName: name})}
            />

            <TextInput
                style={styles.input}
                placeholder="输入你的密码!"
                onChangeText={(password) => this.setState({myPassword: password})}
            />


            <CustomButton name='登录'
                          style={{marginTop: 17}}
                          onPress={this.onClick.bind(this)}></CustomButton>


            <CustomButton name='分享按钮'
                          style={{marginTop: 17}}
                          onPress={this.share.bind(this)}></CustomButton>


        </View>);
    }


    /**
     * 分享按钮
     */
    share() {
        ShareView.shareboard('sssss', 'http://dev.umeng.com/images/tab2_1.png', 'http://www.baidu.com', 'title',(code, message) => {
            this.setState({result: message});
            alert(message);
        })
    }


    onClick() {
        let  self=this;
        UMNative.onEvent(event_login);
        let url = "";
        let result = add(12, 15)
        // let msg = "密码：" + this.state.myPassword + "    姓名:" + this.state.myName + "  " + result;
        // Alert.alert("登录中......" + msg);


        let params = {
                'userName': this.state.myName, 'password': this.state.myPassword
            }
        ;
        NetUtils.post(apiLogin, params, function (result) {
            self.saveData(result)
            self.loginSucc(result);
        });

    }




    getUserInfo() {
        let self=this;
        SorageUtils._load(key_userInfo, function (data) {
            self.setState({myName: data.currentName})
        })
    }


    saveData(result) {
        result.currentName = this.state.myName;
        SorageUtils._sava(key_userInfo, result);
    }


    loginSucc(ret) {
        if (ret.code == 0) {
            this.props.navigation.dispatch(resetAction)
        }
    }

    // loginFail() {
    //     this.props.navigation.dispatch(resetAction)
    // }


}


const styles = StyleSheet.create({


    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        height: 45,
        marginTop: 17,
        width: ScreenWidth - 50,
        textAlign: 'center'
    }
});


const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'main'})
    ]
})

