import {makeAutoObservable} from "mobx";
import axios from "axios";
import {User} from "./user.types";
import {RootStore} from "../root";

export class UserStore {
    rootStore: RootStore;

    user: User | null = null

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    setUser = async () => {
        const email = localStorage.getItem('email')
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    removeUserGenre = async (genreId: number) => {
        const email = localStorage.getItem('email')
        const response = await axios.post(`http://localhost:5000/users/remove_genre/${genreId}`,null,{headers:{Authorization: localStorage.getItem('token')}})
        console.log(response)
        this.user = response.data
    }

    addTrackToHistory = async (trackId: number) => {
        const email = localStorage.getItem('email')
        await axios.post(`http://localhost:5000/user_played_history/${trackId}`,null,{headers:{Authorization: localStorage.getItem('token')}})
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    patchUser = async (data) => {
        const email = localStorage.getItem('email')
        await axios.patch(`http://localhost:5000/users`,data,{headers:{Authorization: localStorage.getItem('token')}})
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    patchTrack = async (data, id) => {
        const email = localStorage.getItem('email')
        await axios.patch(`http://localhost:5000/track/${id}`,data,{headers:{Authorization: localStorage.getItem('token')}})
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    patchPlaylist = async (data, id) => {
        const email = localStorage.getItem('email')
        await axios.patch(`http://localhost:5000/user_playlist/${id}`,data)
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    createUserPlaylist = async (data: {
        name: string;

    }) => {
        const email = localStorage.getItem('email')
        await axios.post(`http://localhost:5000/user_playlist`,data,{headers:{Authorization: localStorage.getItem('token')}})
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    getPlaylist = async (id: number) => {
        return await axios.get(`http://localhost:5000/user_playlist/${id}`,{headers:{Authorization: localStorage.getItem('token')}})
    }

    getPlaylists = async () => {
        return await axios.get(`http://localhost:5000/user_playlist`,{headers:{Authorization: localStorage.getItem('token')}})
    }

    getHistory = async () => {
        return await axios.get(`http://localhost:5000/user_played_history`,{headers:{Authorization: localStorage.getItem('token')}})
    }

    removeTrackFromHistory = async (trackId: number) => {
        console.log(localStorage.getItem('token'))
        return await axios.post(`http://localhost:5000/user_played_history/remove/${trackId}`,null,{headers:{Authorization: localStorage.getItem('token')}})
    }

    removeHistory = async () => {
        console.log(localStorage.getItem('token'))
        return await axios.post(`http://localhost:5000/user_played_history/all/remove`,null,{headers:{Authorization: localStorage.getItem('token')}})
    }

    removeTrackFromPlaylist = async (usersPlaylistId: string, trackId: string) => {
        await axios.post(`http://localhost:5000/user_playlist/remove/${usersPlaylistId}/${trackId}`,null,{headers:{Authorization: localStorage.getItem('token')}})

    }

    deleteTrack = async (trackId: string) => {
        await axios.delete(`http://localhost:5000/track/${trackId}`,{headers:{Authorization: localStorage.getItem('token')}})
    }

    deleteUserPlaylist = async (userPlaylistId: string) => {
        await axios.delete(`http://localhost:5000/user_playlist/${userPlaylistId}`,{headers:{Authorization: localStorage.getItem('token')}})
        const email = localStorage.getItem('email')
        const response = await axios.get(`http://localhost:5000/users/${email}`)
        this.user = response.data
    }

    addTrackToPlaylist = async (usersPlaylistId: string, trackId: string) => {
        await axios.post(`http://localhost:5000/user_playlist/${usersPlaylistId}/${trackId}`,null,{headers:{Authorization: localStorage.getItem('token')}})

    }
}