import React from 'react';


export default class GoaltMenu extends React.Component {
 
 editButton(){
       if(this.props.isEditing){
           return "Save"
       }else if (this.props.isEditing === false){
           return "Edit"
       }
    }
    render (){
    const style ={
        "display": "inline-block",
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
         'width':'33.3%',
        'textAlign': 'center',
        'textDecoration': 'none',
        'display': 'inline',
        'fontSize': '12px', 
            }

        }
    }
        return (
             <div style={style}>
                <button onClick={this.createGoalTodoItem.bind(this)} style={buttonStyle()}>Add Item</button>
                <button onClick={this.deleteGoal.bind(this)} style={buttonStyle()}>Delete</button>
                <button onClick={this.editTitle.bind(this)} style={buttonStyle()}>{this.editButton()}</button>
            </div>  
            
            )
        }
    createGoalTodoItem() {
        const projectId = this.props.id;
        const thisGoalId = this.props.goalId
        this.props.addGoalTodoItem(projectId, thisGoalId)
    }
   deleteGoal(){
        const projectId = this.props.id;
        const oldGoal = this.props.goalId;
        this.props.deleteGoal(projectId, oldGoal)
    }
    editTitle(){
        if(this.props.isEditing){
           this.props.setGoal()
       }else if (this.props.isEditing === false){
           this.props.editGoal()
       }
        
    }
}

