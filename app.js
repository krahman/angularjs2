function MalangJs() {}

MalangJs.annotations = [
	new angular.ComponentAnnotation({
		selector: 'malangjs'
	}),
	new angular.ViewAnnotation({
		template: '<div><h1>Hello MalangJS</h1></div>'
	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(MalangJs);
})