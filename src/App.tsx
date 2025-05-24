import Container from "./Container";
import Destination from "./Destination";
import Test from "./Test";
import Greeting from "./Greeting";

function App() {
  const destinations = [
    {
      place: "파리",
      description: "에팔탑과 카페가 있는 도시",
    },
  ];
  const onClick = () => {
    console.log("dd");
  };
  return (
    <div>
      {/* <Greeting name={"Alice"} />
      <Greeting name={"Bob"} /> */}
      <Container style={{ backgroundColor: "orange" }}>여행 지역</Container>
      <Container>여행 지역22</Container>
      {/* <h1>여행 지역</h1> */}
      <Destination
        place={"파리"}
        description={"에펠탑과 카페가 있는 도시"}
        style={{ backgroundColor: "blue" }}
      />
      <Destination {...destinations[0]}>ddd</Destination>
      <Destination style={{ backgroundColor: "red" }} />
      <Destination />
      {/* 안됨. {}안에는 ...만
      <Destination {{place: "파리", description: "에팔탑과 카페가 있는 도시"}} /> 
      */}
      <Test style={{ backgroundColor: "red" }} aa="ㄴㄴㄴ" onClick={onClick}>
        ttt
      </Test>
    </div>
  );
}

export default App;
