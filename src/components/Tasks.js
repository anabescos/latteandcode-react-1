function Tasks(props) {
  const taskTitle = props.tasks.map((eachTask)=>(
      <li className="c-tasks__task">{eachTask}</li>
    ));


    return (
      <ul className="c-tasks__container">{taskTitle}</ul>
    );
}
  
  export default Tasks;
  