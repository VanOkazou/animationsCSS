//TP2 employees
var xhrEmployees = new XMLHttpRequest();

xhrEmployees.onreadystatechange = function() {
	if(xhrEmployees.readyState === 4){
		//console.log(xhr.responseText);

		var employees = JSON.parse(xhrEmployees.responseText); //Convertit le string xhr.responseText en objet javascript
		//console.log(employees);

		var html = '<ul>';

		for( var i = 0; i < employees.length ; i++ ){
			if(employees[i].cadre){
				html += '<li class="cadre">';
			} else {
				html += '<li class="noCadre">';
			}
			html += employees[i].name;
			html += '</li>';
		}

		html += '</ul>';

		document.getElementById('employeesjv').innerHTML = html;
	}
};
xhrEmployees.open('GET','data/employees.json');
xhrEmployees.send();

//TP3 rooms
var xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function() {
	if( xhrRooms.readyState === 4 ){
		if( xhrRooms.status === 200) {
			var rooms = JSON.parse(xhrRooms.responseText);
			var html = '';

			for( var i = 0; i<rooms.length; i++ ){
				if( rooms[i].free ) {
					html += '<li class="free">';
				} else {
					html += '<li class="occuped">';
				}
				html += rooms[i].name;
				html += '</li>';
			}

			document.getElementById('roomsjv').innerHTML = html;
		}
	}
};
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();