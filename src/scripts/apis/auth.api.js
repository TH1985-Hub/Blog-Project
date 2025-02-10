
import  {BaseApi}  from './base.js';
//import {AuthApi} from './apis/api.js';
import  {Storage}   from "../utils/storage.js";
import { baseURL } from './const.js';


export class AuthApi extends BaseApi{
    constructor(baseURL) {
      super();
      this.baseURL = baseURL;
    }
  
    
    async register(user) {
      try {
        const response = await fetch (`${this.baseURL}api/auth/register`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        
        // if (!response.ok) {
        //   throw new Error(`Registration failed: ${response.statusText}`);
        // }
  
        

       this.validateResponse(response);
        return await response.json();
      } catch (error) {
        console.error('Registration error:', error);
        throw error; 
      }
    }
  


  async login(credentials) {
    try {

      const { email, password } = credentials;

      
      console.log ('Attempting login with:', { email, password });
      console.log('Endpoint:', `${this.baseURL}auth/login`);

      //console.log("Request body:", JSON.stringify({ email, password }));
      const response = await fetch(`${this.baseURL}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed: ${response.status}");
      }

      const result = await response.json();
      console.log("Api Response:", result);
      // Storage.setItem("token", data.token);
      // Storage.setItem("user", data.user);
     if (result.token)   {
      Storage.setItem("token", result.token);
      Storage.setItem('user', JSON.stringify(result.user));
     }
     return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
}
































































































































  