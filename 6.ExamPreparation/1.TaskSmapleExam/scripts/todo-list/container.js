define(['todo-list/section'], function (Section) {
    'use strict';
    var Container;
    Container = (function () {
        function Container() {
            this.sections = [];
        }

        Container.prototype = {
            getData: function () {
                return this.sections;
            },
            add: function (section) {
                if (!(section instanceof Section)) {
                    throw {
                        message: 'Invalid add input! Container can contain only sections!'
                    };
                }

                this.sections.push(section);
                return this;
            }
        };

        return Container;
    }());

    return Container;
});