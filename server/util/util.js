const webpack = require('webpack');
const consoleStyle = require('../../static/consoleStyle');

//exec the webpack.config.js to packaging the project.
module.exports.execWebpack = (file) => {
	console.log('start packaging the project');
	webpack(file).run((err,stats)=>{
		if(err){ 
			console.log(errMessage(err))
			return;
		}
		let message = stats.toJson({},true)
		if(message.errors.length>0){
			message.errors.forEach((text)=>{

				console.log(errMessage(text));
			})
			return;
		}
		console.log('packaging success');
	});
}

const errMessage = (text) => {
	return consoleStyle.yellowBG[0]
	+consoleStyle.red[0]
	+'Error'
	+consoleStyle.red[1]
	+consoleStyle.yellowBG[1]
	+' '
	+text
	+'\n';
}

const sucMessage = (text) => {
	return consoleStyle.green[0]
	+text
	+consoleStyle.green[1]
	+'\n';
}

//log the error message with format.
module.exports.errMessage = errMessage;
//log the success message witch format.
module.exports.sucMessage = sucMessage;