function Sidebar({projects, setCurrentIndex, setProjectState}){
      console.log("Sidebar");

    return (
                <aside className="bg-black rounded-tr-lg h-full w-1/3 flex flex-col outline outline-white">
                    <h1 className="text-center mt-4 text-2xl font-medium">Your projects</h1>
                    <button className="mt-6 mb-3 mx-8 bg-gradient-to-r from-pink-400 
                    to-blue-500 rounded-lg py-2 px-4 text-lg outline-1 outline outline-white 
                    hover:shadow-md hover:shadow-current hover:drop-shadow-lg "
                    onClick={() => setProjectState(true)}>
                      + Add Project
                    </button>         
                    
                    <ul className="text-white text-center">
                      {projects.map((project, projectIndex) => (
                            <li 
                            key={project.id}  
                            onClick={() => {
                              setCurrentIndex(projectIndex);
                              setProjectState(false);
                            }}
                            className="mt-1 py-1 px-5">
                            <button>{project.title}</button>
                            </li>
                      ))}
                    </ul>
                </aside>  
    )
}

export default Sidebar;
