const api_url = 'https://qapi.vercel.app/api/random';
 
asunc function getcode(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

}
getcode(api_url);