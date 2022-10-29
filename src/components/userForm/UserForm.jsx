import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

const UserForm = () => {
    
    //state for info
    const [userInfo, setUserInfo] = useState({
        firstName : "",
        lastName : "",
        street : "",
        city : ""
    })

    //need context for this
    const {addNewUser} = useContext(UserContext);

    //changing inputs
    const onChange = (e) => {
        switch(e.target.id){
            case "firstName":
                setUserInfo({...userInfo, firstName : e.target.value})
            break;
            case "lastName":
                setUserInfo({...userInfo, lastName : e.target.value})
            break;
            case "street":
                setUserInfo({...userInfo, street : e.target.value})
            break;
            case "city":
                setUserInfo({...userInfo, city : e.target.value})
            break;
            default:
                console.log("Strange...")
        }
    }

    //submit form
    const onSubmit = (e) => {
        e.preventDefault();

        if(userInfo.firstName === "" || userInfo.lastName === "" || userInfo.street === "" || userInfo.city === ""){
            alert("Fill all data")
        }
        else{ //add new user and clear the state
            addNewUser(userInfo);
            setUserInfo({firstName: "", lastName: "", street: "", city: ""})
        }
    }

    return <div className="form-container">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
            <span className="form-span span-s">
                <label htmlFor="firstName">Firstname</label>
                <input type="text" id="firstName" placeholder="Firstname" value = {userInfo.firstName} onChange={(e) => onChange(e)}/>
            </span>
            <span className="form-span span-s">
                <label htmlFor="lastName">Lastname</label>
                <input type="text" id="lastName" placeholder="Lastname" value = {userInfo.lastName} onChange={(e) => onChange(e)}/>
            </span>
            <span className="form-span span-l">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" placeholder="Street" value = {userInfo.street} onChange={(e) => onChange(e)}/>
            </span>
            <span  className="form-span span-l">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="City" value = {userInfo.city} onChange={(e) => onChange(e)}/>
            </span>
            <span className="form-span span-s">
                <button className="btn">Insert</button>
            </span>
        </form>
    </div>
}


export default UserForm;