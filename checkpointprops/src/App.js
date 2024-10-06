import './App.css';
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Cardd from './components/Cardd';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardds from './components/Cardds';
import Navbar from './components/Navbar';

function App(props) {
  const {name,price, description,image } =props
  return (
  <div className="App">
  <Navbar />  
<Name />
<Price />
<Description />
<Image />
<Cardd name={name} price={price} description={description} image={image}/>
<Cardds/>
“Hello, there!”
    </div>
);
}

export default App;
