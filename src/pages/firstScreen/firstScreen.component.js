import css from './style.module.css';
import User from './user/user'
import { useUsers } from '../../api';
import Search from "../../components/search/"
import List from "../../components/list/index"

function FirstScreen() {
  const {users, onUserSearch} = useUsers();
  return (
    <div className={css.page}>
      <h1>
        First Screen
      </h1>
      <div className={css.wrapBox}>
      <h2>GitHub Searcher</h2>
      <Search placeholder="Search for Users" onSearch={onUserSearch} />
      <ul className={css.column}>{ users.map((item) => {
      return <User img={item.avatar_url} username={item.login} repo={item.repos_url} key={item.id} className={css.user}/>
      })
      }</ul>
      </div>
      <List/>
    </div>
  )
}

export default FirstScreen;
