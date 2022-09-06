import React, {Component} from "react";
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

class TimerDashboard extends Component {
    render() {
        return (
            <div className="">
                <div className="">
                    <EditableTimerList/>
                    <hr/>
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        )
    }
}

export default TimerDashboard;