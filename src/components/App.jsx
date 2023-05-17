import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './stats/Statistics';
import data from './stats/data.json';

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
    </div>
  );
}