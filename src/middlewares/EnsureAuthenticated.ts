import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/UserRepository';
import { ApError } from '../errors/AppErros';

interface IPayload {
  sub: string; // o 'subject' que você definiu ao criar o token (user.id)
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new ApError('Token Missing ', 401);
  }
  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(token, 'M5T%yAzE<<?|') as IPayload;
    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new ApError('User does not existes', 401);
    }
    request.user = {
      id: user_id,
    };
    next();
  } catch {
    throw new ApError('Invalid token ', 401);
  }

  // Your authentication logic here
}
