import Button from "./Button";

export default function Sidebar() {
  const btns = [];

  for (let i = 0; i < 20; i++) {
    btns.push(<Button key={i} />);
  }

  return (
    <div className="grid grid-cols-2 justify-items-center m-4 gap-4 border-4 border-primary p-4">
      {btns}
    </div>
  );
}
