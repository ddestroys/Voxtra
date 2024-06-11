export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly username: string;
    readonly favouriteGenres: string[];
    readonly subscription_type: string;
    readonly role: string;
}