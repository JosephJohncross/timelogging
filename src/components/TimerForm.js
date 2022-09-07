import React from "react";

class TimerForm extends React.Component{

    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleProjectChange = (e) => {
        this.setState({project: e.target.value})
    }

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        })
    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className="">
                <div className="">
                        <div className="">
                            <label>Title</label>
                            <input 
                                type="text"
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className="">
                            <label>Project</label>
                            <input 
                                type="text"
                                value={this.state.project}
                                onChange={this.handleProjectChange}
                            />
                        </div>
                        <div className="">
                            <button 
                                className=""
                                onClick={this.handleSubmit}
                            >{submitText}</button>
                            <button 
                                className=""
                                onClick={this.props.onFormClose}
                            >Cancel</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default TimerForm;