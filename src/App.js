import { Modal } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ATG from "./Components/Defaultview";
import UserContext from "./Context";
import CreateaccountModal from "./Modals/Createaccount";

function App() {
  const [login, setLogin] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <>
      <UserContext.Provider value={login}>
        <ATG props={setOpen} />
        <CreateaccountModal open={open} setOpen={setOpen} />
      </UserContext.Provider>
    </>
  );
}

export default App;
