import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, status }) => {
    return (
        <div>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default FriendListItem;