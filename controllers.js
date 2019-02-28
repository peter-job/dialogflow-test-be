exports.getLocation = (req, res, next) => {
	console.log('we got a request');
	res.status(200).send({msg: 'England'});
};

exports.postLocation = (req, res, next) => {
	console.log('we got a post requst');
	res.status(201).send({msg: 'we added your loco loco locationnnn'});
};
