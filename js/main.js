(function ($) {
 "use strict";

 /*==================================================================
    [ Validate ]*/
 function validate(input) {
  if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
   if (
    $(input)
     .val()
     .trim()
     .match(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
     ) == null
   ) {
    return false;
   }
  } else {
   if ($(input).val().trim() == "") {
    return false;
   }
  }
 }

 function showValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).addClass("alert-validate");
 }

 function hideValidate(input) {
  var thisAlert = $(input).parent();

  $(thisAlert).removeClass("alert-validate");
 }

 let AJAX = function (url, method, data, callback) {
  $.ajax({
   url: url,
   method: method,
   data: data,
   success: function (response) {
    callback(response);
   },
   error: function (response) {
    callback(response);
   },
  });
 };

 /*================================================================== [ Focus input ]*/

 let automateValidation = function (inputid) {
  $(inputid).on("submit", function () {
   var input = $(inputid + " .input100");
   var check = true;

   for (var i = 0; i < input.length; i++) {
    if (validate(input[i]) == false) {
     showValidate(input[i]);
     check = false;
    }
   }

   if (check == true) {
    AJAX(
     "api/login.php",
     "POST",
     $(inputid).serialize(),
     (response) => {
      if (response.status == true) {
       window.location.href = response.redirect;
      } else {
       alert(response.message);
      }
     }
    );
   }
   return false;
  });
  $(inputid + " .input100").each(function () {
   $(this).focus(function () {
    hideValidate(this);
   });
  });
 };

 automateValidation("#login");
 automateValidation("#signup");
})(jQuery);
