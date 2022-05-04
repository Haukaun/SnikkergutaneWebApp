import React, {useState} from 'react';
import axios from "axios";
import {Button, PasswordInput, TextInput} from "@mantine/core";
import "./signinform.css"
import { At } from 'tabler-icons-react';


function SignInForm() {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function sendLoginRequest() {
        let loginInfo = {
            "userName": username,
            "password": password
        }

        axios({
            method: "post",
            url: "http://localhost:8080",
            headers: {
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true,
                "Access-Control-Allow-headers": "*",
                "Content-Type": "application/json"
            },
            data: loginInfo
        });
    };

    return (
        <section className={"form-section"}>
            <div className="fullscreen-form__background">

                <h1 className="header-forms-label">Login</h1>

                <div className="form-wrapper">
                    <div className="form-container">
                        <TextInput required label={"Email"} icon={<At size={14} />} placeholder={"Email or username."} value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
                        <PasswordInput required label={"Password"} placeholder={"Password"} value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
                        <Button className={"button-style"} size={"md"} variant="filled">Outlined</Button>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default SignInForm;
