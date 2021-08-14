function PresidentChild(props) {
  console.log(props.firstName);
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
}

export default PresidentChild;
