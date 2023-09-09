fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,thumbnail,artist_display,date_display,place_of_origin,medium_display&query[term][is_public_domain]=true').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.data.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src="${values.thumbnail.lqip}" alt="${values.alt_text}" class="images">
        <p>Artist: ${values.artist_display}</p>
        <p class="date">Date: ${values.date_display}</p>
        <p class="origin">Origin: ${values.place_of_origin}</p>
        <p>Medium: ${values.medium_display}</p>
    </div>`;
    })
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
});