/**
 *  create syntaxe event "like" jquery
 *  param
 *  @events : event to listen
 *  @fucn : function to launch
 ****************************************************/

"use strict";

var jef_element = function(selector) {

    this.on = (events, func) => {

        // describe this
        let elements = document.querySelectorAll(selector),
            i,
            t;

        // check if it is several or only one element
        if(elements.length > 1) {
            for(i = 0, t = elements.length; i < t; i++) {
                elements[i].addEventListener(events, (e) => {
                    e.preventDefault();

                    // pass current element to jeff element reference
                    this.element.target = __JEF__.target = e.target;
                    this.element.url = __JEF__.url = e.target.href;

                    func();
                });
            }
        } else {
            document.querySelector(selector).addEventListener(events, (e) => {
                e.preventDefault();

                // pass current element to jeff element reference
                this.element.target = __JEF__.element.target = e.target;
                this.element.url = __JEF__.element.url = e.target.href;

                func();
            });
        }

        return this;

    };

    return this;

};


