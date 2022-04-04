import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function MainPage() {
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <Box
      sx={{ justifyContent: "center", alignItems: "center", marginTop: 200 }}
    >
      <h1>Github Viewer</h1>
      <Box flexDirection="row" alignItems="center">
        <TextField
          label="User Name"
          value={userName}
          onChange={handleChange}
          variant="filled"
        />
        <Link
          to={`/github-viewer/users/${userName}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" style={{ marginLeft: 20, marginTop: 8 }}>
            Go
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default MainPage;
