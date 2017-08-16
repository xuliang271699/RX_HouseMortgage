/**
 * Created by xuliang on 2017/7/12.
 */

/**
 * Created by xuliang on 2017/7/11.
 */
import React, {Component, PropTypes} from 'react'
import {
    AppRegistry, View, Animated, Text, Button,
    TextInput, Alert, TouchableHighlight, Navigator, StyleSheet
} from 'react-native';


export default class CustomButton extends Component {


    static defaultProps = {
        name: "没有参数",
        color: "red"
    }

    static propTypes = {
        name: PropTypes.string,//必须是string类型
        color: PropTypes.string,
    }

    constructor(props) {
        super();
    }

    render() {
        // "#a5a5a5"
        return (
            <TouchableHighlight
                style={styles.container}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.button}>{this.props.name}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#ffffff',
    },

    container: {
        height: 60,
        width: 200,
        backgroundColor: '#fb4747',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    }
});