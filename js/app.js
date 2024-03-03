if(navigator.serviceWorker) {
	navigator
		.serviceWorker
		.register('./.././Hall_Effect_Experiment/service_worker_Hall_Effect_Experiment.js')
		.then(function(r) {
			console.log('NW  App now available offline');
		})
		.catch(function(e) {
			console.log('NW App NOT available offline');
			console.log(e);
		});
} else {
	console.log('Service workers are not supported');
}
