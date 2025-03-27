import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Apple");
    if (name === "" || email === "") {
      alert("All fields are required");
      return;
    }
    await props.addContact({ name, email });

    setName("");
    setEmail("");

    navigate("/");
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mt-6 text-center ">Add Contact</h1>
        <form onSubmit={handleSubmit} className="text-center mt-10">
          <div>
            <label htmlFor="name" className="mr-30 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="block ml-140 border-amber-500 pl-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="mr-30 ">
              Email
            </label>
            <input
              type="email"
              name="name"
              id="email"
              placeholder="Enter Name"
              className="block ml-140 border-amber-500 pl-2 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="cursor-pointer  bg-blue-600 rounded text-white mt-4 w-20">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
