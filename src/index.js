import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/App';

// const App = () => {
//     return <h1 > Howdy, React! </h1>;
// }

// const Welcome = (props) => {
//     return <h1>Welcome, {props.name}</h1>;
// }

// const App = () => {
//     return (
//         <div>
//             <Welcome name="React" />
//         </div>



// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }
    

// ReactDOM.render( < Welcome randomString = "randomness" /> , document.getElementById('root')



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );