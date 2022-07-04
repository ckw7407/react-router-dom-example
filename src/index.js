import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return(
    <div>
      <h1>Hello React Router Dom</h1>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/topics" element={<Topics />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={"Not found"}>Not found</Route>
      </Routes>
    </div>
  );
}

//ReactDOM.render(<App />,document.getElementById('root'));
//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
reportWebVitals();
