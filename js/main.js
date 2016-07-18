		window.onload = function() {
			// $("textarea:first").focus();
		};
		$(function() {
			$('#mybook').booklet({ arrows: true });
			
		});
		function makeExpandingArea(container, id) {
			var area = container.querySelector('textarea');
			var span = container.querySelector('span');
			area.addEventListener('keyup', checkScroll);
			area.addEventListener('keyup', restrictScroll);
			if(sessionStorage.getItem( id ) != ""){
				area.value = sessionStorage.getItem( id );
			}
			if (area.addEventListener) {
				area.addEventListener('input', function() {
				 sessionStorage.setItem(id, area.value);
				}, false);
				sessionStorage.setItem(id, area.value);
			} 
			else if (area.attachEvent) {
				// IE8 compatibility
				area.attachEvent('onpropertychange', function() {
				 sessionStorage.setItem(id, area.value);
				});
				sessionStorage.setItem(id, area.value);
			}
			// Enable extra CSS
			container.className += "active";
		}
		var areas = document.querySelectorAll('.expandingArea');
		var len = areas.length;
		while (len--) {
			makeExpandingArea(areas[len], len);
		}
		function checkScroll(e){
		if(e.target.clientHeight<e.target.scrollHeight){

			// $("input").change(function() {
			// 	var inputs = $(this).closest('form').find(':input');
			// 	inputs.eq( inputs.index(this)+ 1 ).focus();
			// });
		}
		};

		function restrictScroll(e){
		    if(e.target.clientHeight<e.target.scrollHeight){
		        while(e.target.clientHeight<e.target.scrollHeight){
		            e.target.value = e.target.value.substring(0, e.target.value.length-1);
		        }
		    }
		};