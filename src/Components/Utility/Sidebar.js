import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Avatar, Button, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import InfoIcon from '@mui/icons-material/Info';

function Sidebar(props) {
  const { archives, description, social, title } = props;
  const [icon, setIcon] = React.useState("edit");
  const [follow, setFollow] = React.useState([]);

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
      className="ml-auto flex items-center flex-col flex-[.3] sticky top-[300px]"
    >
      <div className="rounded-md  w-full justify-between flex items-center">
        <LocationOnOutlinedIcon className="h-full" />
        <input className="border-slate-300 border-2 rounded-xl p-2"
          onFocus={() => {
            setIcon("close");
          }}
          onBlur={() => {
            setIcon("edit");
          }}

        />
        {icon === "close" ? (
          <CloseIcon className={`h-10 text-black cursor-pointer`} 
          // style={{ height: "2.5em", color: "black" }} 
          />
        ) : (
          // <EditIcon style={{ height: "2.5em", color: "black" }} />
          <div className="h-10 w-4 ml-2 "></div>
        )}
      </div>
      <div className={`flex items-center  justify-between min-w-full`}>
        <div className="pl-[2px] text-xs">
          <InfoIcon />
        </div>
        <div
          className={`max-w-[14rem] text-center text-sm pr-4 text-[.7rem] leading-[15px] mt-2`}
        >
          Your location will help us serve better and extend a personalised
          experience.
        </div>
        <div></div>
      </div>
      <div className="flex items-center mt-8 justify-center mb-5 w-full ">
        <ThumbUpTwoToneIcon
          className="mr-2 text-[1rem]"

        />
        <div className="font-bold">
          RECOMMENDED GROUPS
        </div>
      </div>
      <div className="max-w-full flex flex-col w-full justify-between" >
        {archives.map((archive, index) => (
          <div
            className="flex mt-2 items-center justify-between"
          >
            <Avatar alt="Remy Sharp" src={archive.link} className="ml-1" />
            <div
              className="ml-8 block"
              href={archive.url}
              key={archive.title}
            >
              {archive.title}
            </div>
            {!follow.includes(index) ? (
              <button
                type="button"
                className="ml-auto text-sm text-black bg-blue-400 rounded-xl h-5 px-2 min-w-5 max-w-[20rem] ease-in-out transition-all duration-150 hover:animate-pulse"
                onClick={() => {
                  setFollow((prevstate) => [...prevstate, index]);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                className="ml-auto text-sm text-black bg-blue-50 rounded-xl h-5 px-2 min-w-5 max-w-[20rem] ease-in-out transition-all duration-150 hover:animate-pulse "
                onClick={() => {
                  setFollow((prevstate) =>
                    prevstate.filter((follow) => follow != index)
                  );
                }}
              >
                Unfollow
              </button>
            )}
          </div>
        ))}
        <div className="items-center hover:text-blue-600 cursor-pointer underline text-sky-400 ml-auto mr-auto mt-4" >See More...</div>
      </div>
      <div className="text-center text-black font-semibold my-4 mx-auto text-2xl font-sans">
        Socials
      </div>
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
