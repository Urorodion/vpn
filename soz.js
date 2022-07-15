var
  k = $(".firstsoz[alt='10']")
u = $(".firstsoz[alt='11']")
m = $(".secondsoz[alt='10']")
l = $(".secondsoz[alt='11']")
s = $(".thirdsoz[alt='10']")
p = $(".thirdsoz[alt='11']")

u.css({ "display": "none" });
k.mouseenter(function () { u.fadeIn(1000) });
u.mouseleave(function () { u.fadeOut(1000) });

l.css({ "display": "none" });
m.mouseenter(function () { l.fadeIn(1000) });
l.mouseleave(function () { l.fadeOut(1000) });

p.css({ "display": "none" });
s.mouseenter(function () { p.fadeIn(1000) });
p.mouseleave(function () { p.fadeOut(1000) });

$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  speed: 2000,
  slidesToScroll: 1
});

