import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import url from "../config"
import "./style.css"

const api = `${url.BaseUrl}/createUser`;
console.log(api)

const RegisterPage = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [result, setResult] = useState("")
    const [isError, setIsError] = useState("")

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(api, {
                name: name,
                userName: userName,
            })
            setTimeout(function () {
                navigate("/", { replace: true });
            }, 3000);
            console.log(response)
            setResult("Success.. redirecting to login page")
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

        <div className="login-page">
            <div className="form">
                <h2>Register Page</h2>
                {result !== "" && <div className="alert alert-success" role="alert">{result}</div>}
                {isError !== "" && <div className="alert alert-danger" role="alert">{isError}</div>}
                <form className="login-form"
                    onSubmit={handle}
                    method="POST">
                    <input type="text" placeholder="Enter Name" name="name"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" placeholder="Enter userName" name="userName"
                        value={userName} onChange={(e) => setUserName(e.target.value)}
                    />
                    <button>Register</button>
                    <p className="message">Login ? <NavLink to="/">Click Here</NavLink></p>
                </form>
            </div>
        </div>
    </div >
}
export default RegisterPage;