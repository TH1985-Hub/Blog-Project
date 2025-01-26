


import { Storage } from '../utils/storage.js';
//import { baseUrl } from './const.js';
//import    {api}    from "./api.js";

export class FileUpload {
  constructor(baseU) {
    this.baseUrl = baseUrl;
  }

  
  async upload(file) {
    try {
      if (!file) throw new Error("No file provided for upload.");

      const formData = new FormData();
      formData.append("file", file);

      const token = Storage.getItem("token");

      const response = await fetch(this.getFullUrl("/file-upload/upload"), {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        //headers: this.getAuthHeaders(), 
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

      const response = await fetch(this.getFullUrl(`/posts/${id}`), {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          Authorization: `Bearer ${token}`,
        
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

      const response = await fetch(this.getFullUrl(`/posts/${id}`), {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  
  getFullUrl(endpoint) {
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