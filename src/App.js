import React from 'react';
import { FlightInput, GetLocation, Tickets } from './components/shared'

const App = () => {
  return (
    <div className="App">
      <FlightInput />
      <GetLocation />
      <Tickets />
    </div>
  );
}

export default App;
