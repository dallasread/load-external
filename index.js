function loadExternal(url, mode, callback) {
    var script = undefined;

    if (typeof mode === 'function') {
        callback = mode;
        mode = /css/.test(url) ? 'css' : 'js';
    }

    if (mode === 'css') {
        script = document.createElement( 'link' );
        script.setAttribute( 'href', url );
        script.setAttribute( 'rel', 'stylesheet' );
        script.setAttribute( 'type', 'text/css' );
    } else {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
    }

    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = undefined;

                if (typeof callback === 'function') {
                    callback();
                }
            }
        };
    } else {
        script.onload = function() {
            if (typeof callback === 'function') {
                callback();
            }
        };
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

if (typeof window !== 'undefined') {
    window.loadExternal = window.externalLoader = loadExternal;
}

if (typeof module !== 'undefined') {
    module.exports = loadExternal;
}
