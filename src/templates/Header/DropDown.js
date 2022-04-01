import { Menu, Dropdown, Space } from "antd";
import { UserOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const DropDown = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;

  const onLogOut = (event) => {
    // dispatch(logOutUser(navigate));
  };

  const authMenu = (
    <Menu className="">
      <Menu.Item key="1" icon={<LogoutOutlined />}>
        <Link to="/">Settings</Link>
      </Menu.Item>
      <Menu.Item onClick={(e) => onLogOut(e)} key="2" icon={<LogoutOutlined />}>
        <Link to="jj">Logout</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        <Link to="/">Help</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={isAuthenticated && authMenu}>
      <div
        style={{ width: 46, borderRadius: "50%" }}
        onClick={(e) => e.preventDefault()}
        className="flex justify-center items-center shadow hover:shadow-xl cursor-pointer bg-black overflow-hidden relative "
      >
        <img
          src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
          style={{ height: 36, width: 36, borderRadius: 18, padding: 1 }}
          alt=""
        />
      </div>
    </Dropdown>
  );
};

export default DropDown;
