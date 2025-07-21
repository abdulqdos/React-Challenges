import Button from "./Button";

export default function Sidebar() {
  const btns = [];

  const childerns = [
    <div>abdulqdos</div>,
    <div>mohammed</div>,
    <div>dawood</div>,
  ];

  for (let i = 0; i < childerns.length; i++) {
    btns.push(
      <Button key={i} btnWord="btn">
        {" "}
        {childerns[i]}
      </Button>
    );
  }

  return (
    <div className="grid grid-cols-2 mt-0 justify-items-center m-4 gap-4 border-4 border-primary p-4 w-full">
      {btns}
    </div>
  );
}
