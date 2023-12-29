import { useState } from "react"
import "../Styles/MerchantLogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const MerchantLogin=()=>{

    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let navigate=useNavigate()

    let checkEmail=(e)=>{
            e.preventDefault()
        axios.post(`http://localhost:8080/merchants/by-email?email=${email}&password=${password}`)
        .then((res)=>{
            console.log(res);
            alert("login successfull")
            navigate("/merchanthomepage")
            localStorage.setItem("currentMerchant",JSON.stringify(res.data.data))
        })
        .catch((err)=>{
            console.log(err);
            alert("invalid email or password")
        })
    }

    return(
        <div className="merchantlogin">
            <form onSubmit={checkEmail} action="">
                <label htmlFor="">
                    Email :
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter the usrName" required />
                </label>
                <br />
                <label htmlFor="">
                    Password :
                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter the password" required />
                </label>
                <br />
                <button>Login</button>
            </form>
            
        </div>
    )
}
export default MerchantLogin