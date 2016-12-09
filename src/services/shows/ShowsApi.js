import TraktApi from '../TraktApi'

const TRENDING_SHOWS_URL = "https://api.trakt.tv/shows/trending";
const POPULAR_SHOWS_URL = "https://api.trakt.tv/shows/popular";


var ShowsApi = {
    access_token: TraktApi.access_token,
    getTrendingShows: async function (extended='full,images', limit=TraktApi.const.numberOfItemsOnList, offset=-1) {
        return TraktApi.fetch(TRENDING_SHOWS_URL+'?extended='+extended+'&limit'+limit+'&offset='+offset);
    },
    getPopularShows: async function(extended='full,images', limit=TraktApi.const.numberOfItemsOnList, offset=-1) {
        return TraktApi.fetch(POPULAR_SHOWS_URL+'?extended='+extended+'&limit'+limit+'&offset='+offset);
    }
}
export  {ShowsApi as default}
