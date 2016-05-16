$(function () {
    $.validator.setDefaults({
        debug: true
    });
    $.validator.addMethod("reg", function (value, element) {
        return this.optional(element) || new RegExp(value).test($(element).val());
    }, 'invalid format');

    $('form').validate({
        rules: {
            ID: {
                required: true,
                number: true,
                min: 0
            },
            Name: {
                required: true,
                minlength: 2,
                maxlength: 10
            },
            Birthday: {
                required: false,
                date: true
            },
            CellPhone: {
                reg: "^\\d{8,11}$",
                required: {
                    depends: function (element) {
                        return $('#Telephone').val() == "";
                    }
                }
            },
            Telephone: {
                reg: "^0\\d{2,3}\\-\\d{8,11}$",
                required: {
                    depends: function (element) {
                        return $('#CellPhone').val() == "";
                    }
                }
            },
            Address: {
                required: false,
                maxlength: 10
            },
            Weight: {
                required: false,
                min: 30,
                max: 200
            },
            AccetpNews: {
                required: false
            },
            Email: {
                required: $("#AccetpNews").is(":checked"),
                email: true
            }
        }
    })
    
    $('#go').click(function(){
        var validator = $('form').validate();
        if(validator.form()){
            alert('ready to submit.');
            $('form')[0].submit();
        }
    })
})