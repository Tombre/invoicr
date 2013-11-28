/* PAGE MECHANICS */

/*
Global Vars 
-----------------------------------------------------*/

//include scripts that are reqiured in the site
var load_scripts = ['test-module'];

/*
Supporting Functions
-----------------------------------------------------

If there are support functions that are not module specific,
we can load them here so that they can be used globaly

*/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
Module Loading 
-----------------------------------------------------*/


(function(){
	
	var path = "js/min/";

}());


/*
Polyfill Loading 
-----------------------------------------------------

If there are polyfills to load in, load them here. Example Given 
Below with SVG's using the Raphael library

*/

(function(){
	
	var path = "js/vendor/";
	
	function returnPathName(name) {
		return path + name;
	}
	
	// Give Modernizr.load a string, an object, or an array of strings and objects
	console.log('Initiating loading polyfills');
	Modernizr.load([
	  // Functional polyfills
	  {
	    test : !Modernizr.svg, // This just has to be truthy
	    nope : returnPathName('raphael-min.js'), //can be in an array
	    complete : function () {
	      console.log(window.Raphael);
	      console.log(function(){
			if (window.Raphael) {
		    	return 'Raphael Loaded';
		    }
		    return 'failed to load resource "raphael-min.js"'
	      }());
	      //any other code relating to the app exec
	    }
	  }
	]);
	
}());