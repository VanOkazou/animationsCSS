$(function() {

	//TP1 : initialisation with JQuery
    $('#btn-loadAJAXjq').on('click', function() {

    	// Method 1 : load()
    	//$("#ajaxjq").load('sidebar.php');

    	// Method 2 : jQuery.get(url, data, callback)
    	var url = 'sidebar.php';
    	/*var data = {
    		'firstname' : 'Van',
    		'lastname' : 'Phan'
    	}*/
    	var callback = function(response) {
    		$("#ajaxjq").html(response);
    	}
		$.get(url/*, data*/, callback);   	

    	$(this).hide();
    });

    //TP2: Employees list with JQuery
    //Method 3 : jQuery.getJSON(url, data, callback)
    var urlEmployees = 'data/employees.json';
    $.getJSON( urlEmployees, function(response){
    	var html = '<ul>';
    	$.each(response, function(index, row){
    		if( row.cadre ) {
    			html += '<li class="cadre">';
    		} else {
    			html += '<li class="noCadre">';
    		}
    		html += row.name;
    		html += '</li>';
    	});
    	html += '</ul>';
    	$('#employeesjq').html(html);
    });//End getJSON

    //TP3: Rooms
    var urlRooms = 'data/rooms.json'
    $.ajax(urlRooms, {
    	success: function(response) {
    		var html = '';
    		$.each(response, function(index, row){
    			if(row.free) {
	    			html += '<li class="free">';
    			} else {
	    			html += '<li class="occuped">';
    			}
	    		html += row.name;
	    		html += '</li>';
    		});
	    	$('#roomsjq').html(html);
    	}
    });

    //TP4: Formulaire
    $('#contactForm').submit(function(evt) {
    	evt.preventDefault();

    	var url = $(this).attr('action');
    	var formDatas = $(this).serialize();
    	
    	//Method 4 : JQuery.post(url, data, callback)
    	/*$.post(url, formDatas, function(response){
    		$('#btn-submit').html('<p class="submitOK">You have been registered!</p>');
    	})*/

    	//Method 5 : JQuery.ajax(url, settings) settings = javascript object
    	$.ajax(url,{
    		data : formDatas, //Use to send datas to the server
    		type : "POST",
    		success : function(response) {
				$('#btn-submit').html('<p class="submitOK">You have been registered!</p>');
    		}
    	}).fail(function(jqXHR){
    		$('#btn-submit').html('Sorry, ' + jqXHR.statusText + ' error :(');
       	});
    }); //End submitForm

    //TP5: Gallery Flickr button
    $('#filter li').click(function() {
    	$('#filter li').removeClass('selected');
    	$(this).addClass('selected');

    	//$.getJSON(flickrURL, flickrOptions, flickrDatas)
    	var flickrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    	var keyword = $(this).text();
    	var flickrOptions = {
    		tags: keyword,
    		format: 'json'
    	};//Attend un objet javascript
    	function flickrDatas(data) {
    		var html = '<ul>';
    		console.log(data.items);
    		$.each(data.items, function(index, image){
    			html += '<li><a href="'+ image.link;
    			html += '" title="'+ image.title;
    			html += '"><img src="'+ image.media.m;
    			html += '" alt="'+ image.title;
    			html += '"/></a>';
    			html += '</li>';
    		});
    		html += '</ul>';
    		$('#pictures').html(html);
    	}
    	$.getJSON(flickrURL, flickrOptions, flickrDatas);
    }); //End click button filter

	//TP6: Gallery Flickr search
    $('#searchbar').on('input', function(evt) {
    	$('#filter li').removeClass('selected');

    	//$.getJSON(flickrURL, flickrOptions, flickrDatas)
    	var flickrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    	var keyword = $(this).val();
    	var flickrOptions = {
    		tags: keyword,
    		format: 'json'
    	};//Attend un objet javascript
    	function flickrDatas(data) {
    		var html = '<ul>';
    		console.log(data.items);
    		$.each(data.items, function(index, image){
    			html += '<li><a href="'+ image.link;
    			html += '" title="'+ image.title;
    			html += '"><img src="'+ image.media.m;
    			html += '" alt="'+ image.title;
    			html += '"/></a>';
    			html += '</li>';
    		});
    		html += '</ul>';
    		$('#pictures').html(html);
    	}
    	$.getJSON(flickrURL, flickrOptions, flickrDatas);
    }); //End click button filter
}); //End ready