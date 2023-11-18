
document.querySelector('.btn').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.btn').style.display="none";
    fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
        .then((response)=>data=response.json())
        .then((data)=>{
        console.log(data)
        document.querySelector('#carouselExample').style.display="Block";
        let motyvationSlider = document.querySelector('.carousel-inner');
        let indicators = document.querySelector('.carousel-indicators');
        for(let quotes of data){
            let indicatorBtn = document.createElement('button');
            indicatorBtn.type="button";
            indicatorBtn.setAttribute('data-bs-target', "#carouselExampleIndicators");
            indicatorBtn.setAttribute('data-bs-slide-to', "0");
            indicatorBtn.setAttribute('aria-current', "true");
            indicatorBtn.setAttribute('aria-label', `Slide ${data[quotes]}`);
            indicatorBtn.classList.add('active');
            indicators.appendChild(indicatorBtn);
            let slider = document.createElement('div');
            slider.classList.add('carousel-item');
            let motyvationContainer = document.createElement('div');
            motyvationContainer.classList.add('motyvation');
            let qoute = document.createElement('h3');
            let author = document.createElement('p');
            let motSpan = document.createElement('h1');
            motSpan.classList.add('motSpan');
            motSpan.textContent = "“"
            motSpan.style.color = "#e0870b";
            let headding = document.createElement('div');
            headding.classList.add('head');
            qoute.textContent = quotes.quote;
            author.textContent = "-" + quotes.author
            headding.appendChild(motSpan);
            headding.appendChild(qoute)
            motyvationContainer.appendChild(headding);
            motyvationContainer.appendChild(author);
            slider.appendChild(motyvationContainer);
            motyvationSlider.appendChild(slider);
        }
    })
})