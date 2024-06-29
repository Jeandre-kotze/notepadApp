import logo from "/logo.png";

export default function ProjectNotSelected({startNewProject}){
    console.log("ProjectNotSelected");
    return (
        <div className="items-center flex flex-col  gap-2 text-lg">
            <img src={logo} className="size-40" alt="board" />
            <h1>No Project selected</h1>
            <h3 className="pb-2 text-center">Select a project or create a new one</h3>
            <button className="bg-gradient-to-r from-pink-400 to-blue-500 text-white rounded-lg py-2 px-4 " 
            onClick={startNewProject}>Create new project</button>
        </div>
    )
}
