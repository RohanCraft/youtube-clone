 export const API_KEY = 'AIzaSyC5HYSOn6yj8_cm6Kgzebk9Zt9Vsrm96Tw';

 export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
 }