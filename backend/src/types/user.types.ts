export type User = {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  instruments: string[];
};

export type UserPayload = Omit<User, 'passwordHash' | 'instruments'>;