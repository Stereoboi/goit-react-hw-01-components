import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item" key={friend.id}>
                    <span class="status"></span>
                    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.ProtoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar:PropTypes.string,
            name:PropTypes.string,
            isOnline:PropTypes.boolean,
            id:PropTypes.number.isRequired
        })
    )
}