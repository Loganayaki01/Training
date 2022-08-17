function fizzBuzz(start ,End){
    let c=0;
    let arr=[];
    for(let i=start;i<=End;i++){
        if(i%3==0 && i%5==0)
        arr[c++]="FizzBuzz";
        else if(i%3==0)
        arr[c++]="Fizz";
        else if(i%5==0)
        arr[c++]="Buzz";
        else
        arr[c++]=i;
    }
    console.log(arr);
}
fizzBuzz(1,15);