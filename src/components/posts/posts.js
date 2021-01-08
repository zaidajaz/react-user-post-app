import React from 'react';
import { withRouter } from 'react-router-dom';
import Post from './post';
import './posts.scss';

class Posts extends React.Component {

    componentDidMount() {
        this.props.onLoad("Posts");
        window.scrollTo(0, 0);
    }

    render() {
        let posts = this.props.posts;
        let userID = this.props.match.params.userID;
        posts = posts.filter(post => post.userId == userID);

        return (
            <div className="cmp-posts">
                {posts.map(post => {
                    return <Post key={post.id} post={post} />
                })}
            </div>
        );
    }

}

export default withRouter(Posts);