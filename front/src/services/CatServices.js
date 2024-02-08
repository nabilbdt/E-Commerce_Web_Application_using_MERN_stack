import http from './http-common'

export async function getallCategory(){
    
   return await http.get('/')
}

export async function addC(p){
    
    return await http.post('/api/category/',p);
    
}
export async function getC(id){
    
    return await http.get(`/${id}`);
    
}
export async function getProC(id){
    
    return await http.get(`/:id/products/${id}`);
    
}

export async function getD(id){
    
    return await http.get(`/api/d/${id}`)
 }
export async function getAllD(){
    
    return await http.get("/api/d/")
 }
export async function addD(p){
    
    return await http.post('/api/d/',p,{ 
        headers : {'Content-Type':'multipart/form-data'}}
    );
   
    
    
    
}