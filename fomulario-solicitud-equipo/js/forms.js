$(document).ready(function(){
    // List of forms
    var formsList = [
        "formv1",
        "formv2",
        "formv3"
    ];

    for(let i of formsList){
        $(`#${i}`).validate({
            rules: {
                comercio: {
                    required: true,
                    minlength: 2
                },
                nit: {
                    required: true,
                    minlength: 4,
                    digits: true
                },     
                nombre: {
                    required: true,
                    minlength: 3,
                    maxlength: 15,
                    lettersonly: true
                },     
                apellidos: {
                    required: true,
                    minlength: 4,
                    maxlength: 15,
                    lettersonly: true
                },                               
                email: {
                required: true,
                email: true,
                minlength: 4,
                maxlength: 25
                },
                ismerchant: {
                    required:function(){
                        const ismerchantInput = $("input[name='ismerchant']").length;
                        if(ismerchantInput > 0){
                            return true;
                        }
                        return false;
                    }
                },
                merchant: {
                    required: function(){
                        const merchantField = $("input[name='ismerchant']:checked").val();
                        if(merchantField && merchantField === "Si"){
                            return true;
                        }
                        return false;
                    }
                },
                merchantid: {
                    required:function(){
                        const merchantidInput = $("input[name='merchantid']").length;
                        if(merchantidInput > 0){
                            return true;
                        }
                        return false;
                    }
                },                   
                tipotelefono: {
                    required: true
                },                          
                telefono: {
                    required: true,
                    minlength: 7,
                    digits: true,
                    maxlength: 15
                },
                ciudad: {
                    required: true,
                    minlength: 4,
                    maxlength: 15
                },    
                direccion: {
                    required: true,
                    minlength: 4,
                    maxlength: 20
                },      
                comentarios: {
                    required: true,
                    minlength: 10,
                    maxlength: 600
                },
                aceptaterminos: {
                    required: true
                }            
            }		
        });
    }
    

    // Extra methods validate
	jQuery.validator.addMethod("lettersonly", function (value, element){
		return this.optional(element) || /^[a-z _.,]+$/i.test(value);
    }, "Solo se permiten letras");
    
    jQuery.extend(jQuery.validator.messages, {
        maxlength: jQuery.validator.format("Máximo {0} caracteres."),
        minlength: jQuery.validator.format("Mínimo {0} caracteres."),
        required:  jQuery.validator.format("Campo Obligatorio.")
    });   

});