function age(w){
    let a=w.filter((element,index)=>{
        if(element>18)
        {
            return element;
        }
     
    })
    console.log(a);
}
age([12,17,19,21,15,28])