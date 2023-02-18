import React, { useContext } from "react";
import { Context } from "../../context/form/Form-Context";
import Questions from "../Questions/Questions";

function Home() {
  const { handleChange, handleFormSubmit, form, isLoading, formSubmitted } =
    useContext(Context);

  const { catogory, level, noOfQuestions } = form;

  return (
    <>
      {!formSubmitted ? (
        <div className="flex justify-between items-center h-screen ">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col rounded-md w-[400px] h-[400px] mx-auto bg-white shadow-lg border-2 border-gray-500 p-5"
          >
            <h1 className="text-center text-2xl font-bold mb-4">
              Choose from following
            </h1>
            <input
              className="placeholder-gray-300 border border-black pl-2  my-4 font-mono rounded-lg h-[40px] outline-gray-400 focus:border-none focus:scale-[1]"
              required
              type="number"
              placeholder="no of questions"
              name="noOfQuestions"
              onChange={handleChange}
              value={noOfQuestions}
            />

            <select
              className="my-4 pl-2 focus:scale-[1]  font-mono rounded-lg h-[40px] outline-gray-400  placeholder-gray-300 border border-black"
              name="catogory"
              onChange={handleChange}
              value={catogory}
              required
            >
              <option value="17">Science and Nature</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="27">Animals</option>
              <option value="23">History</option>
              <option value="28">Vehicles</option>
              <option value="18">Science:Computers</option>
              <option value="11">Entertainment: Film</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="29">Entertainment: Comics</option>
            </select>

            <select
              className="my-4 pl-2 focus:scale-[1] font-mono rounded-lg h-[40px] outline-gray-400  placeholder-gray-300 border border-black"
              name="level"
              onChange={handleChange}
              value={level}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button className=" bg-gradient-to-r from-black focus:scale-[1] to-gray-700 hover:from-gray-600 hover:to-gray-500 text-white font-mono rounded-md block w-1/2 mx-auto mt-4 py-2">
              submit
            </button>
          </form>
        </div>
      ) : (
        <Questions />
      )}
    </>
  );
}

export default Home;
