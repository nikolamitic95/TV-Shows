const $listOfShows = document.querySelector(".listOfShows");
const $title = document.querySelector('.title')
export const getInput = () => document.querySelector(".form-control");
export const getInputValue = () => getInput().value;
const $searchList = document.querySelector(".search");
const $poster = document.querySelector(".poster");
const $showName = document.querySelector(".abouttitle");
const $description = document.querySelector(".description");


/*****************      render main page     *****************/

export const renderShows = (shows) => {
    let allShowCards = "";

    shows.sort((a, b) => {
        if (a.rating.average > b.rating.average) {
            return -1;
        } else {
            return 1;
        }
    });

    for (let i = 0; i < 52; i++) {
        allShowCards +=
            `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <a href="about.html?=${shows[i].id}" ><img src="${shows[i].image.medium}" class="card-img-top" alt=""></a>
            <div class="card-body">
                <h5 class="card-title">${shows[i].name}</h5>
        </div>
    </div>
</div>`
    }
    $listOfShows.innerHTML = allShowCards;
}

/*******************      render single show page      ********************/

export const renderSingleShow = (show) => {
    
    const $img = document.createElement("img");
    $img.setAttribute("src", show.image.original);
    $showName.textContent = show.name;
    $poster.appendChild($img);
    $description.innerHTML = show.summary ? show.summary : "No description on the show...";
}

/*****************     dropdown search list     **********************/

export const makingList = (show) => {
    const $ulSearch = document.createElement("ul");

    if (!getInputValue() === " " || getInputValue() === "") {
        $searchList.innerHTML = "";
    }
    for (let i = 0; i < show.length; i++) {
        $searchList.innerHTML = "";
        const $li = document.createElement("li");
        const $link = document.createElement("a");
        $link.setAttribute("href", `about.html?=${show[i].show.id}`)
        $li.textContent = show[i].show.name;
        $link.appendChild($li);
        $ulSearch.appendChild($link);
        $searchList.appendChild($ulSearch);
    }
}

/************      render seasons list     ******************/

export const renderSeasonsList = (data) => {
    const id = window.location.search;

    const $ul = document.querySelector(".seasons ul");
    $ul.innerHTML = `<h3>Seasons (${data.length})</h3>`

    const $dot = document.createElement("h6")
    const $link = document.createElement("a");
    $link.setAttribute("href", `seasons.html${id}`);
    $dot.textContent = ". . . click for seasons details";
    $link.appendChild($dot)

    for (let i = 0; i < 5; i++) {
        let $premiereDate = data[i].premiereDate ? data[i].premiereDate : "no premere date"
        let $endDate = data[i].endDate ? data[i].endDate : "no end date"

        const $li = document.createElement("li");
        $li.textContent = `${$premiereDate} - ${$endDate}`;
        $ul.appendChild($li)
        $ul.appendChild($link);
    }
}

/**************      render actors list     ******************/

export const renderCastList = (actors) => {
    const id = window.location.search;
    const $ul = document.querySelector(".cast ul");
    const $link = document.createElement("a");
    const $str = document.createElement("h6");
    $str.textContent = ". . . click for cast details";
    $ul.innerHTML = `<h3>Cast (${actors.length})</h3>`
    $link.setAttribute("href", `cast.html${id}`);
    $link.appendChild($str);
    for (let i = 0; i < 5; i++) {
        const $li = document.createElement("li");
        $li.textContent = actors[i].person.name;
        $ul.appendChild($li);
        $ul.appendChild($link);
    }
}

/******************     render crew list      *******************/

export const renderCrewList = (crew) => {
    const id = window.location.search;
    const $ul = document.querySelector(".crew ul");
    const $link = document.createElement("a");
    const $str = document.createElement("h6");
    $str.textContent = ". . . click for crew details"
    $ul.innerHTML = `<h3>Crew (${crew.length})</h3>`
    $link.setAttribute("href", `crew.html${id}`);
    $link.appendChild($str);
    for (let i = 0; i < 5; i++) {
        const $li = document.createElement("li");
        $li.textContent = crew[i].type + " : " + crew[i].person.name;
        $ul.appendChild($li);
        $ul.appendChild($link);
    }
}

