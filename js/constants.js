var logLevel = 2;
var devName = "m@n";
var className = "";
console.log("Logs start for " + devName + " with " + logLevel + " level");

var maps = [
    {
        "menuEntities":
        [
            {"class":"Source","nb":5},
            {"class":"Wall","nb":5},
            {"class":"Well","nb":5,"nbBlobMax":10}
        ],
        "staticEntities":
        [
            {
                "class":"Well",
                "shape": {
                    "x":300,
                    "y":200
                }
            }
        ],
        "startSource":{"degreeBlob":40,"shape": {"x":50,"y":100}},
        "endWell":{"shape": {"x":500,"y":100}}
    }
]
