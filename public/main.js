// const serverApp = '../app.js';
// console.log(serverApp.getLightStatus());

// var moment = require('moment');

const ONE_SEC = 1000; // milliseconds

//CURRENT TIME CLOCK
// $('#clock').fitText(1.3);
const clock = document.querySelector('#clock')
function update()  {
  //$('#clock').html
  clock.textContent = moment().format('ddd h:mm a');
}
setInterval(update, ONE_SEC);
console.log(moment().format('ddd h:mm a'))



// var myVar = setInterval(function(){ getAlarmSettings() }, 2 * ONE_SEC);

// var myVar2 = 
setInterval(function(){ allData() }, ONE_SEC);

// const pythonLight = "/light";
// function getLightSetting() {
//     fetch(pythonLight)
//     .then(function(response){
//         return response.text()
//     }).then(function(response){
//         console.log(response)
//     })
// }

// function myTimer() {
//     var d = moment();
//     var t = d.format('h:mm a')
//     document.getElementById("demo").innerHTML = t;
// }

    // fetch(json + 'application/json', {
    // method: "POST",
    // headers: new Headers({
    //     "content-type": "application/json"
    // }),
    // body: JSON.stringify({
    //     alarmOnOff: true,
    //     alarmSet: 'Mon 9:32 pm',
    //     lightOnOff: false
    // })
// function getAlarmSettings() {
//     fetch(json)
//     .then(function(response){
//         return response.json()
//     }).then(function(response){
//       let lastIndex = (response.length - 1)
//       console.log(lastIndex)
//         if (response[lastIndex].alarmOnOff == true) {
//             if (response[lastIndex].alarmTime == moment().format('ddd, h:mm a')) {
//             return document.getElementById("sound").play() 
//           } 
//         //   if (serverApp.getLightStatus() === true) {
//         //        return document.getElementById('sound').pause()
//         //   }
//     } 
// })
// }

            // console.log(response[lastIndex].alarmTime)


// const fetchAlarmSettings = setInterval(function(){myFetch()}, ONE_SEC)

// function myFetch() {
//     fetch(json)
//       .then(response => {
//         return response.json();
//       })
//       .then(response => {
//         console.log(response);
         
//       })
// }
// $('#clock').fitText(1.3);

// function update() {
//   $('#clock').html(moment().format('ddd h:mm a'));
// }

// setInterval(update, ONE_SEC);


// let alarmOn = false
// let lightOn = false

// function startAlarm() {
//   let checkLight = setInterval(function(){
//     if (!lightOn) {
//       alarmOn = true
//       console.log('alarm is running')
//       document.getElementById("sound").play()
//     }
//     else {
//       stopAlarm()
//       clearInterval(checkLight)
//     }
//   }, 1000)
// }

// function stopAlarm() {
//   alarmOn = false
//   console.log("stop alarm")
//   document.getElementById("sound").pause()
// }

// function toggleLight() {
//   if (lightOn) {
//     lightOn = false
//     document.getElementById("light").src =""
//   }
//   else {
//     lightOn = true
//     document.getElementById("light").src = "https://tinyurl.com/ydhv7uu3"
//   }
//   console.log(lightOn)
// }

async function allData()  {
    const json = "https://young-ridge-65381.herokuapp.com/alarmSettings"
    let response = await fetch("/light")
    let text = await response.text()
    console.log(text)
    let alarmSetting = await fetch(json)
    let alarmResponse = await alarmSetting.json()
    console.log(alarmResponse)
    let lastIndex = (alarmResponse.length - 1)
      console.log(lastIndex)
    //   debugger;
        // if (alarmResponse[lastIndex].alarmOnOff == true) {
           if (alarmResponse[lastIndex].alarmTime == moment().format('ddd, h:mm a')) {
                document.getElementById('sound').play()

                // setInterval(function(){
               
            //  document.getElementById("sound").play() 
           
                    if (text == "true") {
                        document.getElementById('sound').pause()
                    } else {
                        document.getElementById("sound").play()
                    }
                // }, 1000); 
    }
}

    
