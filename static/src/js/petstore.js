odoo.define('oepetstore.petstore', function (require) {
    "use strict";
    var Class = require('web.Class');
    var Widget = require('web.Widget');
    var core = require('web.core');
    var utils = require('web.utils');
    var _t = core._t;
    var _lt = core._lt;

    var homePage = Widget.extend({
        init: function(parent) {
            this._super(parent);
            console.log("Hello JS, I'm inside of init.");
        },
        start: function() {
            console.log("Your pet store home page loaded");
        },
        getTitle: function() {
            return _t("Pet Store Home Page"); // return a title for the action
        },
        getState: function() {
            return {canBeRemoved: function() {

                return true; // or false, depending on your logic
        
            },}; // return the current state of the controller
        },
    });
    core.action_registry.add('petstore', homePage);
});