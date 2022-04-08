import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsJoinUsers } from '../../actions';
import UserDetails from './UserDetails';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsJoinUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <UserDetails userId={post.userId} />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsJoinUsers }
)(PostList);
