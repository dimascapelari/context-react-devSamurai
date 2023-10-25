import React, { useContext } from "react";
import { CustomerContext } from "../contexts/customer";

export const Hello = () => {
  const { name } = useContext(CustomerContext);

  return <h1>{name}</h1>;
};
