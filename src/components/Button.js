import "./Button.css";

export default function Button({
  className,
  onClickHandler,
  children,
  backgroundColor,
  color,
}) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      className={`button ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
