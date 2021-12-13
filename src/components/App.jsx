import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFName(event) {
    console.log(event.target.value);
    setFirstName(event.target.value);
  }

  function handleLName(event) {
    console.log(event.target.value);
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input onChange={handleFName} name="fName" placeholder="First Name" />
        <input onChange={handleLName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
