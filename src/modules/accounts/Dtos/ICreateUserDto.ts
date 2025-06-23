interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
  driver_license: string;
  isAdmin: boolean;
}
export { ICreateUserDto };
