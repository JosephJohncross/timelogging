import React from "react";

class TimerActionButton extends React.Component {
    
    render() {
        if (this.props.timerRunning){
            return (
                <div 
                    className="bg-red-500 max-w-fit text-white px-7 py-1 rounded-sm"
                    onClick={this.props.onStopClick}
                >
                    Stop     
                </div>
            )
        }
        else{
            return (
            <div 
                className="bg-blue-500 max-w-fit text-white px-7 py-1 rounded-sm"
                onClick={this.props.onStartClick}
            >
                Start    
            </div>
            )
        }
    }
}

export default TimerActionButton;