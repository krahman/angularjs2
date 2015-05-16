function Arema() {}

Arema.annotations = [
	new angular.ComponentAnnotation({
		selector: 'Arema'
	}),
	new angular.ViewAnnotation({
		template: '<div>Malas Utas Awij</div>'
	})
];

function MalangJs() {}

MalangJs.annotations = [
	new angular.ComponentAnnotation({
		selector: 'malangjs'
	}),
	new angular.ViewAnnotation({
		directives: [Arema],
		template: '<div><h1>Hello MalangJS</h1><Arema></div>'
	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(MalangJs);
})