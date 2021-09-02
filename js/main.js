$(document).ready(function() {

	// jQuery Validate JS
	$("#contact-form").validate({
		rules: {

			name: { required: true },
			email: { required: true, email: true },
			// skype: { required: true},
			// phone: { required: true}, 
			message: { required: true, } 
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате  name@domain.com . Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},

		submitHandler: function(form) {
			ajaxFormSubmit();
		}
	})

	// Функция AJAX запроса на сервер
	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); //Сохраняем данные введенные в форму в строку

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", //Куда отправляем запрос
			data: string, // Какие данные отправляем, в данном случае отправляем переменную 

			// Функция если все прошло успешно
			success: function(html){
				$('#contact-form').slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по submit больше ничего не выделялось - делаем возврат false
		return false;
	}
	
});
