import { useState } from "react";
import { CustomerForm } from "./components/CustomerForm";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = ({ name, email }) => {
    console.log("dados App", { name, email });

    setName(name);
    setEmail(email);
  };

  return (
    <div className="app">
      <CustomerForm banana={handleSubmit} />
    </div>
  );
}

export default App;
