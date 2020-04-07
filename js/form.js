
        var $form = $('form#survey-form'),
            url = 'https://script.google.com/macros/s/AKfycbwKuhKFn34tTP8o6Y4IwEV4U2BV-9QsNvRSAtRwJPdZO-7ovtE/exec'

        $('#submit').on('click', function(e) {
        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
        }).success(
            // do something
        );
        })
