import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {

  render() {
    const {
      fields: {title, categories, content},
      handleSubmit
    } = this.props;

    return (
      <div className='row'>
        <div className='col-lg-6 col-lg-offset-3'>
          <form className='form' onSubmit={handleSubmit(this.props.createPost)}>
            <h3>Create a New Post</h3>
            <fieldset className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
              <label className='sr-only'>Title</label>
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                {...title}
              />
              <div className='text-help'>
                {title.touched ? title.error : ''}
              </div>
            </fieldset>
            <fieldset className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
              <label className='sr-only'>Categories</label>
              <input
                type="text"
                placeholder="Categories"
                className="form-control"
                {...categories}
              />
              <div className='text-help'>
                {categories.touched ? categories.error : ''}
              </div>
            </fieldset>
            <fieldset className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
              <label className='sr-only'>Content</label>
              <textarea
                placeholder="Content"
                className="form-control"
                {...content}
              />
              <div className='text-help'>
                {content.touched ? content.error : ''}
              </div>
            </fieldset>
            <div className='btn-toolbar pull-xs-right'>
              <button type="submit" className='btn btn-primary-outline'>Submit</button>
              <Link to='/' className='btn btn-danger-outline'>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title, plz';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories, plz';
  }
  if (!values.content) {
    errors.content = 'Enter a content, plz';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
