import { useEffect, useState } from "react"
import "../Styles/MerchantUpdate.css"
import axios from "axios"

const MerchantUpdate=()=>{
    let [name ,setname]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [gst ,setgst]=useState("")
    let [password,setpassword]=useState("")
    let [data,setdata]=useState([])
    let x =localStorage.getItem("currentMerchant")
    let admin= JSON.parse(x)
     let id=admin.id;
      console.log(admin);
    let adminData ={name,phone,email,gst,password,id}
    let updateAdmin =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8080/merchants`,adminData)
        .then((res)=>{
            console.log(res);
            alert("data updated successfully")
        })
        .catch((err)=>{
            console.log(err);
            console.log("invalid Error");
        })
    }
   useEffect(()=>{
    axios.get(`http://localhost:8080/merchants/${admin.id}`)
    .then((res)=>{
     console.log(res.data.data);
     setname(res.data.data.name)
     setemail(res.data.data.email)
     setphone(res.data.data.phone)
     setgst(res.data.data.gst)
     setpassword(res.data.data.password)
    })
    .catch((err)=>{
     console.log(err);
    })
   },[])
    return(
        <div className="merchantupdate">
           <form onSubmit={updateAdmin} action="">
             <fieldset>
                <legend>update</legend>
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
export default MerchantUpdate