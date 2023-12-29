import { Route, Routes } from "react-router-dom"
import ProductNavbar from "./ProductNavbar"
import ProductDashboard from "./ProductDashboard"

const MerchantHomePage=()=>{
    return(
        <div className="merchanthomepage">
            <ProductNavbar/>
            <Routes>
                <Route path="/" element={<ProductDashboard/>}></Route>
            </Routes>
        </div>
    )
}
export default MerchantHomePage