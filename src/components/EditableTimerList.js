import React, {Component} from "react";
import EditableTimer from './EditableTimer'

class EditableTimerList extends Component {
    render() {
        return (
            <div id="timer" className="">
                <EditableTimer 
                    title="Learn React"
                    project="Web Domination"
                    elapsed="8986300"
                    runningSince= {null}
                    editFormOpen={false}
                />
                <hr/>
                <EditableTimer 
                    title="Learn Learn extreme ironing"
                    project="World Domination"
                    elapsed="3890985"
                    runningSince= {null}
                    editFormOpen={true}
                />
            </div>
        );
    }
}
export default EditableTimerList;