import userService from '../services/userService';

let handleLogIn = async (req, res) => {
	let email = req.body.email;
	let password = req.body.password;

	if (!email || !password) {
		return res.status(500).json({
			errCode: 1,
			message: 'missing inputs params',
		});
	}

	let userData = await userService.handleUserLogIn(email, password);

	return res.status(200).json({
		errCode: userData.errCode,
		message: userData.errMessage,
		user: userData.user ? userData.user : {},
	});
};

module.exports = { handleLogIn: handleLogIn };
