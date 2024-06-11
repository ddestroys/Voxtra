import {makeAutoObservable} from "mobx";
import axios from "axios";
import {User} from "./user.types";
import {RootStore} from "../root";
import {TrackGenre} from "./genres.types";

export class GenresStore {
    rootStore: RootStore;

    genres: TrackGenre[] = []

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    getGenres = async () => {
        const {data: genres} = await axios.get<TrackGenre[]>(`http://localhost:5000/track_genre`)
        this.genres = genres
    }
}