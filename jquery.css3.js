(function( $ ){
	var prefix = $.browser.webkit ? "-webkit-" : "-moz-";
	var methods = {
		gradient: function(opts) {
			var options = $.extend({
				base: "center right",
				colors: {
					"0"  : "FFFFFF",
					"50" : "000000",
					"100": "FFFFFF"
				},
				form: "linear"}
				,opts);
				//console.log(options);
			return this.each(function() {
				var gradient="";
				gradient += prefix+options.form+"-gradient";
				gradient += "(";
				gradient += options.base;

				$.each(options.colors, function(hold,color) {
					gradient += ",#"+color;
					gradient += (" "+hold+"%" || "");
				});
				gradient += ")";
				//console.log(gradient);        
				$(this).css("background-image", gradient);

			})
		}, 
		rotate : function( opts ) { 
			var options = opts ? opts : "30deg";
			//console.log(options);
			return this.each(function(){
				//console.log("rotate("+options+")");
				$(this).css(prefix+"transform","rotate("+options+")");
			})
		}
	};

	$.fn.css3 = function( method ) {
		
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments);
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}  



	};
})( jQuery );
