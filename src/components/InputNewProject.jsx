import { useRef, memo } from "react";

export default function InputNewProject({addProject, setAddingState}) {

  console.log("input new project");
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  function saveAll() {
    const newProject = {
      title: projectTitle.current.value,
      description: projectDescription.current.value,
      date: projectDate.current.value,
      tasks: [],
    };

    const { title, description, date, tasks } = newProject;

    if (title.trim() !== "" && description.trim() !== "" && date.trim() !== "") {
      addProject(newProject);

      projectTitle.current.value = "";
      projectDescription.current.value = "";
      projectDate.current.value = "";
    } 
  }

  function cancelAll(){
    projectTitle.current.value = "";
    projectDescription.current.value = "";
    projectDate.current.value = "";
    setAddingState(false);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-96 h-64 
    outline outline-white outline-offset-2 rounded-lg p-10 self-center justify-center ">
      <div className="flex gap-2">
        <input type="button" className="btn bg-transparent hover:cursor-pointer text-white" onClick={cancelAll} value="Cancel" />
        <input type="submit" className="btn border-t-neutral-100 hover:cursor-pointer text-white" onClick={saveAll} value="Save"/>
      </div>
      <div className="flex flex-col">
        <label>Title</label>
        <input className="text-black mr-0 rounded-md pl-1" type="text" ref={projectTitle} required />
        <label htmlFor="description">Description</label>
        <textarea className="text-black mr-0 rounded-md pl-1" type="textarea" ref={projectDescription} required />
        <label>Due date</label>
        <input className="text-black mr-0 rounded-md pl-1" type="date" ref={projectDate} required />
      </div>
    </form>
  );
}
