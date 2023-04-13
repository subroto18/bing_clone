import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ScienceIcon from "@mui/icons-material/Science";
import SettingsIcon from "@mui/icons-material/Settings";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hamburger.module.css";
const label = { inputProps: { "aria-label": "Switch demo" } };
export default function MenuSettings() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className="menuText">
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="menuText">
              <MenuItem>
                <ListItemText>
                  Language
                  <br />
                  English
                </ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemText>
                  Country/Region
                  <br />
                  India
                </ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemText>Location</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemText>Voice Search</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemText>More</ListItemText>
              </MenuItem>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <MenuItem className="menuItem">
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText className="menuText">SafeSearch</ListItemText>
          <Typography variant="body2" color="text.secondary">
            Moderate
          </Typography>
        </MenuItem>

      
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>
              <ListItemIcon>
                <ScienceIcon fontSize="small" />
              </ListItemIcon>
              Labs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <MenuItem style={{ whiteSpace: "normal" }}>
                <Box>
                     <Box component="h6" className="meneText">
                        Chat response on result page
                      </Box>
                  
                  <Box component="p" className="meneText">
                    Choose how often do you want to see chat responses on the
                    search result page.
                  </Box>

                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="auto"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="auto"
                        control={<Radio />}
                        label="Auto (Default)"
                      />
                      <FormControlLabel
                        value="off"
                        control={<Radio />}
                        label="Off"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </MenuItem>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <MenuItem>
          <ListItemIcon>
            <AccessTimeFilledIcon />
          </ListItemIcon>
          <ListItemText className="menuText">Search history</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText  className="menuText">My Bing</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <PrivacyTipIcon />
          </ListItemIcon>
          <ListItemText  className="menuText">Privacy</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText>Feedback</ListItemText>
        </MenuItem>

        <Accordion
          disableGutters
          elevation={0}
          className="accordion"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography  className="menuText">
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              Customize your homepage
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <MenuItem>
                <ListItemText>Show Menu Bar</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  <Switch {...label} />
                </Typography>
              </MenuItem>

              <MenuItem>
                <ListItemText>Show News and Interest</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  <Switch {...label} />
                </Typography>
              </MenuItem>

              <MenuItem>
                <ListItemText>Show homepage image</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  <Switch {...label} />
                </Typography>
              </MenuItem>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Divider />
        <Box className={styles.siteLinks}>
          <Link to="/" className={styles.link}>Privacy and Cookie</Link> <span className={styles.dot}></span>
          <Link to="/" className={styles.link}>Legal</Link> <span className={styles.dot}></span>
          <Link to="/" className={styles.link}>Advertise</Link> <span className={styles.dot}></span>
          <Link to="/" className={styles.link}>About our ads</Link> <span className={styles.dot}></span>
          <Link to="/" className={styles.link}>Help</Link>
          
          <Box className={styles.copyright} component="p">&#169; 2023 Microsoft</Box>

        </Box>

      
      </MenuList>
    </Paper>
  );
}
