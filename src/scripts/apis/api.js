
import {PostApi} from "./post.api.js";
import {UserApi} from "./user.api.js" ;
import {AuthApi}  from "./auth.api.js";
import { FileUpload } from "./file-upload.api.js";
import {baseURL}     from "./const.js";

//export const baseUrl = "https://simple-blog-api-red.vercel.app/api";                                                 

export class Api{
     post = null;
    user = null;
     auth = null;
     fileUpload = null

    
  constructor(baseURL) {
      this.post = new PostApi(baseURL);
      this.user = new UserApi(baseURL);
      this.auth = new AuthApi(baseURL);
      this.fileUpload = new FileUpload(baseURL);

  }
  
}

export const api = new Api(baseURL);



