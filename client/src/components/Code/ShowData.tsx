import React, { useEffect, useState } from "react";

const ShowData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        console.log("Stats fetch");
        const res = await fetch("http://localhost:4000/result");
        const rawData = await res.json();
        setData(rawData);
        // console.log(rawData[0].name);
      } catch (err) {
        console.log("It's error because => ", err);
      } finally {
        console.log("Finish Fetching");
      }
    };
    dataFetching();
  }, []);
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
