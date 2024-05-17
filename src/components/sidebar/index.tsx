import "./style.css";
import { Menu } from "evergreen-ui";

function Sidebar() {
  return (
    <div className="sidebar">
      <Menu>
        <Menu.Item>
          {/* <Link to="" ></Link> */}
          Inventario
        </Menu.Item>
        <Menu.Item>Tecnicos</Menu.Item>
        <Menu.Item>Personal</Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
