import MicNoneIcon from "@mui/icons-material/MicNone";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import styles from "../styles/searchBar.module.css";

export default function SearchBar() {
  return (
    <React.Fragment>
      <Box
        className={styles.searchArea}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          className={styles.searchBox}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search the web"
            inputProps={{ "aria-label": "Search the we" }}
          />
          <Box className={styles.searchIconBtnBox}>
          <IconButton className={styles.searchIconBtn} type="button" sx={{ py: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton className={styles.searchIconBtn} type="button" sx={{ py: "10px" }} aria-label="search">
            <MicNoneIcon />
          </IconButton>

          <IconButton className={styles.searchIconBtn} type="button" sx={{ py: "10px" }} aria-label="search">
            <QrCodeScannerIcon />
          </IconButton>

          </Box>
         
        </Paper>
      </Box>
    </React.Fragment>
  );
}
