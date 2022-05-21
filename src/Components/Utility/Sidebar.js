import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Button, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";

function Sidebar(props) {
  const { archives, description, social, title } = props;
  const [icon, setIcon] = React.useState("edit");

  // generate a random avatar for the user profile image by a random api

  // React.useEffect = () => {
  //   const randomAvatar = async () => {
  //     const random = Math.floor(Math.random() * 100);
  //     const response =
  //       await `https://randomuser.me/api/portraits/thumb/men/${random}.jpg`;
  //     return response.data.download_url;
  //   };
  // };

  return (
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        flex: 0.2,
      }}
    >
      <Paper elevation={0}>
        <LocationOnOutlinedIcon style={{ height: "2.5em", color: "black" }} />
        <TextField
          onFocus={() => {
            setIcon("close");
          }}
          onBlur={() => {
            setIcon("edit");
          }}
          id="standard-basic"
          label="Enter Your Location"
          variant="standard"
        />
        {icon === "close" ? (
          <CloseIcon style={{ height: "2.5em", color: "black" }} />
        ) : (
          <EditIcon style={{ height: "2.5em", color: "black" }} />
        )}
      </Paper>
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
        <InfoOutlinedIcon
          sx={{ fontSize: 15 }}
          style={{ marginLeft: "0.5rem" }}
        />
        <Typography
          style={{
            fontSize: "0.7rem",
            color: "grey",
            marginLeft: "0.2rem",
          }}
        >
          Your location will help us serve better and extend a personalised
          experience.
        </Typography>
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <ThumbUpTwoToneIcon
          fontSize="small"
          style={{ marginRight: ".8rem", marginTop: "1rem" }}
        />
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          RECOMMENDED GROUPS
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {archives.map((archive) => (
          <div
            style={{
              display: "flex",
              marginTop: ".5rem",
              alignItems: "center",
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography
              style={{ marginLeft: "1rem" }}
              display="block"
              variant="body1"
              href={archive.url}
              key={archive.title}
            >
              {archive.title}
            </Typography>
            <Button
              variant="outlined"
              style={{
                marginLeft: "auto",
                color: "black",
                borderRadius: "20px",
                backgroundColor: "#edeef0",
                textTransform: "unset",
                height: "1rem",
                width: "1rem",
              }}
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
