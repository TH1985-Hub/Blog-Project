
import { Storage } from     "../utils/storage.js";
import { BaseApi } from     "./base.js";
//import {baseUrl}   from    "./const.js";

export class PostApi extends BaseApi{
    constructor(baseURL){
        super();
        this.baseURL = baseURL;
    }

    async getposts(){
        try {
            const response = await fetch(`${this.baseURL}/posts`,{
                headers: this.getAuthHeaders(),
 
            });

            // if(response.status !== 200) {
            //     throw new Error(response.statusText);
            // }
            this.validateResponse(response);
            const posts = await response.json();


            return posts;


        } catch(error) {
            console.error("Error fetching posts:", error.message);
            throw error;
        }
    }


    async getPostById(id) {
        try {
            if(!id) {
                throw new Error('Post ID is required');
            }


            const response = await fetch(`${this.baseUrl}/posts/${id}`,{
                headers: this.getAuthHeaders(),
            });

            // if(response.status !== 200) {
            //     throw new Error(response.statusText);
            // }
         


            this.validateResponse(response);
            const post = await response.json();
            return post;
        
        
    }catch (error) {
        console.error(`Error fetching post with ID ${id}:`, error.message);
        throw error;
    }
}

async create(post){
    try{


      if (!post) throw new Error("Post data is required.");

        const response = await fetch(`${this.baseUrl}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                ...this.getAuthHeaders(),
                'Content-Type': 'application/json',
            }
        });


      this.validateResponse(response);

        const result = await response.json();
        return result;
    }catch (error){
        console.error("Error creating post:", error.message);
        throw error;
    }
}


async update(id,post){
    try{


      if (!id) throw new Error("Post ID is required.");
      if (!post) throw new Error("Post data is required.");

        const response = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                ...this.getAuthHeaders(),
                'Content-Type': 'application/json',
            }
            });


            this.validateResponse(response);

            const result = await response.json();
            return result;
    }catch (error){
        console.error(`Error updating post with ID ${id}:`,error.message);
        throw error;
    }
}


async delete(id){
    try{


      if (!id) throw new Error("Post ID is required.");

        const response = await fetch(this.baseUrl`/posts/${id}`, {
            method: 'DELETE',
            headers: this.getAuthHeaders(),
            });


      this.validateResponse(response);

            return response;
    }catch(error){
        console.error(`Error deleting post with ID ${id}:`,error.message);
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