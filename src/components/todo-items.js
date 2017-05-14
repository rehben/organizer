import React from 'react';
import Textarea from 'react-textarea-autosize';
import ProjectTodoMenu from './todo-item-menu'

export default class TodoItem extends React.Component {
 constructor(props){
     super(props);
     this.state = {
         isEditing: false,
         striked: false,
         showMenu: true
     }  

 }
  componentWillMount(){
     const checkTitle = this.props.projectTodoItem
        if(checkTitle === ""){
            this.setState({ isEditing: true }),
            this.setState({ showMenu: false })
        }
  }
 renderGoal(){
    let todoItem = this.props.projectTodoItem;
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

        if(this.state.isEditing){
            return(
                <div style={style}>
                     <Textarea style={textareastyle} type='text' placeholder="enter to do item" defaultValue={todoItem} ref="ProjectTodoInput"></Textarea>                     
                </div> 
          )
      } else if(this.state.striked){
          return(
            <div style={style} onClick={this.handleShowMenu.bind(this)}>
                <strike> {todoItem} </strike>            
            </div>
          )
      }else{
      return (
        <div style={style} onClick={this.handleShowMenu.bind(this)}>
            <span> {todoItem} </span>            
        </div>
      )
 }}

    render (){
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
                 setProjectTodo={this.setProjectTodo.bind(this)}
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
    editTodo(){
        this.setState({ isEditing: true });
    }

    setProjectTodo(event){ 
        const projectId =this.props.id;
        const oldTodo = this.props.projectTodoId;
        const newTodo = this.refs.ProjectTodoInput.value;
        if(newTodo === ""){}
        else{
            this.props.saveProjectTodo(projectId, oldTodo, newTodo);
            this.setState({ isEditing: false });
        }
    }
    itemDone(){
        if(this.state.striked){
            this.setState({striked: false})
        }else if(this.state.striked === false){
            this.setState({striked: true})
        }
    }

    deleteTodo(){
        const projectId =this.props.id;  
        const deleteProjectToId =this.props.projectTodoId;
        this.props.deleteProjectTodo(projectId, deleteProjectToId)
    }
    
}