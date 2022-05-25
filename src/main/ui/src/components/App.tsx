import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './Routing';
import AppContext from './User';

function App() {

  const application = {title: "CRUD PRODUCTS JAVA AND REACT"};
  
  return (
    <BrowserRouter >
      <AppContext.Provider value={application}>
        <Routing />
      </AppContext.Provider>
    </BrowserRouter >
  );  // END Return
}

export default App;
