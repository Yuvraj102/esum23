import React, { useEffect, useState } from "react";
import "./Success.css";
function Success() {
  const [savedData, setSavedData] = useState(null);
  useEffect(() => {
    setSavedData(JSON.parse(localStorage.getItem("data")));
  }, []);
  return (
    savedData && (
      <div class="alert" id="alert">
        <span class="closebtn"></span>
        {`congratulations you are registered for the event  ${savedData?.email}`}
      </div>
    )
  );
}

export default Success;
