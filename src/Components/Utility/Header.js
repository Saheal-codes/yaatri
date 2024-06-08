import * as React from "react";
import PropTypes from "prop-types";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "../../styles"
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ArticleIcon from '@mui/icons-material/Article';
import { AcademicCapIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";
import { Star } from "@mui/icons-material";
import HeaderOptions from "./HeaderOptions";
import Writepost from "./Writepost";

function Header(props) {

  const { sections, title} = props;
  const [selected, setSelected] = React.useState(0);
  const [writepost, setWritepost] = React.useState(false);

  return (
    <React.Fragment>
      <div
        className={`border-b-2 border-gray-300 ss:flex  items-center pl-0 pr-0 pt-1 sticky top-[64px] bg-white rounded-md sm:rounded-3xl z-10 `}
      >
        {sections.map((section, index) => (
          <div
            onClick={() => setSelected(index)}
            key={section.title}
            href={section.url}
            className={`hidden ss:block ss:pb-5 ss:pt-5 text-xs ${styles.responsiveTextMargin} text-center border-black duration-100 flex cursor-pointer sticky top-0 ${selected === index ? 'font-bold border-b-2' : ""} ${index === 0 ? "lg:ml-10 ml:ml-8 md:ml-6 sd:ml-5 sm:ml-4 ml-2" : ""}`}
            underline="none"
          >
            {section.title}
            <div className={`${styles.iconsSpacing} grid place-items-center`}>
              {section.title === "All Posts(30)" ? <ClipboardDocumentCheckIcon className={`${styles.iconsSize}`} /> : section.title === "Articles" ? <ArticleIcon className={`${styles.iconsSize}`} /> : section.title === "Events" ? <Star className={`${styles.iconsSize}`} /> : section.title === "Education" ? <AcademicCapIcon className={`${styles.iconsSize}`} /> : ""}
            </div>

          </div>
        ))}
        <div
          className={`items-center flex ml-auto lg:mr-5 justify-center pb-3 ss:pb-0 gap-3`}
        >
          <HeaderOptions sections={sections}/>
          <button
            onClick={()=>setWritepost((prev)=>prev=!prev)}
            className={`${styles.responsiveTextMargin} text-black mr-2 bg-slate-200 pl-3 rounded-md pr-1 py-[5px] font-medium sm:font-semibold hover:bg-slate-700 duration-200 hover:text-white`}
          >
            Write a post
            <ArrowDropDownIcon fontSize="small" />
          </button>
          <button
            className={`${styles.responsiveTextMargin} text-black bg-blue-400 lg:pl-1 rounded-md pl-1 pr-2 lg:px-2 lg:py-[4px] md:py-[2px] font-medium sm:font-semibold hover:bg-blue-700 duration-200 hover:text-white`}
          >
            <GroupAddIcon sx={{ fontSize: 20 }} style={{ margin: "0.3rem" }} />
            Join group
          </button>
        </div>
      </div>
      <Writepost {...{setWritepost, writepost}}/>

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
