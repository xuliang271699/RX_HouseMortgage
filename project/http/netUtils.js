/**
 * Created by xuliang on 2017/8/14.
 */
/**
 * NetUitl 网络请求的实现
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {} from 'react-native';

import {key_userInfo}  from '../asyncStore/stroreKey'
import SorageUtils from '../utils/sorageUtils'

export  default  class NetUitl extends Component {
    /*
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static get(url, params, callback) {
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        fetch(url, {
            method: 'GET',
        })
            .then((response) => {
                callback(response)
            }).done();
    }

    /*
     *  post请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static post(url, params, callback) {
        //fetch请求
        SorageUtils._load(key_userInfo, function (ret) {
            try {
                if (ret.data.token != null) {
                    url = url + ret.data.token;
                }
            } catch (e) {
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'//key-value形式
                    // // 'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJVLTliZGJhNjBjMjZiMDQwZGJiMTMwYWRhYWVlN2FkYTg2IiwiZXhwaXJhdGlvblRpbWUiOjE0NzUxMTg4ODU4NTd9.ImbjXRFYDNYFPtK2_Q2jffb2rc5DhTZSZopHG_DAuNU"

                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(params)
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    callback(responseJSON)
                })
                .catch((error) => {
                    callback(error)
                })

                .done();
        })


    }


}