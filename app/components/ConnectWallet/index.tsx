import { useSDK } from "@metamask/sdk-react";
import { Box } from "@mui/material";
import { TabValue, useModal } from "../Modal/useModal";
import { Modal } from "../Modal";
import { LoginModal } from "../LoginModal";
import { Button } from "../Button";

export const ConnectWallet = () => {
  const { sdk, connected } = useSDK();
  const { currentTab, isModalOpen, handleClose, handleOpen, handleSetTab } =
    useModal();

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };
  const openModal = (tab: TabValue) => () => handleOpen(tab);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          padding: "30px",
          justifyContent: "flex-end",
        }}
      >
        {connected ? (
          <Button variant="contained" onClick={disconnect}>
            Disconnect
          </Button>
        ) : (
          <>
            <Button variant="contained" onClick={openModal(TabValue.SIGN_IN)}>
              Login
            </Button>
            <Button variant="outlined" onClick={openModal(TabValue.SIGN_UP)}>
              Register
            </Button>
          </>
        )}
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <LoginModal
          closeModal={handleClose}
          currentTab={currentTab}
          setTab={handleSetTab}
        />
      </Modal>
    </>
  );
};
