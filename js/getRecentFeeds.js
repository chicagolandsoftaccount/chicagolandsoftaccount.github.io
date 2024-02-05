function getRecentArticles() {
    var mydata = JSON.parse(recent_articles);
    for (i = 0; i < 4; i += 1) {
        var currentNum = i + 1;
        var linkId = "articleLink" + currentNum.toString();
        document.getElementById(linkId).href=mydata[i].link;
        document.getElementById(linkId).innerHTML = mydata[i].title;
    }
}

function getRecentProjects() {
    var mydata = JSON.parse(recent_projects);
    for (i = 0; i < 7; i += 1) {
        var currentNum = i + 1;
        var linkId = "projectLink" + currentNum.toString();
        document.getElementById(linkId).href=mydata[i].link;
        document.getElementById(linkId).innerHTML = mydata[i].title;
    }
}
