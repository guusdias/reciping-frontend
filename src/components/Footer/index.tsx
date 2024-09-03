const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 py-4 px-8 text-white">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold">Reciping</span>
        <p className="text-sm">© 2024 Todos os direitos reservados.</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          className="text-white hover:text-gray-300 text-sm flex items-center"
        >
          <i className="fab fa-facebook-f mr-2"></i> Facebook
        </a>
        <a
          href="https://twitter.com"
          className="text-white hover:text-gray-300 text-sm flex items-center"
        >
          <i className="fab fa-twitter mr-2"></i> Twitter
        </a>
        <a
          href="https://instagram.com"
          className="text-white hover:text-gray-300 text-sm flex items-center"
        >
          <i className="fab fa-instagram mr-2"></i> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
