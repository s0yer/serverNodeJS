var emailnode = require('nodemailer'); // modulo para enviar o email

var transporte = emailnode.createTransport({
	service: 'gmail',
	auth: {
		user:'myemail@gmail.com'
		pass:'mypass'
	}
});

var emailDescricao = {
	from:'myemail@gmail.com'
	to:'destino@hotmail.com'
	subject:'Teste email nodeJS'
	text:'EasyPeasy'
};

transporte.sendEmail(emailDescricao, function(error, info){
	if(error){
		console.log(Falha no envio);
	}else{
			console.log('Mensagem eletrônica enviada: ' + info.response);
	}
});