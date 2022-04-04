import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import _axios from "axios";
import Box from "@material-ui/core/Box";

function RepoList() {
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState([]);
  const [noData, setNoData] = useState(false);
  const { userName } = useParams();

  useEffect(() => {
    _axios(
      `https://api.github.com/users/${userName}/repos?per_page=10&page=${page}`
    )
      .then((value) => {
        const new_data = value.data.map((item) => {
          return { name: item.name, s_count: item.stargazers_count };
        });
        if (new_data.length === 0) setNoData(true);
        setRepos(repos.concat(new_data));
      })
      .catch(console.log);
  }, [page]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!noData) setPage(page + 1);
    }
  };

  return (
    <>
      <h1>{userName}</h1>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {repos.map((row) => {
          return (
            <Box
              key={row.id}
              sx={{
                flexDirection: "column",
                boxShadow: "5px 5px 3px #888888",
                borderRadius: "10px",
                width: "300px",
                justifyContent: "flex-start",
              }}
              m={1}
              p={1}
            >
              <Box p={1}>
                <Link
                  to={`/users/${userName}/repos/${row.name}`}
                  style={{ textDecoration: "none" }}
                >
                  {row.name}
                </Link>
              </Box>
              <Box p={1}>Stargazers Count: {row.s_count}</Box>
            </Box>
          );
        })}
      </Box>
      <br />
      <br />
    </>
  );
}

export default RepoList;
