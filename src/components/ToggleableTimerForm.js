import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm/>
            )
        }
        else{
            return (
                <div className="">
                    <button className=''>
                        <i className="uil uil-plus"></i>
                    </button>
                </div>
            )
        }
    }
}

export default ToggleableTimerForm