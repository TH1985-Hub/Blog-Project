export class BaseApi {
    validateResponse(response) {
      if (response.status === 401) {
        window.location.assign('index.html') 
  
        return false
       }

    
       if (response.status === 400) {
        alert("Bad request! Please check your input.");
        throw new Error("400 Bad Request");
      }
  
      if (response.status === 500) {
        alert ("Server error! Please try again later.");
        throw new Error("500 Internal Server Error");
      }
  
      if (!response.ok) {
        console.error("Unhandled API Error:", response.status, response.statusText);
        throw new Error (`Unhandled HTTP Error: ${response.status} - ${response.statusText}`);
      }
  
      return response; 

    }
  }