function g(t){
    console.log(t)
    let a=t.map((element,index)=>{
       let d= element.toUpperCase()
        return d;
    })
    console.log(a);
}
g(['hello','world','javascript']);