import React from "react";
import "../App.css";

interface User {
  name: string;
  email: string;
  age: number;
}

interface Props {
  user: User;
}

const User = ({ user }: Props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.age}</h1>
    </div>
  );
};

export default User;
