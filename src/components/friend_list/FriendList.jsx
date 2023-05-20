import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import { ContainerList, List, El } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <ContainerList className="container">
        <List className="friend-list">{friends.map((friend) => (
            <El className="item" key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            </El>
        ))}
            </List>
            </ContainerList>
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