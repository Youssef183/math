function division(x,y){
    if(x<y) {
        return y/x;
    } else {
        return x/y;
    }

}
function square(x)
{

    return x*x;
}
function add(x, y) 
{
return y+x
}
function subtraction(x, y)
{

    if(x<=y){
    
        return y-x
    }
    else{
        return x-y
    }
}
for (i=3;i<=5;i++)
{

        const z=square(i);
        const sub=subtraction(i,z);
        const sum=add(i,z);
        const div=division(i,z);
    console.log(`the square of ${i}=${z}`);
    console.log(`the result of ${i}+${z}= `, sum); 
    console.log(`the result of ${z}-${i}= `, sub); 
    console.log(`the result of ${z}/${i}= `, div);

        
}



module.exports={square,division}