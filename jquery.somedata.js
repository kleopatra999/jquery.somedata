/* Copyright 2013, deviantART, Inc.
 * Licensed under 3-Clause BSD.
 * Refer to the LICENCES.txt file for details.
 * For latest version, see https://github.com/deviantART/jquery.somedata
 */
(function($) {

    /**
     * someData: get a variable number of data attributes from an element.
     *
     * NOTE: only defined and non-null values will be returned.
     *
     * Supports three usages, all of which will return a plain object/hash:
     *
     *   // returns data-a, data-b, data-c as a hash
     *   f = $(elem).someData('a', 'b', 'c');
     *   u = $(elem).someData(['a', 'b', 'c']);
     *
     *   // returns the same object with matching keys replaced
     *   n = $(elem).someData({a: 'might', b: 'be', c: 'replaced'});
     *
     * Can also supports an alternate syntax to work with a non-jQuery object:
     *
     *   o = $.someData(element, ['a', 'b', 'c']);
     *   r = $.someData(element, {a: 'might', b: 'be', c: 'replaced'});
     *
     * When using the alternate syntax, an array or hash must be provided as the
     * second argument.
     */
    $.fn.someData = function(list) {
        if (!$.isArray(list) && !$.isPlainObject(list)) {
            // http://www.sitepoint.com/arguments-a-javascript-oddity/
            list = Array.prototype.slice.call(arguments);
        }
        return $.someData(this[0], list);
    };

    $.someData = function(elem, list) {
        var $elem = $(elem)
            ,collected_data = {}
            ,search_for = []
            ,key, i, m;

        if ($.isArray(list)) {
            // list of keys provided as array: ([a, b, c])
            search_for = list;
        } else if ($.isPlainObject(list)) {
            // default values provided as an hash: ({default: 'values', might: 'be replaced'})
            for (key in list) {
                search_for.push(key);
            }
            // use a (deep) extend to prevent referencing
            collected_data = $.extend(true, {}, list);
        } else {
            throw "Invalid list argument provided";
        }

        if ($elem.length) {
            for (i = 0, m = search_for.length; i < m; i++) {
                key = search_for[i];
                // Unlike $.fn.data, a plain $.data call will never return DOM
                // data attributes as data values. Always use $.fn.data here!
                value = $elem.data(key);
                if (value !== undefined && value !== null) {
                    collected_data[key] = value;
                }
            }
        }

        return collected_data;
    };

})(jQuery);
