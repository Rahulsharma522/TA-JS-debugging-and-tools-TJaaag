function fullName(firstName ,lastName){
    return   firstName+lastName
   }
   
   
   //  let result= fullName( "Rahul","Sharma");
   // let expected = "Rahul Sharma"
   // if(result !==expected){
   //     throw new Error(`${result} is not equal to ${expected}`)
   // }
   
   
   
   let result= fullName( "Rahul","Sharma");
   let expected = "Rahul Sharma"
   if(result !==expected){
       throw new Error(`${result} is not equal to ${expected}`)
   }
   
   
   function calculateTotalAmount(amount ,taxRate){
       return amount+(amount*texRate)
   }
   
   // let result= calculateTotalAmount( 30,20);
   // let expected = 600
   // if(result !==expected){
   //     throw new Error(`${result} is not equal to ${expected}`)
   // }
   
   
   let result= calculateTotalAmount( 30,20);
   let expected = 630
   if(result !==expected){
       throw new Error(`${result} is not equal to ${expected}`)
   }