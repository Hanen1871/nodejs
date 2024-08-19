
function suite(k) {
    if (k === 0) return 1;
    return suite(k - 1) + 3;
  }
  
  function puissance (element, power){         
      if (power === 0) return 1;
      console.log(`${element}^${power} = 3 * ${element}^${power - 1}`)
      return element*puissance(element, power-1)
  } 
  console.log(puissance(3,5))
  
  
  function Fibonacci(n){
      if (n < 0) return 0
      if (n===0) return 1
      return Fibonacci(n-2)+Fibonacci(n-1)}
      console.log(Fibonacci(7))
  
  function factoriel(n){ 
      if(n===1) return 1
      return n*factoriel(n-1)
      }
      console.log(factoriel(5))
  
  
  function repitition(nombre,string){
      if(nombre===1) return string
      return string + repitition(nombre-1, string)
  
  }
  
  console.log(repitition(8, "hello"))
  
  
  
  function Palindrome(str){
      if(str.length === 1) 
        return true;
      if(str.length === 2) 
        return str[0] === str[1];
      if(str[0] === str.slice(-1)) 
        return Palindrome(str.slice(1,-1))
      return false;
    }
    
    
    console.log(Palindrome('s')) 
    console.log(Palindrome('test')) 
    console.log(Palindrome('motom'))
  