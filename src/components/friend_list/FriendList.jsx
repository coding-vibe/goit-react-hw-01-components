import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">{friends.map((friend) => (
            <li className="item" key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline} />
            </li>
        ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default FriendList;