$(document).ready(function() {
    const apiKey="6dcf55985cc74c36bd462ee31cd2396f";
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v2/top-headlines?country=se&apiKey=6dcf55985cc74c36bd462ee31cd2396f',
		}).done(function(newsInfo) {
                console.log(newsInfo.articles[0].title);
                let swedeInfo = newsInfo.articles;
                console.log(swedeInfo)
                for(i of swedeInfo){
                    $("body").append(`<div class="title"><p>${i.title}</p></div>`,`<p>${i.author}</p>`, `<p>${i.publishedAt}</p>`);
                }
                });


		});