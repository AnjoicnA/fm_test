import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const UserBox = ({usersInfo}) => {

    //I need my context here
    const {removeSelectedUser} = useContext(UserContext);

    return <div className="box">
        <span className="span-s">{usersInfo.info.firstName}</span>
        <span className="span-s">{usersInfo.info.lastName}</span>
        <span className="span-l">{usersInfo.info.street}</span>
        <span className="span-l">{usersInfo.info.city}</span>
        <span className="span-s">
            <button className="btn" onClick={() => removeSelectedUser(usersInfo.id)}>Remove</button>
        </span>
    </div>
}

export default UserBox;