function get_cookie(name) {
    alert('read' + name);
    var matches = document.cookie.match(new RegExp(
	      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	    ))
    
    return matches ? decodeURIComponent(matches[1]) : ''
}


function set_cookie(name, value, expires) {
    if (!expires) {
        expires = new Date();
    }
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
}
