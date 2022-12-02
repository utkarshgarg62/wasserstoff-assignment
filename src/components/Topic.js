import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import "./style2.css"
import axios from "axios"
import url from "../config"
import cookie from "js-cookie"
let userNameC = cookie.get("userName")
const api = `${url.BaseUrl}/addTopic/${userNameC}`;
console.log(api)

const Topic = () => {
    const [userN] = useState(userNameC)
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [result, setResult] = useState("")
    const [isError, setIsError] = useState("")

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(api, {
                userName: userN,
                title: title,
                details: details,
            })
            console.log(response)
            setResult("Added Successfully")
            console.log("Sucess")
        }
        catch (err) {
            console.log("Unsucess")
            console.log(err.response.data)
            setIsError(err.response.data)
        }

    }
    console.log(result)

    return <div>

        <div className="login-page2">
            <div className="form2">
                <h2>Add Topic <NavLink to="/getTopics">Back</NavLink></h2>
                {result !== "" && <div className="alert alert-success" role="alert">{result}</div>}
                {isError !== "" && <div className="alert alert-danger" role="alert">{isError}</div>}
                <form className="login-form"
                    onSubmit={handle}
                    method="POST">
                    {/* <input type="text" placeholder="Enter userName" name="userName"
                        value={userNameC} onChange={(e) => setUserN(e.target.value)}
                    /> */}
                    <input type="text" placeholder="Enter title" name="title"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                    <input type="text" placeholder="Text Area" name="details"
                        value={details} onChange={(e) => setDetails(e.target.value)}
                    />
                    <button>Add</button>
                    <p>Note: Refresh your page before adding any Topic.</p>

                </form>
            </div>
        </div>
    </div>
}
export default Topic