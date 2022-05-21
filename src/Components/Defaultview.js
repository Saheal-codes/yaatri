import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Utility/Header";
import MainFeaturedPost from "./Utility/MainFeaturedPost";
import Sidebar from "./Utility/Sidebar";
import PrimarySearchAppBar from "./Bar";
import Postcard from "./Utility/Card";
import UserContext from "../Context";

const sections = [
  { title: "All Posts(30)", url: "#" },
  { title: "Article", url: "#" },
  { title: "Event", url: "#" },
  { title: "Education", url: "#" },
  { title: "Job", url: "#" },
];

const mainFeaturedPost = {
  title: "Computer Engineering",
  description: "142,765 Computer Engineers follow this",
  image: "images/Rectangle 2.png",
  imageText: "main image description",
};
const post1 = {
  title: "Post title",
  date: "Nov 11",
  description: "Some great recipes for you to try",
  image: "https://source.unsplash.com/random",
  imageLabel: "Image Text",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const posts = [post1];

const sidebar = {
  title: "Recommended Groups",
  archives: [
    { title: "Leisure", url: "#" },
    { title: "Activism", url: "#" },
    { title: "MBA", url: "#" },
    { title: "Philosophy", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const theme = createTheme({
  typography: {
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-display: swap;
          src: url("Resources/fonts/IBMPlexSans-Regular.ttf");
        }
      `,
    },
  },
});
export default function ATG(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar style={{ width: "100%" }} props={props.props} />
      <MainFeaturedPost post={mainFeaturedPost} section />
      <Container maxWidth="lg">
        <main>
          <Header title="Blog" sections={sections} />
          <div style={{ display: "flex" }}>
            <Grid
              container
              spacing={4}
              width="100%+3px"
              marginLeft={0}
              flexWrap={"wrap-reverse"}
              justifyContent={"space-between"}
              flex={0.8}
            >
              {featuredPosts.map((post) => (
                <Postcard key={post.title} post={post} />
              ))}
            </Grid>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </div>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}
