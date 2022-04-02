import { MdWavingHand } from "react-icons/md";

const UserComponent = ({ state }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h1 className="text-2xl md:text-6xl text-center capitalize">
        welcome {state.name}
      </h1>
      <MdWavingHand className="text-3xl md:text-6xl" />
    </div>
  );
};

export default UserComponent;
