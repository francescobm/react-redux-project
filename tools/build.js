import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';
/*eslint-disable no-console */
process.env.NODE_ENV = 'production';

console.log('Generating minfied bundle for production'.blue);

webpack(webpackConfig).run((err,stats)=>{
	if(err){
		console.log(err.bold.red);
		return 1;
	}

	const jsonStats = stats.toJson();
	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error=>{ console.log(error.red)});
	}

	if(jsonStats.hasWarning){
		console.log('Webpack generated the following warning: '.bold.yellow);
		jsonStats.warnings.map(warning=>console.log(warning.yellow));
	}

	console.log(`webpack stats: ${stats}`);

	console.log('app successfully compiled in production mode');

	return 0;
});