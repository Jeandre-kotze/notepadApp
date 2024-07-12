import { useRef, useCallback } from "react";

export default function InputNewProject({addProject, setAddingState}) {

  console.log("input new project");
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  const saveAll = useCallback(() => {
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
  }, [])

  function cancelAll(){
    projectTitle.current.value = "";
    projectDescription.current.value = "";
    projectDate.current.value = "";
    setAddingState(false);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 h-4/5 w-4/5 
    outline outline-white outline-offset-2 rounded-lg p-10 self-center justify-center">
      <div className="flex gap-2">
        <input type="button" className="btn bg-transparent hover:cursor-pointer text-white" onClick={cancelAll} value="Cancel" />
        <input type="submit" className="btn border-t-neutral-100 hover:cursor-pointer text-white" onClick={saveAll} value="Save"/>
      </div>
      <div className="flex flex-col h-full">
        <label>Title</label>
        <input className="text-black rounded-md pl-1 h-8 overflow-visible" type="text" ref={projectTitle} required />
        <label htmlFor="description">Description</label>
        <textarea className="text-black rounded-md pl-1 h-2/5 overflow-y-scroll" type="textarea" ref={projectDescription} required />
        <label>Due date</label>
        <input className="text-black rounded-md pl-1 h-8" type="date" ref={projectDate} required />
      </div>
    </form>
  );
}
