import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Delete from "@mui/icons-material/Delete";
import api from "../../api/User/index";

export default function AlertDialog({ id }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await api.deleteRecipeById(id);
      handleClose();
      navigate("/feed");
    } catch (error) {
      console.error("Erro em deletar a receita:", error);
    }
  };

  return (
    <Fragment>
      <Button
        sx={{
          color: "rgb(55, 65, 81)",
          textTransform: "none",
          padding: "0",
          justifyContent: "left",
          display: "flex",
          fontFamily: "Inter",
          width: "100%",
          fontSize: "15.5px",
          fontWeight: "none",
          "&:hover": { backgroundColor: "transparent" },
        }}
        variant="none"
        onClick={handleClickOpen}
      >
        <Delete /> Deletar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Você realmente quer excluir essa receita?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja excluir? Ao clicar em confirmar você deleterá
            a receita e suas informações permanentemente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
