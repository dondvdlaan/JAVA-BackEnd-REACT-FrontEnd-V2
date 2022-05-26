import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './Routing';
import AppContext from './User';
import StoreProvider from '../Store';

function App() {

  const application = {title: "JAVA AND REACT"};
  
  return (
    <BrowserRouter >
      <StoreProvider >
        <AppContext.Provider value={application}>
          <Routing />
        </AppContext.Provider>
      </StoreProvider>
    </BrowserRouter >
      
  );  // END Return
}

export default App;
