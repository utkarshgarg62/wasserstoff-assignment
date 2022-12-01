import React, {
    useEffect,
    useState
} from 'react'
import axios from 'axios';
// import url from "../config"
import cookie from "js-cookie"
let userName = cookie.get("userName")
console.log(userName + "-" + typeof userName)

const Topics = () => {

    // const userData = {
    //     _id: "63862cca6f6649bcd330cdec",
    //     userName: "utkarsh123",
    //     topics: [
    //         {
    //             title: "Title",
    //             details: "djhuhceie cieceh8eicmij vcmi 8ecneneijc8eejneuvhuhsnuhunccsvivrnvrjvnu  hurunru urvrur ur ",
    //             _id: "6386325909d7666606413b93"
    //         },
    //         {
    //             title: "Title2",
    //             details: "details",
    //             _id: "6386327709d7666606413b9b"
    //         }
    //     ]
    // }
    // console.log(userData.topics)
    const [userData, setUserData] = useState("");

    useEffect(() => {
        if (!userData) {
            axios.get(`http://localhost:5000/getTopics`)
                .then((response) => {
                    // console.log(response.data);
                    setUserData(response);
                });
        }
    });
    console.log(userData)

    return (
        <div>
            {userData.topics.map((tp) => <div>
                <h4>{tp.title}</h4>
                <p>{tp.details}</p>
            </div>)}
            <h2>{userData._id}</h2>
            <h3>{userData.userName}</h3>
        </div>
    )
}

export default Topics