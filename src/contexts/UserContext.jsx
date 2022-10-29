import { v4 as getId } from "uuid";
import React, { createContext, useState } from "react";

const UserContext = createContext();


export const ContextProvider = ({children}) => {
    //array state
    const [usersInfo, setUsersInfo] = useState([]);

    //adding new user
    const addNewUser = (userInfo) => {
        setUsersInfo([...usersInfo, {id: getId(), info : userInfo}]);
        // console.log(usersInfo);
    }

    //let my state contain every but removed user
    const removeSelectedUser = (id) => {
        setUsersInfo(usersInfo.filter(user => user.id !== id))
    }


    return(
        <UserContext.Provider value={{usersInfo, addNewUser, removeSelectedUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;