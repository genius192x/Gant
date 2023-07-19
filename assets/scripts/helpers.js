(function ($) {
	$(function () {
		'use strict';
		console.log('helpers.js is ready');



		(function toggle() {
			function parseAtribute(str) {
				if (typeof str === 'undefined') {
					return null;
				}

				if (str) {
					var arrayItems = str.split(',');
					var clearArrayItems = arrayItems.map(function (classString) {
						return classString.trim();
					});

					return clearArrayItems;
				}
			}

			var $trigger = $('.js-toggle');

			$trigger.on('click', function () {
				var toggleScope = $(this).data('toggleScope'),
					toggleTarget = $(this).data('toggleTarget'),
					toggleClass = $(this).data('toggleClass'),
					scopeList = false,
					targetList = false,
					classList = false,
					trigger = this;

				// Scoped and targeted
				if (toggleScope && toggleTarget && toggleClass) {
					scopeList = parseAtribute(toggleScope);
					targetList = parseAtribute(toggleTarget);
					classList = parseAtribute(toggleClass);

					if (scopeList.length && targetList.length && classList.length) {
						targetList.forEach(function (item, i) {
							if (typeof classList[i] !== 'undefined') {
								$(trigger).closest(scopeList[i]).find(targetList[i]).toggleClass(classList[i]);
							}
						});
					}
				// Targeted at parent
				} else if (toggleScope && toggleClass) {
					scopeList = parseAtribute(toggleScope);
					classList = parseAtribute(toggleClass);

					if (scopeList.length && classList.length) {
						scopeList.forEach(function (item, i) {
							if (typeof classList[i] !== 'undefined') {
								$(trigger).closest(scopeList[i]).toggleClass(classList[i]);
							}
						});
					}
				// Not scoped
				} else if (toggleTarget && toggleClass) {
					targetList = parseAtribute(toggleTarget);
					classList = parseAtribute(toggleClass);

					if (targetList.length && classList.length) {
						targetList.forEach(function (item, i) {
							if (typeof classList[i] !== 'undefined') {
								$(targetList[i]).toggleClass(classList[i]);
							}
						});
					}
				}

				return false;
			});
		})();



	});
})(jQuery);
