import TraktApi from '../TraktApi'

const SHOW_SUMMARY_URL = "https://api.trakt.tv/show/";


var ShowsApi = {
    getSummary: async function (id,extended='images') {
        //tem de dar erro se id vier null
        return TraktApi.fetch(SHOW_SUMMARY_URL+id+'?extended'+extended);
    },
}
export  {ShowsApi as default}
