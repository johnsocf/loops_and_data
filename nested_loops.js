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


	$('.swap').on('click', rankingLoop);
	$('.clear').on('click', clear);


	function rankingLoop(parameters) {
		var count = null;
		for (i = 0; i < activities.length; i++) {
		var activityElement = $(activities[i]),
			activityData = activityElement.data('sport');
			for (x=0; x<sports.length; x++) {
				var elementSport = sports[x],
				ranking = elementSport.type;
				if (activityData == ranking) {
					activityElement.html('');
					activityElement.append(elementSport.type + " ranking:  " + elementSport.ranking);
					
					continue;
				}
			}
		}
	}

	function clear() {
		activities.html('');
	}


	

})();