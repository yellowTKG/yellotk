function tkScrollShow(){
    //動きの指定
    $('.tk-target-scroll-show').each(function(){ //ターゲットが
        var elemPos = $(this).offset().top-50;//要素より、50px上の時
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('tk-anime-scroll-show'); // 画面内に入ったらクラスを追記
        }else{
            $(this).removeClass('tk-anime-scroll-show'); // 画面外に出たらクラスを外す
        }
    });

}
    
// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function (){
    tkScrollShow()
})

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function(){
    tkScrollShow()
})