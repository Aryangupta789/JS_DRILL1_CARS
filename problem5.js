/* The car lot manager needs to find out 
how many cars are older than the year 2000. 
Using the array you just obtained from 
the previous problem, find out how many 
cars were made before the year 2000 and 
return the array of older cars and log its 
length.*/
const array=[];
function problem5(data){
    for(var i=0;i<50;i++){
        if(data[i].car_year<2000){
            array.push(data[i].car_year);
        }
    }
    return array;
}
module.exports= problem5;