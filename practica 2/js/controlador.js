function cargarDatos(){
    document.getElementById('t01').innerHTML=`<table id="t01" style="width: 520px;" >
                                               
                                                <tr><th id="tf-1" value="0">No.</th><th>X<sub>n</sub></th> 
                                                <th>a * X<sub>n</sub></th><th>+ c</th><th>Xi</th><th>Ri</th></tr></table>`;
    var x1 = document.getElementById("id-semilla").value;
    var x2 =1+4* document.getElementById("id-a").value;
    console.log(`a: ${x2}`);
    var x4 = document.getElementById("id-c").value;
    var x3 = document.getElementById("id-m").value;
    var g= Math.log(x3)/Math.log(2)


    if(x1 =="" || x2 =="" || x3=="" || x4==""){
        alert("Por favor llene todos los campos");
        return;
    }
    if(x1<0 || x2<0 || x3<0|| x4<0){
        alert("no se admiten numero negativos ni cero");
        return;
        document.getElementById('t00').innerHTML='';
    }

    if(x1-parseInt(x1)!=0 || x2-parseInt(x2)!=0  || x3-parseInt(x3)!=0 || x4-parseInt(x4)!=0 ){
        alert("no se admiten numeros decimales ni formatos que no sean enteros");
        return;
        document.getElementById('t00').innerHTML='';
    }
    var semilla =parseInt(x1);
    var a = parseInt(x2);
    var m = Math.pow(2,parseInt(g));
    var c = parseInt(x4);
    var stop = parseInt(x3)+1;


    document.getElementById('t00').innerHTML='';
    console.log(`a: ${a} m: ${m} c: ${c}`);
    document.getElementById('t00').innerHTML+=(`a: ${a} m: ${m} g: ${g} `);
    carga(semilla, a, c, m, 1, stop);
}

function carga(seed, varA, varC, varM, numeral, stop){
    if(numeral==(stop+1)){
        return;
    }

    var c1 = seed * varA;
    var c2 = c1 + varC;
    var c3 = c2%varM;
    var r= (c3/(varM-1)).toFixed(4);
    var fila = `
    <tr>
        <td>${numeral++}</td>
        <td>${seed}</td>
        <td>${c1}</td>
        <td>${c2}</td>
        <td>${c3}</td>
         <td>${r}</td>
    </tr>`;
    document.getElementById('t01').innerHTML+=fila;

    carga(c3,varA,varC, varM, numeral, stop);
}

function mod(vC2, vM){
    if(vM > vC2)
        return vC2;
    do{
        vC2 = vC2 - vM;
    }while(vC2 > vM );

    return vC2;
}
