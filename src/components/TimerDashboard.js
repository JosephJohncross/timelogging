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

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    }

    handleDeleteTimer = (timerId) => {
        this.deleteTimer(timerId)
    }

    handleStartClick = (timerId) => {
        this.startTimer(timerId)
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId)
    }

    createTimer = (timer) => {
        const t = newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        })
    }

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id){
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    })
                }
                else{
                    return timer
                }
            })
        })
    }

    deleteTimer = (timerId) => {
        // const updatedTimerList = this.state.timers.map(timer => 
        //     timer.id !== timerId
        // )
        // this.setState({timers: updatedTimerList})
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        })
        
    }

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === timerId){
                    return Object.assign({}, timer, {
                        runningSince: now,
                    })
                }
                else{
                    return timer
                }
            })
        })
    }

    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === timerId){
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    })
                }
                else{
                    return timer
                }
            })
        })
    }

    

    render() {
        return (
            <div className="">
                <div className="">
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleDeleteTimer}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
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