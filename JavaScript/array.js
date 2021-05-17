let sub = ["html", "java", "css", "#c", "javaScript"];
let tot = 0;
let txt = "<table><tr><th>Subject</th><th>Marks</th></tr>"

for (let i = 0; i < sub.length; i++) {
    let marks = prompt("Enter mark of " + sub[i]);
    tot += parseInt(marks);
    txt += "<tr> <td>" + sub[i] + "</td><td>" + marks + "</td ></tr>";
}

txt += "<tr><td>Total</td><td>" + tot + "</td><tr><td>Percentage</td><td>" + tot / sub.length + "</td></table>";
document.write(txt);