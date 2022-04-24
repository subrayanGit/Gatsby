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
		
        contentData = '';
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
			
            contentData += `<tr><td></td>
							<td>${title}</td>
							<td>${date}</td>
							<td>${body}</td>
							<td>${KeyImage}</td>
							<td>${download}</td></tr>`;
        }
        document.getElementById('content-data').innerHTML = contentData;
        document.getElementById('overlay').style.display = 'none';
    }	
};
xhttp.open("POST", feedUrl, true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send();
