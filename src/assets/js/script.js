$(document).ready(function () {
    $('#sidebar_toggle').click(function (e) { 
        e.preventDefault();
        $('#app_sidebar').toggleClass('sidebar-open')
    });    
    $('.toggle-search').click(function (e) { 
        e.preventDefault();
        $('.brand-navbar .form-control').toggleClass('show')
    });
    $('.open-sidebar').click(function (e) { 
        $('.right-sidebar').addClass('open')
    });
    $('.close-sidebar').click(function (e) { 
        $('.right-sidebar').removeClass('open')
    });
    
});