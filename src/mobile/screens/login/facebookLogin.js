
import React, { Component } from 'react';
import {AsyncStorage,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FBSDK, {LoginManager,AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount(){
        let config={
            apiKey: "AIzaSyCFdgpLl2z_SFMW-7cks_8fJ19Ro6bl4JI",
            authDomain: "testlogin-4b1be.firebaseapp.com",
            databaseURL: "https://testlogin-4b1be.firebaseio.com",
            projectId: "testlogin-4b1be",
            storageBucket: "testlogin-4b1be.appspot.com",
            messagingSenderId: "635247557493"
        }
        firebase.initializeApp(config);
    };

    _fbAuth=async()=> {
        try {
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                alert('Login cancelled');
            } else {
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                this.props.onLoginPress();
                const data = await AccessToken.getCurrentAccessToken();
                if (!data) {
                    alert('Some error occured');
                } else {
                    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
                    console.info(JSON.stringify(currentUser.user.toJSON()));
                    return Actions.pagecontrol();
                }
            }
        }catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._fbAuth}>
                    <Text>Login with Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// import React, { Component } from 'react';
// import {
//     AsyncStorage,
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity
// } from 'react-native';
// import FBSDK, { LoginManager } from 'react-native-fbsdk'
//
// export default class FacebookLogin extends Component {
//
//     _fbAuth=async()=>{
//         LoginManager.logInWithReadPermissions(['public_profile']).then(
//             function(result) {
//                 if (result.isCancelled) {
//                     alert('Login cancelled');
//                 } else {
//                     alert('Login success with permissions: '
//                         +result.grantedPermissions.toString());
//                 }
//             },
//             function(error) {
//                 alert('Login fail with error: ' + error);
//             }
//         );
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity onPress={this._fbAuth}>
//                     <Text>Login with Facebook</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

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
