$(document).ready(function() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
        if (get('toolbar').style.height == '60vh') {
            get('toolbar').style.height = '0';
            get('c').style.display = 'none';
        } else {
            get('toolbar').style.height = '60vh';
            get('c').style.display = 'block';
        }
    });
});