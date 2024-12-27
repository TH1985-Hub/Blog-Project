export class UserApi{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async getUser(){
        try{
            const response = await fetch(this.getfullUrl('/users'));
            if(response.status !==200){
                throw new Error(response.statusText);
            }

            const posts = await response.json();
            return users;
        }catch(error){
            console.error(error);
        }

    }

    getfullUrl(endpoint){
        return `${this.baseUrl}${endpoint}`;
    }
}


