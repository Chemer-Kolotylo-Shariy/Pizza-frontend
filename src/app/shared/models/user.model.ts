export class User{
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public phone: number,
    public password: string,
    public role: string,
    public id?: number
    ){}
}
