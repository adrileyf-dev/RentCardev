declare module 'bcrypt' {
  function hashSync(
    data: string | Buffer,
    saltOrRounds: string | number,
  ): string;
  function compareSync(data: string | Buffer, encrypted: string): boolean;
}
