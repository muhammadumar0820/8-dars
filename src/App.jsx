import "./App.css";

function App() {
  const containerSTY = {
    width: "940px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
  };

  const contSty = {
    backgroundColor: "white",
    width: "820px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "30px",
  };

  const headerSty = {
    padding: "10px",
    marginBottom: "50px",
  };

  const ulSTY = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    listStyle: "none",
    marginLeft: "460px",
  };

  const liSTY = {
    fontWeight: "600",
    cursor: 'pointer'
  };

  const bodySTY = {
    display: "flex",
    alignItems: "center",
    gap: "180px",
  };

  const spanSTY = {
    fontWeight: "700",
    fontSize: "40px",
    borderColor: '#000000'
  };

  const pSTY = {
    fontWeight: "600",
    fontSize: "15px",
    color: '#6B6868',
    marginTop: '20px',
    marginBottom: '50px'
  };

  const buttons = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px'
  }

  const button1 = {
    padding: '10px',
    border: '2px solid black',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  }

  const button2 = {
    padding: '10px',
    border: '2px solid black',
    backgroundColor: '#000',
    color: 'white',
    cursor: 'pointer'
  }

  return (
    <>
      <div className="container" style={containerSTY}>
        <div className="cont" style={contSty}>
          <header style={headerSty}>
            <ul style={ulSTY}>
              <li style={liSTY}>About me</li>
              <li style={liSTY}>Skills</li>
              <li style={liSTY}>Project</li>
              <li style={liSTY}>Contact</li>
            </ul>
          </header>
          <div className="body" style={bodySTY}>
            <div className="desc">
              <p style={spanSTY}>
                Hi ✌, <br /> I’m Charles, <br /> Front-end Developer
              </p>
              <p style={pSTY}>
                I design and develop experiences that make people’s lives <br />{" "}
                simpler through Web and Mobile apps.I work with FIgma , <br />{" "}
                HTML5, CSS3, JavaScript, React, ReactNative and Flutter.
              </p>
              <div className="buttons" style={buttons}>
                <button style={button1}>HIRE ME</button>
                <button style={button2}>SEE MY POJECTS</button>
              </div>
            </div>
            <div className="img">
              <img src=".././image" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
