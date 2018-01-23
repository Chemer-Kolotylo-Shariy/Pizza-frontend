export class User{
  constructor(
    private name: string,
    private surname: string,
    private email: string,
    private phone: number,
    private password: string,
    private role: string,
    private id?: number
    ){}
}
