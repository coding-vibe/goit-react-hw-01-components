import PropTypes from "prop-types";
import { Container, Status, Avatar, Name } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Container>
            <Status status={isOnline} className="status"></Status>
            <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </Container>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;