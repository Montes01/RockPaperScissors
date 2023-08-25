export const validate = (user:number, pc:number):string => 
    ((pc==0 && user==1) || (pc == 1 && user == 2) || (pc == 2 && user == 0)) ? "Ganaste" : "Perdiste"       