import { Storage } from  './storage.js';
//import {baseUrl}  from "../const.js";
export const isUserLogin = () => {
  const user = Storage.getItem("user");
  const token = Storage.getItem("token");

  return !!(user && token);
  // if (user && token) {
  //   return true
  // }

  // return false
}