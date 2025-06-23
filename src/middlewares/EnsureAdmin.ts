import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../modules/accounts/repositories/UserRepository';
import { ApError } from '../errors/AppErros';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;
  const userRepository = new UserRepository();
  const user = await userRepository.findById(id);
  if (!user.isAdmin) {
    throw new ApError('User isn´t not Admin!');
  }
  next();
}
