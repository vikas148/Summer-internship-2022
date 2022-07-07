const cel_to_fr=(tem)=>{
    const fr=((tem*9)/5)+32;
    return fr
};

const fr_to_cel=(temp)=>{
    const cel=((temp-32)*5)/9;
    return cel;
    
}

console.log(cel_to_fr(60));
console.log(fr_to_cel(45));