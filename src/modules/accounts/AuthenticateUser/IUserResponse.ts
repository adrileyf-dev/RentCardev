export default interface IUserResponse {
  user: {
    name: string;

    email: string;
  };
  token: string;
}
