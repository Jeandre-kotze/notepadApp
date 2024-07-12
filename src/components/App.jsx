import React, { useState, useEffect, useCallback, useMemo } from "react";
import DisplayProjects from "./DisplayProjects";
import InputNewProject from "./InputNewProject";
import ProjectNotSelected from "./ProjectNotSelected";
import Sidebar from "./Sidebar";
import axios from "axios";
import { redirect } from "react-router-dom";

function App() {
  console.log("App");
  const [addingProjectState, setAddingProjectState] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [projectList, setProjectList] = useState([]);

  // Memoized callbacks using useCallback
  const handleDeleting = useCallback((action, thisIndex) => {
    if (action === "project") {
      setProjectList((prevProjectList) =>
        prevProjectList
          .filter((_, index) => index !== thisIndex)
          .map((project, index) => ({
            ...project,
            id: index + 1,
          }))
      );
    } else if (action === "task") {
      setProjectList((prevProjectList) =>
        prevProjectList.map((project, index) => {
          if (index === currentIndex) {
            const newTasks = project.tasks.filter((_, taskIndex) => taskIndex !== thisIndex);
            return { ...project, tasks: newTasks };
          }
          return project;
        })
      );
    }
  }, [currentIndex]); // Dependency on currentIndex since it's used inside handleDeleting

  const handleAdding = useCallback((action, input) => {
    console.log("Adding");
    if (action === "project") {
      setProjectList((prevProjectList) => [
        ...prevProjectList,
        {
          id: prevProjectList.length + 1,
          ...input,
        },
      ]);
    } else if (action === "task") {
      setProjectList((prevProjectList) =>
        prevProjectList.map((project, index) => {
          if (index === currentIndex) {
            return {
              ...project,
              tasks: [...project.tasks, input],
            };
          }
          return project;
        })
      );
    }
  }, [currentIndex]); // Dependency on currentIndex since it's used inside handleAdding

  // Effect to log changes in projectList
  useEffect(() => {
    console.log("ProjectList changed:", projectList);
  }, [projectList]);

  // Memoized content based on addingProjectState and currentIndex
  const content = useMemo(() => {
    if (addingProjectState) {
      return (
        <InputNewProject
          addProject={(input) => handleAdding("project", input)}
          setAddingState={(state) => setAddingProjectState(state)}
        />
      );
    } else if (!addingProjectState && currentIndex === null) {
      return <ProjectNotSelected startNewProject={() => setAddingProjectState(true)} />;
    } else {
      return (
        <DisplayProjects
          projects={projectList[currentIndex]}
          addTask={(input) => handleAdding("task", input)}
          removeTask={(index) => handleDeleting("task", index)}
          removeProject={() => {
            handleDeleting("project", currentIndex);
            setCurrentIndex(null);
          }}
        />
      );
    }
  }, [addingProjectState, currentIndex, projectList, handleAdding, handleDeleting]);

  return (
    <main className="h-screen w-full flex text-white sidebar">
      <Sidebar
        projects={projectList}
        setCurrentIndex={(index) => setCurrentIndex(index)}
        setProjectState={(state) => setAddingProjectState(state)}
      />
      <div className="flex justify-center self-center w-full h-full">
        {content}
      </div>
    </main>
  );
}

export async function loader(){
const loginStatus = localStorage.getItem('loginStatus');

if(loginStatus === "true"){
  return
} else{
  return redirect("/login");
}

}

export default App;