import "./components/css/style.css";
import About from "./components/about";
import Navbar from "./components/Navbar";
import data from "../src/components/data/data.json";
import { useState } from "react";
import Modal from './components/modal'


function App() {
  
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar/>
      <About date="15th December 2022"/>
      <div className="App">
        <button
          type="button"
          id="event"
          class="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          New Event
        </button>

        {openModal && <Modal  closeModal = {setOpenModal}/>}
        </div>
    </>
  );
}

export default App;
