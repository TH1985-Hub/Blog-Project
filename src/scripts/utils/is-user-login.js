import { Storage } from  './storage.js';

export const isUserLogin = () => {
  const user = Storage.getItem("user");
  const token = Storage.getItem("token");

  console.log("User:", user);   
  console.log("Token:", token)

  return Boolean(user && token);
 
}


