import "./Friend.css";
import Button from "./Button";

export default function SelectedFriend({ friend }) {
  const { name, surname, balance, img } = friend;

  return (
    <li className="selected-friend">
      <div className="friend-info-wrapper">
        <img className="friend-img" src={img} alt={`${name} ${surname}`} />
        <div>
          <p class="friend-name">
            {name} {surname}
          </p>
        </div>
      </div>
      <Button backgroundColor="#8437FB" color="#fff">
        Select
      </Button>
    </li>
  );
}
