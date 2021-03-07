import Videoes  from "./Videoes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="icon">
          <a href="https://www.youtube.com/channel/UCjv97MWFDvAUQeefBma9Naw">
            <img src="https://scontent.flko3-1.fna.fbcdn.net/v/t1.0-9/156979805_3494905424068776_6904845563601612290_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=7jxF-YgslaoAX94DVqu&_nc_ht=scontent.flko3-1.fna&oh=68c2460ec5c14c3728fda9d17b3ec93c&oe=606B2340" className="App-logo" alt="logo" />
          </a>
        </div>
        <div className="ve">
          <p>
            Vlogger Engineer
          </p>
        </div>
      </header>

    <Videoes />
    </div>
  );
}

export default App;
