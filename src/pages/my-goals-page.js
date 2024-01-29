import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import Datepicker from "../components/my-goals-page/date-picker";
import TextInputField from "../components/login-page/text-input";
import { useState } from "react";

function MyGoalsPage() {
  const [createGoal, setCreateGoal] = useState(false);

  const handleClick = () => {
    setCreateGoal(!createGoal);
  };

  return (
    <div className="p-10">
      {!createGoal && (
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "55px",
            justifyContent: "start",
            backgroundColor: "white",
            borderRadius: 0,
            color: "black",
            textTransform: "capitalize",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "white",
              transform: "scale(1.002)",
              transition: "300ms",
            },
          }}
          onClick={handleClick}
        >
          <FaPlus className="mr-3" />
          Create new goal ...
        </Button>
      )}
      {createGoal && (
        <div className="bg-white w-full relative sm:p-3">
          <div className="text-xl p-3">Create your new goal ...</div>
          <div className="m-3">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 p-3">
                <div>Pick a start date</div>
                <Datepicker className="w-full" />
              </div>
              <div className="w-full sm:w-1/2 p-3">
                <div>Pick an end date</div>
                <Datepicker className="w-full" />
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-end">
              <div className="w-full sm:w-1/2 p-3 pb-0 sm:p-3 pt-0">
                <div className="my-2">
                  Pick the no.of entries you aim to make each day :{" "}
                </div>
                <TextInputField type="number" />
              </div>
              <button
                onClick={handleClick}
                className="bg-red-500 px-3 py-2 mb-5 h-10 m-3 sm:m-0"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full bg-stone-400 mt-5">
        <div className="text-3xl font-semibold mb-4">Current Goals :</div>
        <div className="w-full">
          {[...Array(3)].map((el) => {
            return (
              <div className="h-14 w-full bg-zinc-100 flex items-center p-5 my-2 hover:shadow-lg hover:scale-[1.005] transition ease-in-out">
                01-02-2023 to 08-02-2023
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full bg-stone-400 mt-5">
        <div className="text-3xl font-semibold mb-4">Previous Goals :</div>
        <div className="w-full">
          {[...Array(10)].map((el) => {
            return (
              <div className="h-14 w-full bg-zinc-100 flex items-center p-5 my-2 hover:shadow-lg hover:scale-[1.005] transition ease-in-out">
                01-02-2023 to 08-02-2023
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyGoalsPage;
