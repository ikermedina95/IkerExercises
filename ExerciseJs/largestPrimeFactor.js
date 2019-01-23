function primes (n) {
  var primeNumber = 0;
  var i=0;
  var j=0;
  var k=0;
  var counter=0;
  // do your work here
  for (i=n;i>=j;--i) {
    counter=0;
    if(n%i==-0){
      for(k=1;k<=i;k++){
        if(i%k===0){
            counter++;
          }
        }}
        if(counter==2){
          primeNumber=i;
          i=0;
          console.log(primeNumber)
        }
    }
  
  return primeNumber;
  }

primes(101)