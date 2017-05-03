
$(document).ready(function() {
	
	$(".successarea").hide();
	
	$("#send").on("click", function() {
		var data = {
			surname:$("#surname").val(),
			middlename:$("#middlename").val(),
			firstname:$("#firstname").val(),
			gnd:$("#gnd").val(),
			orcid:$("#orcid").val(),
			scopusAuthorID:$("#scopusAuthorID").val(),
			researcherID:$("#researcherID").val(),
			lsfID:$("#lsfID").val(),
			keywords:$("#keywords").val(),
			institution:$("#institution").val(),
			department:$("#department").val(),
			address:$("#address").val(),
			homepage:$("#homepage").val(),
			comment:$("#comment").val(),
			linkGoogleProfile:$("#linkGoogleProfile").val()
			
		};
		
		$.ajax({
			url:"http://localhost:8081/knowledgebase/",
			method:"PUT",
			contentType:"application/json",
			data: JSON.stringify(data),
			success:function(data) {
				$(".successarea").show();
				$("form").hide();
			},
			error:function(data) {
				alert("Daten konnten nicht gespeichert werden")
			}
			
			
		})
	})
})