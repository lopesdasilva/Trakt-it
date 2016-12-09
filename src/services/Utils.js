var Utils = {
    _parseUrl: function (url) {
        var query_string = {};
        var url = url.substring(url.lastIndexOf("?") + 1).split("&")[0];
        var vars = url.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    },
    getParameterFromUrl: function (url, parameter) {
        //TODO: Check if the parameter exists
         return this._parseUrl(url)[parameter];
    }
}
export  {Utils as default}