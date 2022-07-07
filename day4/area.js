const ar=(a,b,c)=>{
    let s=(a+b+c)/2;
    let area=Math.sqrt(a*((s-a)*(s-b)*(s-c)));
    return area
}

console.log(ar(5,6,7));