function separateDate(birthDate) {
    birthDay = Number(birthDate.substring(2, 4));
    birthMonth = Number(birthDate.substring(0, 2))
    birthYear = Number(birthDate.substring(4));

    return birthDay, birthMonth, birthYear;
}

function age(birthDate){
  separateDate(birthDate);
  
  today = new Date();

  if (today.getMonth() +1 < birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) { age =    today.getFullYear() - birthYear - 1;
  } else{
    age = (today.getFullYear() - birthYear);
  }
  return 'You are ' + age + ' years old.';
}

function zodiacSign(birthDate) {
  separateDate(birthDate);

  if (birthMonth === 3 && birthDay >= 21 || birthMonth === 4 && birthDay <= 20) {
    sign = 'Aries.';
  } else if (birthMonth === 4 && birthDay >= 21 || birthMonth === 5 && birthDay <= 20) {
    sign = 'Taurus.';
  } else if (birthMonth === 5 && birthDay >= 21 || birthMonth === 6 && birthDay <= 20) {
    sign = 'Gemini.';
  } else if (birthMonth === 6 && birthDay >= 21 || birthMonth === 7 && birthDay <= 22) {
    sign = 'Cancer.';
  } else if (birthMonth === 7 && birthDay >= 23 || birthMonth === 8 && birthDay <= 22) {
    sign = 'Leo.';
  } else if (birthMonth === 8 && birthDay >= 23 || birthMonth === 9 && birthDay <= 22) {
    sign = 'Virgo.';
  } else if (birthMonth === 9 && birthDay >= 23 || birthMonth === 10 && birthDay <= 22) {
    sign = 'Libra.';
  } else if (birthMonth === 10 && birthDay >= 23 || birthMonth === 11 && birthDay <= 22) {
    sign = 'Scorpio.';
  } else if (birthMonth === 11 && birthDay >= 23 || birthMonth === 12 && birthDay <= 21) {
    sign = 'Sagittarius.';
  } else if (birthMonth === 12 && birthDay >= 22 || birthMonth === 1 && birthDay <= 19) {
    sign = 'Capricorn.';
  } else if (birthMonth === 1 && birthDay >= 20 || birthMonth === 2 && birthDay <= 19) {
    sign = 'Aquarius.';
  } else {
    sign = 'Pisces.';
  }
  addSignPic()
  return `Your Zodiac sign is ${sign}`;
}

function addStonePic(stone){
  const stonePic = document.createElement('img');
  stonePic.className = 'sPic';
  stonePic.src = `./photos/${stone.toLowerCase()}png`;
  document.querySelector('#result-image > .img').appendChild(stonePic);
}

function birthStone(birthDate) {
  separateDate(birthDate);
  const stones = ['Garnet.', 'Amethyst.', 'Aquamarine.', 'Diamond.', 'Emerald.', 'Alexandrite.', 'Ruby.', 'Peridot.', 'Sapphire.', 'Pink-Tourmaline.', 'Citrine.', 'Blue-Topaz.']
  const stone = stones[birthMonth - 1]; 
  addStonePic(stone)
  return `Your birthstone is ${stone}`
}

function yourInfo(optionNum){
  let reply = [];
  if (optionNum.includes('4')){
    reply.push(`${age(birthDate)}\n ${zodiacSign(birthDate)}\n ${birthStone(birthDate)}`);
  } else if (!optionNum.includes('4') && optionNum !== ''){
    for (const num of optionNum){
      if (num.includes('1') && !optionNum.includes('4')){
        reply.push(age(birthDate));
      } else if (num.includes('2') && !optionNum.includes('4')){
        reply.push(zodiacSign(birthDate));
      } else if (num.includes('3') && !optionNum.includes('4')){
        reply.push(birthStone(birthDate)) ;
      }
    }
  } else {
    return "Goodbye";
  }
  return reply.join(' ');
}

function addSignPic(){
  const signPic = document.createElement('img');
  signPic.className = 'sPic';
  signPic.src = `./photos/${sign.toLowerCase()}png`;
  document.querySelector('#result-image > .img').appendChild(signPic);
}


module.exports = {
  separateDate,
  age,
  zodiacSign,
  birthStone,
  yourInfo,
  addSignPic,
  addStonePic
}