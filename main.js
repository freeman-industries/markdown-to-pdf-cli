var markdownpdf = require("markdown-pdf")
var fs = require("fs");
var through = require("through");
var split = require("split");
var duplexer = require("duplexer");
 
// console.log(fs.createReadStream(process.cwd() + "/test.md"));
//   .pipe(markdownpdf())
//   .pipe(fs.createWriteStream(process.cwd() + "/test.pdf"));
 
// --- OR --- 
 
markdownpdf({
	cssPath: process.cwd() + "/style.css",
	preProcessMd: function(){
		// Split the input stream by lines
		var splitter = split();

		// Replace occurences of "foo" with "bar"
		var replacer = through(function (data) {
			this.queue(data.replace("{TARGETSITE}", process.env.TARGETSITE) + "\n");
		});

		splitter.pipe(replacer);
		return duplexer(splitter, replacer);
	}
}).from(process.cwd() + "/test.md").to(process.cwd() + "/test.pdf", function () {
  console.log("Done");
})