import { Link } from "react-router-dom";
import logo from "../../../assets/img/desktop/logo.svg";

const Brand = () => {
    return (
        <Link to="/">
            <img src={logo} alt="gitjobs logo" width="80%"/>
        </Link>
    );
};

export default Brand;
