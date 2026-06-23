import { scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export async function verifyPassword(
  password: string,
  passwordHash: string,
): Promise<boolean> {
  const [algorithm, salt, storedHash] = passwordHash.split(":");

  if (algorithm !== "scrypt" || !salt || !storedHash) {
    return false;
  }

  const derivedKey = (await scryptAsync(
    password,
    salt,
    Buffer.from(storedHash, "hex").length,
  )) as Buffer;
  const storedKey = Buffer.from(storedHash, "hex");

  return (
    derivedKey.length === storedKey.length && timingSafeEqual(derivedKey, storedKey)
  );
}
