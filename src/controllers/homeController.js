let getHomePage = (req, res) => {
    return res.render("HomePage.ejs");
};

let getAboutPage = (req, res) => {
    return res.render("About.ejs");
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
};
