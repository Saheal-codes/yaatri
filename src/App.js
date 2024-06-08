import { Modal } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Yaatri from "./Components/Defaultview";
import UserContext from "./Context";
import CreateaccountModal from "./Modals/Createaccount";

function App() {
  const [login, setLogin] = useState(false);

  const [open, setOpen] = useState(false);

  const [isNotificationOverlayVisible, setIsNotificationOverlayVisible] = useState(false);

  const toggleNotificationOverlay = () => {
    setIsNotificationOverlayVisible(prev => !prev);
  };


  return (
    <>
      <UserContext.Provider value={login}>
        <Yaatri props={setOpen} />
        <CreateaccountModal open={open} setOpen={setOpen} />
      </UserContext.Provider>
    </>
  );
}

export default App;
