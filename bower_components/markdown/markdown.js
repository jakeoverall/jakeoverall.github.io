'use strict';

/*
 * angular-markdown-directive v0.1.0
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

angular.module('exp.markdown', []).
    directive('expMarkdown', function () {
        var converter = new Showdown.converter();
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                if (attrs.expMarkdown) {
                    scope.$watch(attrs.expMarkdown, function (newVal) {
                        var html = newVal ? converter.makeHtml(newVal) : '';
                        element.html(html);
                    });
                } else {
                    var html = converter.makeHtml(element.text());
                    element.html(html);
                }
            }
        };
    });
