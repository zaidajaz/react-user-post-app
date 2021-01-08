import UserCard from './user-card';
import './user-card.scss';
import React from 'react';

class UserCards extends React.Component {

    componentDidMount() {
        this.props.onLoad("Users")
    }

    render() {
        return (
            <div className="cmp-user-cards">
                {this.props.users.map(user => {
                    return (
                        <UserCard key={user.id} user={user} />
                    )
                })}
            </div>
        );
    }
}

export default UserCards;