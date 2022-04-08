import React from 'react';
import { connect } from 'react-redux';
import { fetchUser_Memoized } from '../../actions';

class UserDetails extends React.Component {
  componentDidMount() {
    this.props.fetchUser_Memoized(this.props.userId);
  }
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}



const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser_Memoized })(UserDetails);
