import React from 'react'
import {renderElapsedString} from '../helper'

class Timer extends React.Component {
    render() {
        const elapsedString = renderElapsedString(this.props.elapsed)
        return (
            <div className=''>
                <div className="content">
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className="">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className='extra content'>
                        <span className=''>
                        <i className="uil uil-edit"></i>
                        </span>
                        <span className=''>
                            <i className="uil uil-trash-alt"></i>
                        </span>
                    </div>
                </div>
                <div className=''>Start</div>
            </div>
        )
    }
}

export default Timer;