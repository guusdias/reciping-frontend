import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteContext } from "../../contexts/Favorite";
import api from "../../api/User/index";

interface AlertDialogProps {
  id: string;
  handleClose: () => void;
  open: boolean;
}

const AlertDialog = ({ id, handleClose, open }: AlertDialogProps) => {
  const navigate = useNavigate();
  const { removeFavorite } = useFavoriteContext();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.deleteRecipeById(id);
      removeFavorite(id);
      setLoading(false);
      handleClose();
      navigate("/feed");
    } catch (error) {
      console.error("Erro em deletar a receita:", error);
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Você realmente quer excluir essa receita?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Tem certeza que deseja excluir? Ao clicar em confirmar, você deletará
          a receita e suas informações permanentemente.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Excluindo..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
