(function(){
    const passwordStrengthValidation = (password)=>{
        
        if(password.length<=16){
            return 'Must be at least 16 characters long';
        }
        let regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern
        if(!regex.test(password)){
            return 'Must contain a lowercase letter';
        }

        regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern
        if(!regex.test(password) ) {
            return 'Must contain an uppercase letter';
        }

        regex = /^(?=.*[0-9]).+$/; // Special character or number pattern
        if( !regex.test(password) ) {
            return 'Must contain a number';
        }

        regex = /^(?=.*[\W]).+$/; // Special character or number pattern
        if( !regex.test(password) ) {
            return 'Must contain a special character';
        }

        return 'success';
    }

    document.getElementById("password").addEventListener("focusout", ()=>{
        $(".error-mesg").html('');
        let password = document.querySelector('.password').value;
        //alert(password);
        let message = passwordStrengthValidation(password);
        console.log(message);
        if(message!=='success'){                    
            $(".error-mesg").html(message);
        }
    });
})();