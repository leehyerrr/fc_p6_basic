const Alert = ({ onAlert }: { onAlert: () => void }) => {
  //   const handleClick = () => alert("Hello");
  return (
    <button
      //   onClick={handleClick}
      onClick={onAlert}
    >
      Click
    </button>
  );
};

export default Alert;
