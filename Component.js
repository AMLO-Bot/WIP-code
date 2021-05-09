// Not using arrow functions, we need lexical context "this" , we use IIFE instead
const Component = (function () {

	const Constructor = function(options) {
		this.el = options.el;
		this.data = options.data;  //Local State for the component
		this.template = options.template;
	};


	Constructor.prototype.render = function () {
		const $el = document.querySelector(this.el);
		
		if (!$el) return;
		
		$el.innerHTML = this.template(this.data)
	};
	
	// Actualiza state de forma reactiva
	Constructor.prototype.setState = function (obj) {
		for (const key in obj) {
			if (this.data.hasOwnProperty(key)) {
				this.data[key] = obj[key]
			};
		};

		this.render();
	};

	Constructor.prototype.getState = function () {
		return JSON.parse(JSON.stringify(this.data));
	};

	return Constructor;
	
})();