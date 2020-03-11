import React from "react";
import Layout from "../core files/Layout";
import { API } from "../config";

const Signup = () => {

    const signUpForm = () => {
        <from>
            <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
            <label className="text-muted">Email_ID</label>
            <input type="email" className="form-control"/>
            </div>

            <div className="form-group">
            <label className="text-muted">Password</label>
            <input type="password" className="form-control"/>
            </div>

            <button type="button" class="btn btn-primary">SUBMIT</button>

        </from>
    }


    return (
        <Layout title="Home page" description="signup to React-Node E-commerce APp">
        {signUpForm()}
         </Layout>
    )
}



export default Signup;