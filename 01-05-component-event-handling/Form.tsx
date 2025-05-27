const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const text = event.target.elements.user.value;
    const text = (
      (event.target as HTMLFormElement).elements.namedItem(
        "user"
      ) as HTMLInputElement
    )?.value;
    alert(text);

    // const formData = new FormData(event.target as HTMLFormElement);
    // // 모든 값을 객체로 변환
    // console.log("formData.", formData.entries());
    // const values = Object.fromEntries(formData.entries());
    // //Object.fromEntries : 는 키-값 쌍의 배열을 객체로 변환해주는 함수입니다.
    // // const arr = [["name", "홍길동"], ["age", 20]];
    // // const obj = Object.fromEntries(arr);
    // // 결과: { name: "홍길동", age: 20 }
    // console.log("values", values);
    // alert(JSON.stringify(values));
    // //JSON.stringify : 는 자바스크립트 객체나 배열을 JSON 문자열로 변환해주는 함수입니다.
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" placeholder="user" />
      <input type="text" name="id" placeholder="id" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
