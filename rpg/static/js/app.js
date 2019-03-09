function copyPassword() {
    pw = document.getElementById('display-password')
    pw.removeAttribute('disabled');
    pw.select();
    document.execCommand('copy');

    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }

    else if (document.selection) {
        document.selection.empty();
    }

    pw.setAttribute('disabled', '');
    M.toast({ html: '<p><i class="fas fa-2x fa-check green-text text-lighten-2 center"></i></p> &nbsp;&nbsp;&nbsp;<p>Password Copied!</p>', classes: 'grey darken-3 button-border-purple white-text' })
}

$(document).ready(function (e) {

    $('#generate-password-form').on('submit', function (e) {
        e.preventDefault();

        new_password_request = $.ajax({
            url: '/generate-password',
            type: 'POST',
            data: $('#generate-password-form').serialize(),
            success: function (response) {
                if (response.status === 'success') {
                    var new_password = response.new_password;
                    document.getElementById('display-password-row').style.display = 'block';
                    document.getElementById('display-password').innerHTML = new_password;
                    M.textareaAutoResize($('#display-password'));
                }

                else if (response.status === 'zeroCharError') {
                    M.toast({ html: '<p><i class="fas fa-2x fa-exclamation-triangle red-text text-accent-1 center"></i></p> &nbsp;&nbsp;&nbsp;<p>Please Select Characters to Use!</p>', classes: 'grey darken-3 button-border-purple white-text center' })
                }

                else if (response.status === 'zeroLengthError') {
                    M.toast({ html: '<p><i class="fas fa-2x fa-exclamation-triangle red-text text-accent-1 center"></i></p> &nbsp;&nbsp;&nbsp;<p>Please Select a Length!</p>', classes: 'grey darken-3 button-border-purple white-text center' })
                }

                else {
                    alert('An Error Occured.')
                }
            }
        });
    });
});