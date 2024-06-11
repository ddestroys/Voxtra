import {makeAutoObservable} from "mobx";
import axios from "axios";
import {User} from "./user.types";
import {RootStore} from "../root";

export class UserPlaylistStore {
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
}