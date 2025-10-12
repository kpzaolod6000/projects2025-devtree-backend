import bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const checkPassword = async(password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}