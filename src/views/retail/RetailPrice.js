import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@material-ui/core";

const TabFont = { fontSize: 10, fontWeight: 600 };
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RetailPrice() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="pt-5">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{fontSize: 10, fontWeight: 600, paddingX: 1}} label="Mongo" {...a11yProps(0)} />
            <Tab sx={TabFont} label="Papaya" {...a11yProps(1)} />
            <Tab sx={TabFont} label="Banan" {...a11yProps(2)} />
            <Tab sx={TabFont} label="Watermelon" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Card>
            <h4 className="text-primary p-3">Predections</h4>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <h4 className="text-success p-3">Predections</h4>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <h4 className="text-danger p-3">Predections</h4>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card>
            <h4 className="text-info p-3">Predections</h4>
          </Card>
        </TabPanel>
      </Box>
    </Box>
  );
}
