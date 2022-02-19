

$(".openButton").on("click", () => {
    if ($(".navbar").css("left") != "0px" && $(window).width() < 1800) {
        $(".navbar").addClass("myactive")
        $(".openButton").css({ marginLeft: "20%" })
    }
})
$(".openButton").on("click", () => {
    if ($(".navbar").css("left") != "0px" && $(window).width() < 1028) {
        $(".navbar").addClass("myactive")
        $(".openButton").css({ marginLeft: "25%" })
    }
})
$(".openButton").on("click", () => {
    if ($(".navbar").css("left") != "0px" && $(window).width() < 770) {
        $(".navbar").addClass("myactive")
        $(".openButton").css({ marginLeft: "25%" })
    }
})

$(".openButton").on("click", () => {
    if ($(".navbar").css("left") != "0px" && $(window).width() < 576) {
        $(".navbar").addClass("myactive")
        $(".openButton").css({ marginLeft: "35%" })
    }
})





$(".openButton").on("click", () => {
    if ($(".navbar").css("left") == "0px") {
        $(".navbar").removeClass('myactive')
        $(".openButton").css({ marginLeft: "0%" })
    }
})




$(".openButton").on("click", () => {
    if ($(window).width() < 576 && $("navbar").css("left") != "0px") {
        $(".contentheader").css({ marginLeft: "100px" })
    }
})

$(".openButton").on("click", () => {
    if ($(window).width() < 576 && $(".navbar").css("left") == "0px") {
        $(".contentheader").css({ marginLeft: "0px" })
    }
})



// ========================Accordion========================



let textItem = Array.from(document.querySelectorAll(".textContent"))
let headItem = document.querySelectorAll(".heading")
let slide = document.querySelectorAll(".slide")

for (let i = 0; i < headItem.length; i++) {
    headItem[i].addEventListener("click", (e) => {
        textItem.forEach((acc) => {
            if (e.target.nextElementSibling !== acc && acc.classList.contains("activeAccordion")) {
                acc.classList.remove("activeAccordion")
                headItem.forEach((x) => x.classList.remove("active"))
            }
        })
        headItem[i].classList.toggle("active")
        let panel = headItem[i].nextElementSibling
        panel.classList.toggle("activeAccordion")

    })
}


// let timeContent = document.querySelector(".timeContent ")

// let day = timeContent.children[0].children[0]
// let hour = timeContent.children[1].children[0]
// let minute = timeContent.children[2].children[0]
// let second = timeContent.children[3].children[0]

// let countDay = 1200
// let countHour = 24
// let countMin = 60
// let countSec = 60
// let helper = 60;

// function seconds() {
//     countSec--;
//     if (countSec == 0) {
//         countSec = 60
//         countMin--
//         minute.innerHTML = countMin;
//         if (countMin == 0) {
//             countMin = 60;
//             helper--;
//             if (helper == 0) {
//                 countHour--;
//                 hour.innerHTML = countHour;
//                 if (countHour == 0) {
//                     countHour = 24;
//                     countDay--;
//                     day.innerHTML = countDay
//                 }
//             }
//         }
//     } else {
//         second.innerHTML = countSec
//     }
// }


// let sec = setInterval(() => {
//     seconds()
// }, 1000)

// // countDay=0
// function endDate() {
//     if (countDay == 0) {
//         clearInterval(sec)
//         day.innerHTML = 0
//         hour.innerHTML = 0
//         minute.innerHTML = 0
//         second.innerHTML = 0
//     }
// }
// endDate()


// let partyData = {
//     day: countDay,
//     hour: countHour,
//     minute: countMin,
//     second: countSec,
// }
// console.log(partyData.day)
// console.log(partyData.hour)
// console.log(partyData.minute)
// console.log(partyData.second)

// let setTimeStorage = localStorage.setItem("myTime", JSON.stringify(partyData))
// let getTimeStorage = JSON.parse(localStorage.getItem("myTime"))
// console.log(getTimeStorage)
// console.log(getTimeStorage.day)
// console.log(getTimeStorage.hour)
// console.log(getTimeStorage.minute)
// console.log(getTimeStorage.second)


// let timer = setInterval(() => {
//     countSec--;
//     if (countSec == 0) {
//         countSec = 60
//         countMin--
//         getTimeStorage.minute = countMin;
//         if (countMin == 0) {
//             countMin = 60;
//             helper--;
//             if (helper == 0) {
//                 countHour--;
//                 getTimeStorage.hour = countHour;
//                 if (countHour == 0) {
//                     countHour = 24;
//                     countDay--;
//                     getTimeStorage.day = countDay
//                 }
//             }
//             let NsetTimeStorage = localStorage.setItem("NmyTime", JSON.stringify(partyData))
//             let NgetTimeStorage = JSON.parse(localStorage.getItem("NmyTime"))
//             console.log(NgetTimeStorage)

//         }

//     } else {
//         getTimeStorage.second = countSec
//     }
// }, 1000)

// console.log(".......................")
// console.log(getTimeStorage)
// console.log(getTimeStorage.day)
// console.log(getTimeStorage.hour)
// console.log(getTimeStorage.minute)
// console.log(getTimeStorage.second)
// setTimeout(endDate,8000)




// timedown counter

window.onload = function () {

    countDownToTime("10 october 2021 9:56:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${mins} m`);
    $('#seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}





// text area

let regex = /^[a-z0-9]{0,100}$/;
function validation() {
    if (regex.test($(".textarea").value)) {
        $(".BtnData").css("backgroundColor","red")
        $(".BtnData").prop("disabled",false)
        return true;


    } else {
        $(".BtnData").css("backgroundColor","gray")
        $(".BtnData").prop("disabled",true)
        return false
    }
}

$(".textarea").on("keyup", () => {
    if (validation()) {
        $("#charLength").html(100 - textArea.value.length)
    }
})