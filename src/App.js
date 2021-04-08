import React from 'react'
import Header from './components/Header'
import Principal from './components/Principal'
import IdProvider from './context/IdProvider'

function App() {
  return (
    <>
      <IdProvider>
        <Header/>
        <Principal/>
      </IdProvider>
    </>
  );
}

export default App;
