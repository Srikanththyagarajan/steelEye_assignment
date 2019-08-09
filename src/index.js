import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SomeListComponent from './App';
import registerServiceWorker from './registerServiceWorker';

const item = [{text:'srikanth'},{text:'thyagarajan'}];

const onhandleClick=(index)=>{
  console.log(index);
}

ReactDOM.render(
  < SomeListComponent items={item} onClick={onhandleClick} />,
  document.getElementById('root')
);
registerServiceWorker();
