
// 8f402da85a3540e691094148c70e2786

let source = 'bbc-news';
let apiKey = "8f402da85a3540e691094148c70e2786"
newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', ` https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getAllResponseHeaders('Content-type', 'application/json') ;

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText) ;
        let articles = json.articles ;
        // console.log(articles);
        let newsHTML = `` ;
        articles.forEach((element,index)=> {
            
            // console.log(element);
            
            let news = `
                            <div class="accordion" id="newsAccordian">
                                <div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block  text-left" type="button" data-toggle="collapse"
                                                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                              <b>Breaking News ${index + 1}</b>  ${element['title']}
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                                        data-parent="#accordionExample">
                                        <div class="card-body">${element['content']}.<a href="${element['url']}" target="_blank">Read more here</a>
                                        </div>
                                    </div>
                                </div> 
                            </div> `
                            newsHTML += news ;
                            newsAccordian.innerHTML = newsHTML ;
                        });
        
    } else {
        console.log('error occured');
    }
}

xhr.send();