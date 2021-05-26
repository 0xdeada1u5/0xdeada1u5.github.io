/* data */
var participations = [
    {
        "name":"UniWA CTF",
        "date":"2021-01-22",
        "position":"2",
        "score":"8630"
    },
    {
        "name":"ångstromCTF 2021",
        "date":"2021-04-03",
        "position":"290",
        "score":"815"
    },
    {
        "name":"EESTech Challenge Athens 2021",
        "date":"2021-04-25",
        "position":"5",
        "score":"1.512"
    }
];

var members = [
    { "username":"markatos",        "info":"Founding Member" },
    { "username":"harryman",        "info":"Founding Member" },
    { "username":"papamano",        "info":"Founding Member" },
    { "username":"georgepant",      "info":"Founding Member" },
    { "username":"giannose",        "info":"Founding Member" },
    { "username":"mirtiagk",        "info":"Founding Member" },
    { "username":"pbekos",          "info":"Founding Member" },
    { "username":"antonis_para",    "info":"Founding Member" },
    { "username":"root",            "info":"Founding Member" },
    { "username":"giorgosioak",     "info":"Founding Member" },
    { "username":"rafail",          "info":"Founding Member" },
    { "username":"asiskos",         "info":"Founding Member" },
    { "username":"eltjonqef",       "info":"Founding Member" },
    { "username":"atheofanous",     "info":"Founding Member" },
    { "username":"johnarakas",      "info":"Founding Member" },
    { "username":"dionkal",         "info":"Founding Member" },
    { "username":"mipach",          "info":"Founding Member" },
    { "username":"georgeleve",      "info":"Founding Member" },
    { "username":"anasteva",        "info":"Founding Member" }
];

function activate(key){
    var participations = document.getElementById("participations-div");
    var members = document.getElementById("members-div");
    switch (key) {
        case 0: // Home
            participations.classList.add("hidden");
            members.classList.add("hidden");
            break;
        case 1: // Members
            participations.classList.add("hidden");
            members.classList.remove("hidden");
            break;
        case 2: // Participations
            participations.classList.remove("hidden");
            members.classList.add("hidden");
            break;
    }
}

function generateParticipations(){
    var table = document.getElementById("participations");
    participations.forEach((item) => {
        var row = table.insertRow();
        // console.log(item)
        row.insertCell().appendChild(document.createTextNode(item["name"]));
        row.insertCell().appendChild(document.createTextNode(item["date"]));
        row.insertCell().appendChild(document.createTextNode(item["position"]));
        row.insertCell().appendChild(document.createTextNode(item["score"]));
    });
}
function generateMembers(){
    var table = document.getElementById("members");
    members.forEach((item) => {
        var row = table.insertRow();
        // console.log(item)
        row.insertCell().appendChild(document.createTextNode(item["username"]));
        row.insertCell().appendChild(document.createTextNode(item["info"]));
    });
}

generateParticipations();
generateMembers();
