import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    // call deletePost action, which has been mapped to props
    this.props.deletePost(this.props.params.id)
    .then(() => {
      // blog post deleted
      // call this.context.router.push with destination
      this.context.router.push('/');
    });
  }

  render() {
    const { post } = this.props;
    // good spot for a spinner
    if (!post) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <Link to='/'>
          Back
        </Link>
        <button
          className='btn btn-danger-outline pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
