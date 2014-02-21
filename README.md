jQuery.someData
===============

[jQuery.someData][jquery.somedata] is a [jQuery][jquery] plugin that allows you to get
a variable number data attributes from an element.

**Only defined, non-null values are returned.**

Supports three usages: args, array, and object.

```js
// returns data-a, data-b, data-c as a hash
var by_args = $(elem).someData('a', 'b', 'c');
var by_arr  = $(elem).someData(['a', 'b', 'c']);

// returns the same object with matching property names replaced
var by_obj  = $(elem).someData({a: 'might', b: 'be', c: 'replaced'});
```

Also supports an alternate syntax for use with non-jQuery objects:

```js
$.someData(elem, 'a', 'b', 'c');
```

The same three usages can be used with alternate syntax.

Installing
==========

Requires [jQuery][jquery], include someData after it:

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.somedata.js"></script>
```

Example
=======

You might have a [lightbox style][lightbox] gallery, where the images are annotated
using data attributes.

```html
<section class="gallery">
    <h1>Empire State Building</h1>
    <ol class="lightbox-gallery">
        <li><a href="image_01_large.jpg"
            data-title="Really amazing architecture!"
            data-time="04:01:11 PM"
            ><img src="image_01_thumb.jpg" alt="Empire State Building: 01"></a></li>
        <li><a href="image_02_large.jpg"
            data-title="Another shot at dusk, great colors."
            data-time="07:18:12 PM"
            ><img src="image_02_thumb.jpg" alt="Empire State Building: 02"></a></li>
    </ol>
</section>
```

Extracting these annotations with someData becomes every easy:

```js
jQuery(function($) {

    $('ol.lightbox-gallery li a').each(function() {
        var $link = $(this)
            ,extra = $link.someData('title', 'time');

        // do something interesting with extra data
        console.log(extra.title, extra.time);
    });

});
```

Licenses
========

Created by [deviantART][da]. Please check the [LICENSES.txt][licenses] file for full details on the licensing.

[da]: http://www.deviantart.com/
[jquery.somedata]: http://deviantart.github.com/jquery.somedata/
[licenses]: https://github.com/deviantART/jquery.somedata/blob/master/LICENSES.txt
[jquery]: http://jquery.com/
[lightbox]: http://coding.smashingmagazine.com/2007/05/18/30-best-solutions-for-image-galleries-slideshows-lightboxes/
