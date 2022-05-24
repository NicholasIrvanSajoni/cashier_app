import { useEffect, useState } from "react";
import UserContext from "./user-context";
import securestoreutils from "../utility/Secure_Store.util";
import axios from "axios";

const UserContextProvider = (props) => {
    const [Token, setToken] = useState('')
    const [CompletedLoad, setCompletedLoad] = useState(false)
    const [UserData, setUserData] = useState(undefined)

    useEffect(() => {
        _Init();

    }, [])

    useEffect(() => {
        if (Token && Token != '') {
            // Load User Data
            setCompletedLoad(false)
            _LoadUserData();
        }
        else {
            setUserData(undefined);
        }
    }, [Token])

    const _Init = async () => {
        const localstoragetoken = await securestoreutils.getValueFor("user_token")
        if (localstoragetoken && localstoragetoken != '') {
            setToken(localstoragetoken)
        }
        else {
            _ResetToken();
        }
    }

    const _ResetToken = async () => {
        setToken('');
        await securestoreutils.remove("user_token");
        setCompletedLoad(true)
    }

    const _LoadUserData = async () => {
        if (Token && Token != '') {
            try {
                const userdata = (await (axios.get("/auth/info", { headers: { Authorization: 'bearer ' + Token } }))).data
                console.log(userdata);
                console.log(userdata.data);
                setUserData(userdata.data)
                setCompletedLoad(true);
            } catch (error) {
                console.log(error.response.data)
            }
        }
    }

    const _settoken = async (_token) => {
        setToken(_token)
        await securestoreutils.save("user_token", _token)
    }

    return (
        <UserContext.Provider value={{
            token: Token,
            settoken: _settoken,
            CompletedLoad: CompletedLoad,
            UserData: UserData
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;