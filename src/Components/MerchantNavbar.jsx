import { Link } from "react-router-dom"
import "../Styles/MerchantNavbar.css"
const MerchantNavbar = () => {
    return (

        <div>
            <div className="merchantNavbar">
                <div className="logo">
                    <h1>ShopIt</h1>
                </div>
                <div className="options">
                    <Link to="/merchantlogin">Log In</Link>
                    <Link to="/merchantsignup">Sign Up</Link>
                    <Link to="/merchantupdate">update</Link>
                    <Link to="/">Logout</Link>
                </div>
            </div>
        </div>
    )
}
export default MerchantNavbar

