//import {Base_Url}  from  "./const.js";       

export class Storage {
    static getItem(key) {
      try {
        const value = localStorage.getItem(key);
        // if (value) {
        //   return JSON.parse(value);
        }
        return null;  
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
  
    static remove(key) {
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


//   if (localStorage && !localStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
//     console.log('Live reload enabled.');
//     localStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
// }