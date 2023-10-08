import "./SelectedFriends.css";
import "./Friends.css";
import Button from "./Button";

export default function SelectedFriends({ children }) {
  return (
    <div className="selected-friends">
      <h2>ADD FRIENDS</h2>
      <ul className="friends-wrapper">{children}</ul>
      <Button
        color="#fff"
        backgroundColor="#8437FB"
        className="margin-top--auto"
      >
        Selected Friends
      </Button>
    </div>
  );
}
