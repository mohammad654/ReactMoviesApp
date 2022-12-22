import React, { Component } from 'react'
class Like extends Component {
    state = {  } ;

    render() { 
        let classesLike="fa fa-heart";
        if(!this.props.liked) classesLike +="-o";
        return (<i onClick={this.props.myLike}
        className={classesLike}
         onClick={this.props.onClick} 
         aria-hidden="true"
         style={{cursor:"pointer"}}></i>
        );
    }
}
 
export default Like;