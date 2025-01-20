

import { Storage } from   '../utils/storage.js';
import { BaseApi } from     "./base.js";
//import {Base_Url}   from     "./apis/const.js";



export class UserApi extends BaseApi{
    constructor(baseUrl){
        super();
        this.baseUrl = baseUrl;
    }

    async getUsers(){
        try{
            const response = await fetch(`${this.baseUrl}/users`,{
                headers: this.getAuthHeaders(),
            });
            // if(response.status !==200){
            //     throw new Error(response.statusText);
            // }
            this.validateResponse(response);
            const users = await response.json();
            return users;
        }catch(error){
            console.error("Error fetching users:", error.message);
        }

    }

    async getUserById(id) {
        try {
          if (!id) throw new Error("User ID is required.");
    
          const response = await fetch(`${this.getFullUrl}/users/${id}`, {
            headers: this.getAuthHeaders(),
          });
    
          this.validateResponse(response);
    
          const user = await response.json();
          return user;
        } catch (error) {
          console.error(`Error fetching user with ID ${id}:`, error.message);
          throw error;
        }
      }

    getFullUrl(endpoint){
        return `${this.baseUrl}${endpoint}`;
    }
    getAuthHeaders() {
        const token = Storage.getItem("token");
        if (!token) {
          throw new Error("Authentication token is missing. Please log in again.");
        }
    
        return {
          Authorization: `Bearer ${token}`,
        };
      }
}


