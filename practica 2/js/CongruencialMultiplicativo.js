function cargarDatos(){
    document.getElementById('t01').innerHTML=`<table id="t01" style="width: 520px;" >
                                               
                                                <tr><th id="tf-1" value="0">No.</th><th>X<sub>n</sub></th> 
                                                <th>a * X<sub>n</sub></th><th>Xi</th><th>ri</th></tr></table>`;
   var valor = document.querySelector('input[name="status"]:checked').value;

    console.log(`x: ${valor}`);
var v= parseInt(valor);

    var x1 = document.getElementById("id-semilla").value;
    if (v==0){
        var x2 =3+8* document.getElementById("id-a").value;
        console.log(`xxxxxxxx: ${v}`);
    }
    if (v==1){  var x2 =5+8* document.getElementById("id-a").value;
        console.log(`xxxxxxxx: ${v}`);
    }

    console.log(`a: ${x2}`);

    var x3 = document.getElementById("id-m").value;
    var rest = (Math.log(x3)/Math.log(2))+2

    if(x1 =="" || x2 =="" || x3=="" ){
        alert("Por favor llene todos los campos");
        return;
    }
    if(x1<0 || x2<0 || x3<0){
        alert("no se admiten numero negativos ni cero");
        return;
        document.getElementById('t00').innerHTML='';
    }

    if(x1-parseInt(x1)!=0 || x2-parseInt(x2)!=0  || x3-parseInt(x3)!=0 ){
        alert("no se admiten numeros decimales ni formatos que no sean enteros");
        return;
        document.getElementById('t00').innerHTML='';
    }
    var semilla =parseInt(x1);
var im = semilla % 2 ;
    console.log(`kkkkkx: ${im}`);
    if(im ==0){
        alert("la semilla debe ser impar");
        return;
        document.getElementById('t00').innerHTML='';
    }

    var a = parseInt(x2);

    var m = Math.pow(2,parseInt(rest));

    var stop = parseInt(x3)+1;


    document.getElementById('t00').innerHTML='';
    console.log(`a: ${a} m: ${m} g: ${rest}`);
    document.getElementById('t00').innerHTML+=(`a: ${a} m: ${m} g: ${rest}`);
    carga(semilla, a, m, 1, stop, rest);
}

function carga(seed, varA, varM, numeral, stop){
    if(numeral==(stop+1)){
        return;
    }

    var c1 = seed * varA;

    var c3 = c1%varM;
    var r= (c3/(varM-1)).toFixed(4);
    var fila = `
    <tr>
        <td>${numeral++}</td>
        <td>${seed}</td>
        <td>${c1}</td>
     
        <td>${c3}</td>
         <td>${r}</td>
    </tr>`;
    document.getElementById('t01').innerHTML+=fila;

    carga(c3,varA, varM, numeral, stop);
}

function mod(vC2, vM){
    if(vM > vC2)
        return vC2;
    do{
        vC2 = vC2 - vM;
    }while(vC2 > vM );

    return vC2;
}
