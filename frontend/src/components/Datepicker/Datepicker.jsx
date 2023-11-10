import { useState } from "react";
import "./App.css";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <h1>Expanse Tracker</h1>
      <Datepicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat={"dd/MM/yyyy"}
        showTimeSelect
        showYearDropdown
      />
    </>
  );
}

export default App;
