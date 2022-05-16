import { useNavigate } from "react-router-dom";

type Props = {
  menuVisible: boolean;
  setMenuVisible: (value: boolean) => void;
};

const Menu = (props: Props) => {
  const navigate = useNavigate();

  const { menuVisible, setMenuVisible } = props;

  return (
    <div className="flex align-center">
      <button
        className="md:hidden absolute top-3 left-4 text-3xl"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <i className="text-center bx bx-menu"></i>
      </button>
      <div
        className={`absolute ${
          menuVisible ? "" : "hidden"
        } flex flex-col top-0 m-12 left-0 right-0 mx-auto border-b border-[#2b2b2b] bg-black w-full gap-4 p-2 px-8 transition-all z-50`}
      >
        <button
          className="md:hidden transition-all 0.3s hover:scale-105 lg:text-xl text- hover:text-white"
          onClick={() => {
            navigate("/all");
          }}
        >
          All movies
        </button>
        <button
          className="md:hidden transition-all 0.3s hover:scale-105 lg:text-xl hover:text-white"
          onClick={() => {
            navigate("/newest");
          }}
        >
          Newest movies
        </button>
        <button
          className="md:hidden transition-all 0.3s hover:scale-105 lg:text-xl hover:text-white"
          onClick={() => {
            navigate("/popular");
          }}
        >
          Most popular
        </button>
      </div>
    </div>
  );
};

export default Menu;
