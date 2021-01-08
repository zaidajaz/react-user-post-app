import { ImLocation } from 'react-icons/im';
import { Link } from "react-router-dom";

function UserCard(props) {
    return (
        <div className="cmp-user-card">
            <img className="cmp-user-card__avatar" src={`https://i.pravatar.cc/300?img=${props.user.id + 13}`}></img>
            <div className="cmp-user-card__details">
                <h2 className="cmp-user-card__heading">{props.user.name} ({props.user.username})</h2>
                <div className="cmp-user-card__sub-heading">{props.user.phone} | {props.user.email} | {props.user.website}</div>
                <ImLocation /> <span>{props.user.address.street}, {props.user.address.city} - {props.user.address.zipcode}</span>
                {/* <button className="cmp-user-card__action">View Posts</button> */}
                <Link className="cmp-user-card__action" to={`/posts/${props.user.id}`}>View Posts</Link>
            </div>
        </div>
    );
}

export default UserCard;