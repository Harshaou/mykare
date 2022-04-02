import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import { Template } from "../../templates";

const Resgister = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const authenticate = users.some(
      (item) =>
        item.username.toLowerCase() === data.username.toLowerCase() &&
        item.password === data.password
    );
    if (authenticate) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ auth: true, username: data.username })
      );
      navigate("/");
    } else {
      showMessage("username or password is incorrect");
    }
  };

  const showMessage = (msg) => {
    message.error(msg);
  };

  return (
    <Template>
      <div className="w-full h-screen mx-auto">
        <div className="flex h-full flex-col items-center justify-center py-12">
          <div className="bg-white -mt-10 rounded-lg w-11/12 sm:w-7/12 md:w-6/12 lg:w-4/12 p-10 pt-6">
            <div className="md:px-4">
              <div className="flex gap-3 items-center justify-center mb-5">
                <h2 className="mb-0 md:text-3xl ">Login</h2>
              </div>
              <Form className="" name="validate_other" onFinish={onSubmit}>
                <Form.Item
                  className="!m-0 !mb-3"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="username" className="ant-custom-input" />
                </Form.Item>

                <Form.Item
                  className="!m-0 !mb-4"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="ant-custom-input"
                  />
                </Form.Item>
                <Form.Item className="flex w-full  ">
                  <Button className="w-full" type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
                <div className="w-full px-3 pt-2">
                  <div className="flex justify-center">
                    <Link to="/signup">Get Started</Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Resgister;
