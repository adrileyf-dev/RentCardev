import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateServiceUser from './AuthenticateServiceUser';
class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateServiceUser = container.resolve(AuthenticateServiceUser);
    const token = await authenticateServiceUser.execute({ email, password });

    return response.json(token);
  }
}

export default AuthenticateUserController;
