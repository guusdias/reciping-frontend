import PropTypes from 'prop-types';

const UserProfile = ({ toggle }) => {
  return (
    <div className={`flex gap-5 items-center 
    ${toggle ? "bg-none transition-all duration-300 delay-200" : "bg-white rounded-xl p-2"}`}>
      
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img src="https://github.com/lucaswillians.png" 
        alt="pic-profile"
        className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="text-xl">Lucas Willian</h3>
        <span className="text-[0.75rem] opacity-60">luquinhas@gmail.com</span>
      </div>
    
    </div> 
  );
};

UserProfile.propTypes = {
  toggle: PropTypes.bool.isRequired, // Validando que toggle é um booleano e é obrigatório
};

export default UserProfile;
