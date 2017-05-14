import _ from 'lodash';
import React from 'react';
import ProjectTitle from './project-title';
import GoalTitle from './goal';
import TodoItem from './todo-items';

const goals = [{
    Id:1,
    goalTitle: "will this goal work"

}]

let goalId = 2;
function newGoalId(){return goalId++}

export default class ProjectDiv extends React.Component {

 renderGoal(){
    const props = _.omit(this.props, 'projects')
    return _.map(this.props.goals, (goal, index) => <GoalTitle key={index} {...goal}  {...props}/>);     
 }
 renderTodo(){
     const props = _.omit(this.props, 'projects')
    return _.map(this.props.projectTodos, (todo, index) => <TodoItem key={index} {...todo}  {...props}/>);  
 }

    render (){
    const style = {
            'border': '1px solid',   
            'borderRadius': '8px',         
            'width': '100%',
            'padding': '5px',
            'margin': '5px 0px 5px 0px',

        };
        return ( 
            <div style ={style}>
                <ProjectTitle  style ={style} {...this.props}/>
                <div>{this.renderTodo()} </div>
                {this.renderGoal()}
            </div>
                
        )
    }

}
 
