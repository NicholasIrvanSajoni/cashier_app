import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';

import Counter from "react-native-counters";
import { Card, Button, Title, Paragraph, Searchbar, Portal, Provider, Checkbox, Modal } from 'react-native-paper';
import kasirStyle from '../styles/kasir.style';
const Kasir = ({ navigation }) => {

    const handlerhidecart = () => {

    }

    const [shouldShow, setShouldShow] = useState(false);
    const [shouldShowModal, setShouldShowModal] = useState(false);
    const [visible, setVisible] = useState(false);

    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    return (

        <View style={kasirStyle.home}>
            {/* Header */}
            <View style={kasirStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={kasirStyle.rightheader}>
                        <Image style={kasirStyle.leftheader} source={require('../assets/images/Icon/arrowleft.png')}></Image>
                    </View>
                </TouchableOpacity>
                <View style={kasirStyle.titlecart}>
                    <Text style={kasirStyle.headertext}>Kasir</Text>
                </View>
                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <View style={kasirStyle.rightheader}>
                        <Image source={require('../assets/images/Icon/shop_cart.png')}></Image>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Cart Sidebar */}
            {shouldShow ? (
                <View style={kasirStyle.cartsidebar}>
                    <View style={kasirStyle.cartsideheader}>
                        <View style={kasirStyle.titlecart}>

                        </View>
                        <View style={kasirStyle.titlecart}>
                            <Text style={kasirStyle.cartheadertext}>Cart</Text>
                        </View>

                        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                            <View style={kasirStyle.rightheadercart}>
                                <Image source={require('../assets/images/Icon/close.png')}></Image>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image style={kasirStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>Permen Sweet asdasasdas dasd sad</Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>156.000</Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter start={0} min={0} max={100}
                                            buttonStyle={{
                                                borderColor: '#333',
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: '#333',
                                            }}
                                            countTextStyle={{
                                                color: '#333',
                                            }} />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image style={kasirStyle.trashicon} source={require('../assets/images/Icon/trash.png')}></Image>
                                </View>
                            </View>
                        </View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image style={kasirStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>Permen Sweet asdasasdas dasd sad</Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>6.000</Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter start={0} min={0} max={100}
                                            buttonStyle={{
                                                borderColor: '#333',
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: '#333',
                                            }}
                                            countTextStyle={{
                                                color: '#333',
                                            }} />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image style={kasirStyle.trashicon} source={require('../assets/images/Icon/trash.png')}></Image>
                                </View>
                            </View>
                        </View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image style={kasirStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>Permen Sweet asdasasdas dasd sad</Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>1.233.000</Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter start={0} min={0} max={100}
                                            buttonStyle={{
                                                borderColor: '#333',
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: '#333',
                                            }}
                                            countTextStyle={{
                                                color: '#333',
                                            }} />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image style={kasirStyle.trashicon} source={require('../assets/images/Icon/trash.png')}></Image>
                                </View>
                            </View>
                        </View>
                        <View style={kasirStyle.itemcart}>
                            <View style={kasirStyle.boxitem}>
                                {/* <View style={kasirStyle.checkcart}>
                            <Checkbox style={kasirStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={kasirStyle.itemcartboximage}>
                                    <Image style={kasirStyle.itemcartimage} source={require('../assets/images/tes.png')}></Image>
                                </View>
                                <View style={kasirStyle.deskripsiitem}>
                                    <View>
                                        <Text>Permen Sweet asdasasdas dasd sad</Text>
                                    </View>
                                    <View>
                                        <Text style={kasirStyle.textharga}>999.999</Text>
                                    </View>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter start={0} min={0} max={100}
                                            buttonStyle={{
                                                borderColor: '#333',
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: '#333',
                                            }}
                                            countTextStyle={{
                                                color: '#333',
                                            }} />
                                    </View>
                                </View>
                                <View style={kasirStyle.trashiconbox}>
                                    <Image style={kasirStyle.trashicon} source={require('../assets/images/Icon/trash.png')}></Image>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={kasirStyle.btm_cart}>
                        <View style={kasirStyle.totalhargacart}>
                            <Text>
                                Total Harga
                            </Text>
                            <Text style={kasirStyle.textharga}>
                                Rp. 3.293.000
                            </Text>
                        </View>
                        <Button style={kasirStyle.btncheckout} onPress={() => navigation.navigate('Checkout')}>Checkout</Button>
                    </View>
                </View>
            ) : null}

            {/* Modal Product */}
            {shouldShowModal ? (
                <View style={kasirStyle.modalproduct}>
                    <View style={kasirStyle.modalheader}>
                        <View style={kasirStyle.titlemodal}>
                            <Text style={kasirStyle.cartheadertext}>Product</Text>
                        </View>
                        <TouchableOpacity onPress={() => setShouldShowModal(!shouldShowModal)}>
                            <View style={kasirStyle.rightheadermodal}>
                                <Image source={require('../assets/images/Icon/close.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={kasirStyle.modalside}>

                        <View style={kasirStyle.modalproductbox}>
                            <Image style={kasirStyle.modalproductimage} source={require('../assets/images/tes.png')}></Image>
                        </View>
                        <View style={kasirStyle.modalproductinfo}>
                            <Text style={kasirStyle.modalproductname}>Nabati Keju Pengen Apa</Text>
                            <View style={kasirStyle.modalvariasi}>
                                <Text>Variasi :</Text>
                                <View style={kasirStyle.modaljenisproduk}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button style={kasirStyle.kategoritext}>
                                                Satuan
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button style={kasirStyle.kategoritext}>
                                                Lusin
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button style={kasirStyle.kategoritext}>
                                                Dus
                                            </Button>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={kasirStyle.modalvariasi}>
                                <Text>Jenis :</Text>
                                <View style={kasirStyle.modaljenisproduk}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button style={kasirStyle.kategoritext}>
                                                Satuan
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button style={kasirStyle.kategoritext}>
                                                Lusin
                                            </Button>
                                        </View>
                                        <View style={kasirStyle.kategoribox}>
                                            <Button style={kasirStyle.kategoritext}>
                                                Dus
                                            </Button>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={kasirStyle.modaltotal}>
                                <View style={kasirStyle.modalvariasi}>
                                    <Text>Jumlah : </Text>
                                </View>
                                <View style={kasirStyle.modaljumlahproduct}>
                                    <View style={kasirStyle.btnincdec}>
                                        <Counter start={0} min={0} max={100}
                                            buttonStyle={{
                                                borderColor: '#333',
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: '#333',
                                            }}
                                            countTextStyle={{
                                                color: '#333',
                                            }} />
                                    </View>
                                    <View style={kasirStyle.modalstokproduct}>
                                        <Text style={kasirStyle.textstok}>Stok : 50</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={kasirStyle.modalvariasi}>
                                <Text>Harga :</Text>
                                <View style={kasirStyle.paddingtop10}>
                                    <Text style={kasirStyle.modalproductprice}>Rp 50.000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={kasirStyle.modalproductbtn}>
                        <Button style={kasirStyle.btnaddtocart} >Add To Cart</Button>
                    </View>
                </View>
            ) : null}

            <ScrollView>


                <View style={kasirStyle.content}>

                    <View style={kasirStyle.actionbar}>
                        <Searchbar
                            placeholder="Search"

                        // icon={require('../assets/icon/search.png')}
                        // onChangeText={onChangeSearch}
                        // value={searchQuery}
                        />
                    </View>



                    {/* <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" />
                        <Card.Content>
                        <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card> */}

                    <View style={kasirStyle.kategoricard}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={kasirStyle.kategoribox}>
                                <Button style={kasirStyle.kategoritext}>
                                    Snack
                                </Button>
                            </View>
                            <View style={kasirStyle.kategoribox}>
                                <Button style={kasirStyle.kategoritext}>
                                    Minuman
                                </Button>
                            </View>
                            <View style={kasirStyle.kategoribox}>
                                <Button style={kasirStyle.kategoritext}>
                                    Permen
                                </Button>
                            </View>
                            <View style={kasirStyle.kategoribox}>
                                <Button style={kasirStyle.kategoritext}>
                                    Rokok
                                </Button>
                            </View>
                            <View style={kasirStyle.kategoribox}>
                                <Button style={kasirStyle.kategoritext}>
                                    Mie
                                </Button>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={kasirStyle.container}>
                        {/* <Provider>
                            <Portal>
                                <Modal visible={visible} onDismiss={hideModal}>
                                    <Text>AFWHIUGUHIUGHUI.</Text>
                                </Modal>
                            </Portal> */}
                        <Card style={kasirStyle.item}>
                            <TouchableOpacity onPress={() => setShouldShowModal(!shouldShowModal)}>
                                <Card.Content>
                                    <View style={kasirStyle.box_image}>
                                        <Image style={kasirStyle.product_image} source={require('../assets/images/tes.png')}></Image>
                                    </View>
                                    <View style={kasirStyle.box_info}>
                                        <Text style={kasirStyle.product_name}>Nabati Keju Pengen Apa</Text>
                                        <Text style={kasirStyle.product_name}>Rp 50.000</Text>
                                        <Text style={kasirStyle.product_name}>Stok : 50</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={kasirStyle.item}>
                            <TouchableOpacity>
                                <Card.Content>
                                    <View style={kasirStyle.box_image}>
                                        <Image style={kasirStyle.product_image} source={require('../assets/images/tes.png')}></Image>
                                    </View>
                                    <View style={kasirStyle.box_info}>
                                        <Text style={kasirStyle.product_name}>Nabati Keju Pengen Apa</Text>
                                        <Text style={kasirStyle.product_name}>Rp 50.000</Text>
                                        <Text style={kasirStyle.product_name}>Stok : 50</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={kasirStyle.item}>
                            <TouchableOpacity>
                                <Card.Content>
                                    <View style={kasirStyle.box_image}>
                                        <Image style={kasirStyle.product_image} source={require('../assets/images/tes.png')}></Image>
                                    </View>
                                    <View style={kasirStyle.box_info}>
                                        <Text style={kasirStyle.product_name}>Nabati Keju Pengen Apa</Text>
                                        <Text style={kasirStyle.product_name}>Rp 50.000</Text>
                                        <Text style={kasirStyle.product_name}>Stok : 50</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        <Card style={kasirStyle.item}>
                            <TouchableOpacity>
                                <Card.Content>
                                    <View style={kasirStyle.box_image}>
                                        <Image style={kasirStyle.product_image} source={require('../assets/images/tes.png')}></Image>
                                    </View>
                                    <View style={kasirStyle.box_info}>
                                        <Text style={kasirStyle.product_name}>Nabati Keju Pengen Apa</Text>
                                        <Text style={kasirStyle.product_name}>Rp 50.000</Text>
                                        <Text style={kasirStyle.product_name}>Stok : 50</Text>
                                    </View>
                                </Card.Content>
                            </TouchableOpacity>
                        </Card>
                        {/* </Provider> */}
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default Kasir