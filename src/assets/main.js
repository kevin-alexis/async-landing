const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC-5MT-BUxTzkPTWMediyV0w&part=snippet%2Cid&order=date&maxResults=9"

const content = null || document.getElementById("content");


/*todos 
https://youtube138.p.rapidapi.com/channel/videos/?id=UC-5MT-BUxTzkPTWMediyV0w&hl=en&gl=US"*/

/*ultimos videos 
https://youtube138.p.rapidapi.com/channel/videos/?id=UC-5MT-BUxTzkPTWMediyV0w&filter=videos_latest&hl=en&gl=US */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a4d8f9ff3dmsh0c74da065d212d3p1e01e8jsn22eb760fa0c6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}


//automaticamente ejecutar nuestra funcion a cargar el archivo
(async () =>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        `).slice(0, 4).join("")}
        `;

        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();