/****************       render aka list        *******************/

export const renderAkaList = (akas) => {

    const id = window.location.search;
    const $ul = document.querySelector(".aka ul");
    const $link = document.createElement("a");
    const $str = document.createElement("h6");
    $str.textContent = ". . . click for aka's details"
    $ul.innerHTML = `<h3>Aka's (${akas.length})</h3>`
    $link.setAttribute("href", `aka.html${id}`);
    $link.appendChild($str);
    for (let i = 0; i < 5; i++) {
        const $li = document.createElement("li");
        $li.textContent = akas[i].name + " : " + akas[i].country.name;
        $ul.appendChild($li);
        $ul.appendChild($link);
    }
}

/*******************      render season page     *******************/

export const renderFullSeasons = (seasons) => {

    let allSeasonCards = '';
    $title.innerHTML = `Seasons (${seasons.length})`

    seasons.forEach(season => {
        let $img = season.image ? season.image.medium : '../images/no-image-355.jpg'
        let $premiereDate = season.premiereDate ? season.premiereDate : "no premere date"
        let $endDate = season.endDate ? season.endDate : "no end date"

        allSeasonCards +=
            `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
           <img src=${$img} class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${$premiereDate} - ${$endDate}</h5>
                <a href="episodes.html?=${season.id}" class="btn btn-primary">View Episodes</a>
        </div>
    </div>
</div>`
    });
    $listOfShows.innerHTML = allSeasonCards;
}

/******************   render actors page    *****************/

export const renderFullCast = (actors) => {

    $title.innerHTML = `Cast (${actors.length})`
    let $actorCard = "";

    actors.forEach(actor => {
        let $img = actor.person.image ? actor.person.image.medium : '../images/no-image-355.jpg'
        $actorCard += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
            <img src="${$img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${actor.person.name}</h5>
                <h6 class="card-subTitle">(${actor.character.name})</h6>
        </div>
    </div>
</div>`
    })
    $listOfShows.innerHTML = $actorCard;
}

/*************    render crew page  *****************/

export const renderFullCrew = (crew) => {

    $title.innerHTML = `Crew (${crew.length})`
    let $crewCard = "";

    crew.forEach(cre => {
        let $img = cre.person.image ? cre.person.image.medium : '../images/no-image-355.jpg'

        $crewCard += `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
        <img src="${$img}" class="card-img-top" alt="">
            <div class="card-body">
                <h6 class="card-title">${cre.type}</h6>
                <h5 class="card-subTitle">(${cre.person.name})</h5>
        </div>
    </div>
</div>`
    })
    $listOfShows.innerHTML = $crewCard;
}

/********************       render aka page       *********************/

export const renderFullAka = (akas) => {

    $title.innerHTML = `Aka's (${akas.length})`
    let $akasCard = "";

    akas.forEach(aka => {
        let $name = aka.name ? aka.name : 'no name'
        let $countryName = aka.country ? aka.country.name : 'no country name'
        let $timezone = aka.country ? aka.country.timezone : 'no timezone'

        $akasCard += `<div class="col-12 ">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${$name} - ${$countryName}</h5>
                <h5 class="card-title">timezone: ${$timezone}</h5>
        </div>
    </div>
</div>`
    })
    $listOfShows.innerHTML = $akasCard;
}

/*******************      render episode page     *******************/

export const renderEpisodes = (episodes) => {

    let allEpisodeCards = '';
    $title.innerHTML = `Episodes (${episodes.length})`

    episodes.forEach(episode => {
        let $img = episode.image ? episode.image.medium : '../images/no-image-142.jpg'

        allEpisodeCards +=
            `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
           <img src=${$img} class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${episode.name}</h5>
        </div>
    </div>
</div>`
    });
    $listOfShows.innerHTML = allEpisodeCards;
}