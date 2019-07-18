import React from 'react';
import {connect} from 'react-redux';
//import {fetchUser} from "../actions";


class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }


    render() {
        //const user = this.props.users.find(user => user.id === this.props.userId);
        const {user} =this.props;//this.props comes from mapStateToProps
        if(!user){
            return null
        }
        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {//this.props.userId is available inside the class or component class only.ownProps object is the reference to the this.props about to be sent in the render method of the component
    return {user: state.users.find(user => user.id === ownProps.userId)}
}
export default connect(mapStateToProps)(UserHeader);