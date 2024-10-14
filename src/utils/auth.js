import { sign, verify } from "jsonwebtoken";

const { hash, compare } = require("bcryptjs");

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const validPassword = async (password, hashPassword) => {
  const isValid = await compare(password, hashPassword);
  return isValid;
};
const generateAccessToken = (data) => {
  const generatedAccessToken = sign(
    { ...data },
    process.env.accessTokenPrivateKey,
    { expiresIn: "1d" }
  );
  return generatedAccessToken;
};
const verifyAccessToken = (accessToken) => {
  try {
    const tokenPayload = verify(accessToken, process.env.accessTokenPrivateKey);
    return tokenPayload;
  } catch (error) {
    console.log("verify accessToken error ->", error);
  }
};

const generateRefreshToken = (data) => {
  const generatedRefreshToken = sign(
    { ...data },
    process.env.refreshTokenPrivateKey,
    { expiresIn: "15d" }
  );
  return generatedRefreshToken;
};

const verifyUsername = (username) => {
  const pattern = /^[a-z0-9_-]{3,15}$/g;
  return pattern.test(username);
};
const verifyEmail = (email) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};

const verifyPassword = (password) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

export {
  hashPassword,
  validPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyUsername,
  verifyEmail,
  verifyPassword,
};
