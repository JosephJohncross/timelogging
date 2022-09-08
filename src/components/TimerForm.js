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
            <div className="border-2 border-gray-500 border-dotted max-w-max mb-10 py-3">
                <div className="flex flex-col align-center px-8 border-1 space-y-2 mb-1">
                    <label className="font-bold">Title</label>
                    <input 
                        className="border-gray-300 border-2 bg-white px-2 focus:outline-gray-500"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div className="flex flex-col align-center px-8 border-1 space-y-2">
                    <label className="font-bold">Project</label>
                    <input 
                        className="border-gray-300 border-2 bg-white px-2 focus:outline-gray-500"
                        type="text" 
                        value={this.state.project}
                        onChange={this.handleProjectChange}
                    />
                </div>
                <div className="flex space-x-6 px-8 mt-5">
                    <button 
                        className="px-3 rounded-sm text-white bg-green-600"
                        onClick={this.handleSubmit}
                    >{submitText}</button>
                    <button 
                        className="px-3 rounded-sm text-white bg-red-500"
                        onClick={this.props.onFormClose}
                    >Cancel</button>
                </div>
            </div>
        )
    }
}

export default TimerForm;