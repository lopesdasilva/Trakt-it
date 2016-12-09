const TRENDING_MOVIES_URL = "https://api.trakt.tv/movies/trending";
const POPULAR_MOVIES_URL = "https://api.trakt.tv/movies/popular";
import TraktApi from '../TraktApi'


var MoviesApi = {
    getTrendingMovies: async function (extended='full,images', limit=TraktApi.const.numberOfItemsOnList, offset=-1) {
        return TraktApi.fetch(TRENDING_MOVIES_URL+'?extended='+extended+'&limit'+limit+'&offset='+offset);
    },
    getPopularMovies: async function(extended='full,images', limit=TraktApi.const.numberOfItemsOnList, offset=-1) {
        return TraktApi.fetch(POPULAR_MOVIES_URL+'?extended='+extended+'&limit'+limit+'&offset='+offset);
    }
}
export  {MoviesApi as default}
