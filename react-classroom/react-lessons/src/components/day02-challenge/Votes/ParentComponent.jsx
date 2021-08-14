import ChildComponent from "./ChildComponent";

function ParentComponent(props) {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 115509 },
  ];

  return (
    <div>
      <div>
        <h1>Hello from ParentComponent</h1>
        {votes.map((vote) => (
          <ChildComponent votes={vote} phrase={props.phrase} />
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;
