$(document).ready(() => {
    // Arrow functions
    const check = (divisor) => {
        if(!$(".total-persons").val() || $(".total-persons").val() < 0) {
            $(".alert").show();
            setTimeout(() => {
                $(".alert").hide();
            }, 3000);
        }else {
            $(".reset").addClass("active");
            let total = $("#price").val() / $(".total-persons").val();
            let tip = total * divisor / 100;
            total += tip;
            $(".total").children(".calculated").children("output").text(total.toFixed(2));
            $(".tip-amount").children(".calculated").children("output").text(tip.toFixed(2));
        }
    }
    // default
    const defaultSetting = () => {
        $(".tip").removeClass('active');
        $("input[name = 'custom']").text("");
        $(".total-persons").val("");
        $("#price").val("");
        $(".reset").removeClass("active");
        $(".total").children(".calculated").children("output").text("0.00");
        $(".tip-amount").children(".calculated").children("output").text("0.00");
    }
    
    $(".tip").click((e) => {
        let divisor = $(e.currentTarget).text().slice(0, -1);
        check(divisor);
        $("input[name = 'custom']").text("");
        $(".tip").removeClass("active");
        $(e.currentTarget).addClass("active");
    })

    $("input[name = 'custom']").change((e)=>{
        let divisor = $(e.currentTarget).val();
        check(divisor);
        $(".tip").removeClass("active");
    })

    $(".reset").on({
        click: () => defaultSetting(),
    })
})