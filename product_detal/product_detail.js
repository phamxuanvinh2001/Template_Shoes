$(document).ready(function() {
    $('#plus').on('click', function() {
        var valInput = $('#count-product').val();
        valInput++;
        $('#count-product').val(valInput);
    })
    $('#less').on('click', function() {
        var valInput = $('#count-product').val();
        valInput--;
        valInput = valInput <= 0 ? 1 : valInput;
        $('#count-product').val(valInput);
    })
})