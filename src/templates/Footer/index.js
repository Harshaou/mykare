/* eslint-disable*/
/* This example requires Tailwind CSS v2.0+ */

// import Cta from '../../Components/Common/cta';
// import Cta from '../../Components/Common/GetStarted';

const Footer = () => (
  <footer className="bg-white w-full p-8">
    <div className="max-w-screen-xl mx-auto bg-white rounded-md round-md p-2">
      <ul className="flex justify-center gap-8 mx-auto text-lg  items-center flex-wrap">
        <li className="">
          <a className=" text-black font-semibold transition-colors duration-200" href="#">
            Help
          </a>
        </li>
        <li className="">
          <a className=" text-black font-semibold transition-colors duration-200" href="#">
            Privacy
          </a>
        </li>
        <li className="">
          <a className=" text-black font-semibold transition-colors duration-200" href="#">
            Terms and conditions
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
