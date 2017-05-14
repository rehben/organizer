import React from 'react';

export default class ProjectMenu extends React.Component {
 
 editButton(){
       if(this.props.isEditing){
           return "Save"
       }else if (this.props.isEditing === false){
           return "Edit"
       }
    }
    render (){
    const style ={
        'listStyleType': 'none',
        'padding': '5px',
        'width': '95%'
    }


    function buttonStyle() {
        if( window.innerWidth < 400 ){
        return{
        'backgroundColor': 'white',
        'border': 'none',
        'borderRight': '1px solid black',
        'borderLeft': '1px solid black',
        'color': 'blacks',
        'paddingTop': '2px',
        'paddingBottom': '2px',
        'width':'100%',
        'textAlign': 'center',
        'textDecoration': 'none',
        'display': 'block',
        'fontSize': '12px', 
        }} else{
            return{
        'backgroundColor': 'white',
        'border': 'none',
        'borderRight': '1px solid black',
        'borderLeft': '1px solid black',
        'color': 'blacks',
        'paddingTop': '2px',
        'paddingBottom': '2px',
        'width':'25%',
        'textAlign': 'center',
        'textDecoration': 'none',
        'display': 'inline',
        'fontSize': '12px', 
            }

        }
    }


        return (
             <div style={style}>
                <button onClick={this.addGoal.bind(this)} style={buttonStyle()}>Add Objective</button>
                <button onClick={this.addTodo.bind(this)} style={buttonStyle()}>Add Item</button>
                <button onClick={this.deleteProject.bind(this)} style={buttonStyle()}>Delete</button>
                <button onClick={this.editTitle.bind(this)} style={buttonStyle()}>{this.editButton()}</button>
            </div>  
            
            )
        }
    addGoal(){
        const projectId = this.props.id;
        this.props.createGoal(projectId)
    }
    addTodo(){
        const projectId = this.props.id;
        this.props.addProjectTodoItem(projectId)
    }
    deleteProject(){
        const projectId = this.props.id;
        this.props.deleteProject(projectId)  
    }
    editTitle(){
        if(this.props.isEditing){
           this.props.setTitle()
       }else if (this.props.isEditing === false){
           this.props.EditTitle()
       }
        
    }
}
