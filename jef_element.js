/**
 *  create syntaxe event "like" jquery
 *  param
 *  @events : event to listen
 *  @fucn : function to launch
 ****************************************************/

"use strict";

var jef_element = function jef_element(selector) {
    var _this = this;

    this.on = function (events, func) {

        // describe this
        var elements = document.querySelectorAll(selector),
            i = undefined,
            t = undefined;

        // check if it is several or only one element
        if (elements.length > 1) {
            for (i = 0, t = elements.length; i < t; i++) {
                elements[i].addEventListener(events, function (e) {
                    e.preventDefault();

                    // pass current element to jeff element reference
                    _this.element.target = __JEF__.target = e.target;
                    _this.element.url = __JEF__.url = e.target.href;

                    func();
                });
            }
        } else {
            document.querySelector(selector).addEventListener(events, function (e) {
                e.preventDefault();

                // pass current element to jeff element reference
                _this.element.target = __JEF__.element.target = e.target;
                _this.element.url = __JEF__.element.url = e.target.href;

                func();
            });
        }

        return _this;
    };

    return this;
};
//# sourceMappingURL=jef_element.js.map
