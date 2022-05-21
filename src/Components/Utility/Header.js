import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header(props) {
  const { sections, title } = props;

  const [selected, setSelected] = React.useState(0);

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "stretch",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {sections.map((section, index) => (
          <Link
            onClick={() => setSelected(index)}
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            style={{
              borderBottom: selected === index ? "1px solid #000000" : "none",
            }}
            underline="none"
          >
            {section.title}
          </Link>
        ))}

        {/* <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
        ></Typography> */}
        <div
          style={{
            marginLeft: "auto",
            alignSelf: "center",
          }}
        >
          <Button
            variant="text"
            style={{
              color: "black",
              textTransform: "unset",
              marginRight: "1em",
              backgroundColor: "#edeef0",
              fontWeight: "700",
            }}
          >
            Write a post
            <ArrowDropDownIcon fontSize="small" />
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ textTransform: "unset" }}
          >
            <GroupAddIcon sx={{ fontSize: 20 }} style={{ margin: "0.3rem" }} />
            Join group
          </Button>
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
