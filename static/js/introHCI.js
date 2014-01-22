'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript connected");
		$('#testjs').text(":P");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(buttonClick);
}

function buttonClick(e) {
	var selected = $(".form-control").val();
	console.log(selected);
	var pixelVal = $("#width").val();
	console.log(pixelVal);

	var desc = $("#description").val();
	console.log(desc);

	var oldDesc = $(selected).find(".project-description");
	if (oldDesc.length == 0) {
		$(selected).append("<div class='project-description'><p>" + desc + "</p></div>"); 

	}
	oldDesc.text(desc);

	($(selected).find(".img")).animate( {width: pixelVal},1000);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.toggle();
    }
}