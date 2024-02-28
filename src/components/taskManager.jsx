import Button from "./Button";
const TaskManager = () => {
    return (
        <div className="taskWrapper">
            <form>
                <label 
                htmlFor="title" 
                className="label-1"> Title
                    <input 
                    type="text" 
                    name="title"
                    placeholder="enter title" 
                    id="title"
                    className="inputStyling"/>
                </label>

                <label 
                htmlFor="description"
                className="label-1"> Description
                    <input 
                    type="text" 
                    name="title"
                    placeholder="enter description" 
                    id="description"
                    className="inputStyling"/>
                </label>
                <input type="date" className="inputStyling" />
            </form>
            <div className="btnWrap">
                 <Button>Add Task</Button>
            </div>

        </div>
    )
}
export default TaskManager;