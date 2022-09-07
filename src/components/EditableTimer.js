import React from 'react';
import Timer from './Timer'
import TimerForm from './TimerForm'

class EditableTimer extends React.Component {

    state = {
        editFormOpen: false,
    }

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                />
            )
        }
        else{
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningState={this.props.runningState}
                />
            )
        }
    }
}

export default EditableTimer;