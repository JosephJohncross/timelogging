import React, {Component} from "react";
import { v4 as uuidv4 } from "uuid";
import {newTimer} from '../helper'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

class TimerDashboard extends Component {

    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuidv4(),
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuidv4(),
                elapsed: 1273998,
                runningSince: null,
            }

        ]
    }

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }

    createTimer = (timer) => {
        const t = newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        })
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <EditableTimerList
                        timers={this.state.timers}
                    />
                    <hr/>
                    <ToggleableTimerForm
                        onFormSubmit = {this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        )
    }
}

export default TimerDashboard;