import React from "react";

class TimerActionButton extends React.Component {
    
    render() {
        if (this.props.timerRunning){
            return (
                <div 
                    className=""
                    onClick={this.props.onStopClick}
                >
                    Stop     
                </div>
            )
        }
        else{
            return (
            <div 
                className=""
                onClick={this.props.onStartClick}
            >
                Start    
            </div>
            )
        }
    }
}

export default TimerActionButton;