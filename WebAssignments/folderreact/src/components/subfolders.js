import { useState } from "react";
import classes from "./subfolders.module.css";

const Subfolder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.subfolders}>
      {props.data.map((item) => {
        return (
          <div>
            <div className={classes.parent}>
              <label className={classes.label}>{item.text}</label>
              {item.children.length > 0 && (
                <span className={classes.btn} onClick={handleClick}>
                  {isOpen ? "-" : "+"}
                </span>
              )}
            </div>
            {isOpen && <Subfolder data={item.children} />}
          </div>
        );
      })}
    </div>
  );
};

export default Subfolder;
