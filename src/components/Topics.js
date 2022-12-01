import React, { useEffect, useState } from 'react'
import url from "../config"
import cookie from "js-cookie"
import { NavLink, useNavigate } from "react-router-dom";

const Topics = () => {
    let navigate = useNavigate();
    let userName = cookie.get("userName")
    const api = `${url.BaseUrl}/getTopics/${userName}`

    const [userData, setUserData] = useState("");

    const fetchApiData = async (URL) => {
        try {
            let res = await fetch(URL)
            let data = await res.json()
            setUserData(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const logout = () => {
        cookie.remove("userName")
        navigate(`/`, { replace: true });
    }
    useEffect(() => {
        fetchApiData(api)
    }, [api]);

    console.log(userData)


    return (
        <div>
            <p align="right">
                <input type="button" value="Logout" onClick={logout} />
            </p>
            <div className="login-page">
                <div className="form">
                    <h3>Welcome ! {userData.name} <NavLink to="/topic">Add Topic</NavLink></h3>
                    <form className="login-form">
                        <label>User_Name</label><input type="text" placeholder="Enter userName" name="userName" value={userData.userName} />
                        <label>User_id</label><input type="text" placeholder="Enter userName" name="userName" value={userData._id} />
                    </form>
                </div>
            </div>


            {/* <h1>Welcome {userData.name}</h1>
            <h2>User Name - {userData.userName}</h2>
            <h3>User_id -  {userData._id}</h3> */}
            {/* <h3>User_id -  {userData.topics[0]._id}</h3> */}

            {/* {userData.topics.map((x) =>
                <div key={x._id}>
                    <h3>{x.title}</h3>
                    <p>{x.details}</p>
                </div>
            )} */}

        </div>
    )
}

export default Topics