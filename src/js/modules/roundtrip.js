$(function() {
	$(":checkbox").on("click", function() {
	  $("#return-date-input").prop({disabled: !this.checked});
	});
});
