async function display()
{
    const state = document.getElementById("state");
    const url='https://api.openweathermap.org/data/2.5/weather?q='+state.value+'&appid=a445136c0191aba669d3617644dfb884&units=metric';
    const response = await fetch(url);
    var result = await response.json();
    console.log(result);
    let{
        main:{temp,temp_max,temp_min=result}}=result;
        console.log(result);
        document.getElementById("temp").innerHTML="temperature :"+temp;
        document.getElementById("temp_min").innerHTML="temperature :"+temp_min;
        document.getElementById("temp_max").innerHTML="temperature :"+temp_max;
        console.log("temperature : " +temp);
    console.log("Max_temperature : "+temp_max);
    console.log("Min_temperature : " +temp_min);
    }