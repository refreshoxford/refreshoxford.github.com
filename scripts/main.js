jQuery(document).ready(function () {
    var options = {
        format: 'dHM',
        layout: '{dn} {dl}, {hn} {hl}, and {mn} {ml}',
        until: new Date(2012, 2-1, 11, 10)
    }
    $('#countdown p').countdown(options);
});

