define(function () {
    'use strict';
    var Item;
    Item = (function () {
        function Item(content) {
            if (typeof content !== 'string') {
                throw {
                    message: 'Invalid content type! Item content must be string.'
                }
            }

            this.content = content;
        }

        Item.prototype = {
            getData: function () {
                return {
                    content: this.content
                };
            }
        }

        return Item;
    })();

    return Item;
});