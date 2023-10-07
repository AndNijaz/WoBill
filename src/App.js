import React from "react";
import ReactDOM from "react-dom/client";
import Friends from "./components/Friends";
import Friend from "./components/Friend";

import "./App.css";

function App() {
  const friends = [
    {
      id: "1",
      name: "Hana",
      surname: "Zukić",
      balance: 0,
      img: "https://i.pravatar.cc/150?img=38",
    },
    {
      id: "2",
      name: "Edin",
      surname: "Gušalić",
      balance: 0,
      img: "https://i.pravatar.cc/150?img=60",
    },
    {
      id: "3",
      name: "Amna",
      surname: "Kahrimanović",
      balance: 0,
      img: "https://i.pravatar.cc/150?img=2",
    },
  ];

  return (
    <div className="App">
      <div className="container container-main">
        <Friends>
          {friends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </Friends>
      </div>
    </div>
  );
}

export default App;
