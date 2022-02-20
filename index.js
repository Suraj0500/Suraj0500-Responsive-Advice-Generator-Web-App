(function(window, document, undefined){
  const maxLimit=224;

  const api_url="https://api.adviceslip.com/advice/";
  var globalData={slip:{id: 0, advice: "Press The Button to get some Awesome Advices"}};

  async function get_api(url){
    var randomNum=Math.random();
    randomNum=randomNum*maxLimit;
    randomNum=Math.floor(randomNum)+1;
    const curr_url=url+randomNum;
    const response = await fetch(curr_url);
    var data = await response.json();
    globalData = data;
  }

window.onload = init;

  function init(){
    window.addEventListener("resize", ()=>{
      if(window.innerWidth>768){
        document.getElementById("divider").src="./images/pattern-divider-desktop.svg";
      }
      else{
        document.getElementById("divider").src="./images/pattern-divider-mobile.svg";
      }
    });
    const element = document.getElementById("randomizer-quote");
    element.addEventListener("click", async ()=>{
      await get_api(api_url);
      document.getElementById("advice-num").innerHTML = "ADVICE #" + globalData.slip.id;
      document.getElementById("advice-text").innerHTML = '"' + globalData.slip.advice + '"';
  })
}
})(window, document, undefined);
