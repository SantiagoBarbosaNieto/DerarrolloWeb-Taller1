
function enviar()
{
    var txtnombre = document.getElementById("txt-nombre");
    var txtapellido = document.getElementById("txt-apellido");

    var numcel = document.getElementById("num-cel");
    var email = document.getElementById("txt-email");
    
    var opciones = document.getElementsByName("opciones");
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var op3 = document.getElementById("op3");

    console.log(op1.checked);
    console.log(op2.checked);
    console.log(op3.checked);
    if(txtnombre.value == "" || txtapellido.value == "" || numcel.value == "" || email.value == "")
    {
        alert("Debe ingresar todos los campos obligatorios (marcados con *)");
    }
    else
    {
        var str = "";
        if(op1.checked)
        {
            str = "\nCerveza escogida: Dorada"
        }
        else if(op2.checked)
        {
            str = "\nCerveza escogida: Negra"
        }
        else if(op3.checked)
        {
            str = "\nCerveza escogida: Roja"
        }
        alert("Ha ingresado la siguiente información: \nNombre: "+ txtnombre.value + "\nApellido: " + txtapellido.value + "\nEmail: " + email.value + "\nCelular: " + numcel.value + str);
    }
}