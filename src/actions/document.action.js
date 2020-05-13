import { DOCUMENT } from '../constants';

export const documentActions = {
    get,
    download,
    loading,
    loaded,
    error,
    showModal,
    hideModal
}

function get(data) {
    return { 
        type: DOCUMENT.GET, 
        data
    }
}

function download(data) {
    return { 
        type: DOCUMENT.DOWNLOAD, 
        data
    }
}

function loading() {
    return { type: DOCUMENT.LOADING } 
}

function loaded() {
    return { type: DOCUMENT.LOADED } 
}

function error() {
    return { type: DOCUMENT.ERROR } 
}

function showModal() {
    return { type: DOCUMENT.SHOW_MODAL } 
}

function hideModal() {
    return { type: DOCUMENT.HIDE_MODAL } 
}