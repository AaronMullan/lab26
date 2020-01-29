import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
        <div className={styles.Wrapper}>
          <Character img="https://rickandmortyapi.com/api/character/avatar/130.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/131.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/132.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/133.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/134.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/135.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/136.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
          <Character img="https://rickandmortyapi.com/api/character/avatar/137.jpeg" alt="Galactic Federation President" name="Ultraname" id="666" status="undead" species="burner" gender="whatever" origin="parts unknown" location="Crater Lake"/>
        </div>
      </>
    );
  }
}

export default App;

// { img, alt, name, id, status, species, gender, origin, location }
