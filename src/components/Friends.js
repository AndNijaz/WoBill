import "./Friends.css";
import Button from "./Button";

export default function Friends({ children }) {
  return (
    <div className="friends">
      <h2>FRIENDS</h2>
      <ul className="friends-wrapper">{children}</ul>
      <Button color="#fff" backgroundColor="#8437FB">
        Add Friend
      </Button>
    </div>
  );
}
