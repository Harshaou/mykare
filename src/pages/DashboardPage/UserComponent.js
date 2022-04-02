import { MdWavingHand } from "react-icons/md";

const UserComponent = ({ state }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h1 className=" text-6xl capitalize">welcome {state.name}</h1>
      <MdWavingHand size={50} />
    </div>
  );
};

export default UserComponent;
