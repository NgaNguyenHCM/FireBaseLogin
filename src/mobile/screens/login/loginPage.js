/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StatusBar,StyleSheet, Text, View, Button,Image,ScrollView,TextInput,TouchableOpacity,ActivityIndicator,Alert} from 'react-native';
import Hr from 'react-native-hr-component';
import { colors } from '../../utils/colors';
import FacebookLogin from './facebookLogin'

type Props = {};
export default class LoginPage extends Component<Props> {
    props: Props;
    constructor(props) {
        super(props);
        this.state = {
            email: 'E-mail address',
            pass: 'Password',
            loading: true,
            message:'',
            isLoggedIn:false,
        };
    }

    renderLogo = () => {
        return <View style={styles.imageContainer}>
            <Image
                source={require('../../images/logo-with-text.png')}
                style={{ width: 140, height: 140, marginVertical: 30 }}
                resizeMode="contain"/>
        </View>;
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:35}}>
                    {this.renderLogo()}
                </View>
                <View style={{flex:75}}>
                    <View style={{flex:3}}>
                            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#ffffff',justifyContent:'flex-end'}}>
                                <TextInput
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}
                                />
                        </View>
                        <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#ffffff',justifyContent:'flex-end'}}>
                            <TextInput onChangeText={(pass) => this.setState({pass})}
                                       value={this.state.pass}/>
                        </View>
                    </View>
                    <View style={{flex:6}}>
                        <View style={{flex:1.5,justifyContent:'center',alignItems:'flex-end'}}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ResetPassword')}>
                                <Text style={styles.forgotPass}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:8}}>
                            <View style={{flex:1.5,marginBottom:5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <TouchableOpacity
                                    style={{height:40,width:200,borderWidth:1,borderRadius:10,borderColor:'#ffffff',alignItems:'center',justifyContent:'center'}}
                                    title="Login"
                                    onPress={() => this.logIn()}>
                                    <Text style={styles.button}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1.5,marginBottom:5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <TouchableOpacity
                                    style={{height:40,width:200,borderWidth:1,borderRadius:10,borderColor:'#ffffff',alignItems:'center',justifyContent:'center'}}
                                    title="Login"
                                    onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text style={styles.button}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                            <Hr text="OR CONNECT WITH" fontSize={12} lineColor="#ffffff" textPadding={10}/>
                            <View style={{flex:1,marginVertical:20,flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flex:0.3}}/>
                                <View style={{flex:1}}>

                                        <TouchableOpacity style={{backgroundColor:'#DC4A38',borderRadius:10}}>
                                            <Image  source={require('../../images/google_auth.png')}
                                                    style={{width:40,height:40,borderRadius:10}}/>
                                        </TouchableOpacity>
                                </View>
                                <View style={{flex:0.2}}/>
                                <View style={{flex:1}}>
                                    <FacebookLogin/>
                                {/*<TouchableOpacity style={{backgroundColor:'#3C5A98',borderRadius:10}}>*/}
                                    {/*<Image source={require('../../images/facebook-sign-in-button-png-26.png')}*/}
                                            {/*style={{width:40,height:40,borderRadius:10}}/>*/}
                                {/*</TouchableOpacity>*/}
                                </View>
                                <View style={{flex:0.3}}/>
                            </View>
                        </View>
                        <View style={{flex:0.8}}>
                        </View>
                    </View>
                </View>
            </View>

        );
    }

    logIn = () => {
        if (this.state.email === '') {
        	Alert.alert('Error', 'Please input your email Id', [{ text: 'OK' }, ]);
        	return;
        }
        if (this.state.pass === '') {
        	Alert.alert('Error', 'Please input your password', [{ text: 'OK' }, ]);
        	return;
        }
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
            this.props.navigation.navigate('Home');
        }, 100);
    };
    onChangeText = (typeInput, text) => {
        if (typeInput === 'E-mail Id') this.setState({ email: text });
        if (typeInput === 'Pass') this.setState({ pass: text });
    };

}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.main,paddingHorizontal:40,},
    inupButton: {
        height: 50,
        borderColor: '#ffffff',
        borderRadius: 25,
        margin: 2,
        justifyContent: 'center',
        backgroundColor: colors.main,
    },
    button:{color:'#ffffff',fontWeight:'bold'},
    imageContainer: { flex: 3, justifyContent:'flex-end', alignItems:'center' },
    loginContainer: { flex: 7, alignItems:'center', justifyContent:'center' },
    buttonWrapper: { marginTop: 20, backgroundColor:'#833c0c', borderRadius:3 },
    textBold: { fontWeight:'bold', color:'#ffffff', fontSize: 16 },
    wrapTextInput:{ flexDirection:'row', alignItems:'center', marginTop: 5 },
    wrapText: { flex: 3, justifyContent:'center' },
    wrapInput: { flex: 1, justifyContent:'center' },
    textLeft:{ color:'#ffffff', fontWeight:'bold', paddingLeft: 20 },
    buttonSocial:{ width: 140, height: 140},
    forgotPass: { color:'#ffffff', fontWeight: 'bold',fontSize:12 },
});
