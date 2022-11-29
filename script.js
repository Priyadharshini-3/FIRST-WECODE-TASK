    async function Nationalize(){
    var Name= document.querySelector('#search').value;        

    let data1 = await fetch(`https://api.nationalize.io?name=${Name}`)
    let result = await data1.json() 
    console.log(result) 
    const regionName = new Intl.DisplayNames(['en'],{type:'region'}) 
    // console.log(regionName.of(result.country[0].country_id)) 

    let data2 = await fetch(`https://api.genderize.io/?name=${Name}`)
    let gender = await data2.json()
    console.log(gender)

    var api = document.querySelector('#Nationalize')
    var gender_print =`${gender.gender}`;
    
    try{ 
    api.innerHTML=`<div class="card text-center h-100 text-bg-info" style="width: 20rem;"> 
    <div class="card-header">
        <h1 class="text-center" >${result.name}</h1>
    </div>            
        <div class="card-body">
        <div class="card-text">
        <p><span id="sp">Top Country one: </span><span id="sp1">${regionName.of(result.country[0].country_id)}</span></p>
        <p><span id="sp">Top Country two: </span><span id="sp1">${regionName.of(result.country[1].country_id)}</span></p>
        <p><span id="sp">Probability of ${regionName.of(result.country[0].country_id)}: </span><span id="sp1">${result.country[0].probability}</span></p>
        <p><span id="sp">Probability of ${regionName.of(result.country[1].country_id)}: </span><span id="sp1">${result.country[1].probability}</span></p> 
        <p><span id="sp">Type of gender: </span><span id="sp1">${gender.gender}</span></p>
        </div>            
        </div>
    </div>`
    
    }catch(err){ 
        api.innerHTML=`<div class="card text-center h-100 text-bg-info" style="width: 20rem;">
    <div class="card-header">
        <h1 class="text-center" >Error Code: ${err.cod}</h1>
    </div>            
        <div class="card-body">
             <img src="./error.png" class="card-img-top" alt="n/o">
        <div class="card-text">       
                <p><span id="sp" >Message: </span><span id="sp1">${err.message}</span></p>
        </div>            
        </div>
    </div>`
    }
}