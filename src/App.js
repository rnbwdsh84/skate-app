import './App.css';
import Nav from './components/Navigation/nav';
import { Heading } from './components/Heading/Heading';
import About from './components/About/about';
import Events from './Panel/Events/events';
import Form from './components/Form/Form';
import Footer from './components/Footer/Modal';
import ImageSlider from './components/Slideshow/ImageSlider';
import { SliderData } from './components/Slideshow/SliderData';
import Modal from './components/Footer/Modal';
import React, {useState} from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Nav/>
      <Heading/>
      <ImageSlider slides={SliderData} />
      <About/>
      <Events/>
      <Form/>
      <Footer/>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>T&C + Privacy Statement     -     Copyright © 2022 All Rights Reserved</button>
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
