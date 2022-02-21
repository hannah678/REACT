import './App.css';

function Hello() {
  //var
  //let
  //const 상수
  const name = "홍길동";

  //리액트에서 함수 생성하기
  function myWelCome(){
    let hello = "하이~!"
    if(true){
      let hello = '!~헬로우'
      console.log(hello);
    }
    console.log(hello);
    return hello;
  }
// jsx ↓
  return (
      <div>
        <h1>바로반응하기</h1>
        <p>Welcome Page : {name}</p>
        <ul>
          <li> name : {name}</li>
          <li> welCome : {myWelCome()}</li>
        </ul>
      </div>
    );
}

export default Hello;
