//let feedUrl = 'php/getXMLfeed.php'
let feedUrl = 'xml/boab-resources-sample.xml'

let parser, xmlDoc, title, date, body, download, KeyImage;
let contentData = '';

//pull data from server
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //let responseData = JSON.parse(this.responseText);
        let text = this.responseText;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml");
		console.log(xmlDoc);
        xmlDoc.getElementsByTagName("nodes").length;
		
        console.log(xmlDoc.getElementsByTagName("node")); 
		
        emailData = '';
        for(let i =0; i < xmlDoc.getElementsByTagName("node").length; i++){
            console.log( xmlDoc.getElementsByTagName("node")[i].childNodes);
            title = xmlDoc.getElementsByTagName("node")[i].childNodes[1].innerHTML;
            date = xmlDoc.getElementsByTagName("node")[i].childNodes[3].innerHTML;
            body = xmlDoc.getElementsByTagName("node")[i].childNodes[5].innerHTML;
            download = xmlDoc.getElementsByTagName("node")[i].childNodes[7].innerHTML;
			KeyImage = 	xmlDoc.getElementsByTagName("node")[i].childNodes[9].innerHTML;
			console.log(title);	
			console.log(date);
			console.log(body);
			console.log(download);
			console.log(KeyImage);
			
            //emailData += `<p style="line-height:175%"><a href="${xmlDoc.getElementsByTagName("item")[i].childNodes[1].innerHTML}" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" style="color: rgb(85, 209, 234) !important;" data-linkindex="3" data-ogsc="rgb(0, 164, 189)">${role}</a> ${company}</p>`;
        }
        //document.getElementById('tasks-only').innerHTML = emailData;

    }	
};
xhttp.open("POST", feedUrl, true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send();
