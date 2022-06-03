import * as React from 'react';
import './style.css';
import ReactFeatures from './components/reactFeatures';
import ReactFacts from './components/reactFacts';

export default function App() {
  return <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"  height="100px;"/>
    <h1>Fun Facts about React- </h1>
    <ReactFacts/>
    <h1>Reasons to love React- </h1>
    <ReactFeatures/>
  </div>;
}
