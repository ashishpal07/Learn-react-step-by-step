"use server"
import client from "@/db";

export async function signUp(firstName: string, lastName: string, email: string, password: string) {
  try {
    await client.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
    });
    return true;
  } catch (err) {
    return false;
  }
};