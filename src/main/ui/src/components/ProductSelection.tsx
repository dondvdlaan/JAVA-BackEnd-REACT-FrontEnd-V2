import {useMariaDBApi, mariaDBApi } from "../shared/MariaDBApi";
import { LoadingSpinner } from "./shared/LoadingSpinner";

interface Props {
  ID: string | undefined;
}

const ProductSelection = (props: Props) => {

// Constants


return (
<div className="container text-dark">
  <h2 >Product: {product.productItem} </h2>
  <div className="row">
    <div className="col-sm-5" >
      Detailed Description:
    </div>
    <div  className="col-sm-6" >
      {product.productDetails}
    </div>
    
  </div>
</div>
);
}

export default ProductSelection;