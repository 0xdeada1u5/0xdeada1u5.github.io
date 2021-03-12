/* data */
var participations = [
    {
        "name":"UniWA CTF",
        "date":"2021-01-22",
        "position":"2",
        "score":"8630"
    }
];

var members = [
    { "username":"markatos",        "info":"Founder member" },
    { "username":"harryman",        "info":"Founder member" },
    { "username":"papamano",        "info":"Founder member" },
    { "username":"georgepant",      "info":"Founder member" },
    { "username":"giannose",        "info":"Founder member" },
    { "username":"mirtiagk",        "info":"Founder member" },
    { "username":"pbekos",          "info":"Founder member" },
    { "username":"antonis_para",    "info":"Founder member" },
    { "username":"root",            "info":"Founder member" },
    { "username":"giorgosioak",     "info":"Founder member" },
    { "username":"rafail",          "info":"Founder member" },
    { "username":"asiskos",         "info":"Founder member" },
    { "username":"eltjonqef",       "info":"Founder member" },
    { "username":"atheofanous",     "info":"Founder member" },
    { "username":"johnarakas",      "info":"Founder member" },
    { "username":"dionkal",         "info":"Founder member" },
    { "username":"mipach",          "info":"Founder member" },
    { "username":"georgeleve",      "info":"Founder member" }
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