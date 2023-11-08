import "./header.css";
import menuButton from "../images/icons/menu_button.svg";
const Header = () => {
  return (
    <div className="Header-wrap d-flex flex-row">
      <div className="p-2">
        <img src={menuButton} alt="" />
      </div>
    </div>
  );
};

export default Header;
