document.body.style.zoom="90%"

$("caves-scroll").click(function() {
    $("caves-target")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});

$("cliffs-scroll").click(function() {
    $("cliffs-target")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});

$("misc-scroll").click(function() {
    $("caves-target")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});

$("download-scroll").click(function() {
    $("download-target")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});
