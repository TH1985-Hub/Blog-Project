

import { Storage } from   '../utils/storage.js';
import { BaseApi } from     "./base.js";
//import {baseURL}   from     "./const.js";



export class UserApi extends BaseApi{
    constructor(baseURL){
        super();
        this.baseURL = baseURL;
    }

    async getUsers(){
        try{
            const response = await fetch(`${this.baseURL}/users`,{
                headers: this.getAuthHeaders(),
            });
            // if(response.status !==200){
            //     throw new Error(response.statusText);
            // }
            this.validateResponse(response);
            return await response.json();
            //return users;
        }catch(error){
            console.error("Error fetching users:", error.message);
            throw error;
        }

    }

    async getUserById(id) {
        try {
          if (!id) throw new Error("User ID is required.");
    
          // const response = await fetch(`${this.getFullUrl}/users/${id}`, {
          //   headers: this.getAuthHeaders(),
          // });

          const response = await fetch(this.getFullUrl(`/users/${id}`), { headers: this.getAuthHeaders() });
          

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
      
    
          this.validateResponse(response);
    
          const user = await response.json();
          return user;
        } catch (error) {
          console.error(`Error fetching user with ID ${id}:`, error.message);
          throw error;
        }
      }

    getFullUrl(endpoint){
        return `${this.baseURL}${endpoint}`;
    }
    getAuthHeaders() {
        const token = Storage.getItem("token");
        // if (!token) {
        //   throw new Error("Authentication token is missing. Please log in again.");
        // }
    
        return token ? {
          Authorization: `Bearer ${token}`,
        } : {};
      }
}



