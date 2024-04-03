import { Box } from "@mui/material";
import { TabValue } from "../Modal/useModal";
import { Tabs } from "../Tabs";
import { ConnectBtn } from "../ConnectBtn";

type Props = {
  currentTab: TabValue;
  setTab: (tab: TabValue) => void;
  closeModal: () => void;
};

export const LoginModal = ({ currentTab, setTab, closeModal }: Props) => (
  <Box sx={{ width: "100%" }}>
    <Tabs
      defaultTab={currentTab}
      tabs={[TabValue.SIGN_IN, TabValue.SIGN_UP]}
      components={[
        <ConnectBtn handleConnected={closeModal} key="0" />,
        <ConnectBtn isRegisterBtn handleConnected={closeModal} key="1" />,
      ]}
      onTabChange={setTab}
    />
  </Box>
);
