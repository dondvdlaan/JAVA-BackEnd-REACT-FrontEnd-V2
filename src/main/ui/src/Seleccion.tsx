import { createContext, Dispatch, ReactElement, useReducer } from "react";
import { Product } from "./types/Product";


//-------------------Declare Interfaces and Types-------------------
export interface Store {
    selection: Product[];
  }
  
export const initialStore: Store = { selection: [] };
  
interface AddToSelection {
    type: "addToSelection";
    product: Product;
  }
  
interface RemoveFromSelection {
    type: "removeFromSelection";
    product: Product;
}
  
export type Action = AddToSelection | RemoveFromSelection;

interface StoreContext {
    store: Store;
    dispatch: Dispatch<Action>;
  }
  
//-------------------Declare Context-------------------
export const StoreContext = createContext({} as StoreContext);

//-------------------Declare Reducer-------------------
 export const selectionReducer = (store: Store, action: Action): Store => {
    switch (action.type) {
      case 'addToSelection': {
        return {
            ...store,
            selection: [...store.selection, action.product]   
        };
      }
      case 'removeFromSelection': {
        return {...store, selection: store.selection.filter(p => p.id !== action.product.id)
        }
      }
    }
  }

//-------------------Declare useReducer-------------------
export default function StoreProvider(props: {
    children: ReactElement;
    store?: Store;
  }): ReactElement {
    const [store, dispatch] = useReducer(selectionReducer, props.store || initialStore);
  
    return (
      <StoreContext.Provider value={{ store, dispatch }}>
        {props.children}
      </StoreContext.Provider>
    );
  }
