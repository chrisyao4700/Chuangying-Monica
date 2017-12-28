function move_to_history() {
    remove_active_nav();
    $('li#history_tag').addClass('active');
    $('html, body').animate({
        scrollTop: $('#fh5co-work-section').offset().top
    }, 2000);
}
function move_to_people() {
    remove_active_nav();
    $('li#people_tag').addClass('active');
    $('html, body').animate({
        scrollTop: $('#fh5co-services-section').offset().top
    }, 2000);
}
function move_to_share() {
    remove_active_nav();
    $('li#share_tag').addClass('active');
    $('html, body').animate({
        scrollTop: $('#fh5co-content-section').offset().top
    }, 2000);
}
function move_to_invest() {
    remove_active_nav();
    $('li#investment_tag').addClass('active');
    $('html, body').animate({
        scrollTop: $('#fh5co-content-section').offset().top
    }, 2000);
}

function remove_active_nav() {
    $('#fh5co-primary-menu li.active').removeClass('active');
}