import React, { useEffect, useState } from "react";

//data
import dataJson from "@/components/Code/data.json";

const ShowData = () => {
  const [data, setData] = useState(dataJson);

  return (
    <>
      <div>
        <div>Check Log</div>
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          On Click Function
        </button>
      </div>
    </>
  );
};

export default ShowData;
