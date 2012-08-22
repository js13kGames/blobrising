(function() {

	"use strict";

    var 
		Entity = app.entities.Entity,
		inherit = app.js.inherit,
		isDefined = app.js.isDefined;

	app.entities.Well = function() {

		inherit(Well, Entity);
		
		var nbBlobMax;
		
		function Well() {
			Well.parent.constructor.apply(this);
			this.nbBlobMax = 1;
		};
		
		Well.prototype.init = function() {
		    Well.parent.init.call(this);
		    this.radius = Math.max(this.shape.width, this.shape.height);
		    this.radius += 80;
		}
		
		Well.prototype.update = function(translation, map) {
		    if(this.nbBlobMax <= 0) {
		        this.dead(map);
		    } else {
		        Well.parent.update.call(this, translation, map);
		    }
		}
		
		return Well;

	}();
})();

