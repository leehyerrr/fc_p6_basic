const Propagation = () => {
  const handleParent = () => alert("parent");
  interface ChildClickEvent extends React.MouseEvent<HTMLButtonElement> {}

  const handleChild = (event: ChildClickEvent) => {
    event.stopPropagation();
    alert("child");
  };
  return (
    <div onClick={handleParent}>
      <button onClick={handleChild}>child</button>
    </div>
  );
};

export default Propagation;
