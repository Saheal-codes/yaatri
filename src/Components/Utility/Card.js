import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Postcard(props) {
  return (
    <Card
      sx={{
        maxWidth: 700,
        marginBottom: 2,
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 30%)",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={props.post.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom fontSize={20} component="h2" fontWeight={5}>
          <img
            src="images/handemoji.png"
            alt="emoji"
            style={{ height: "14px", width: "14px" }}
          />{" "}
          Article
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography
            fontStyle={"normal"}
            fontSize={23}
            fontWeight={20}
            color="black"
            style={{ margin: "0 7rem 0 0" }}
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
          <IconButton
            aria-label="settings"
            style={{
              backgroundColor: "#fff",
              rotate: "90deg",
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          style={{ fontSize: "1.1rem" }}
          title="Martin Mathews"
        />
        {/* <Typography
          component="h3"
          variant="h4"
          color="inherit"
          noWrap
          sx={{ flex: 0.95 }}
        >
        </Typography> */}
        <IconButton
          aria-label="share"
          style={{
            alignItems: "end",
            backgroundColor: "#edeef0",
            borderRadius: "10%",
            marginRight: "1rem",
          }}
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
