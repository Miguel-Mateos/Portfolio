$(document).ready(function() {
    new fullpage('#fullpage', {
        licenseKey: 'B9D8E227-587E494F-BBD1914A-3C597E1F',
        autoScrolling: true,
        navigation: false,
    });

    $("#btn-default1, #btn-outlined1").mouseover(function(e) {
        $('#img-hero').attr("src", $('#img-hero').attr("src").replace(".gif", ".png"));
    }).mouseout(function(e) {
        $('#img-hero').attr("src", $('#img-hero').attr("src").replace(".png", ".gif"));
    });

    $("#btn-default2, #btn-outlined2").mouseover(function(e) {
        $('.b--img-secondary').css("left", "0px").css("opacity", "1");
    }).mouseout(function(e) {
        $('.b--img-secondary').css("left", "-200px").css("opacity", "0");
    });

    $(".b--img-primary").mouseover(function(e) {
        $('#img-hero').attr("src", $('#img-hero').attr("src").replace(".gif", "-virojo.png"));
    }).mouseout(function(e) {
        $('#img-hero').attr("src", $('#img-hero').attr("src").replace("-virojo.png", ".gif"));
    });

    $(".b--card-experience").mouseover(function(e) {
        $('.img-miguel').css("right", "-200px").css("opacity", "1");
    }).mouseout(function(e) {
        $('.img-miguel').css("right", "-100px").css("opacity", "0");

    });
});