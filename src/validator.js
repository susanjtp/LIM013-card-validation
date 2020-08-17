//aqui obtengo la reversa de mi numero de tarjeta
const validator = {
  isValid: (card)=>{
    let reverso = "";
    for(let i = card.length-1; i>=0; i--){
      reverso = reverso + card[i];
    }                
     

    //aqui obtengo las pociciones
    const arreglo = Array.from(reverso).map(Number)
    let impares = []
    for (let i = 0; i< arreglo.length; i++){
      if(i%2!==0){
        impares.push(arreglo[i]*2)
      }else{
        impares.push(arreglo[i]*1)
      }
    }
     
    let lista = []
    for(let i = 0; i < impares.length; i++){
      if(impares[i]>=10){
        lista.push((impares[i]-10)+1)
      }else{
        lista.push(impares[i]-10*1)
      }
    }
    const total = lista.reduce((sum, current)=> sum + current, 0);
    if(total%10 ===0){
    
      return true;
    }else{
     
      return false;
    }
  },
  maskify: (card)=>{
    let maskifi = ""
    for (let i=0; i<card.length; i++){
      if (i<=card.length-5){
        maskifi = maskifi + "#"
      } else {
        maskifi = maskifi + card[i]
      }
    }

     return maskifi
  }
};

export default validator;
