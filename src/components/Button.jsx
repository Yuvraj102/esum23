import React from "react";
import { useNavigate } from "react-router-dom";
const Button = ({ styles: Customstyles }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${Customstyles} `}
      // style={
      //   "    display: block; position: relative; width: 40%; margin: auto; margin-top: 12px;"
      // }
      style={{
        display: "block",
        position: "relative",
        width: "60%",
        margin: "auto",
        // marginTop: "12px",
        top: "-47px",
        "@media (min-width: 500px)": {
          width: "80% !important",
        },
      }}
      onClick={() => navigate("register")}
    >
      Register Now
    </button>
  );
};

export default Button;
