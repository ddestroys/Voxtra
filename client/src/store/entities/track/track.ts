import {makeAutoObservable} from "mobx";
import axios from "axios";
import {RootStore} from "../root";

export class Track {
    tracks = []
    error = ''
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    fetchTracks = async () => {
        const response = await axios.get('http://localhost:5000/track')
        this.tracks = response.data
        return response
    }

    setTracks = async (tracks) => {
        this.tracks = tracks.filter(({approved}) => approved)
    }

    searchTracks = async (query) => {
        const response = await axios.get(`http://localhost:5000/track/search?query=${query}`)
        this.tracks = response.data.filter(({approved}) => approved)
    }
}