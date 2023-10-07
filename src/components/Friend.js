import "./Friend.css";
import Button from "./Button";

export default function Friend({ friend }) {
  const { name, surname, balance, img } = friend;

  return (
    <li className="friend">
      <div className="friend-info-wrapper">
        <img className="friend-img" src={img} alt={`${name} ${surname}`} />
        <div>
          <p class="friend-name">
            {name} {surname}
          </p>
          <p>
            {balance > 0
              ? `You owe ${name} ${balance}$`
              : balance < 0
              ? `${name} owe you ${balance}$`
              : `You and ${name} are even.`}
          </p>
        </div>
      </div>
      <div className="friend-buttons-wrapper">
        <Button backgroundColor="#B587FD" color="#fff">
          Pay
        </Button>
        <Button backgroundColor="#8437FB" color="#fff">
          Select
        </Button>
      </div>
    </li>
  );
}
