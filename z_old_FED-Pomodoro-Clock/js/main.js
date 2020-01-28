/*

Still need to...

1) initiate countdown on click / space bar binding

2) countdown effects, color looping around the edge? % of way = % of radius

3) countdown finish effect, initiate 'breakTime' countdown


*/


$(document).ready( function() {

	//setting + and - for selector and for the clock 

	var breakTime = $('.breakTime').html();
	var mainTime = $('.mainTime').html();
	var placeholder;
	var pauseStar = true;

	$('.minusBreakTime').click( function() {

		$('.breakTime').html( function(i, j) {
			placeholder = +j-1;
			return +j-1;
		});
		$('.theBreak').html( function(i, j) {
			return placeholder;
		});

	});
	
	$('.plusBreakTime').click( function() {

		$('.breakTime').html( function(i, j) {
			placeholder = +j+1;
			return +j+1;
		});
		$('.theBreak').html( function(i, j) {
			return placeholder;
		});
	});
	
	$('.minusMainTime').click( function() {

		$('.mainTime').html( function(i, j) {
			placeholder = +j-1;
			return +j-1;
		});
		$('.theTime').html( function(i, j) {
			return placeholder;
		});
		mainTime = $('.mainTime').html();
	});

	$('.plusMainTime').click( function() {

		$('.mainTime').html( function(i, j) {
			placeholder = +j+1;
			return +j+1;
		});
		$('.theTime').html( function(i, j) {
			return placeholder;
		});
		mainTime = $('.mainTime').html();

	});

	console.log(mainTime)
	//The timer

	$('.theTimer').click( function() {

		var time = mainTime * 60;
		var duration = moment.duration(time * 1000, 'milliseconds');
		var interval = 1000;

		//for the main timer
		var forClearing = setInterval(function(){
		    duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
		    $('.theTime').text(moment(duration.asMilliseconds()).format('mm:ss'));

			//console.log(duration._data.seconds);
			if ( duration._data.minutes == 0 && duration._data.seconds == 0 ) {
		        clearInterval(forClearing);
		    };

		    $('.theTimer').click(function() {
		    	mainTime = $('.mainTime').html();
		        clearInterval(forClearing);
		    });



		  console.log();
		}, interval);

		//repeat^ for the secondary timer


	});





















});