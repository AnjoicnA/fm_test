import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import UserBox from "../userBox/UserBox";

const AllUsers = () => {

    //need context
    const {usersInfo} = useContext(UserContext);

    //map through boxes
    return <div className="box-container">
        {usersInfo.map((userInfo, index) => (
            <UserBox key={index} usersInfo = {userInfo}/>
        ))}
    </div>
}

export default AllUsers;