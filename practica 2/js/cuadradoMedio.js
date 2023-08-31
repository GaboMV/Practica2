var btnGenerar = document.getElementById('generar');
var tablaElemento = document.getElementById('table-elementos');
var txtSemilla = document.getElementById('semilla');
var numberIte = document.getElementById('numberite');
//var datos = [];
function btnGenerar_Click(event){
	var semilla = txtSemilla.value;
	var k = semilla.length;
	if (!semilla.trim().length || !semilla){
		alert('Debe ingresar un valor para semilla');
		return;
	}
	if (semilla.trim()<10){
		alert('No puede ingresar un valor menor a 10');
		return;
	}
	if(semilla-parseInt(semilla)!=0 || k-parseInt(k)!=0  ){
		alert("no se admiten numeros decimales no otros formatos que no sean enteros");
		return;
			}
	while (tablaElemento.childElementCount > 0){
		tablaElemento.removeChild(tablaElemento.firstElementChild);
	}
	let arr = [];
	var rndB = parseInt(txtSemilla.value);
	for (var i=1; i <= parseInt(numberIte.value); i++){
		var rnd = generar(rndB, k);
		cant = i;
		var rr=(rnd/Math.pow( 10,k)).toFixed(k);
		arr.push(rr);
		console.log(arr);
		yy=rndB*rndB;



		var item = {
			indice: i,
			rn: rndB,
			yi:yy,
			xi:rnd,
			valor: rr
		};
		//datos.push(item);
		addRow(item.indice, item.rn,item.yi,item.xi, item.valor);
		rndB = rnd;
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
function generar(s, k){
	s = Math.pow(s,2);
	var lengthS2 = String(s).length;
	var borde = (lengthS2 - k)/2;
//	borde = Math.round(borde);//en caso de jalar lado izquierdo desabilitar esto
	if (String(s).length > k){
		s = String(s).substr(borde,k);
	}
	return String(s);
};
function addRow(index, rn, yi,xi,rnd){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	var td5 = document.createElement('td');

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	td1.textContent = String(index);
	td2.textContent = String(rn);
	td3.textContent = String(yi);
	td4.textContent = String(xi);

	td5.textContent = String(rnd);
	tablaElemento.appendChild(tr);
};
/*window.onload = function (){
	btnGenerar.addEventListener('click', btnGenerar_Click);
};*/

window.addEventListener('load',function(){
	btnGenerar.addEventListener('click', btnGenerar_Click);
});
