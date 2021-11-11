import logo from "../assets/logo.png";
import "../styles/Banner.css";

function Banner(){
    const title="La maison jungle";
    return (<div className="lmj-banner">
        <img src={logo} alt="La maisoni jungle" className="lmj-logo"/>
        <h1>{title}</h1>
    </div>);
}

export default Banner;