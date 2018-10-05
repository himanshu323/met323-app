import { by, browser } from 'protractor';

import { config } from '../conf';




export class customLocators {

	addLocators() {
		by.addLocator("ngClick", (toState, parentelement) => {


			console.log("Adding locators");

			var using = parentelement || document;

			var prefixes = ['ng-click'];

			for (var i = 0; i < prefixes.length; i++) {
				var selector = "*[" + prefixes[i] + "='" + toState + "']";
				var inputs = using.querySelectorAll(selector);

				if (inputs.length) {

					return inputs;

				}

			}

		});

		by.addLocator("ngShow", (toState, parentelement) => {

			var using = parentelement || document;

			var prefixes = ['ng-show'];

			for (var i = 0; i < prefixes.length; i++) {
				var selector = "*[" + prefixes[i] + "='" + toState + "']";
				var inputs = using.querySelectorAll(selector);

				if (inputs.length) {

					return inputs;

				}

			}

		});

	}
}
