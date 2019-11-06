



        var base_url = 'http://localhost/knowledgecityCompanyTest/';
		$(document).ready(function () {
			var myCookie = getCookie("user_id");

			if (myCookie == null) {
				// do cookie doesn't exist stuff;
				window.location = 'index.html';
			}
			else {

			}
		});
		var dta = null;
		$(document).ready(function () {
			$.ajax({
				type: "GET",
				url: base_url + "api/users.php",
				success: function (result) {
					if (result.status == 200) {
						var data = result.data;
						var pagelink = '';
						var total_record = data.length;
						var total_links = total_record / 5;
						total_links = total_links ? total_links : 1;
						dta = data;
						show_records(1);
						for (var i = 1; i <= total_links; i++) {
							pagelink += '<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="show_records(' + i + ')">' + i + '</a></li>';
						}
						$('.pagination').html(pagelink);
					}
				},
				error: function (result) {
				 	 alert('errors');
				}
			});
		});

		function show_records(page = 1) {
			if (page == 1) {
				var start = 0;
				var end = 5
			} else {
				var start = (page - 1) * 5;
				var end = page * 5;
			}
			var datalist = '';

			for (var i = start; i < end; i++) {
				datalist += '<tr><td><i class="fa fa-check-circle"></i></td><td>' + dta[i].username + '<span>' + dta[i].name + '</span></td><td>...<span>Default Group</span></td></tr>';
			}
			$('tbody').html(datalist);
		}

		function getCookie(name) {
			var dc = document.cookie;
			var prefix = name + "=";
			var begin = dc.indexOf("; " + prefix);
			if (begin == -1) {
				begin = dc.indexOf(prefix);
				if (begin != 0) return null;
			}
			else {
				begin += 2;
				var end = document.cookie.indexOf(";", begin);
				if (end == -1) {
					end = dc.length;
				}
			}
			return decodeURI(dc.substring(begin + prefix.length, end));
		}

		function logout() {
			$.ajax({
				type: "DELETE",
				url: base_url + "api/auth.php",
				success: function (result) {
					if (result.status == 200) {

						window.location = 'index.html';
					}
					console.log('ok', result);
				},
				error: function (result) {
					console.log('error', result)
				}
			});
		}