import { useState } from "react";

export enum TabValue {
  SIGN_IN = "Sign in",
  SIGN_UP = "Sign up",
}

export const useModal = (defaultTab = TabValue.SIGN_IN) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState<TabValue>(defaultTab);

  const handleClose = () => setModalOpen(false);
  const handleOpen = (tab: TabValue) => {
    setModalOpen(true);
    setTab(tab);
  };
  const handleSetTab = (newTab: TabValue) => setTab(newTab);

  return {
    currentTab: tab,
    isModalOpen,
    handleClose,
    handleOpen,
    handleSetTab,
  };
};
