import {makeAutoObservable} from "mobx";
import axios from "axios";
import {RootStore} from "../root";
import {RegistrationParams} from "./auth.types";

export class AuthStore {
    rootStore: RootStore;

    loggedIn: boolean = false

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    setUser = (email: string) => {
        this.rootStore.user.setUser(email)
    }

    login = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {email, password})
            this.setLoggedIn(true)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('email',email)
            this.setUser(email)
        } catch (e) {
        }
        //init func
    }

    logout = async () => {
        this.loggedIn = false
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }

    setLoggedIn = (isLogged: boolean) => {
        this.loggedIn = isLogged
    }

    register = async (params: RegistrationParams) => {
        const {email} = params
        try {
            const response = await axios.post('http://localhost:5000/auth/registration', params)
            this.setLoggedIn(true)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('email',email)
            this.setUser(email)
        } catch (e) {
        }
        //init func
    }
}