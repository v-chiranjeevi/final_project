import { Link } from "react-router-dom"
const ProductNavbar =()=>{
return (
    <div className="pnavbar">
        <div className="logo" >
            <h1>Shop<span>It</span></h1>
        </div>
        <div className="options">
        <Link to="/addproduct">Add Product</Link>
        <Link to="/updateProduct">Update Product</Link>
        <Link to="/viewproduct">View Product</Link>
        <Link to="/">Logout</Link>
        </div>

    </div>
)
}
export default ProductNavbar