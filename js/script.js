function validacao(){
    let usuarioValido = "Pedro";
    let senhaValida = "123456";
    
        let usuario =document.getElementById("usuario").value;
        
        let senha = document.getElementById ("senha").value;
        
    //usuario vazio
        if (usuario == "" && senha ==""){
            alert ("Não foi possivel logar, usuario e senha vazio");
        }
        else if (usuario == "" && senha == senhaValida){
            alert ("Não foi possivel logar, por favor preencha o usuario");
        }
        else if ( usuario == "" && senha !=senhaValida){
            alert ("Não foi possivel logar, senha incorreta e usuario em branco");    
        }

                 
       
        else if( usuario == usuarioValido && senha == senhaValida){
            alert(" Usuario valido !!");
        }
    }
