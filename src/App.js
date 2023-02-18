import React, { useContext } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import { Context } from "./context/form/Form-Context";
import Spinner from "./components/Spinner/Spinner";
import Questions from "./components/Questions/Questions";

function App() {
  const {formSubmitted,isLoading } = useContext(Context);

  const appStyles = `${!formSubmitted ? "bg-[url(https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80)] bg-cover bg-center opacity-100" : "" }`

  return (
    <>
      <div className={appStyles}>{!isLoading ? <Home /> : <Spinner />}</div>
      <div>
      </div>
    </>
  );
}

export default App;
