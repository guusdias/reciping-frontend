import PropTypes from "prop-types";
import { datas } from "../../utils/Data";
import { Link } from "react-router-dom";

const SidebarData = ({ toggle }) => {
  return (
    <div className="">
      {datas.map((data, index) => {
        // Adicione um segundo parâmetro 'index' ao map
        return (
          <div
            key={index}
            className={`${toggle ? "last:w-[3.6rem]" : "last:w-[15rem]"}
           sidebar last:absolute`}
          >
            <Link key={data.id} to={data.path}>
              <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
              <div
                className={`${toggle ? "opacity-0 delay-200" : ""}
                text-[1rem] text-brown whitespace-pre`}
              >
                {data.text}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

SidebarData.propTypes = {
  toggle: PropTypes.bool.isRequired, // Validando que toggle é um booleano e é obrigatório
};

export default SidebarData;
