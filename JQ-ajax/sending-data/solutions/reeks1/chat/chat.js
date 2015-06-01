/* Ajax - chat app
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
devel: true,
browser: true,
jquery: true
*/
if (localStorage.getItem('name') === null) document.location.href = 'logon.html';
var username = localStorage.getItem('name');

$(function () {

    $('#post').keypress(function (e) {
        if (e.keyCode == 13) {
            $.ajax({
                url: 'save.php',
                type: 'POST',
                data: {
                    name: username,
                    time: currentTime(),
                    message: this.value
                },
                success: function (data) {
                    console.log('OK: ', data);
                },
                error: function (err) {
                    console.error('Fout: ', err);
                }
            });
            this.value = '';
        }
    });

    setInterval(loadMessages, 1000);
});

function loadMessages() {
    $.ajax({
        url: 'log/chat_log.xml',
        dataType: 'xml',
        cache: false,
        success: loaded,
        error: function (err) {
            console.error('Fout: ', err);
        }
    });
}

function loaded(data) {
    var $chat = $('#chat'); //select chatbox in document for later use
    var html = ''; //create string for chat data

    $(data).find('post').each(function () {
        var $this = $(this);
        html += '<article><strong>' + $this.find('name').text() + '</strong>';
        html += '<time>' + $this.find('time').text() + '</time>';
        html += '<p>' + $this.find('message').text() + '</p></article>';
    });

    $chat.html(html);
    $chat.scrollTop($chat[0].scrollHeight);
}

function currentTime() {
    var now = new Date();
    return now.getHours() + ':' + now.getMinutes();
}