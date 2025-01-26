
import  {BaseApi}  from './base.js';
import  {baseURL}  from "./apis/const.js";


export class AuthApi extends BaseApi{
    constructor(baseURL) {
      super();
      this.baseURL = baseURL;
    }
  
    
    async register(user) {
      try {
        const response = await fetch(`${this.baseURL}/auth/register`, {
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
        if (!credentials.email || !credentials.password) {
          throw new Error("Please fill in both email and password.");
        }
           
    //console.log("Sending login request to:" `${this.baseUrl}/auth/login`);
   // console.log("With credentials:", credentials);
       //console.log("Sending login credentials:", credentials);
  
        const response = await fetch(`${this.baseURL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
          },

       // body: JSON.stringify(credentials),
        });


    // console.log("Login response status:", response.status);
    // console.log("Login response headers:", response.headers);

    // if (!response.ok) {
    //   const errorData = await response.text();
    //   console.error("API Error Response:", errorData);
    //   throw new Error(errorData.message || `Request failed with status ${response.status}`);
    // }

  
        
        // if (!response.ok) {
        //   const errorData = await response.json();
        //   throw new Error(errorData.message || response.statusText); 
        // }
  
        
        //  const data =  await response.json();
        //  console.log("Login successful:", data);

        //  return data;


    const responseData = await response.json();
    console.log('Login Response Data:', responseData);
  

        this.validateResponse(response); 
        return await response.json();
      } catch (error) {
        console.error('Login error:', error);
        throw error; 
      }
    }
  }
































































































































  