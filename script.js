let justFood = (pocetLidi) => {
  const cenaZaCloveka = 800;
  const celkem = pocetLidi * cenaZaCloveka; 
  return `catering od Just Food pro ${pocetLidi} lidí za ${celkem} Kč`;
}

let yourMama = (pocetLidi) => {
    const cenaZaCloveka = 1200;
    const celkem = pocetLidi * cenaZaCloveka; 
    return `catering od Your Mama pro ${pocetLidi} lidí za ${celkem} Kč`;
  }

  let flavourHaven = (pocetLidi) => {
    const cenaZaCloveka = 1500;
    const celkem = pocetLidi * cenaZaCloveka; 
    return `catering od Flavour Haven pro ${pocetLidi} lidí za ${celkem} Kč`;
  }

console.log(justFood(40));
console.log(yourMama(60));
console.log(flavourHaven(30));

let createEvent = (nazev, pocetLidi, funkce) => {
    const textUdalosti = funkce(pocetLidi);
    return `Událost ${nazev} od ${textUdalosti}`;
}

console.log(createEvent("Bar Micva", 400, flavourHaven));