import { ChatIcons } from "../../assets/Icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-user-name">👋 Rajesh</h1>

      <span className="chat-icon">
        <ChatIcons 
          fill="white"
        />
      </span>
    </div>
  );
};

export default Navbar;
