import { fetch } from './fetch.js';

export const fetchShows = (onSuccess) => {
    fetch("http://api.tvmaze.com/shows", (data) => {
        onSuccess(data);
    })
}

export const fetchShow = (id, onSuccess) => {
    fetch(`http://api.tvmaze.com/shows/${id}`, (data) => {
        onSuccess(data);
    })
}

export const fetchSearchShow = (str, onSuccess) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${str}`, (data) => {
        onSuccess(data)
    })
}

export const fetchShowSeasons = (id, onSuccess) => {
    fetch(`http://api.tvmaze.com/shows/${id}/seasons`, (data) => {
        onSuccess(data);
    })
}

export const fetchCast = (id, onSuccess) => {
    fetch(`http://api.tvmaze.com/shows/${id}/cast`, (data) => {
        onSuccess(data)
    })
}

export const fetchCrew = (id, onSuccess) => {
    fetch(`http://api.tvmaze.com/shows/${id}/crew`, (data) => {
        onSuccess(data)
    })
}

export const fetchAka = (id, onSuccess) => {
    fetch(`http://api.tvmaze.com/shows/${id}/akas`, (data) => {
        onSuccess(data);
    })
}

export const fetchEpisodes = (id, onSuccess) => {
    fetch(`http://api.tvmaze.com/seasons/${id}/episodes`, (data) => {
        onSuccess(data);
    })
}