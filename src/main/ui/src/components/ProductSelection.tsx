import { useContext } from "react";
import { StoreContext } from "../Store";
import { Product } from "../types/Product";


const ProductSelection = () => {

// Constants
const {store, dispatch} = useContext(StoreContext);

//****************** Event handlers ******************
const onDeselect = (e: React.MouseEvent, row: Product) => {
  // avoid refreshing page
  e.preventDefault(); 
  dispatch({
    type: "removeFromSelection",
    product: row
  })

}

return (
  <div className="container text-dark">
    {store.selection.length !=0 ? store.selection.map(s =>
    <div className="row p-3 mb-2 bg-secondary text-white">
      <div className="col-sm">
        {s.productItem}
      </div>
      <div className="col-sm">
        {s.productDescription}
      </div>
      <div className="col-sm">
        <button onClick={(e) => onDeselect(e, s)} className="table-warning">Deselect </button>
      </div>
    </div>
    ) : <h4 className="text-center">No products selected.</h4>}
  </div>
   
) // END return

}
export default ProductSelection;