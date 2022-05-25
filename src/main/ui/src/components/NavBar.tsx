
import { useContext } from 'react';
import pic from '../logo/logo.png';
import AppContext from './User';


interface Props{
    view: string;
}

const NavBar = (props: Props) =>{

// Constants
const application = useContext(AppContext);

return(
<>
    <nav className="navbar navbar-light bg-light">
        <h2 className="text-center">{application.title}</h2>
        <h3 className="text-center">{props.view}</h3>
        <a className="navbar-brand" href="https://www.manyroads.dev/">
        <img src={pic} width="100" height="35" alt="" />
        </a>
    </nav>
    <br />
</>
)
}
export default NavBar;