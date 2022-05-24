const { createContext } = require("react");

const UserContext = createContext({
    token: "",
    settoken: () => { },
    CompletedLoad: false,
    UserData: undefined
});

export default UserContext;