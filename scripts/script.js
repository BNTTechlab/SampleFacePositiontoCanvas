const Scene = require('Scene');
const Reactive = require('Reactive');
export const Diagnostics = require('Diagnostics');
const FaceTracking2D = require('FaceTracking2D');
const face = FaceTracking2D.face(0);


Scene.root.findFirst('canvas0').then(function(canvas){
	Diagnostics.watch('Canvas w:',canvas.bounds.width);
	Diagnostics.watch('Canvas h:',canvas.bounds.height);

	Scene.root.findFirst('rectangle0')
	.then(function(rect){
		Diagnostics.watch('face center X:',face.boundingBox.center.x);
		Diagnostics.watch('face center Y:',face.boundingBox.center.y);
		
		rect.transform.x = Reactive.sub(Reactive.mul(face.boundingBox.center.x,canvas.bounds.width),Reactive.div(canvas.bounds.width,2));
		rect.transform.y = Reactive.mul(Reactive.sub(Reactive.mul(face.boundingBox.center.y,canvas.bounds.height),Reactive.div(canvas.bounds.height,2)),-1);

		Diagnostics.watch('Rect X:',rect.transform.x);
		Diagnostics.watch('Rect Y:',rect.transform.y);
		//Diagnostics.watch('rect',rect);
		Diagnostics.log(typeof rect);
	});
});