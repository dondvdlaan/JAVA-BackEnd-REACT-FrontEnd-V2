import {useMariaDBApi, mariaDBApi } from "../shared/MariaDBApi";
import { LoadingSpinner } from "./shared/LoadingSpinner";

interface Props {
  ID: string | undefined;
}

const ProductDetails = (props: Props) => {

// Constants
const product = useMariaDBApi('get',`detail/${props.ID}`);  //Now calling MariaDBApi

console.log('products: ', product);

// Wait till products are there
if (!product) {
  return <LoadingSpinner />;
}


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

export default ProductDetails;