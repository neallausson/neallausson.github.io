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
		url : "http://bitcoin.mubiz.com/blockchaininfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#blockchaininfo_blocks').append(data.blocks);
		},

		error : function(xhr, status, err) {
			$('#blockchaininfo_blocks').append(err+" N/A");
		}
	});
});

$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#info_connections').append(data.connections);
		},

		error : function(xhr, status, err) {
			$('#info_connections').append(err+" N/A");
		}
	});
});

/*
$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/peerinfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#info.connections').append(data.connections);
		},

		error : function(xhr, status, err) {
			$('#info.connections').append(err+" N/A");
		}
	});
});*/