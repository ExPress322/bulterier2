$(document).ready(function(){
    if ($(window).width() <= 768) {
        // + для фактов
        $(".btn-more").click(function() {
            var parent = $(this).parent();
            var text = parent.find('.plus-text-h-43');
            text.removeClass('plus-text-h-43').addClass('plus-text-h-a');
            $(this).remove()
        });
    }
});