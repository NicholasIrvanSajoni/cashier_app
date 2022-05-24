import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    ImageBackground
} from 'react-native';

import registerStyle from '../styles/register.style';
import { Card, Button, Title, Paragraph, TextInput } from 'react-native-paper';

const Register = ({ navigation }) => {
    const [registernama, setRegisterNama] = React.useState("");
    const [registernamatoko, setRegisterNamaToko] = React.useState("");
    const [registeremail, setRegisterEmail] = React.useState("");
    const [registerpassword, setRegisterPassword] = React.useState("");
    return (
        <View style={registerStyle.container}>
            <ImageBackground style={registerStyle.wall} source={require('../assets/images/loginwall.png')}></ImageBackground>
            <View style={registerStyle.logo}>
                <Image style={registerStyle.home_image} source={require('../assets/images/tes.png')}></Image>
            </View>

            <View style={registerStyle.inputlogin}>
                <Card style={registerStyle.item}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Product')}> */}
                    <ScrollView>
                        <Card.Content>
                            <View style={registerStyle.insidecard}>
                                {/* <Paragraph style={registerStyle.item_text}>Login</Paragraph> */}
                                <Text style={registerStyle.boxheight}>Nama</Text>
                                <TextInput style={registerStyle.boxinput}
                                    value={registernama}
                                    mode={'flat'}
                                    onChangeText={registernama => setRegisterNama(registernama)}
                                />

                                <Text style={registerStyle.boxheight}>Nama Toko</Text>
                                <TextInput style={registerStyle.boxinput}
                                    value={registernamatoko}
                                    mode={'flat'}
                                    onChangeText={registernamatoko => setRegisterNamaToko(registernamatoko)}
                                />

                                <Text style={registerStyle.boxheight}>Email</Text>
                                <TextInput style={registerStyle.boxinput}
                                    value={registeremail}
                                    mode={'flat'}
                                    onChangeText={registeremail => setRegisterEmail(registeremail)}
                                />
                                <Text style={registerStyle.boxheight}>Password</Text>
                                <TextInput style={registerStyle.boxinput}
                                    value={registerpassword}
                                    mode={'flat'}
                                    onChangeText={registerpassword => setRegisterPassword(registerpassword)}
                                />
                                {/* <Text style={registerStyle.forgetpassword}>Forgot your password?</Text> */}
                                <Button style={registerStyle.btn_login} mode="contained" onPress={() => console.log('Pressed')}>
                                    Register
                                </Button>
                            </View>
                        </Card.Content>
                    </ScrollView>
                </Card>

                <Text style={registerStyle.signuphere}>Already have an account?<Text onPress={() => navigation.navigate('Login')}> Login Here!</Text></Text>

            </View>
        </View>
    )
}

export default Register