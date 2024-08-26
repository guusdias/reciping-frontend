import PropTypes from "prop-types";
import { datas } from "../../utils/Data";
import { Link } from "react-router-dom";

const SidebarData = ({ toggle }) => {
  return (
    <div className="">
      {datas.map((data) => (
        <div
          key={data.id}
          className={`${
            toggle ? "last:w-[3.6rem]" : "last:w-[15rem]"
          } sidebar last:absolute hover:from-yellow-300`}
        >
          {data.onClick ? (
            <button onClick={data.onClick} className="flex items-center">
              <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
              <div
                className={`${
                  toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre`}
              >
                {data.text}
              </div>
            </button>
          ) : (
            <Link to={data.path} className="flex items-center">
              <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
              <div
                className={`${
                  toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre`}
              >
                {data.text}
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

SidebarData.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default SidebarData;
