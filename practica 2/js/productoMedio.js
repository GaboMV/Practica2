var btnGenerar = document.getElementById('generar');
var tablaElemento = document.getElementById('table-elementos');
var txtSemilla1 = document.getElementById('semilla1');
var txtSemilla2 = document.getElementById('semilla2');

var numberIte = document.getElementById('numberite');
var datos = [];
function btnGenerar_Click(event){

	var semilla = txtSemilla1.value;
	var k =  semilla.length;
	if (!semilla.trim().length || !semilla){
		alert('Debe ingresar un valor para la semilla 1');
		return;
	}
	var semilla2 = txtSemilla2.value;
	if (!semilla2.trim().length || !semilla2){
		alert('Debe ingresar un valor para la semilla 2');
		return;
	}
	if (semilla.trim()<10 || semilla2.trim()<10){
		alert('No puede ingresar un valor menor a 10');
		return;
	}
	if (semilla.trim().length != semilla2.trim().length){
		alert('Las semillas deben ser de la misma longitud');
		return;
	}
	if(semilla-parseInt(semilla)!=0 || k-parseInt(k)!=0 || semilla2-parseInt(semilla2)!=0   ){
		alert("no se admiten numeros decimales no otros formatos que no sean enteros");
		return;
	}

	while (tablaElemento.childElementCount > 0){
		tablaElemento.removeChild(tablaElemento.firstElementChild);
	}
	let arr = [];
	var rndB = parseInt(txtSemilla1.value);
	var rndC = parseInt(txtSemilla2.value);
	for (var i=1; i <= parseInt(numberIte.value); i++){
		var rnd = generar(rndB, rndC, k);
		cant = i;
		var rr= (rnd/Math.pow( 10,k)).toFixed(k);
		arr.push(rr);
		var item = {
			indice: i,
			rn: rndB,
			rn2: rndC,
			yi: rndB * rndC,
			xi: rnd,
			valor: rr
		};
		//datos.push(item);
		addRow(item.indice, item.rn, item.rn2,item.xi,item.yi, item.valor);
		rndB = rndC;
		rndC = rnd;
	}
	var flag=0;
	for (i=0;i<arr.length;i++){
		for (j=0;j<arr.length;j++){
			if (i!=j) {
				let primero = arr[i];
				let segundo = arr[j];

				console.log(primero + " vs " + segundo);
				if (primero==segundo && flag!=1){
					console.log(" se repite en " + j);
					console.log(" periodo " + j);
					document.getElementById('t00').innerHTML='';
					document.getElementById('t00').innerHTML+=(`Degeneracion en: ${j+1} (${arr[j]}) <br> periodo: ${j} `);
					flag=1;
				}
			}

		}}
};
function generar(s, s2, k){
	s = s * s2;
	var lengthS2 = String(s).length;
	var borde = (lengthS2 - k)/2;
	//borde = Math.round(borde);//en caso de jalar lado izquierdo desabilitar esto
	if (String(s).length > k){
		s = String(s).substr(borde,k);
	}
	return String(s);
};
function addRow(index, rn, rn2, yi,xi,rnd){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	var td5 = document.createElement('td');
	var td6 = document.createElement('td');

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	td1.textContent = String(index);
	td2.textContent = String(rn);
	td3.textContent = String(rn2);
	td5.textContent = String(yi);
	td4.textContent = String(xi);

	td6.textContent = String(rnd);
	tablaElemento.appendChild(tr);
};
/*window.onload = function (){
	btnGenerar.addEventListener('click', btnGenerar_Click);
};*/

window.addEventListener('load',function(){
	btnGenerar.addEventListener('click', btnGenerar_Click);
});
