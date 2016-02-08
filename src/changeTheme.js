var changeTheme = function(el) {
    var color = el.innerHTML.toLowerCase();
    // console.log(el.innerHTML);
    // console.log(color);
    document.getElementById('theme').href='css/themes/'+color+'.css';
    
  //  console.log(window.location.href);
};
