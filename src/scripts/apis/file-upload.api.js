


import { Storage } from '../utils/storage.js';
import { baseURL} from './const.js';
//import    {api}    from "./apis/api.js";

export class FileUpload {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  
  async upload(file) {
    try {
      if (!file) throw new Error("No file provided for upload.");

      const formData = new FormData();
      formData.append("file", file);

      //const token = Storage.getItem("token");
      const headers = this.getAuthHeaders();


      const response = await fetch(this.getFullURL("file-upload/upload"), {
        method: "POST",
        body: formData,
        headers,
        
      });

      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Upload failed: ${response.statusText}`
        );
      }

      return await response.json(); 
    } catch (error) {
      console.error("Error uploading file:", error.message);
      throw error; 
    }
  }

  
  async update(id, post) {
    try {
      if (!id) throw new Error("Post ID is required.");
      if (!post) throw new Error("Post data is required.");
      
      const headers = this.getAuthHeaders();
      const response = await fetch(this.getFullURL(`posts/${id}`), {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          ...headers,
          // Authorization: `Bearer ${token}`,
        
           "Content-Type": "application/json",
        },
      });

      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Update failed: ${response.statusText}`
        );
      }

      return await response.json();  
    } catch (error) {
      console.error(`Error updating post with ID ${id}:`, error.message);
      throw error;
    }
  }

  
  async delete(id) {
    try {
      if (!id) throw new Error("Post ID is required.");

      const response = await fetch(this.getFullURL(`posts/${id}`), {
       
        method: "DELETE",
        headers, 
        // {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Delete failed: ${response.statusText}`
        );
      }

      return response; 
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error.message);
      throw error;
    }
  }

  
  getFullURL(endpoint) {
    return `${this.baseURL}${endpoint}`;
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


