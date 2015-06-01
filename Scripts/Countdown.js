/************************************
*功能：倒计时
*作者：张文广
*时间：2014-8-29 10:19:35
*************************************/


(function () {

    var defaults = {
        Total:0,//倒计时间秒数
        TimeSpan:1000//倒计时间间隔毫秒数，默认1秒
    };
    
    $.fn.Countdown = function (option) {

        option = $.extend({}, defaults, option);

        var obj = $(this);//显示结果的对象

        var init= window.setInterval(function () {

            if (isNaN(option.Total) || option.Total <= 0) {                
                window.clearInterval(init);
                obj.html("已过期");
            }
            else {
                var timestotal = option.Total = option.Total - (option.TimeSpan / 1000);
                var second = Math.floor(timestotal % 60);
                var minite = Math.floor((timestotal / 60) % 60);
                var hour = Math.floor((timestotal / 3600) % 24);
                var day = Math.floor((timestotal / 3600) / 24);

                obj.html('还剩:<span class="num">' + day + '</span>天<span class="num">' + hour + '</span>小时 <span class="num">' + minite + '</span>分 <span class="num">' + second + '</span>秒');
            }

        }, option.TimeSpan);

    };

})(jQuery);