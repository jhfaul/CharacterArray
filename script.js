var displayEle = document.body.querySelector(".display");
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];
for(var i=0; i<warriors.length; i++){
  if(warriors[i].warrior == true){
   if(warriors[i].damage >=2){
     if(warriors[i].health >=10){
      var ele = document.createElement("div");
      var nameEle = document.createElement("h1");
      var healthEle = document.createElement("h3");
      var dmgEle = document.createElement("h3");
      var warriorEle = document.createElement("h3");
       if(warriors[i].name == "Mavis"){
        nameEle.style.color = "red";}
      
      nameEle.innerHTML = "Name: "+warriors[i].name;
      healthEle.innerHTML = "Health: "+warriors[i].health;
      dmgEle.innerHTML = "Damage: "+warriors[i].damage;
      warriorEle.innerHTML ="Warrior";
      
      ele.appendChild(nameEle);
      ele.appendChild(healthEle);
      ele.appendChild(dmgEle);
      ele.appendChild(warriorEle);
    
      displayEle.appendChild(ele);
     }
     } 
   }
  };