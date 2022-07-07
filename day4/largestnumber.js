function maxval(x,y,z){
    maxvalue=0;

    if(x>y){
    maxvalue=x;
    }
    else{
        maxvalue=y;
    }
    if(z>maxvalue){
        maxvalue=z;
    }
    return maxvalue;
}

console.log(maxval(4,5,6));