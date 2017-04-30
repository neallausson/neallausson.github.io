
/*$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#blockchaininfo_blocks').append(data.blocks);
			$('#info_connections').append(data.connections),
			$('#info_version').append(data.version),
			$('#info_protocolversion').append(data.protocolversion);
		},

		error : function(xhr, status, err) {
			$('#blockchaininfo_blocks').append(err+" N/A");
			$('#info_connections').append(err+" N/A"),
			$('#info_version').append(err+" N/A"),
			$('#info_protocolversion').append(err+" N/A");
		}
	});
});*/
/**
 * @author	Albin CAUDERLIER
 * @date	24/02/2017
 * 
 * Script jQuery appelant l'API de BlockCypher.com et affichant les données.
 * 
 */




$(document).ready(function() {


	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});

});


$(document).ready(function() {

	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_connection').append(data.connections),
			$('#bitcoin_version').append(data.version),
			$('#bitcoin_protocole_version').append(data.protocolversion);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_connection').append(err+" N/A"),
			$('#bitcoin_version').append(err+" N/A"),
			$('#bitcoin_protocole_version').append(err+" N/A");
		}
	});



});

$(document).ready(function(){
 $("button").click(function(e) {
     e.preventDefault();
     $.ajax({
		url : "https://api.mubiz.com/"+document.GetElementById('inputadresse').value+"/bitcoin/",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#user_url').append(data.user_url);
			$('#user_name').append(data.user_name);
		},

		error : function(xhr, status, err) {
			$('#user_url').append(err+" N/A");
			$('#user_adresse').append(err+" N/A");
		}
	});
 });	
});

