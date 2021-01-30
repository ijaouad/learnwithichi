dataInsert(homeLinks, 'home');

const OpenTab = (tab) => {

    let tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    document.getElementById(tab).style.display = 'block';

    let active = document.getElementById("btn" + tab);
    document.querySelectorAll("button").forEach(item => {
        item.className = "btn"
    });
    active.className += " active";

    if (tab == "home") {
        dataInsert(homeLinks, tab);
    } else if (tab == "free") {
        dataInsert(freeLinks, tab);
    } else if (tab == "tips"){
        dataInsert(tipsLinks, tab);
    }
}

function dataInsert (array, tab) {

    let pervCads = document.querySelectorAll('.card');
    pervCads.forEach(item => {
        item.remove();
    });
    
     array.forEach(item => {
        let card = document.createElement('div');
        card.className = "card";

        let link = document.createElement('a');
        link.href = item.link;
        link.target = "_blank"

        let text = document.createElement('p');
        text.innerHTML = item.text;

        card.append(text);
        link.append(card);

        document.getElementById(tab).append(link);
    });
}
