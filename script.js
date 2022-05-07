var btn_to_c = document.getElementById("to_c");
var btn_to_f = document.getElementById("to_f");
var conv_type = document.getElementById("conv_type");
var minus_btn = document.getElementById("minus_btn");
var plus_btn = document.getElementById("plus_btn");
var result = document.getElementById("result");
var temp_data = document.getElementById("temp_data");
var unit_display = document.getElementById("unit_display");


btn_to_c.addEventListener("click", function(e){
    e.preventDefault();
    conv_type.value = "to_c";
    btn_to_c.classList.add("bg-blue-100","border-blue-400","font-bold","shadow","shadow-blue-700");
    btn_to_f.classList.remove("bg-blue-100","border-blue-400","font-bold","shadow","shadow-blue-700");
    displayUnit();
    calculate();
});

btn_to_f.addEventListener("click", function(e){
    e.preventDefault();
    conv_type.value = "to_f";
    btn_to_f.classList.add("bg-blue-100","border-blue-400","font-bold","shadow","shadow-blue-700");
    btn_to_c.classList.remove("bg-blue-100","border-blue-400","font-bold","shadow","shadow-blue-700");
    displayUnit();
    calculate();
});

minus_btn.addEventListener("click", function(e){
    e.preventDefault();
    var data = temp_data.value;
    var value = parseFloat(temp_data.value==''?'0':data);
    if(value == null){
        temp_data = 0;
    }else{
        temp_data.value = value - 1;
    }
    calculate();
});

plus_btn.addEventListener("click", function(e){
    e.preventDefault();
    var data = temp_data.value;
    var value = parseFloat(temp_data.value==''?'0':data);
    if(value == null){
        temp_data = 0;
    }else{
        temp_data.value = value + 1;
    }
    calculate();
});

function calculate(){
    var data = temp_data.value;
    var value = parseFloat(temp_data.value==''?'0':data);
    if(value == null){
        temp_data = 0;
    }else{
        if(conv_type.value == "to_c"){
            result.innerHTML = Math.round((value * 9/5) + 32, 2);
        }else{
            result.innerHTML = Math.round((value - 32) * 5/9, 2);
        }
    }
}

function displayUnit(){
    if(conv_type.value == "to_c"){
        unit_display.innerHTML = "&#8451;";
    }else{
        unit_display.innerHTML = "&#8457;";
    }
}

displayUnit();