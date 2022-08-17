function journeyDistance(n){
    let c=0;
    if(n>=3){
        n-=3;
        c++;
        c=c+n/2;
        return c;
    }
    else
    return 0;
}
console.log(journeyDistance(9));