//1.Création de la requête XMLHTTP (créer une nouvelle variable pour chaque type de contenu)
var xhr = new XMLHttpRequest();

//2.Création de la fonction callback
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		if(xhr.status === 200){
			document.getElementById('ajax').innerHTML = xhr.responseText;
		/*}else if(xhr.status === 404){
			document.write('File is not found');
		}else if(xhr.status === 500){
			document.write('The server is not found, please try again later.');
		}else{
			alert(xhr.statusText);*/
		}
	}
};

//3.On ouvre une requête (on choisi les infos de départ)
xhr.open('GET', 'sidebar.php');

//4.On envoie la requête au responseText au click
var button = document.getElementById('btn-loadAJAX');
button.addEventListener('click', function(){
	xhr.send();
	this.style.display = "none";
});