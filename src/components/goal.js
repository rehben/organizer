import _ from 'lodash';
import React from 'react';
import GoalTodoItem from './goal-todo-item';
import Textarea from 'react-textarea-autosize';
import GoalMenu from './goal-menu';

export default class GoalTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            showMenu: true
        };

    }
     componentWillMount(){
     const checkTitle = this.props.goalTitle
        if(checkTitle === undefined){
            this.setState({ isEditing: true }),
            this.setState({ showMenu: false })
        }
        console.log(checkTitle)
     
 }
    renderGoalTodos(){
        const props = _.omit(this.props, 'projects')
        return _.map(this.props.goalTodos, (goalTodo, index) => <GoalTodoItem key={index} {...goalTodo} {...props} />);
    }

    renderGoal() {
        let goal = this.props.goalTitle;
        const textareastyle = {
            'fontFamily': 'arial',
            'width': '95%',
            'resize': 'none',  
            'fontSize': '17px', 
        }

     
        const goalTitleStyle = {
            'fontFamily': 'arial',
            'borderBottom': '2px solid',
            'width': '95%',
            'fontSize': '17px', 
            'marginTop': '5px',
            'padding': '5px'
        }

        if (this.state.isEditing) {
            return (
                <div>
                    <Textarea style={textareastyle} type='text' placeholder="enter objective" defaultValue={goal} ref="goalInput"></Textarea>
                </div>
            )
        };
        return (
            <div style={goalTitleStyle} onClick={this.handleShowMenu.bind(this)}>
                <span> {goal} </span>
            </div>
        )
    }

    render() {
        const goalDivStyle = {     
            'borderTopStyle': 'double',
            'width': '98%',
            'padding': '5px',
            'marginTop': '10px'
        }
        
        return (
            <div style={goalDivStyle}>
                {this.renderGoal()}
                {this.showMenu()}
                {this.renderGoalTodos()}
            </div>
        )
    }
    showMenu(){
        const discriptionStyle = {
            'fontSize': '11px',
            'paddingLeft': '5%',
            'fontFamily': 'Arial'
        }
        if(this.state.showMenu ===false){
            return   <GoalMenu {...this.props}
                    editGoal={this.editGoal.bind(this)}
                    isEditing={this.state.isEditing}    
                    setGoal={this.setGoal.bind(this)}
                /> 
        } else if (this.state.showMenu){
            return <span style={discriptionStyle}>objective</span>
        }
    }
    handleShowMenu(){
        if(this.state.showMenu ===false){
            this.setState({showMenu: true})
        }else if (this.state.showMenu){
            this.setState({showMenu: false})
        }
    }

    editGoal() {
        this.setState({ isEditing: true });
    }

    setGoal(event) {
        const projectId = this.props.id;
        const oldGoal = this.props.goalId;
        const newGoal = this.refs.goalInput.value;
        if (newGoal === "") { }
        else {
            this.props.saveGoal(projectId, oldGoal, newGoal);
            this.setState({ isEditing: false });
        }
    }
}
