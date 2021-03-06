import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin-User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
