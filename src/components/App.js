import _ from 'lodash';
import React, { Component } from 'react';
import AllProjects from './all-projects';
import { Button } from 'react-bootstrap';

let id = 4;
function newId() {
  return id++
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       projects:[],
     };

  }


componentWillMount(){
  if ((JSON.parse(localStorage.getItem('projects')).length) === 0 ){ 
  }
  else{
  let localStorageProjects = localStorage.getItem('projects');
  let getLocalStorageProjects = JSON.parse(localStorageProjects);
  this.setState({ projects: getLocalStorageProjects })
  }
}



render() {
  return (
    <div style={appStyle()} className="App">
      <AllProjects
        projects={this.state.projects}
        saveTitle={this.saveTitle.bind(this)}
        createGoal={this.createGoal.bind(this)}
        saveGoal={this.saveGoal.bind(this)}
        addProjectTodoItem={this.addProjectTodoItem.bind(this)}
        saveProjectTodo={this.saveProjectTodo.bind(this)}
        addGoalTodoItem={this.addGoalTodoItem.bind(this)}
        saveGoalTodo={this.saveGoalTodo.bind(this)}
        deleteProjectTodo={this.deleteProjectTodo.bind(this)}
        deleteGoalTodo={this.deleteGoalTodo.bind(this)}
        deleteProject={this.deleteProject.bind(this)}
        deleteGoal={this.deleteGoal.bind(this)}
        />
      <Button style={styles} onClick={this.createProject} >
        Add Projects
          </Button>
  
    </div>
  );
}

createProject = (title) => {

  this.state.projects.push({
     title: "",
    projectTodos: [],
    goals: [],
     id: newId(),
  })
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

saveTitle(oldTitle, newTitle){
  const foundTitle = _.find(this.state.projects, (project) => { return project.id === oldTitle });
  foundTitle.title = newTitle;
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

deleteProject(projectId){
  _.remove(this.state.projects, (project) => { return project.id === projectId });
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

createGoal(projectId) {
  const findGoal = _.find(this.state.projects, (goal) => { return goal.id === projectId })
  findGoal.goals.push({
    goalId: newId(),
    goal: "",
    goalTodos: [],

  });
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

saveGoal(projectId, oldGoal, newGoal){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  const foundGoal = _.find(foundParentProject.goals, (goal) => { return goal.goalId === oldGoal });
  foundGoal.goalTitle = newGoal;
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

deleteGoal(projectId, oldGoal){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  _.remove(foundParentProject.goals, (goal) => { return goal.goalId === oldGoal });
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

addProjectTodoItem(projectId){
  const findProject = _.find(this.state.projects, (projectTodo) => { return projectTodo.id === projectId })
  findProject.projectTodos.push({
    projectTodoId: newId(),
    projectTodoItem: "",

  });
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

saveProjectTodo(projectId, oldTodo, newTodo){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  const foundProjectTodo = _.find(foundParentProject.projectTodos, (projectTodo) => { return projectTodo.projectTodoId === oldTodo });
  foundProjectTodo.projectTodoItem = newTodo;
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

deleteProjectTodo(projectId, deleteProjectToId){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  _.remove(foundParentProject.projectTodos, (projectTodo) => projectTodo.projectTodoId === deleteProjectToId);
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

addGoalTodoItem(projectId, thisGoalId){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  const foundGoal = _.find(foundParentProject.goals, (goal) => { return goal.goalId === thisGoalId });
  foundGoal.goalTodos.push({
    goalTodoId: newId(),
    goalTodoItem: "",
  });
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}

saveGoalTodo(projectId, thisGoalId, oldTodo, newTodo){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  const foundGoal = _.find(foundParentProject.goals, (goal) => { return goal.goalId === thisGoalId });
  const foundGoalTodo = _.find(foundGoal.goalTodos, (todo) => { return todo.goalTodoId === oldTodo });
  foundGoalTodo.goalTodoItem = newTodo;
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}
deleteGoalTodo(projectId, thisGoalId, deleteGoalToId){
  const foundParentProject = _.find(this.state.projects, (parentProject) => { return parentProject.id === projectId });
  const foundGoal = _.find(foundParentProject.goals, (goal) => { return goal.goalId === thisGoalId });
  _.remove(foundGoal.goalTodos, (goalTodo) => goalTodo.goalTodoId === deleteGoalToId);
  this.setState({ projects: this.state.projects });
  localStorage.setItem('projects', JSON.stringify(this.state.projects));
}
 

}

 let styles = {
    background: 'white',
    border: '1px solid',
    borderRadius: 4,
    color: 'black',
    padding: '1em',
    margin: '4px'
  };
function appStyle(){
   let width = window.innerWidth;
    if (width < 410){
      return {
          'display': 'inlineBlock',
          'margin': 'auto',
          'width': '90%',
        }

    }else{
      return {
          'display': 'inlineBlock',
          'margin': 'auto',
          'width': '45%',
          'minWidth': '400px'    
        }
    }
 }
