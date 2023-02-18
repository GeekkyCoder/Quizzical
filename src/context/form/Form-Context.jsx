import { React, createContext, useState, useEffect } from "react";

const Context = createContext();

const formDetails = {
  noOfQuestions: "",
  catogory: "",
  level: "",
};

const ContextProvider = ({ children }) => {
  const [form, setForm] = useState(formDetails);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { catogory, level, noOfQuestions } = form;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(
          `https://opentdb.com/api.php?amount=${noOfQuestions}&category=${catogory}&difficulty=${level}&type=multiple`
        );
        const data = await resp.json();
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(true);
        console.log(err);
      }
    };
    fetchData();
  }, [formSubmitted]);

  console.log(formSubmitted);

  return (
    <Context.Provider
      value={{
        form,
        isLoading,
        formSubmitted,
        handleFormSubmit,
        handleChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
