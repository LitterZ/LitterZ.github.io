

/****************************
*功能：禁用表单元素
*时间：
*作者：
****************************/


(function ($) {

    var defaults = {
        type:"disable",//disable:禁用，delete：删除
    };

    $.fn.formDisable = function (option) {
        option = $.extend({}, defaults, option);

        if (option.type == "disable")
            $(this).val("已禁用").attr("disabled", "disabled");
        else if (option.type == "delete")
            $(this).remove();
        else
            alert("参数错误");
    };

})(jQuery);