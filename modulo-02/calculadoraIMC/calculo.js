var peso;
var altura;
var imc;
var resultado;


function calcular(){
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura*altura);

    if(imc < 17){

        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+ imc.toFixed(2) + "<br/><h4>Você está muito abaixo do peso!</h4>"
        
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 17 && imc <18.49){

        
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+ imc.toFixed(2) + "<br/><h4>Você está abaixo do peso!</h4>"
        
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';

        return false;

    }else if(imc > 18.5 && imc < 24.99){

        
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+ imc.toFixed(2) + "<br/><h4>Você está no peso ideal!</h4>"
        
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;

    }else if(imc > 25 && imc < 29.99){

        
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+ imc.toFixed(2) + "<br/><h4>Você está acima do peso!</h4>"
       
        
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;

    }else{
        return false;
    }

    


}