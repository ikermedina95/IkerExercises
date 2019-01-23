function palindrome (factor1, factor2) {
  var mul=0;
  var lpal=0;
  
  for(i=factor1;i>0;--i){
   for(j=factor2;j>0;--j){
     mul=i*j
     if(Validate(mul)==true){
     lpal=mul;
       console.log("The max palindromic number is "+mul+" with the factors: "+i+" and "+j)
       j=0;
       i=0;
     }
   }
  }
  
  return lpal;
  }

palindrome(999, 990)


function Validate(arge){
  var decision = false;
  var str=arge.toString()
  var original = str.split("");
  var reversed=original.reverse();
  var reverseArr=reversed.join("");
  var rev=reverseArr;
  if(str===rev){
        decision=true
  } else
    {decision=false}
return decision
 }