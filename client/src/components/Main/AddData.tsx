import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

interface Props {
  title: string;
  description: string;
}

const AddData = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [list, setList] = useState<Props[]>([]);
  const [showErr, setShowErr] = useState(false);
  const time = new Date();

  useEffect(() => {
    const storedList = localStorage.getItem("dataList");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(list));
  }, [list]);

  function getMonthName(date: number) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[date];
  }

  const handleSubmit = () => {
    const textTrim = title.trim();
    if (textTrim.length > 0) {
      setList([...list, { title: title, description: des }]);
      setShowErr(false);
    } else {
      setShowErr(true);
    }
    setTitle("");
    setDes("");
  };

  const handleDelete = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const [format, setFormat] = useState(true);
  return (
    <>
      <div className="flex w-full flex-col px-[40px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full flex items-center justify-center flex-col"
        >
          <div className="flex items-center flex-col">
            <div className="flex flex-row items-center">
              <div className="text-[45px] mb-4">✍️</div>
              <input
                type="text"
                id="input-text"
                placeholder="Title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="outline-purple-500 transition duration-[5.5s] border-2 rounded-2xl w-[75%] px-[20px] py-[5px] text-[24px] font-medium"
              />
              <button
                type="submit"
                className={`${
                  title.trim().length > 0
                    ? "bg-black hover:bg-purple-900 text-amber-400"
                    : "bg-gray-400 text-black"
                } px-3  transition duration-[0.7] py-[5px] rounded-xl mx-2 text-[17px] font-semibold `}
              >
                Add
              </button>
            </div>
            <div className="flex items-end justify-center w-full gap-2 flex-col mr-[140px]">
              <textarea
                id="input-text"
                placeholder="Descriptions.."
                value={des}
                onChange={(e) => setDes(e.target.value)}
                className="outline-purple-500 transition duration-[5.5s] border-2 rounded-2xl w-[75%] px-[20px] py-[5px] text-[20px] h-[250px] font-medium"
              />
              <button
                className={`border-2 mt-2 px-2 py-1 rounded-xl font-semibold flex items-center justify-center ${
                  format ? "bg-blue-400" : "bg-pink-400"
                }`}
                onClick={() => {
                  setFormat(!format);
                }}
              >
                Fomat
              </button>
            </div>
          </div>
          <div
            className={`${showErr ? "" : "hidden"} text-red-500 font-medium`}
          >
            Please fill in some information.
          </div>
        </form>
        <div
          className={`flex ${
            format ? "flex-row-reverse justify-end" : "flex-col-reverse"
          } gap-[10px] mt-[20px] flex-wrap-reverse break-words`}
        >
          {list.map((item, index) => (
            <div
              key={index}
              className="py-2 bg-purple-400 rounded-2xl break-words md:max-w-fit max-w-full w-full relative"
            >
              <div className="absolute right-[10px] text-[13px] text-gray-800 top-[1px]">
                {`${getMonthName(
                  time.getMonth()
                )} ${time.getDate()} ${time.getFullYear()}`}
              </div>
              <div className="bg-purple-400 rounded-2xl px-[15px] break-words max-w-full pr-[120px]">
                <div className="font-bold text-[17px]">{item.title}</div>
              </div>
              <div className="font-bold text-[17px] border-t-2 px-[10px] min-h-[140px]">
                {item.description}
              </div>
              <div className="flex flex-row justify-around mb-2 font-medium">
                <button className="bg-yellow-300 px-2 w-full">Edit</button>
                <button
                  className="bg-red-300 px-2 w-full"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Remove
                </button>
                <button className="bg-green-300 px-2 w-full">Finish</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddData;
