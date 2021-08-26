/*The marketing team wants the car models 
listed alphabetically on the website. 
Execute a function to Sort all the car 
model names into alphabetical order and 
log the results in the console as it was 
returned.*/

var array=[];
function problem3(data){
    for(var i=0;i<data.length;i++){
        array.push(data[i].car_model);
        //array[i] = array[i].charAt(0).toUpperCase();
    }
    
    sortArray(array);
    console.log(array);
}

function sortArray(array){
    array.sort(function(a,b){
        if(a>b)return 1;
        if(a<b)return -1;
        return 0;
    })
}


module.exports=problem3;