import { Link } from "react-router-dom";
import { datas } from "../../utils/Data";

interface SidebarDataProps {
  toggle: boolean;
}

const SidebarData = ({ toggle }: SidebarDataProps) => {
  return (
    <div>
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
            <Link to={data.path as string} className="flex items-center">
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

export default SidebarData;
