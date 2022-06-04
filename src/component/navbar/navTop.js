import { Link } from "react-router-dom";

export default function NavTop(){
    return(
        <nav >
            <div className="navTop">
                <div className="logoMenu">
                    <div className="logo">
                        <a href="/"><img src="./logo512.png" /></a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to ="#1">abc1</Link></li>
                            <li><Link to ="#2">abc2</Link></li>
                            <li><Link to ="#3">abc3</Link></li>
                        </ul>
                        <div className="logout">
                            <Link to="#link">logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}