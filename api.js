var express = require('express')
var FroalaEditor = require('wysiwyg-editor-node-sdk');
var router = express.Router()

router.post('/set_user', (req, res) => {
	req.session.user = Object.assign({}, req.session.user, req.body.user)
	res.json(req.body)
})

router.post('/get_signature', function (req, res) {

	var configs = {
	  bucket: 'webapp-userfiles-mobilehub-1609355042',
	  region: 'us-east-2',
	  keyStart: `protected/${req.body.IdentityId}/`,
	  acl: 'public-read',
	  accessKey: 'AKIAJ4MG6DQEAM2ASERA',
	  secretKey: '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'
	}
   
	var s3Hash = FroalaEditor.S3.getHash(configs)
	s3Hash.region = 's3.us-east-2'
   
	res.send(s3Hash);
})

module.exports = router