import React, { useContext, useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    ImageBackground,
} from 'react-native';

import loginStyle from '../styles/login.style';
import { Card, Button, Title, Paragraph, TextInput, } from 'react-native-paper';
import axios from 'axios';
import UserContext from '../context/user-context';
import secret from '../constants/Secret';

const Login = ({ navigation }) => {
    const usercontext = useContext(UserContext);
    // console.log(usercontext.token);
    const [loginemail, setEmail] = useState("");
    const [loginpassword, setPassword] = useState("");

    useEffect(() => {
        // console.log(usercontext)
        if (usercontext.CompletedLoad) {
            if (usercontext.UserData) {
                navigation.navigate('Home')
            }
        }
    }, [usercontext.CompletedLoad])

    const handlerSubmitLogin = async () => {
        try {
            const userlogin = (await axios.post(secret.APIURL + "/auth/login", { email: loginemail, password: loginpassword })).data
            console.log(userlogin)
            usercontext.settoken(userlogin.data.token)
            navigation.navigate('Home')
        } catch (error) {
            console.log(error.stack);
        }
    }

    return (
        <View style={loginStyle.container}>
            <ImageBackground style={loginStyle.wall} source={require('../assets/images/loginwall.png')}></ImageBackground>
            <View style={loginStyle.logo}>
                <Image style={loginStyle.home_image} source={require('../assets/images/tes.png')}></Image>
            </View>

            <View style={loginStyle.inputlogin}>
                <Card style={loginStyle.item}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Product')}> */}
                    <Card.Content>
                        <View style={loginStyle.insidecard}>
                            {/* <Paragraph style={loginStyle.item_text}>Login</Paragraph> */}
                            <Text style={loginStyle.boxheight}>Email</Text>
                            <TextInput style={loginStyle.boxinput}
                                value={loginemail}
                                mode={'flat'}
                                onChangeText={loginemail => setEmail(loginemail)}
                            />
                            <Text style={loginStyle.boxheight}>Password</Text>
                            <TextInput style={loginStyle.boxinput}
                                value={loginpassword}
                                mode={'flat'}
                                onChangeText={loginpassword => setPassword(loginpassword)}
                            />
                            <Text style={loginStyle.forgetpassword}>Forgot your password?</Text>
                            <Button style={loginStyle.btn_login} mode="contained" onPress={() => handlerSubmitLogin()}>
                                Login
                            </Button>
                            {/* <Button>
                                -
                            </Button>
                            <Text>4</Text>
                            <Button>
                                +
                            </Button> */}
                        </View>
                    </Card.Content>
                </Card>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={loginStyle.signuphere}>Don't have an account? Register Here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login