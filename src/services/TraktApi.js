var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("trakt-api-key", "c47b9ef0b13af4abe0ab8410e4c44b9a34387dd78a95f6d891bef9861fa42c1b");
myHeaders.append("trakt-api-version", "2");
   //https://api.trakt.tv/oauth/authorize?response_type=code&client_id=c47b9ef0b13af4abe0ab8410e4c44b9a34387dd78a95f6d891bef9861fa42c1b&redirect_uri=http://localhost

     var TraktApi = {
         access_token: "",
         const: {
             numberOfItemsOnList: '10'
         },
         headers: myHeaders,
         fetch: async function (url) {
             try {
                 let response = await fetch(url, {
                     method: 'get',
                     headers: TraktApi.headers
                 });
                 let responseJson = await response.json();
                 return responseJson;
             } catch (error) {
                 alert("Ups..Error fetching data: " + err);
                 console.error(error);
             }
         }
}
export  { TraktApi as default}