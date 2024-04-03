import { ReactElement } from "react";
import MUImodal from "@mui/material/Modal";
import { Box } from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
};

export const Modal = ({ isOpen, onClose, children }: Props) => (
  <MUImodal
    open={isOpen}
    onClose={onClose}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: "550px",
        minHeight: "400px",
        background: "#0f1924",
        borderRadius: "10px",
        padding: "25px",
        border: "2px solid #1f262e",
        color: "#fff",
        cursor: "default",
      }}
    >
      {children}
    </Box>
  </MUImodal>
);
