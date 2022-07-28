import { atom, selector } from "recoil";

//create an atom that will be used to store all tasks entered by the user.
const allTasks = atom({
    key: "allTasks",
    default: []
})

//create an atom that will be used to toggle between different values in the filtered tasks selector
const tasksFilter = atom({
    key: "tasksFilter",
    default: "Show All"
  });
 
 //create a selector to help in toggling between all, completed and uncompleted tasks
const filteredTasks = selector({
   key: "filteredTasks",
    get: ({ get }) => {
      const filter = get(tasksFilter);
      const list = get(allTasks);
  
      switch (filter) {
        case "Show Completed":
          return list.filter((item) => item.isDone);
        case "Show Uncompleted":
          return list.filter((item) => !item.isDone);
        default:
          return list;
      }
    }
  });


//export our atoms and selector
export {
    allTasks,
    tasksFilter,
    filteredTasks
}