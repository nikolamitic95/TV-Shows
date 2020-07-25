import {
    fetchShows, fetchShow, fetchSearchShow, fetchShowSeasons, fetchCast, fetchCrew, fetchAka, fetchEpisodes,
} from './data.js';

import {
    renderShows, renderSingleShow, makingList, getInput, getInputValue,
    renderSeasonsList, renderCastList, renderFullCast, renderCrewList, renderAkaList,
    renderFullCrew, renderFullAka, renderFullSeasons, renderEpisodes
} from './ui.js';


const renderId = () => {
    const id = window.location.search.slice(2);
    return id;
}


const search = () => {
    const inputValue = getInputValue();
    fetchSearchShow(inputValue, makingList);
}


const searchList = () => {
    const input = getInput();
    input.addEventListener("keyup", search)
}


export const startHomepage = () => {
    fetchShows(renderShows);
    searchList();
}


export const startSingleShow = () => {
    const id = renderId()
    fetchShow(id, renderSingleShow);
    searchList()
    fetchShowSeasons(id, renderSeasonsList)
    fetchCast(id, renderCastList);
    fetchCrew(id, renderCrewList);
    fetchAka(id, renderAkaList);
}

export const startCastList = () => {
    const id = renderId();
    fetchCast(id, renderFullCast)
    searchList();
}


export const startCrewList = () => {
    const id = renderId();
    fetchCrew(id, renderFullCrew)
    searchList();
}

export const startAkaList = () => {
    const id = renderId();
    fetchAka(id, renderFullAka)
    searchList();
}
export const startSeasonsList = () => {
    const id = renderId();
    fetchShowSeasons(id, renderFullSeasons)
    searchList();
}

export const startEpisodePage = () =>{
    const id = renderId();
    fetchEpisodes(id, renderEpisodes)
    searchList();
}
