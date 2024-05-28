import { Link } from "react-router-dom";
import './NavItems.css';


type NavItemsProps = {
    path: string;
    name: string;
};

const NavItems: React.FC<NavItemsProps> = ({ path, name }) => {

    return (
        <li className="nav-items">
            <Link to={path}>{name}</Link>
        </li>
    )
}

export default NavItems;