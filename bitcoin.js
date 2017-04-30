
$(document).ready(function() {
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
});
