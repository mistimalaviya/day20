var a = [
    {
        name: 'shirt',
        price: 30
    },
    {
        name:'shoes',
        price:60
    },
    {
        name:'hat',
        price:25
    }
]

a.forEach((element,index)=>{
    if(element.price>50)
    {
        console.log(index);
    }
})