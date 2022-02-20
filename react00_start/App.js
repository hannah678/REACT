import logo from './logo.svg';
import './App.css';
import leaf from './img/01.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>
      <div className="Text-left">
        {/*주석: 따옴표 사용하면 안 됨*/}
        <img src={leaf} className="App-logo"/>
        <ul>
          <li>리액트는 프론트엔드 자바스크립트 라이브러리다.</li>
          <li>유저의 행동흐름에 따라서 동적으로 화면을 보여줄 수 있다.</li>
          <li>
            <ol>
              <li>Nodejs설치: nodejs.org에서 안정화 버젼(LTS) 를 다운로드하여 설치한다.</li>
              <li>리액트 프로젝트를 생성해주는 create-react-app을 npm을 install해야한다.
                <p>
                  npm install -g create-react-app
                </p>
              </li>
              <li>해당폴더에서 프로젝트 생성한다.
                <p>
                  create-react-app react00_start
                </p>
              </li>
              <li>프로젝트 실행: 프로젝트 폴더로 이동하여
                <p>
                  npm start
                </p>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
