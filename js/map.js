(function() {

	"use strict";
	
	var stringToClass = app.js.stringToClass;

	app.Map = {};

	// units vector 
	app.Map.i = $V([0, 1, 0]);
	app.Map.j = $V([1, 0, 0]);


	app.Map = function() {

		function Map(serializedMap) {
			this.staticEntities = [];
			this.menuEntities = [];
			Map.prototype.deserialize.call(this, serializedMap);
		}
		
		Map.prototype.deserialize = function(serializedMap) {
		    for(var entityIndex in serializedMap.staticEntities) {
	            console.log("map::deserialize::deserialize");
	            var entityClass = stringToClass(serializedMap.staticEntities[entityIndex]["class"]);
	            var entity = new entityClass();
	            console.log(entity);
	            entity.deserialize(serializedMap.staticEntities[entityIndex])
	            this.staticEntities.push(entity);
		    }
		    this.finalPuit = {blob:0};
		}
		
		Map.prototype.draw = function(context) {
		    for(var entityIndex in this.staticEntities) {
		        var entity = this.staticEntities[entityIndex];
		        console.log("map::deserialize::draw");
		        console.log(entity);
		        entity.shape.draw(context);
		    }
		}
		
		Map.prototype.isWin = function() {
		    var win = false;
		    if(this.finalPuit.blob > 0) {
		        win = true;
		    }
		    return win;
		}

		return Map;
	}();
})();
