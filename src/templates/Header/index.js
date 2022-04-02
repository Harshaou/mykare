import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 px-6 bg-gray-300">
      <nav className="flex justify-between items-center p-0 sm:px-8 md:px-16 py-4 ">
        <Link className="" to="/">
          <div className="flex cursor-pointer items-center">
            <span className="tracking-wider font-semibold">Mykare</span>
          </div>
        </Link>

        <div className=" flex items-center gap-5 pl-4 ">
          <div className="hidden md:block">
            <Button
              className="!flex !items-center !gap-1"
              onClick={handleLogout}
            >
              <AiOutlineLogout />
              <span>Logout</span>
            </Button>
          </div>
          <div className="md:hidden">
            <Button onClick={handleLogout}>
              <AiOutlineLogout />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
