Easily load external js and css files (cross-browser).

```
var loadExternal = require('load-external');

loadExternal('https://js.stripe.com/v2/', function() {
    // alert('Stripe is loaded!');
});

loadExternal('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css', function() {
    // alert('CSS Reset is loaded & applied!');
});
```

LoadExternal does its best to determine the type of file you wish to load, but you can also explicitly define the mode (currently accepts js or css):

```
loadExternal('https://js.stripe.com/v2/', 'js', function() {
    // alert('Stripe is loaded!');
});
```
