function Parent(props: { name: string; age?: number }) {
  console.log(props);
  return (
    <div>
      <Child {...props} />
      {/* {props.age} */}
    </div>
  );
}

function Child(props: { name: string; age?: number }) {
  return <div>{props.age}</div>;
}

export default function Test() {
  const user = {
    name: "sss",
    age: 22,
  };
  //   const user = [
  //     {
  //       name: "ddd",
  //     },
  //   ];
  return (
    <div>
      {/* <Parent {...user[0]} /> */}
      <Parent {...user} />
    </div>
  );
}
