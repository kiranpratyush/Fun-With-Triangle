const inputLegth1 = document.querySelector("#length1");
const inputLegth2 = document.querySelector("#length2");
const btnSubmit = document.querySelector(".submit");
const result = document.querySelector(".result");
function resultValue(length1,length2)
{
    return ((Math.sqrt(length1**2+length2**2)));
};

btnSubmit.addEventListener("click",function(){
    length1 = inputLegth1.value;
    length2 = inputLegth2.value;
    let length3 = resultValue(Number(length1),Number(length2));
    if(Number(length1)<0 || Number(length2)<0)
    {
        result.textContent = "Triangle Lengths can not be negative";
    }
    if(length1==='' || length2 === '')
    {
        result.textContent="Enter all the lengths";
    }
    else if(Number(length1)>0 && Number(length2)>0){
        result.textContent = "Hypotenius is :"+length3;
    }
    
});