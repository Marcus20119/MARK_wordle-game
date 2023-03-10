import { useClickOutSide } from '~/hooks/useClickOutSide';
import SideBar from './Sidebar';

const ButtonMenu = () => {
  const { nodeRef, setShow, show } = useClickOutSide();
  return (
    <div ref={nodeRef} className="relative">
      <button
        className="text-white flex justify-center items-center"
        onClick={() => setShow(!show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <SideBar show={show} isMounted={!!nodeRef.current} setShow={setShow} />
    </div>
  );
};

export default ButtonMenu;
