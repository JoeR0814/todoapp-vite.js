import React from 'react';
import NavBar from './NavBar';
import Header from './Components/Header';
import GroceryList from './Components/GroceryList';
import House from './Components/House';
import Outside from './Components/Outside';
import Garage from './Components/Garage';
import Other from './Components/Other';
import Footer from './Components/Footer';
import Login from './Components/Login';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <GroceryList />
      <House />
      <Outside />
      <Garage />
      <Other />
      <Footer />
      <Login />
    </>
  );
}

export default App;

