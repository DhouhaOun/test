var mongoose = require('mongoose');



var universitySchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	category:{
		type: String,
        required: true

	},
        category1:{
            type: String,
            required: true
        },
	adresse:{
		type: String,
        minlength:1
	},

	image_url:{
		type: String
	}

}
    ,{collection : "universitytunis"}
);

var University = module.exports = mongoose.model('University', universitySchema);
