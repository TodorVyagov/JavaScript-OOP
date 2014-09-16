/// <reference path="libs/jquery-2.0.3.js" />
/// <reference path="libs/handlebars.min.js" />
/// <reference path="libs/jquery-2.0.3.intellisense.js" />
/// <reference path="libs/require.min.js" />

define(['handlebars', 'jquery'], function () {
    var controls = (function () {
        var ComboBox = (function () {
            function onClickExpand() {
                var $this = $(this);
                var $parent = $this.parent();
                $parent.find('.dropdown-item').fadeIn(1000);
            }

            function onClickSelect() {
                var $this = $(this);
                var $parent = $this.parent();
                // hide dropdown
                $parent.find('.dropdown-item').fadeOut(1000);
                // replace selected item
                $parent.find('#selected').html($this.html());
            }

            function ComboBox(items) {
                this.items = items;
            }
            
            ComboBox.prototype = {
                render: function (templateHtml) {
                    var template = Handlebars.compile(templateHtml);
                    var $container = $('<div>');
                    var $topContent = $('<div>');
                    $(template(this.items[0])).appendTo($topContent);
                    $topContent.attr('id', 'selected');
                    $topContent.appendTo($container);
                    $topContent.click(onClickExpand);

                    for (var i = 0; i < this.items.length; i++) {
                        var $innerContent = $('<div>');
                        $innerContent.attr('class', 'dropdown-item');
                        
                        var item = this.items[i];
                        $(template(item)).appendTo($innerContent);
                        $innerContent.appendTo($container);
                    }
                    $container.find('.dropdown-item').css('display', 'none');
                    $container.on('click', '.dropdown-item', onClickSelect);
                    return $container;
                }
            }

            return {
                ComboBox: function (items) {
                    return new ComboBox(items);
                }
            }
        }());

        return ComboBox;
    }());

    return controls;
});