import db from '../models';

let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
        return res.render( 'HomePage.ejs', {
            data:JSON.stringify(data)
        });
	} catch (e) {
		console.log(e);
	}
};

let getAboutPage = (req, res) => {
	return res.render('About.ejs');
};

module.exports = {
	getHomePage: getHomePage,
	getAboutPage: getAboutPage,
};
