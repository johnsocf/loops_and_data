(function() {
	var sports = [
		{"swimming": "pool",
		 "ranking": "one",
		 "type": "swimming"
		},
		{"bicycle": "road",
		 "ranking": "two",
		 "type": "cycling"
		},
		{"running": "trail",
		 "ranking": "three",
		 "type": "running"
		}
		],
		activities = $('.activities li');

		console.log(activities);

	$('.swap').on('click', rankingLoop);


	function rankingLoop() {
		var count = null;
		for (i = 0; i < activities.length; i++) {
		var activityElement = $(activities[i]),
			activityData = activityElement.data('sport');
			console.log(activityData);
		for (x=0; x<sports.length; x++) {
			var elementSport = sports[x],
			ranking = elementSport.type;
			console.log("**" + ranking);
			if (activityData == ranking) {
				count ++;
				console.log(count);
				activityElement.html('');
				activityElement.append(elementSport.type + " ranking:  " + elementSport.ranking);
				
				break;
				// if (count == 3) {
				// 	break;
				// 	console.log('break');
				// }
			}
		}
	}
	}


	

})();