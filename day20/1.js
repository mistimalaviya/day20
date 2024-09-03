let arr=[1,2,3,4,5,6,7,8,9]

 let b = arr.filter((element,index)=> {
    
    if(element%2==0){
        return element;
    }
    
    
 })
 console.log(b);
 
var c=b.map((element,index)=>{

   return element*element
})
console.log(c);


// console.log("loopmethods")//
// for(i=0 ; i<arr.length; i++){
   
   
// if(arr[i]%2==0){
//     console.log(arr[i]);
// }


// }

