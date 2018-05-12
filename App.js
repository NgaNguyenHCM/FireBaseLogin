
import React,{Component} from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainPage from './src/mobile/screens/home/mainPage';
import LoginPage from './src/mobile/screens/login/loginPage';
import ResetPw from './src/mobile/screens/login/resetPassword';
import SignUp from './src/mobile/screens/login/signUp';
import FacebookLogin from './src/mobile/screens/login/facebookLogin';

type Props = {};

const RootStack = StackNavigator(
    {
        Login: {
            screen: LoginPage,
        },
        Home: {
            screen: MainPage,
        },
        ResetPassword:
            {
                screen: ResetPw,
            },
        SignUp:
            {
                screen: SignUp,
            },
        FBLogin:
            {
                screen: FacebookLogin,
            }
    },
    {
        initialRouteName: 'Login',
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class App extends Component<Props> {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
