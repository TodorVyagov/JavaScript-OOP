/// <reference path="libs/jquery-2.0.3.min.js" />
/// <reference path="libs/jquery-2.0.3.intellisense.js" />
/// <reference path="libs/require.min.js" />

(function () {
    require.config({
        paths: {
            'jquery': 'libs/jquery-2.0.3.min',
            'handlebars': 'libs/handlebars.min',
            'combobox': 'combobox',
            'data': 'people'
        }
    });

    require(['jquery', 'combobox', 'data'], function ($, controls, data) {

        var people = data;

        var comboBox = controls.ComboBox(people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        var container = $('#combobox-holder');
        container.html(comboBoxHtml);
    });

}());