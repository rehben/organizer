import React from 'react';

export default class ProjectTodoMenu extends React.Component {
 
 doneButton(){
       if(this.props.striked){
           return "Re-Open"
       }else if (this.props.striked === false){
           return "Done"
       }
    }
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
        'width': '80%'
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
                <button onClick={this.itemDone.bind(this)} style={buttonStyle()}>{this.doneButton()}</button>
                <button onClick={this.props.deleteTodo} style={buttonStyle()}>Delete</button>
                <button onClick={this.editItem.bind(this)} style={buttonStyle()}>{this.editButton()}</button>
            </div>  
            
            )
        }
    itemDone(){
        this.props.itemDone();
    }
    
    editItem(){
        if(this.props.isEditing){
           this.props.setProjectTodo()
       }else if (this.props.isEditing === false){
           this.props.editTodo()
       }
        
    }
}
