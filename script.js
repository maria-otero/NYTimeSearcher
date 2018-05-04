$('#formSearch').on('click', function () {
    //PULLING FORM DATA FROM USER
    var searchInput = $('#termInput').val();
    var numInput = $('#numInput').val();
    var startInput = $('#startInput').val();
    var endInput = $('#endInput').val();

    //FAKING USER INPUT
    // searchInput = 'Trump';
    // startInput = 20030101;
    // endInput = 20040101;
    
    //BUILD SEARCH URL
    var searchURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=769ae556259949f9bb72bf4556f8d25c&q=${searchInput}&begin_date=${startInput}&end_date=${endInput}`
    $.ajax ({
       url: searchURL,
       method: 'GET'
    }).then (function (response) {
        console.log(response);
        for (let i=0; i<10; i++) {
            var newDiv = $('<div>')
            newDiv.css('background', 'lightgrey')

            //APPENDING NUMBER
            var articleNum = $('<h3>');
            articleNum.text(i+1).newClass('article-number');
            newDiv.append(articleNum);

            //APPENDING HEADLINE
            var newHeadline = $('<h3>');
            newHeadline.text(response.response.docs[i].headline.main).newClass('article-headline');
            newDiv.append(newHeadline);

            //APPENDING SOURCE
            var newSource = $('<p>');
            newSource.text("By " + response.response.docs[i].source).newClass('article-source');
            newDiv.append(newSource);

            $('#articleField').prepend(newDiv);
        }
    })
})

