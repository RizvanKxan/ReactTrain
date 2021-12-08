import React from "react";

const Users = () => {
  const users = [
    {
      name: "Вася",
      email: "vasul@pupkin",
      phone: "+37569845695",
    },
    {
      name: "Вася2",
      email: "vasul2@pupkin",
      phone: "+37569245695",
    },
    {
      name: "Вася3",
      email: "vasul3@pupkin",
      phone: "+37569845195",
    },
  ];
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
