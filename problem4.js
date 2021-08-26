/* The accounting team needs all the years 
from every car on the lot. Execute a function 
that will return an array from the dealer 
data containing only the car years and 
log the result in the console as it was 
returned.*/
const array=[];
function problem4(data){
    for(var i=0;i<50;i++){
        array.push(data[i].car_year);
    }
    return array;
}
module.exports= problem4;