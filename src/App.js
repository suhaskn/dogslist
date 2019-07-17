import React from 'react';
import './App.css';
import DogsList from './components/DogsList';
import DogsListContainer from './components/DogsListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <DogsListContainer />
        </main>
      </header>
    </div>
  );
}

export default App;
