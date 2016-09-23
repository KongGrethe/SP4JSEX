$(document).ready(function () {
    var prevCountry = "";
    var countryID;

    $("path").click(function () {
        if (prevCountry !== "") {
            prevCountry.css({
                fill: "#C0C0C0"
            });
        }
        $(this).css({
            fill: "green"
        });
        prevCountry = $(this);
        countryID = $(this).attr("id");

        displayInfo();
    });

    function displayInfo() {
        fixnames();        
        
        var urlCountry = "countryServlet?id=" + countryID;
        var borders = "";
        
        console.log("Geting info from " + urlCountry);
        
        $.ajax({
            url: urlCountry,
            type: "GET",
            dataType: "json",
            success: function(data) {
                //alert(data.name + "\n" + data.population + "\n" + data.area + "\n" + data.borders.toString());
                $("#countryName").html(data.name);
                $("#countryPop").html(data.population);
                $("#countryArea").html(data.area);
                $("#countryBorders").html(data.borders.toString());
            }
        });
    }
    
    function fixnames() {
        if(countryID === "ru-main") {
            countryID = "ru";
        }
        if(countryID === "gb-gbn") {
            countryID = "gb";
        }
    }
});