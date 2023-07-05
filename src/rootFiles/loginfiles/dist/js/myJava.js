$(document).redy(function () {
    $('.hdate').inputmask("9999/99/99");
    $('.htime').inputmask("99:99");

    $(document).ready(function () {
        $(".example1").pDatepicker({
            initialValueType: "gregorian",
            format: "YYYY/MM/DD",
            onSelect: "year"
        });
    });

})


