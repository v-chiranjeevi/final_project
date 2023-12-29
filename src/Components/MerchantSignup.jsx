import { useState } from "react"
import "../Styles/MerchantSignup.css"
import axios from "axios"

const MerchantSignup=()=>{
    let [name ,setname]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [gst ,setgst]=useState("")
    let [password,setpassword]=useState("")
    let data={name,phone,email,gst,password}
    let signUp =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/merchants`,data)
        .then((res)=>{
            console.log(res);
            alert("data added successfully")
        })
        .catch((err)=>{
            alert("404 error")
            console.log(err);
        })
    }
    return(
        <div className="merchantsignup">
           <form onSubmit={signUp} action="">
             <fieldset>
                <legend>Sign Up</legend>
                <label htmlFor="">
                    Name:<input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter your Name" type="text"/>
                </label>
                <br />
                <label htmlFor="">
                    Phone:<input value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter your Phone" type="text"/>
                </label>                
                <br />
                <label htmlFor="">
                    Email:<input value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter your Email" type="text"/>
                </label>               
                <br />
                 <label htmlFor="">
                    GST:<input value={gst} onChange={(e)=>{setgst(e.target.value)}} placeholder="Enter your Gst" type="text"/>
                </label>                
                <br />
                <label htmlFor="">
                    Password:<input value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter your Password" type="text"/>
                </label>
                <button>Submit</button>
             </fieldset>
           </form>
        </div>
    )
}
export default MerchantSignup