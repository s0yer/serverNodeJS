var emailnode = require('nodemailer');

var transporte = emailnode.createTransport({
	service: 'gmail',
	auth: {
		user:
		pass:
	}
});