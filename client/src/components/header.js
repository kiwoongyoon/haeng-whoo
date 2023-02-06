import { Link } from "react-router-dom";
import './header.css'

const header=()=>{
    return(
        <header>    
            <Link className="logo_name" to="/">여행후기</Link>
            <div className="logo_menubox" >
                <Link to="/articles">
                    <img className="logo_menubox_item" src="img/board.png" alt="profile"/>
                </Link>
                <Link to="/login">
                    <img className="logo_menubox_item" src="img/login.png" alt="profile"/>
                </Link>
                <Link to="/signup">
                    <img className="logo_menubox_item" src="img/signup.png" alt="profile"/>
                </Link>
            </div>
        </header>
    )
}
export default header 