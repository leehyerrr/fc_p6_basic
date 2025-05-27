const List = () => {
  const items = ["Date palm", "Apple", "Banana", "Cherry"];
  return (
    <ul>
      {items.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  );
};

export const FilteredList = () => {
  const items = [
    {
      id: 1,
      text: "learn react",
      completed: true,
    },
    {
      id: 2,
      text: "build ui",
      completed: false,
    },
    {
      id: 3,
      text: "fetch API",
      completed: true,
    },
  ];
  return (
    <ul>
      {items
        .filter((i) => i.completed)
        .map((i) => (
          <li>{i.text}</li>
        ))}
    </ul>
  );
};

export default List;
