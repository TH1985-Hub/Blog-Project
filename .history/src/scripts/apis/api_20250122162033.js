import {PostApi} from "./post.api.js";
import {UserApi} from "./user.api.js" ;
import {AuthApi}  from "./auth.api.js";
import { FileUpload } from "./file-upload.api.js";
import {Base_Url}     from "../apis/const.js";

//export const baseUrl = "https://simple-blog-api-red.vercel.app/api";                                                 

export class Api{
    post = null;
    user = null;
    auth = null;
    upload = null

    
  constructor(baseUrl) {
      this.post = new PostApi(baseUrl);
      this.user = new UserApi(baseUrl);
      this.auth = new AuthApi(baseUrl);
      this.fileUpload = new FileUpload(baseUrl);
      
  }
  
}

export const api = new Api('Base_Url');


