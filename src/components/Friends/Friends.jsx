import { FriendListItem } from 'components/FriendsListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './Friends.module.css';
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                  <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>  
                </li>
            ))}
        </ul>
    )
}

FriendList.ProtoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
}