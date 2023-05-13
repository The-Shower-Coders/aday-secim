const parties = {
    'er': 0,
    'ko': 0,
    'si': 0
}

function sec() {
    let code = $('#aday option:selected').val();
    if (code === 'none') {
        alert('bir aday seçiniz')
    } else if (code === 'er') {
        parties.er++;
    } else if (code === 'ko') {
        parties.ko++;
    } else if (code === 'si') {
        parties.si++;
    }

    let total = parties.er + parties.ko + parties.si;
    $('#er').html(String((parties.er / total) * 100).slice(0, 5) + `%<br>count: ` + parties.er)
    $('#ko').html(String((parties.ko / total) * 100).slice(0, 5) + `%<br><div class='ko'/><br>count: ` + parties.ko)
    $('#si').html(String((parties.si / total) * 100).slice(0, 5) + `%<br><div class='si'/><br>count: ` + parties.si)

    var xValues = ["Erdoğan", "Kılıçdaroğlu", "Oğan"];
    var yValues = [(parties.er / total) * 100, (parties.ko / total) * 100, (parties.si / total) * 100];
    var barColors = ["red", "green", "blue"];

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            title: {
                display: true,
                text: "2023 Cumhurbaşkanlığı Aday Seçimi"
            }
        }
    });
}