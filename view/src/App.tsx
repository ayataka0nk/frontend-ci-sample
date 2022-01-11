import React from 'react';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_BUILD_ENV)
  return (
    <div className="App">
        <div>Environmental Value Sample</div>
        <div>
          <div>REACT_APP_BUILD_ENV: </div>
          <div>{process.env.REACT_APP_BUILD_ENV}</div>
        </div>
      </div>
  );
}

export default App;
