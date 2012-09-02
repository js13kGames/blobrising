(function() {

	"use strict";
	
    var 
		Entity = app.entities.Entity,
		isDefined = app.js.isDefined;

	app.editor.Serialization = function() {

		function Serialization() {
			this.divMenu = document.createElement("div");
	        this.divMenu.style.display = 'inline-block';
	        this.divMenu.style.verticalAlign = 'top';
	        this.divMenu.style.width = '100%';
	        this.divMenu.style.height = '17%';
	        this.divMenu.style.color = 'white';
	        document.body.appendChild(this.divMenu);
		};
		
		Serialization.prototype.show = function(map) {
		    this.divMenu.innerHTML = JSON.stringify(this.reduce(map));
		}
		
		Serialization.prototype.reduce = function(map) {
		    var reduce = {};
		    reduce.menuWell = {"className":"Well","nb":5,"nbBlobMax":10};
		    reduce["staticEntities"] = [];
		    for(var key in map.staticEntities) {
		        var staticEntity = map.staticEntities[key];
		        if(staticEntity != map.startSource && staticEntity != map.endWell) {
		            reduce["staticEntities"].push(
		                {"className":staticEntity["className"],"shape":{"x":staticEntity.shape["x"],"y":staticEntity.shape["y"]}});
	            }
		    }
		    reduce["startSource"] = {"degreeBlob":map.startSource.degreeBlob,"shape":{"x":map.startSource.shape.x,"y":map.startSource.shape.y}};
		    reduce["endWell"] = {"shape":{"x":map.endWell.shape.x,"y":map.endWell.shape.y}};
		    return reduce;
		}
		
		return Serialization;

	}();
})();
