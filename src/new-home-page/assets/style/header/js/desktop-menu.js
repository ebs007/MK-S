$(document).ready(function() {
	$( ".dropdown-toggle" ).on({
		click: function() {
			$( '.dropdown-menu' ).toggleClass( "d-block" );
		}, mouseenter: function() {
			$( '.dropdown-menu' ).addClass( "d-block" );
		}, mouseleave: function() {
			$( '.dropdown-menu' ).removeClass( "d-none" );
		}
	});

	$( '.dropdown-menu' ).on({
		mouseleave: function(event) {
			$( this ).toggleClass( "d-block" );
		}
	});

});
