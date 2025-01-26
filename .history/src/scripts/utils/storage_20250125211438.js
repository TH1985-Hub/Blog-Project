//import {Base_Url}  from  "./const.js";       

export class Storage {
    static getItem(key) {
      try {
        const value = localStorage.getItem(key);
        // if (value) {
        //   return JSON.parse(value);
        // }
        // return null; 
        return value ? JSON.parse(value) : null; 
      } catch (error) {
        console.error('Error getting item from storage:', error);
        return null;
      }
    }
    static set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
  
        return true;
      } catch (error) {
        console.error('Error setting item in storage:', error);
        return false;
      }
    }
  
    static removeItem(key) {
      try {
        localStorage.removeItem(key);
  
        return true;
      } catch (error) {
        console.error('Error removing item from storage:', error);
        return false;
      }
    }
  
    static clear() {
      try {
        localStorage.clear();
  
        return true;
      } catch (error) {
        console.error('Error clearing storage:', error);
        return false;
      }
    }
  }


