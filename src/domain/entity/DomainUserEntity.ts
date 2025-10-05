export class DomainUserEntity {
  constructor(
    public userId: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phone: string,
    public role: string,
    public birthDate: Date,
    public address: string,
    public active: boolean = true
  ) {}
}
