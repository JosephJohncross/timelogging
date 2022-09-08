import React from 'react'
import {renderElapsedString} from '../helper'
import TimerActionButton from './TimerActionButton';

class Timer extends React.Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(()=>this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval)
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    }

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    }

    render() {
        const elapsedString = renderElapsedString(this.props.elapsed, this.props.runningSince)
        return (
            <div className='mb-10 shadow-lg py-4 px-4 md:min-w-[300px]'>
                <div className="content space-y-2">
                    <div className='header text-2xl'>
                        {this.props.title} 
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className="font-bold text-xl">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className='flex space-x-2 pb-4'>
                        <span 
                            className=''
                            onClick={this.props.onEditClick}
                        >
                            <i className="fa-solid fa-pen-to-square text-green-500"></i>
                        </span> 
                        <span 
                            className=' '
                            onClick={this.handleTrashClick}
                        >
                            <i className="fa-solid fa-trash text-red-500"></i>
                        </span>
                    </div>
                </div>
                <TimerActionButton
                    timerRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        )
    }
}

export default Timer;