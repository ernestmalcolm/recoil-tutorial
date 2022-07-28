import { RecoilRoot } from "recoil";
import './App.css';

import Input from "./components/Input";
import TaskFilters from "./components/TaskFilters";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <h2>Todo App with React and Recoil</h2>
      <RecoilRoot>
        <TaskFilters />
        <Input />
        <Tasks />
      </RecoilRoot>
    </div>
  );
}

export default App;
