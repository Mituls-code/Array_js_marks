let sub = prompt("Enter total subject : ");
let subject = [];
let tot = 0;
let txt = "<table><tr><th>Subject</th><th>Marks</th></tr>"
for (i = 0; i < sub; i++) {
    subject[i] = prompt("Enter subject Name : ");
}

for (let i = 0; i < subject.length; i++) {

    let marks = prompt("Enter mark of " + subject[i]);
    tot += parseInt(marks);
    txt += "<tr> <td>" + subject[i] + "</td><td>" + marks + "</td ></tr>";
}

txt += "<tr><td>Total</td><td>" + tot + "</td><tr><td>Percentage</td><td>" + tot / subject.length + "</td></table>";
document.write(txt);