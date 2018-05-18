// console.log('hi')

$('#formSearch').on('click', function (event) {
    event.preventDefault();
    $('#articleField').empty();

    //PULLING FORM DATA FROM USER
    var searchInput = $('#termInput').val();
    var numInput = $('#numInput').val();
    var startInput = $('#startInput').val();
    var endInput = $('#endInput').val();

    //FAKING USER INPUT
    // searchInput = 'Trump';
    // startInput = 20030101;
    // endInput = 20040101;

    //CONVERTING YEAR TO YYYYMMDD
    startInput = startInput + '0101';
    endInput = endInput + '1231';
    
    //BUILD SEARCH URL
    var searchURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=[API KEY]&q=${searchInput}&begin_date=${startInput}&end_date=${endInput}`

    $.ajax ({
       url: searchURL,
       method: 'GET'
    }).then (function (response) {
        console.log(response);
        for (let i=0; i<10; i++) {
            var newDiv = $('<div>')
            newDiv.addClass('newDiv-style');
            

            //APPENDING NUMBER
            var articleNum = $('<h6>');
            articleNum.text(i+1).addClass('article-number');
            newDiv.append(articleNum);

            //APPENDING HEADLINE
            var newHeadline = $('<h4>');
            newHeadline.text(response.response.docs[i].headline.main).addClass('article-headline');
            newDiv.append(newHeadline);

            //APPENDING SOURCE
            var newSource = $('<p>');
            newSource.text("By " + response.response.docs[i].source).addClass('article-source');
            newDiv.append(newSource);

            $('#articleField').prepend(newDiv);
        }
    })
})

