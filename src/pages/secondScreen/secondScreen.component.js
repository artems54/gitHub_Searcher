import React from 'react'
import { useUser } from '../../api';
import { useRepos } from '../../api';
import Repo from './repo/repo.js'
import css from './style.module.css'
import Search from "../../components/search/"
import List from "../../components/list/index"
import {BrowserRouter as Router, Link} from 'react-router-dom';

const SecondScreen = () => {
    const user = useUser();
    const {repos, setSearchValue} = useRepos();
    console.log(user)
  return (
    <div className={css.box}>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div className={css.header}>
        <h2>GitHub Searcher</h2>
      </div>
      <div className={css.profile}>
        <img src={user.avatar_url} className={css.avatar}></img>
        <div>
          <p>{user.login}</p>
          <p>{user.email}</p>
          <p>{user.location}</p>
          <p>{user.created_at}</p>
          <p>{user.followers} Followers</p> 
          <p>Following {user.following}</p> 
        </div>
      </div>
      <div className={css.search}>
        <Search placeholder='search repos' onSearch={setSearchValue}/>
      </div>
      <ul className={css.list}>{ repos.map((item) => {
      return <Repo name={item.name} forks={item.forks} key={item.id}/>
      })
      }</ul>
      <List/>
    </div>
  )
}

export default SecondScreen