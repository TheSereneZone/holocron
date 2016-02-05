if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route("/", function () {
  this.render("home")
});

Router.route("/about", function () {
  this.render("about")
});

Router.route("/javascript", function () {
  this.render("javascript")
});

Router.route("/python", function () {
  this.render("python")
});