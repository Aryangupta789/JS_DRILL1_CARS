/* A buyer is interested in seeing only 
BMW and Audi cars within the inventory.  
Execute a function and return an array 
that only contains BMW and Audi cars.  
Once you have the BMWAndAudi array, use 
JSON.stringify() to show the results of 
the array in the console.*/

const array=[];
function problem5(data){
    for(var i=0;i<50;i++){
        if(data[i].car_make==="Audi"||data[i].car_make==="BMW"){
            array.push(data[i]);
        }
    }
    return array;
}
module.exports= problem5;