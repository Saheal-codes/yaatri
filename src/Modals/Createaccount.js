import { Button, Grid, Link, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CreateaccountModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.setOpen(false);
      }}
    >
      <Box sx={{ ...style, width: 700 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#EFFFF4",
              height: "20px",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{ fontWeight: "600", color: "green", fontSize: ".8rem" }}
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Typography>
          </div>
          <Grid
            item
            xs={8}
            sm={4}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Typography
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                letterSpacing: "0",
              }}
            >
              Create Account
            </Typography>
            <Typography
              style={{
                fontSize: ".8rem",
                textAlign: "right",
              }}
            >
              Already have an account?
              <Link>Sign In</Link>
            </Typography>
          </Grid>

          <div style={{ display: "flex" }}>
            <div style={{ backgroudColor: "white", flex: "1" }}>
              <div
                container
                spacing={0}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "column",
                  padding: "1rem",
                  paddingLeft: "0",
                }}
              >
                <div style={{ display: "flex" }}>
                  <TextField
                    size="small"
                    style={{ padding: "unset" }}
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                  <TextField
                    style={{ padding: "unset" }}
                    size="small"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </div>
                <div item xs={12}>
                  <TextField
                    size="small"
                    required
                    style={{ padding: "unset" }}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                  />
                </div>
                <div item xs={12}>
                  <TextField
                    size="small"
                    required
                    style={{ padding: "unset" }}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                </div>
                <div item xs={12}>
                  <TextField
                    size="small"
                    required
                    style={{ padding: "unset" }}
                    fullWidth
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmpassword"
                  />
                </div>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{
                    textTransform: "unset",
                    borderRadius: "25px",
                    fontWeight: "700",
                    marginTop: "1rem",
                  }}
                >
                  Create Account
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    textTransform: "unset",
                    borderRadius: "25px",
                    marginTop: "1rem",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <FacebookIcon color="primary" />
                  Sign Up with Facebook
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    textTransform: "unset",
                    borderRadius: "25px",
                    marginTop: "1rem",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <GoogleIcon color="primary" />
                  Sign Up with Google
                </Button>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="../images/Formimage.png"
                style={{ height: "16rem", width: "16rem" }}
              />
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
export default CreateaccountModal;
