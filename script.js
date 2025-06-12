function getContentInPDF() {

    let name = document.getElementById('name').value;

    // let fname = document.getElementById('fname').value;

    // let lname = document.getElementById('lname').value;

    // let pass = document.getElementById('pass').value;

    // fetch("results.html").then(r=>r.text()).then((html)=>{ // get the content of products.html
    //     let element = document.createElement("html");
    //     element.innerHTML = html; // parse the html
    //     p1 = element.querySelector("#body");
    //     // let thing = element.querySelector();
    //     });

    let element = document.createElement('div');

    // element.innerHTML = '<h1>Shipwrecked Survival Guide</h1>' + '<br>' + fname + lname + pass;
    element.innerHTML = '<h1>' + name + "'s Shipwrecked Survival Guide</h1>";
    // element.innerHTML = fetch("results.html");
    // element.innerHTML = element.querySelector("#body")
    // console.log(fetch("results.html"))
    // console.log(element.querySelector("#body"))

    

    
    // let formElement = document.getElementById('results');

    html2pdf().from(element).save();
    // html2pdf().from(formElement).save();
    // html2pdf().from(p1).save();
    // html2pdf().from(thing).save();
}

function generatePDF() {
    let formElement = document.getElementById('pdfForm');
    html2pdf().from(formElement).save();
}