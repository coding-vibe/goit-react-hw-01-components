import Profile from './profile/Profile';
import user from '../data/user.json';
import Statistics from './statisitics/Statistics';
import data from '../data/data.json';
import FriendList from './friend_list/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './transaction-history/TransactionHistory'
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
}