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
function sub(x, y)
{

    if(x<=y){
    
        return y-x
    }
    else{
        return x-y
    }
}



module.exports={square,division,add,sub}