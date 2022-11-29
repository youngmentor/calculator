let result=document.getElementById("inputtext")
let calculate=(numbers)=>{result.value+=numbers}
let simplify=()=>{try{result.value=eval(result.value)}
                 catch(err){alert("syntax error" )}};
function clr(){result.value =""};
function del(){result.value=result.value.slice(0,-1)}
function power(){result.value =" "}; 