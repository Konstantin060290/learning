
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';

const App = (props) => {
  return (
    <div className="App">
    <MyComponent>{props.isLoading}</MyComponent>
    </div>
  );
};

export default App;
