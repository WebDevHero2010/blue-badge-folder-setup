function ChildComponent(props) {
  // Final Output: Abe Lincoln had a total vote count of 139033
  const { name, count } = props.votes;
  return (
    <div>
      <p>
        {name} had a total vote count of {count}.
      </p>
    </div>
  );
}

export default ChildComponent;
