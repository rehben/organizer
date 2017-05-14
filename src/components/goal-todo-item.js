import React from 'react';
import Textarea from 'react-textarea-autosize';
import ProjectTodoMenu from './todo-item-menu'

export default class GoalTodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            striked: false,
            showMenu: true
        };

    }
    componentWillMount(){
     const checkTitle = this.props.goalTodoItem
        if(checkTitle === ""){
            this.setState({ isEditing: true }),
            this.setState({ showMenu: false })
        }
  }

    renderGoal() {
        let goalTodoItem = this.props.goalTodoItem;
    
        const textareastyle = {
            'fontFamily': 'Calibri',
            'width': '100%',
            'resize': 'none',
            'fontSize': '15px'
        }
        const style = {
            'fontFamily': 'Calibri',
            'borderBottom': '1px solid gray',
            'width': '80%',
            'wordWrap': 'break-word',
            'margin-top': '10px',
            'fontSize': '15px'
            
        };
     

        if (this.state.isEditing) {
            return (
                <div style={style}>
                    <Textarea style={textareastyle} type='text' placeholder="enter to do item" defaultValue={goalTodoItem} ref="goalTodoInput" ></Textarea>
                </div>
            )
        }else if(this.state.striked){
          return(
            <div style={style} onClick={this.handleShowMenu.bind(this)}>
                <strike> {goalTodoItem} </strike>            
            </div>
          )
      }else
        return (
            <div style={style} onClick={this.handleShowMenu.bind(this)}>
                <span> {goalTodoItem} </span>
            </div>
        )
    }

    render() {
        return (
            <ul>
                {this.renderGoal()}
                {this.showMenu()}
            </ul>
        )
    }
    showMenu(){
        if(this.state.showMenu ===false){
            return  <ProjectTodoMenu
                 {...this.props}
                 itemDone={this.itemDone.bind(this)}
                 striked={this.state.striked}
                 isEditing={this.state.isEditing}
                 editTodo={this.editTodo.bind(this)}
                 setProjectTodo={this.setGoalTodo.bind(this)}
                 deleteTodo={this.deleteTodo.bind(this)}
                 /> 
        } else if (this.state.showMenu){
            null
        }
    }
    handleShowMenu(){
        if(this.state.showMenu ===false){
            this.setState({showMenu: true})
        }else if (this.state.showMenu){
            this.setState({showMenu: false})
        }
    }
    editTodo() {
        this.setState({ isEditing: true });
    }
    itemDone(){
        if(this.state.striked){
            this.setState({striked: false})
        }else if(this.state.striked === false){
            this.setState({striked: true})
        }
    }
    setGoalTodo(event) {
        const projectId = this.props.id;
        const thisGoalId = this.props.goalId
        const oldTodo = this.props.goalTodoId;
        const newTodo = this.refs.goalTodoInput.value;
        if (newTodo === "") { }
        else {
            this.props.saveGoalTodo(projectId, thisGoalId, oldTodo, newTodo);
            this.setState({ isEditing: false });
        }
    }
    deleteTodo() {
        const projectId = this.props.id;
        const deleteGoalToId = this.props.goalTodoId;
        const thisGoalId = this.props.goalId;
        this.props.deleteGoalTodo(projectId, thisGoalId, deleteGoalToId)
    }


}