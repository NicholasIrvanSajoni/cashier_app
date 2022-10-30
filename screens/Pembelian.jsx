import React, { useContext, useEffect, useState } from "react"
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
    TextInput,
} from "react-native-paper"
import { Picker } from "@react-native-picker/picker"
import axios from "axios"
import Counter from "react-native-counters"
import pembelianStyle from "../styles/pembelian.style"
import DateTimePicker from "@react-native-community/datetimepicker"
import moment from "moment"
import SearchableDropdown from "react-native-searchable-dropdown"
import UserContext from "../context/user-context"

const Pembelian = ({ navigation }) => {
    const usercontext = useContext(UserContext)

    // const item = [
    //     {
    //         DataAllProduct?.map((listkategori) => (
    //             <View key={listkategori.id_produk}>
    //                 <Text>{listkategori.nama_produk}</Text>
    //             </View>
    //         ))
    //     }
    // ]
    const items = [
        //name key is must.It is to show the text in front
        { id: 1, name: "angellist" },
        { id: 2, name: "codepen" },
        { id: 3, name: "envelope" },
        { id: 4, name: "etsy" },
        { id: 5, name: "facebook" },
        { id: 6, name: "foursquare" },
        { id: 7, name: "github-alt" },
        { id: 8, name: "github" },
        { id: 9, name: "gitlab" },
        { id: 10, name: "instagram" },
    ]

    const [AddNamaProduk, setAddNamaProduk] = useState()
    const [selectedNamaProduk, setSelectedNamaProduk] = useState("")
    const [shouldShowModal, setShouldShowModal] = useState(false)
    const [NamaProduk, setNamaProduk] = useState("")
    const [VariasiProduk, setVariasiProduk] = useState("")
    const [JenisProduk, setJenisProduk] = useState("")
    const [loginpassword, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    // Tambah Pembelian
    const [DataAllProduct, setDataAllProduct] = useState()

    // Date
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState("date")
    const [show, setShow] = useState(false)

    const HandleNamaProduk = (item) => {
        console.log(item)
        // if (item) {
        //     setSelectedNamaProduk(item)
        // }
    }

    useEffect(() => {
        fetchprodukpembelian()
        fetchNamaProdukPembelian()
        console.log(DataAllProduct)
        console.log(AddNamaProduk)
    }, [])

    const fetchprodukpembelian = async () => {
        const getprodukpembelian = (
            await axios.get(`/product/user/${usercontext.UserData.id_user}`)
        ).data
        // console.log(getprodukpembelian.data)
        setDataAllProduct(getprodukpembelian.data)
    }

    const fetchNamaProdukPembelian = async () => {
        const getNamaProdukPembelian = (
            await axios.get(`/product/namaproduk/${usercontext.UserData.id_user}`)).data
            setAddNamaProduk(getNamaProdukPembelian.data) 
    }

    const onChange = (event, selectedDate) => {
        try {
            const currentDate = selectedDate
            console.log(selectedDate)
            if (!currentDate) {
                setShow(false)
            } else {
                setShow(false)
                setDate(currentDate)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    const showDatepicker = () => {
        showMode("date")
    }

    return (
        <View style={pembelianStyle.home}>
            {/* Header */}
            <View style={pembelianStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={pembelianStyle.rightheader}>
                        <Image
                            style={pembelianStyle.leftheader}
                            source={require("../assets/images/Icon/arrowleft.png")}
                        ></Image>
                    </View>
                </TouchableOpacity>
                <View style={pembelianStyle.titlecart}>
                    <Text style={pembelianStyle.headertext}>Pembelian</Text>
                </View>
            </View>

            <ScrollView>
                <View style={pembelianStyle.content}>
                    <View style={pembelianStyle.actionbar}>
                        <View style={pembelianStyle.searchprodukbar}>
                            <Searchbar
                                style={pembelianStyle.Searchbarstyle}
                                placeholder="Search"

                                // icon={require('../assets/icon/search.png')}
                                // onChangeText={onChangeSearch}
                                // value={searchQuery}
                            />
                        </View>
                        <View style={pembelianStyle.iconfilterbox}>
                            <Image
                                style={pembelianStyle.iconfilter}
                                source={require("../assets/images/Icon/filter.png")}
                            ></Image>
                        </View>
                    </View>
                    <View>
                        <View style={pembelianStyle.listpembelian}>
                            <View style={pembelianStyle.titlepembelian}>
                                <View
                                    style={pembelianStyle.namatempatpembelian}
                                >
                                    <Text>Sales Bear Brand</Text>
                                </View>
                                <View style={pembelianStyle.tanggalpembelian}>
                                    <Text>21 April 2022</Text>
                                </View>
                            </View>
                            <View style={pembelianStyle.boxitem}>
                                <View style={pembelianStyle.itemcartboximage}>
                                    <Image
                                        style={pembelianStyle.itemcartimage}
                                        source={require("../assets/images/tes.png")}
                                    ></Image>
                                </View>
                                <View style={pembelianStyle.deskripsiitem}>
                                    <View
                                        style={pembelianStyle.namajumlahproduk}
                                    >
                                        <View
                                            style={
                                                pembelianStyle.namaitempembelian
                                            }
                                        >
                                            <Text numberOfLines={2}>
                                                Permen Sweet asdss dasd sad
                                                sdfdsfsd sdfds fsdfds fds fds
                                                sdf ds sd
                                            </Text>
                                        </View>
                                        <View
                                            style={
                                                pembelianStyle.deskripsijumlahitem
                                            }
                                        >
                                            <Text>X 150</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={
                                            pembelianStyle.box_harga_pembelian
                                        }
                                    >
                                        <View
                                            style={
                                                pembelianStyle.box_harga_satuan
                                            }
                                        >
                                            <View>
                                                <Text>Variasi :</Text>
                                            </View>
                                            <View>
                                                <Text>Jenis :</Text>
                                            </View>
                                        </View>
                                        <View
                                            style={
                                                pembelianStyle.box_harga_total
                                            }
                                        >
                                            <View>
                                                <Text
                                                    style={
                                                        pembelianStyle.textharga
                                                    }
                                                >
                                                    Jeruk
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={
                                                        pembelianStyle.textharga
                                                    }
                                                >
                                                    Box
                                                </Text>
                                            </View>
                                        </View>
                                        <View></View>
                                    </View>

                                    <View
                                        style={
                                            pembelianStyle.box_harga_pembelian
                                        }
                                    >
                                        <View
                                            style={
                                                pembelianStyle.box_harga_satuan
                                            }
                                        >
                                            <View>
                                                <Text>Harga Satuan :</Text>
                                            </View>
                                            <View>
                                                <Text>Total Harga :</Text>
                                            </View>
                                        </View>
                                        <View
                                            style={
                                                pembelianStyle.box_harga_total
                                            }
                                        >
                                            <View>
                                                <Text
                                                    style={
                                                        pembelianStyle.textharga
                                                    }
                                                >
                                                    Rp. 8.000
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={
                                                        pembelianStyle.textharga
                                                    }
                                                >
                                                    Rp. 1.200.000
                                                </Text>
                                            </View>
                                        </View>
                                        <View></View>
                                    </View>

                                    {/* <View style={pembelianStyle.trashiconbox}>
                                    <Image style={pembelianStyle.trashicon} source={require('../assets/images/Icon/trash.png')}></Image>
                                </View> */}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Modal */}
            {shouldShowModal ? (
                <View style={pembelianStyle.modalpembelian}>
                    <View style={pembelianStyle.modalheader}>
                        <View style={pembelianStyle.titlemodal}>
                            <Text style={pembelianStyle.cartheadertext}>
                                Pembelian Produk
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setShouldShowModal(false)}
                        >
                            <View style={pembelianStyle.rightheadermodal}>
                                <Image
                                    source={require("../assets/images/Icon/close.png")}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={pembelianStyle.modaladdpembelian}>
                        <View style={pembelianStyle.boxmodaltambahpembelian}>
                            <View
                                style={pembelianStyle.modalhargapembelianproduk}
                            >
                                <View
                                    style={
                                        pembelianStyle.modalhargasatuanproduk
                                    }
                                >
                                    <Text style={pembelianStyle.boxheight}>
                                        Tanggal Pembelian :
                                    </Text>
                                    <View
                                        style={
                                            pembelianStyle.modalinputtanggalcalendar
                                        }
                                    >
                                        <Text>
                                            {moment(date).format(
                                                "DD MMMM YYYY",
                                            )}
                                        </Text>
                                        {show && (
                                            <DateTimePicker
                                                testID="dateTimePicker"
                                                value={date}
                                                mode={mode}
                                                onChange={onChange}
                                            />
                                        )}
                                    </View>
                                </View>
                                <View style={pembelianStyle.modaliconcalendar}>
                                    <TouchableOpacity onPress={showDatepicker}>
                                        <View
                                            style={
                                                pembelianStyle.boxiconcalendar
                                            }
                                        >
                                            <Image
                                                style={
                                                    pembelianStyle.image_calendar
                                                }
                                                source={require("../assets/images/Icon/calendar.png")}
                                            ></Image>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={pembelianStyle.boxheight}>
                                Nama Produk
                            </Text>
                            <View style={pembelianStyle.modalselectinput}>
                                <SearchableDropdown
                                    onTextChange={() => undefined}
                                    //On text change listner on the searchable input
                                    onItemSelect={(item) =>
                                        setSelectedNamaProduk(item)
                                    }
                                    onRemoveItem={() =>
                                        setSelectedNamaProduk(undefined)
                                    }
                                    //onItemSelect called after the selection from the dropdown
                                    items={items}
                                    selectedItems={selectedNamaProduk}
                                    //mapping of item array
                                    placeholder="placeholder"
                                    //place holder for the search input
                                    resetValue={false}
                                    //reset textInput Value with true and false state
                                    underlineColorAndroid="transparent"
                                    //To remove the underline from the android input
                                />
                            </View>

                            <Text style={pembelianStyle.boxheight}>
                                Variasi Produk
                            </Text>
                            <View style={pembelianStyle.modalselectinput}>
                                <Picker
                                    selectedValue={VariasiProduk}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setVariasiProduk(itemValue)
                                    }
                                >
                                    <Picker.Item label="Jeruk" value="Jeruk" />
                                    <Picker.Item
                                        label="Stroberi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item label="apa" value="Jeruk" />
                                    <Picker.Item
                                        label="Strobadasderi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item label="asd" value="Jeruk" />
                                    <Picker.Item
                                        label="Strosdadberi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item label="dsaa" value="Jeruk" />
                                    <Picker.Item
                                        label="Strosddsfberi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item label="asddas" value="Jeruk" />
                                    <Picker.Item
                                        label="Strsdfsdfoberi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item
                                        label="Jersfdfsduk"
                                        value="Jeruk"
                                    />
                                    <Picker.Item
                                        label="Strobersdfi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item
                                        label="Jeruksfd"
                                        value="Jeruk"
                                    />
                                    <Picker.Item
                                        label="Strobsdferi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item
                                        label="Jerusdfdfsk"
                                        value="Jeruk"
                                    />
                                    <Picker.Item
                                        label="Strobfderi"
                                        value="Stroberi"
                                    />
                                    <Picker.Item
                                        label="Jerusdfdsk"
                                        value="Jeruk"
                                    />
                                    <Picker.Item
                                        label="Strobefhghgfri"
                                        value="Stroberi"
                                    />
                                    <Picker.Item
                                        label="Jerufghk"
                                        value="Jeruk"
                                    />
                                    <Picker.Item
                                        label="Strobgheri"
                                        value="Stroberi"
                                    />
                                </Picker>
                            </View>

                            <View
                                style={
                                    pembelianStyle.modaljumlahpembelianproduk
                                }
                            >
                                <View style={pembelianStyle.modaljmlhproduk}>
                                    <Text style={pembelianStyle.boxheight}>
                                        Jumlah Produk
                                    </Text>
                                    <TextInput
                                        style={pembelianStyle.boxinput}
                                        value={loginpassword}
                                        mode={"flat"}
                                        onChangeText={(loginpassword) =>
                                            setPassword(loginpassword)
                                        }
                                    />
                                </View>
                                <View style={pembelianStyle.modaljnsproduk}>
                                    <Text style={pembelianStyle.boxheight}>
                                        Jenis Produk
                                    </Text>
                                    <View
                                        style={pembelianStyle.modalselectinput}
                                    >
                                        <Picker
                                            selectedValue={VariasiProduk}
                                            onValueChange={(
                                                itemValue,
                                                itemIndex,
                                            ) => setEmail(itemValue)}
                                        >
                                            <Picker.Item
                                                label="Jeruk"
                                                value="Jeruk"
                                            />
                                            <Picker.Item
                                                label="Stroberi"
                                                value="Stroberi"
                                            />
                                        </Picker>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={pembelianStyle.modalhargapembelianproduk}
                            >
                                <View
                                    style={
                                        pembelianStyle.modalhargasatuanproduk
                                    }
                                >
                                    <Text style={pembelianStyle.boxheight}>
                                        Harga Satuan
                                    </Text>
                                    <View
                                        style={pembelianStyle.modalselectinput}
                                    >
                                        <TextInput
                                            style={pembelianStyle.boxinput}
                                            value={loginpassword}
                                            mode={"flat"}
                                            onChangeText={(loginpassword) =>
                                                setPassword(loginpassword)
                                            }
                                        />
                                    </View>
                                </View>
                                <View
                                    style={pembelianStyle.modalhargatotalproduk}
                                >
                                    <Text style={pembelianStyle.boxheight}>
                                        Total Harga
                                    </Text>
                                    <View
                                        style={pembelianStyle.modalselectinput}
                                    >
                                        <TextInput
                                            style={pembelianStyle.boxinput}
                                            value={loginpassword}
                                            mode={"flat"}
                                            onChangeText={(loginpassword) =>
                                                setPassword(loginpassword)
                                            }
                                        />
                                    </View>
                                </View>
                            </View>

                            <Text style={pembelianStyle.boxheight}>
                                Tempat Pembelian
                            </Text>
                            <TextInput
                                style={pembelianStyle.boxinput}
                                value={loginpassword}
                                mode={"flat"}
                                onChangeText={(loginpassword) =>
                                    setPassword(loginpassword)
                                }
                            />

                            <Button
                                style={pembelianStyle.btn_save}
                                mode="contained"
                                onPress={() => handlerSubmitLogin()}
                            >
                                Simpan
                            </Button>
                        </View>
                    </View>
                </View>
            ) : null}

            {/* Add Button */}
            <TouchableOpacity
                onPress={() => {
                    setShouldShowModal(true)
                    fetchprodukpembelian()
                }}
            >
                <View style={pembelianStyle.btn_round_box}>
                    <View style={pembelianStyle.btn_round}>
                        <Image
                            style={pembelianStyle.btn_round_icon}
                            source={require("../assets/images/Icon/plus.png")}
                        ></Image>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Pembelian
