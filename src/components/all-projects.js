import _ from 'lodash';
import React from 'react';
import ProjectDiv from './project-div';

export default class AllProjects extends React.Component {
    renderProjects(){
         const props = _.omit(this.props, 'projects')

        return _.map(this.props.projects, (project, index) => <ProjectDiv key={index} {...project} {...props} />);
    }
  

    render (){
        return (
            <div>
                {this.renderProjects()}
            </div>
        )
    }


}

