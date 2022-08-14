var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

$(".test").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});