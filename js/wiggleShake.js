function randomize(start, deviation) {
	var min = start - deviation;
	var max = start + deviation;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//------------------------------------------
//					WIGGLE
//------------------------------------------
function wiggle(container_id, wiggleDeviation, delay, delayDeviation) {
	var wiggleElements = "#" + container_id + " > .wiggle";

	//Iterate through wiggle elements and animate
	$.each($(wiggleElements), function () {
		var randomDelay = randomize(delay, delayDeviation);

		$(this).animate({
			"top": randomize(0, wiggleDeviation),
			"left": randomize(0, wiggleDeviation)
		}, randomDelay,

		//Callback
		function () {
			wiggle(container_id, wiggleDeviation, delay, delayDeviation);
		}
		);
	});

}



//------------------------------------------
//					POLYSHAKE
//------------------------------------------
function polygonShake(svg_id, originalPointData, x_deviation, y_deviation, delay) {

	var svgPolygon = "#" + svg_id + " > polygon";
	var str_newPoints = "";

	for (i = 0; i < originalPointData.length; i++) {

		//Create new variables and set to original
		var newX = originalPointData[i][0];
		var newY = originalPointData[i][1];

		//validate between limit points (0 and 100)
		//set new variables to random number within deviation
		if (originalPointData[i][0] > 0 & originalPointData[i][0] < 100)
		{
			newX = randomize(originalPointData[i][0], x_deviation);
		}
		if (originalPointData[i][1] > 0 || originalPointData[i][1] < 100)
		{
			newY = randomize(originalPointData[i][1], y_deviation);
		}

		//write new variables to newPoints
		str_newPoints = str_newPoints + newX.toString() + "," + newY.toString() + " ";
	}

	//Callback
	setTimeout(function () {
		$(svgPolygon).attr("points", str_newPoints);
		polygonShake(svg_id, originalPointData, x_deviation, y_deviation, delay);
	}, delay);
}

//Gets original points to establish point of reference for shake.
function getOriginalPolygonPoints(svg_id)
{
	var svgPolygon = "#" + svg_id + " > polygon";
	var arr_pointPair = [];
	var pointOrig = $(svgPolygon).attr("points").split(" ");
	for (i = 0; i < pointOrig.length; i++) {
		var getSeperatedPoints = pointOrig[i].split(",");
		arr_pointPair.push([Number(getSeperatedPoints[0]), Number(getSeperatedPoints[1])]);
	}
	return arr_pointPair;
}


