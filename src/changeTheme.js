var changeTheme = function(el) {
    currentURL = window.location.href;
    var color = el.innerHTML.toLowerCase();
    document.getElementById('theme').href='css/themes/'+color+'.css';
    history.pushState({}, '', currentURL);
    window.history.back();
};

