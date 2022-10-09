import PropTypes from 'prop-types';
import css from './Friends.module.css';
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className={friend.isOnline ? css.online : css.offline}></span>
                    <img className= {css.avatar } src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
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
            isOnline:PropTypes.bool,
            id:PropTypes.number.isRequired
        })
    )
}