import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        mb: 3,
        height: "27rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url("${post.image}")`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.43)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
          left: "4rem",
          bottom: 0,
        }}
      >
        <Typography
          style={{ fontWeight: "700", fontSize: "2.2rem" }}
          component="h1"
          color="inherit"
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography color="inherit" paragraph style={{ fontWeight: "100" }}>
          {post.description}
        </Typography>
        <Link variant="subtitle1" href="#">
          {post.linkText}
        </Link>
      </Box>
    </Paper>
  );
}

export default MainFeaturedPost;
