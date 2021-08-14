const inputLegth1 =document.querySelector("#length1");
const inputLegth2 =document.querySelector("#length2");
const inputLegth3 =document.querySelector("#length3");
const btnSubmit = document.querySelector(".submit");
const result = document.querySelector(".result");


function calArea(length1,length2,length3)
{
    let s = (length1+length2+length3)/2;
    let areaSquare = s*(s-length1)*(s-length2)*(s-length3);
    return Math.round(Math.sqrt(areaSquare));
}


btnSubmit.addEventListener("click",function(){
    length1 = inputLegth1.value;
    length2 = inputLegth2.value;
    length3 = inputLegth3.value;
    let area = calArea(Number(length1),Number(length2),Number(length3));
    if(length1 ===''|| length2 ===''||length3 ==='')
    {
        result.textContent = "Field should not be blank!"
    }
    else if(length1<0 || length2<0 ||length3<0)
    {
        result.textContent = "Length Should not be negative"
    }
    else if(area && length1>0 && length2>0 && length3>0)
    {
        result.textContent = "Area is: "+ area;
    }
    else{
        result.textContent ="Provided Lengths can't form a Triangle";
    }

    

});