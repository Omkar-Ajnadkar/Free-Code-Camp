function orbitalPeriod(arr) {
    var results = [];
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    arr.forEach(function(element) {
        results.push({
            name: element.name,
            orbitalPeriod: getOrbitalPeriod(element.avgAlt, GM, earthRadius)
        });
    });

    return results;

    function getOrbitalPeriod(avgAlt, GM, planetRadius) {
        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(avgAlt + planetRadius, 3) / GM));
    }
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
