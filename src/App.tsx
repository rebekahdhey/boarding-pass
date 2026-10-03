import { useState } from "react";
import BoardingPass from "./components/BoardingPass";
import type { PassengerInfo } from "./types";

function App() {
  const [info, setInfo] = useState<PassengerInfo>({
    name: "",
    from: "",
    to: "",
    flightNumber: "",
    seat: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function randomFlight() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const l1 = letters[Math.floor(Math.random() * 26)];
    const l2 = letters[Math.floor(Math.random() * 26)];
    const digits = Math.floor(Math.random() * 900) + 100;
    setInfo({ ...info, flightNumber: `${l1}${l2} ${digits}` });
  }

  return (
    <div className="app">
      <h1>✈️ Boarding Pass Generator</h1>

      <div className="form">
        <input name="name" value={info.name} onChange={handleChange} placeholder="Passenger name" />
        <input name="from" value={info.from} onChange={handleChange} placeholder="From (e.g. Manila)" />
        <input name="to" value={info.to} onChange={handleChange} placeholder="To (e.g. Tokyo)" />
        <input name="flightNumber" value={info.flightNumber} onChange={handleChange} placeholder="Flight no. (e.g. SK 482)" />
        <input name="seat" value={info.seat} onChange={handleChange} placeholder="Seat (e.g. 14A)" maxLength={3} />

        <button onClick={randomFlight}>🎲 Random flight</button>
        <button onClick={() => window.print()}>🖨️ Print pass</button>
      </div>

      <BoardingPass info={info} />
    </div>
  );
}

export default App;