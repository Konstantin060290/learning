
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import Clicker from './Clicker';

const App = (props) => {
  return (
    <div className="App">
    {/* <MyComponent>{props.isLoading}</MyComponent> */}
    <Clicker/>
    </div>
  );
};

export default App;
