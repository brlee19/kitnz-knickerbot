module.exports = function(robot) {

  robot.respond(/\btest$/i, function(res) { // "test"
    return res.send("GO NEW YORK GO NEW YORK GO!");
  });

  robot.hear(/\bknicks\b/i, function(res) { // "test"
    return res.send("GO NEW YORK GO NEW YORK GO!");
  });

  robot.hear(/\bclyde\b/i, function(res) { // "test"
    var clydeisms = [
      "Bounding and astounding!",
      "Posting and toasting!",
      "Shaking and baking!",
      "Dishing and swishing!",
      "All the Knicks with the knack right now!",
      "Slicing and dicing!",
      "Matadors and picadors on the defensive end...",
      "Knickerbot is starting to percolate...",
      "Dancing and prancing...",
      "Haha!",
      "The precocious neophyte with the nasty stuff!",
      "Swooping and hooping",
      "Feline quickness, canine attitude!"
    ]
    return res.send(res.random(clydeisms));
  });

  robot.hear(/\bswaggy p\b/i, function(res) {
    return res.send("http://i.amz.mshcdn.com/t-a3uBCPZM89ae19aY77x3lQSlE=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2014%2F03%2FSwaggyP-2.gif");
  });

  robot.hear(/\buncle p\b/i, function(res) {
    return res.send("http://i3.kym-cdn.com/photos/images/newsfeed/000/993/875/084.png");
  });

  robot.hear(/\bboo+\b/i, function(res) {
    return res.send("https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.yimg.com%2Fbt%2Fapi%2Fres%2F1.2%2F8z3M9Q.pE04OK2KpeVyjjw--%2FYXBwaWQ9eW5ld3M7cT04NTt3PTQ1MA--%2Fhttp%3A%2F%2Fl.yimg.com%2Fos%2Fpublish-images%2Fsports%2F2015-06-26%2F2ad33860-1b99-11e5-9389-6710f936dd35_knicks5.gif&f=1");
  });

};
