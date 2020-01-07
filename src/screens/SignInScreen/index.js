import React from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, AsyncStorage, View, Image, Text } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import { Input, Button } from 'react-native-elements';

class SignInScreen extends React.Component {
    static navigationOptions = {
        // title: '登录',
        header: null,
    };

    render() {
        return (
            <SafeAreaView>
                <View style={styles.logo}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={require('../../images/wblogo.png')}
                    />
                </View>


                <Text style={styles.bigtext}>登录微博</Text>
                <Text style={styles.smalltext}>分享生活 发现世界</Text>
                <View style={styles.inputbox} >
                    <Input placeholder='请输入账号' />
                    <Input placeholder='请输入密码' />
                </View>

                <View style={styles.loginbox} ><Button onPress={this._signInAsync} buttonStyle={styles.loginbtn} title="登录" /></View>


            </SafeAreaView>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}


const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
    },
    bigtext: {
        fontSize: 22,
        textAlign: "center"
    },
    smalltext: {
        fontSize: 14,
        color: '#666',
        textAlign: "center",
        paddingTop: 10,
    },
    inputbox:{
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    loginbox: {
        marginTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 14,
        // alignItems: 'center',
    },
    loginbtn: {

        backgroundColor: 'orange'
        // width:300,
        // marginTop:50,
        // paddingTop:50,

    }
});

export default SignInScreen