import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import ProductSelection from "./ProductSelection";

const ProductSelectionView = () =>{

  // Constants

const VIEW = "Product Selection";

    return (
        <section className='p-3'>
          <NavBar view={VIEW}/>
          <Link to={'/dash'} style={{ textDecoration: 'none' }}>
            <ProductSelection />
          </Link>
        </section>
            
          );  // END Return
}

export default ProductSelectionView;