
import "../stylesheets/App.scss";
import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks"

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <Header></Header>
      <button className="button">New</button>
      <Tasks tasks ={tasks}></Tasks>
    </div>
  );
}

export default App;
