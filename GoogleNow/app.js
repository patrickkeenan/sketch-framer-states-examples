AppLoad = function(e) {
	Framer.Config.animationCurve = 'spring(400,30,0)';
	Framer.Config.animationDelay = 0;
	Framer.Config.animationTime = 1;
	
	var phoneFrameScript = document.createElement('script');
	phoneFrameScript.src = 'iphone-5s-white.js';
	document.head.appendChild(phoneFrameScript);

	window.onclick =function(e) {
		//This is a helper that moves you through all states
		FramerStatesHelper.animateToNextState()
	}
}

AppStates = {
	// Here is where you can adjust the finer points
	// stateName: {
	// 	layerName: {
	// 		frame: {
	// 			x: 0,
	// 			y: 0
	// 		},
	// 		curve: 'linear',
	// 		time: 100,
	// 		delay: 500
	//		events:{
	//			click: function(){
	//				console.log('Boom!')
	//			}
	//		}
	// 	}
	// }
}