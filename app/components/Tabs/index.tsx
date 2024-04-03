import { Box, Tab, Tabs as MUItabs, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { TabValue } from "../Modal/useModal";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const CustomTabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

type Props = {
  tabs: Array<string>;
  components: Array<ReactNode>;
  onTabChange: (tab: TabValue) => void;
  defaultTab: TabValue;
};

export const Tabs = ({ tabs, components, onTabChange, defaultTab }: Props) => {
  const [value, setValue] = useState(tabs.indexOf(defaultTab));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange(tabs[newValue] as TabValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MUItabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab: string, index: number) => (
            <Tab
              key={tab}
              sx={{ width: `${100 / tabs.length}%`, color: "#B9B9B9" }}
              label={tab}
              {...a11yProps(index)}
            />
          ))}
        </MUItabs>
      </Box>
      {components.map((component, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {component}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
