
export class User {

    public mail: string;
    public nickname: string;
    public address: any;
    public lastname: string;
    public firstname: string;
    public password: string;
    public password_confirmation: string;
    public birthdate: any;
    public gender: string;

    static build(data: any): User {
                    
       const {
            mail,
            nickname,
            lastname,
            firstname,
            password_confirmation,
            birthdate,
            address,
            gender,
            password
        } = data;

        const u = new User;
        u.mail = mail;
        u.nickname = nickname;
        u.lastname = lastname;
        u.firstname = firstname;
        u.firstname = firstname;
        u.password = password;
        u.password_confirmation = password_confirmation;
        u.birthdate = birthdate;
        u.address = address;
        u.gender = gender;
        return u;
    }
}