import {makeAutoObservable} from "mobx";
import {AuthStore} from "./auth";
import {UserStore} from "./user";
import {GenresStore} from "./genres";
import {Track} from "./track";
import {PlayerStore} from "./player";

export class RootStore {
    auth: AuthStore;
    user: UserStore;
    genres: GenresStore
    track: Track
    player: PlayerStore

    loading = true
    constructor() {
        makeAutoObservable(this)
        this.auth = new AuthStore(this)
        this.user = new UserStore(this)
        this.genres = new GenresStore(this)
        this.player = new PlayerStore(this)
        this.track = new Track(this)
    }

    init = async () => {
        if(localStorage.getItem('token')) {
            this.auth.setLoggedIn(true)
            await this.user.setUser()
        }
        await this.genres.getGenres()
        await this.track.fetchTracks()
        this.loading = false
    }
}