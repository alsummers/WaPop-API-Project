
$(document).ready(function() {
    const apiKey="6dcf55985cc74c36bd462ee31cd2396f";
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v2/everything?sources=the-washington-post&apiKey=6dcf55985cc74c36bd462ee31cd2396f',
		}).done(function(newsInfo) {
                let headlines = newsInfo.articles;
                for (i of headlines) {
                    $("#newsFeed").append(uploadNewsFeed(i));
                }


		});


function uploadNewsFeed(articles) {
    let row = $(`<div class="col" id="snip"></div>`)
    let title = $(`<div class="row justify-content-center" id="title"><a href=${articles.url}>${articles.title}</a><div>`)
    let author = $(`<div class="row justify-content-center">${articles.author}</div>`)
    let desc = $(`<div class="row">${articles.description}</div>`)
    let img = $(`<div class="row justify-content-center"><img src="${articles.urlToImage}"></div>`)

    row.append(img, title, author, desc);
    return row;
    
    }


});




