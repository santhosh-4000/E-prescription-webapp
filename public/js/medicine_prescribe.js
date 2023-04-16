function togglePopup() {
    $(".content").toggle();
}

$(document).ready(() => {

    $("#form").submit((event) => {
        event.preventDefault();
        
        const prescribeData = {
            'doctor_email': $("#doctor_email").text(),
            'patient_phone': $("#patient_phone").val(),
            'patient_symptoms': $("#patient_symptoms").val(),
            'patient_diagnosis': $("#patient_diagnosis").val(),
            'medicine_list': prescriptionItems,
            'notes': $("#prescription_notes").val(),
        }

        $.ajax({
            type: 'POST',
            url: '/submitprescribe',
            data: prescribeData,
            dataType: "json",
            success: (res) => {
                togglePopup();
                $(window).scrollTop(0);
                console.log(res.Success);
            },
            error: (err) => {
                console.log(err);
            }
        })
    });

});