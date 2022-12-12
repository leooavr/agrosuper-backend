import * as bcrypt from 'bcrypt';

export const encryptPassword = async (password: string): Promise<String> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (
  password: string,
  passwordHash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, passwordHash);
};
