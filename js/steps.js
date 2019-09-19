
        $(document).ready(function () {
            $('.nav-tabs > li a[title]').tooltip();
        
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
                $(event.target).closest('li').addClass('active').nextAll('li').removeClass('completed');
                $(event.relatedTarget).closest('li').removeClass('active');
                $('li.active').prevAll().addClass('completed');
            });
            $(".next-step").click(function (event) {
                $('.wizard li.active').removeClass('active').addClass('completed').next('li').addClass('active');
                $('.wizard li.active').removeClass('disabled');
                $('.wizard .nav-link.active').closest('li').next('li').find('a.nav-link').trigger('click');
            });
            $(".prev-step").click(function (event) {
                $('.wizard li.active').removeClass('active').prev('li').addClass('active');
                $('.wizard .nav-link.active').closest('li').prev('li').find('.nav-link').trigger('click');
            });
        });