function difference_num(x){
    if(x<=13){
        return(13-x);
    }
    else{
        return(x-13)*2;
    }
}

console.log(difference_num(10));
console.log(difference_num(20));
console.log(difference_num(13));