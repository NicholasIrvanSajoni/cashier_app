import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
} from "react-native"
import {
    Card,
    Button,
    Title,
    Paragraph,
    Searchbar,
    Modal,
    Portal,
    Provider,
} from "react-native-paper"
import axios from "axios"
import stokStyle from "../styles/stok.style"
import Counter from "react-native-counters"

const Stok = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [actionTriggered, setActionTriggered] = useState("")
    const [childmodal, setchildmodal] = useState("")

    return (
        <View style={stokStyle.home}>
            {/* Header */}
            <View style={stokStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={stokStyle.rightheader}>
                        <Image
                            style={stokStyle.leftheader}
                            source={require("../assets/images/Icon/arrowleft.png")}
                        ></Image>
                    </View>
                </TouchableOpacity>
                <View style={stokStyle.titlecart}>
                    <Text style={stokStyle.headertext}>Stok</Text>
                </View>
            </View>

            <ScrollView>
                <View style={stokStyle.content}>
                    <View style={stokStyle.actionbar}>
                        <View style={stokStyle.searchprodukbar}>
                            <Searchbar
                                style={stokStyle.Searchbarstyle}
                                placeholder="Search"

                                // icon={require('../assets/icon/search.png')}
                                // onChangeText={onChangeSearch}
                                // value={searchQuery}
                            />
                        </View>
                        <View style={stokStyle.iconfilterbox}>
                            <Image
                                style={stokStyle.iconfilter}
                                source={require("../assets/images/Icon/filter.png")}
                            ></Image>
                        </View>
                    </View>

                    <View>
                        <View style={stokStyle.itemcart}>
                            <View style={stokStyle.boxitem}>
                                {/* <View style={stokStyle.checkcart}>
                            <Checkbox style={stokStyle.checkboxcart}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />
                        </View> */}
                                <View style={stokStyle.itemcartboximage}>
                                    <Image
                                        style={stokStyle.itemcartimage}
                                        source={require("../assets/images/tes.png")}
                                    ></Image>
                                </View>
                                <View style={stokStyle.deskripsiitem}>
                                    <View>
                                        <Text>
                                            Permen Sweet asdasasdas dasd sad
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={stokStyle.textharga}>
                                            156.000
                                        </Text>
                                    </View>
                                    <View style={stokStyle.btnincdec}>
                                        <Counter
                                            start={0}
                                            min={0}
                                            max={100}
                                            buttonStyle={{
                                                borderColor: "#333",
                                                borderWidth: 2,
                                            }}
                                            buttonTextStyle={{
                                                color: "#333",
                                            }}
                                            countTextStyle={{
                                                color: "#333",
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={stokStyle.trashiconbox}>
                                    <Image
                                        style={stokStyle.trashicon}
                                        source={require("../assets/images/Icon/trash.png")}
                                    ></Image>
                                </View>
                                <Button
                                    style={{ marginTop: 30 }}
                                    onPress={() => {
                                        setActionTriggered("ACTION_1")
                                        setVisible(true)
                                    }}
                                >
                                    Show
                                </Button>
                                <Button
                                    style={{ marginTop: 30 }}
                                    onPress={() => {
                                        setActionTriggered("ACTION_2")
                                        setVisible(true)
                                    }}
                                >
                                    Show
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Modal
                visible={visible}
                onDismiss={() => setVisible(false)}
                dismissable={true}
            >
                {actionTriggered === "ACTION_1" ? (
                    <View style={stokStyle.modaltambahkategori}>
                        <Text>
                            .... something you want to show in case of the first
                            modal opened
                        </Text>
                    </View>
                ) : actionTriggered === "ACTION_2" ? (
                    <View style={stokStyle.modalpembelian}>
                        <Text>
                            .... something you want to show in case of the
                            second modal opened
                        </Text>
                        <Button
                            style={{ marginTop: 30 }}
                            onPress={() => {
                                setVisible(true)
                                setchildmodal("child1")
                            }}
                        >
                            Show
                        </Button>
                        {childmodal === "child1" ? (
                            <View style={stokStyle.modalpembelian}>
                                <Text>
                                    .... CHILD MODAL want to show in case of the
                                    second modal opened
                                </Text>
                            </View>
                        ) : null}
                    </View>
                ) : null}
            </Modal>
        </View>
    )
}
export default Stok
