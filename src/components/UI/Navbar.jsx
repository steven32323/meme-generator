import "./Navbar.css";
import trollface from "../../assets/TrollFace.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={trollface} />
        <span>Meme Generator</span>
      </div>
      <span className="right">React Course - Project 3</span>
    </nav>
  );
};
export default Navbar;
