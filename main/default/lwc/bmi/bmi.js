const getBmi=function(weight,height){
    try{
       return  weight/(height*height);
        }catch(error){
        return undefined; 
        }
}
export{getBmi};
