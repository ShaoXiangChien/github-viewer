import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function RepoView() {
  const { userName, repoName } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sCount, setSCount] = useState(0);
  const [url, setURL] = useState("");

  useEffect(
    () =>
      _axios(`https://api.github.com/repos/${userName}/${repoName}`)
        .then((value) => {
          setName(value.data.full_name);
          setDescription(value.data.description);
          setSCount(value.data.stargazers_count);
          setURL(value.data.html_url);
        })
        .catch(console.log),
    []
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: 20 }}>
              <a
                href={url}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </Typography>
            <Typography
              variant="body"
              component="p"
              style={{ marginBottom: 10 }}
            >
              {!description ? "No description" : description}
              <br /> <br />
              Stargazers Count: {sCount}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default RepoView;
