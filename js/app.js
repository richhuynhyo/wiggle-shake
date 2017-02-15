

//Events
$(document).ready(function () {

	//polygonShake(svg_id, originalPointData, x_deviation, y_deviation, delay)
	polygonShake("poly_shake", getOriginalPolygonPoints("poly_shake"), .15, .15, 50);


	//wiggle(container_id, wiggleDeviation, delay, delayDeviation) 
	wiggle("header_wiggle_front", 1, 150, 50);

});



