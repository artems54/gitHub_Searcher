import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from './constants';
import { useParams } from 'react-router-dom';

export const useUsers = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${baseUrl}/users?since=30&per_page=30`)
        .then(response => setUsers(response.data))
    }, [])  
    const onUserSearch = (username) => {
        axios.get(`${baseUrl}/users/${username}`)
        .then(response => setUsers([response.data]))
    }
    return {users, onUserSearch}
}
export const useUser = () => {
    const params = useParams();
    const [user,setUser] = useState({});
    useEffect(() => {
        if (params.userid){
        axios.get(`${baseUrl}/users/${params.userid}`)
        .then(response => setUser(response.data))
        }
    }, [params.userid])  
    return user
}
export const useRepos = () => {
    const params = useParams();
    const [repos,setRepos] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        if (params.userid){
        axios.get(`${baseUrl}/users/${params.userid}/repos`)
        .then(response => setRepos(response.data))
        console.log(repos)
        }
    }, [params.userid])  
    const onRepoSearch = (repoName) => {
        return repos.filter((repo) => {
            return repo.name.toLowerCase() === repoName.toLowerCase()
        })
    }
    const currentRepos = searchValue?onRepoSearch(searchValue):repos
    return {repos: currentRepos, setSearchValue}
}