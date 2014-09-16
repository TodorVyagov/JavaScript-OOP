define(['todo-list/item'], function (Item) {
    'use strict';
    var Section;
    Section = (function () {
        function Section(title) {
            if (typeof title !== 'string') {
                throw {
                    message: 'Invalid content type! Item content must be string.'
                }
            }

            this.title = title;
            this.items = [];
        }
        
        Section.prototype = {
            getData: function () {
                return {
                    title: this.title,
                    items: this.items
                };
            },
            add: function (item) {
                if (!(item instanceof Item)) {
                    throw {
                        message: 'Invalid add type! Section can contain only items!'
                    };
                }

                this.items.push(item);
                return this;
            }
        }

        return Section;
    }());
    return Section;
});