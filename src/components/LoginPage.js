import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css"
import url from "../config"
// import cookie from "js-cookie"

const api = `${url.BaseUrl}/userLogin`;
console.log(api)

const LoginPage = () => {
    let navigate = useNavigate();

    const [userName, setUserName] = useState("")
    const [result, setResult] = useState("")
    const [isError, setIsError] = useState("")

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(api, {
                userName: userName,
            })
            setTimeout(function () {
                navigate("/topics", { replace: true });
            }, 3000);
            setResult("Success")
            // let studentId = response.data.data.studentId
            // cookie.set("id", studentId)
            console.log("Sucess")
            console.log(response)
        }
        catch (err) {
            console.log("Unsucess")
            console.log(err.response.data)
            setIsError(err.response.data)
        }
    }


    return <div>

        <div className="login-page">
            <div className="form">
                <h2>Login Page</h2>
                {result !== "" && <div className="alert alert-success" role="alert">{result}</div>}
                {isError !== "" && <div className="alert alert-danger" role="alert">{isError}</div>}
                <form className="login-form" onSubmit={handle} method="POST">
                    <input type="text" placeholder="Enter userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <button>login</button>
                    <p className="message">Not registered? <NavLink to="/register">Create an account</NavLink></p>
                </form>
            </div>
        </div>
    </div>
}
export default LoginPage;