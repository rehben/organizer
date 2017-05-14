import React from 'react';
import ProjectMenu from './project-menu';
import Textarea from 'react-textarea-autosize';

export default class ProjectTitle extends React.Component {
 constructor(props){
     super(props);

     this.state = {

         isEditing: false,
         showMenu: true
     };

 }
 componentWillMount(){
     const checkTitle = this.props.title
        if(checkTitle === ""){
            this.setState({ isEditing: true }),
            this.setState({ showMenu: false })
        }
     
 }



 renderTitle(){
     let title = this.props.title;
     const style = {
        'fontSize': '20px',            
        'width': '100%',
        'borderBottom': '2px solid',
        'padding':'10px 2px 10px 2px',
     
     }
      const textareastyle = {
        'fontFamily': 'arial',
        'fontSize': '20px', 
        'width': '100%',
        'resize': 'none',
        'minHeight':'2em' 
        };
    
        if(this.state.isEditing){
            return(
            <div>
                <form>
                     <Textarea style={textareastyle} type='text' placeholder="enter project..." defaultValue={title} ref="titleInput"></Textarea>
                </form> 
            </div>
          )
      };
      return (
        <div onClick={this.handleShowMenu.bind(this)} style={style}>
            <span> {title} </span>
        </div>
      )
 }

    render (){
    const titleAreaStyle = {
        'fontFamily': 'arial',
        'width': '95%',
        'padding': '3px'
    }
        return ( 
            <div style={titleAreaStyle}>
                {this.renderTitle()}
                {this.showMenu()}
                
            </div>
         )
    }
    
    showMenu(){
        const discriptionStyle = {
            'fontSize': '11px',
            'paddingLeft': '5%',
        }
        if(this.state.showMenu ===false){
            return   <ProjectMenu {...this.props}
                    EditTitle={this.EditTitle.bind(this)}
                    isEditing={this.state.isEditing}    
                    setTitle={this.setTitle.bind(this)}
                /> 
        } else if (this.state.showMenu){
            return <span style={discriptionStyle}>Project</span>
        }
    }
    handleShowMenu(){
        if(this.state.showMenu ===false){
            this.setState({showMenu: true})
        }else if (this.state.showMenu){
            this.setState({showMenu: false})
        }
    }

    EditTitle(){
        this.setState({ isEditing: true });
    }

    setTitle(event){ 

        const oldTitle = this.props.id;
        const newTitle = this.refs.titleInput.value;
        if(newTitle === ""){this.setState({ isEditing: true })}
        else{
            this.props.saveTitle(oldTitle, newTitle);
            this.setState({ isEditing: false });
        }
    }


    
}
