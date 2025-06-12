function getContentInPDF() {

    let fname = document.getElementById('fname').value;

    let lname = document.getElementById('lname').value;

    let pass = document.getElementById('pass').value;

    
    let element = document.createElement('div');

    element.innerHTML = '<h1>Form Data</h1>' + '<br>' + fname + lname + pass;

    html2pdf().from(element).save();
}