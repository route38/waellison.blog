$(document).ready(function () {
        let here = window.location.pathname;

        $("nav menu li a[href='" + here + "']").each(function (idx, elem) {
                $(elem).addClass("active");
        });
});

