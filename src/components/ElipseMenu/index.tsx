import { useState } from "react";
import AlertDialog from "../AlertDialog";

interface ElipseMenuProps {
  id: string;
  onEdit: () => void;
}

const ElipseMenu = ({ id, onEdit }: ElipseMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleEditClick = () => {
    setMenuOpen(false);
    onEdit();
  };

  const handleDeleteClick = () => {
    setMenuOpen(false);
    setOpenAlertDialog(true);
  };

  const handleAlertClose = () => {
    setOpenAlertDialog(false);
  };

  return (
    <div className="mr-3 mt-3 relative">
      <button
        onClick={handleMenuToggle}
        className="focus:outline-none text-gray-500 hover:text-gray-700"
      >
        &#x22EE;
      </button>

      {menuOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
          <li>
            <button
              onClick={handleEditClick}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              Editar
            </button>
          </li>
          <li>
            <button
              onClick={handleDeleteClick}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
            >
              Excluir
            </button>
          </li>
        </ul>
      )}

      {openAlertDialog && (
        <AlertDialog
          id={id}
          open={openAlertDialog}
          handleClose={handleAlertClose}
        />
      )}
    </div>
  );
};

export default ElipseMenu;
