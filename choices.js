let choicez = [0, 0, 0, 0];
let c = 0;
let questiz = ["Where would you like to live?", "Which of these animals do you prefer?", "Which of these planets do you like the most?", "Which part of the meal you enjoy best?", "Which of these colors do you prefer?", "Which of these weapons would you choose to fight with if you had to?", "In a fantastic medieval world you would be a...", "How would you like to move?", "What weather do you prefer?", "How many letters is your name?"];
let frstopt = ["City", "Cat", "Venus", "First Course", "Red", "Sword", "Cleric", "Walking", "Hot", "5", "Restart"];
let scndopt = ["Sea", "Dog", "Mars", "Second Course", "Green", "Gun", "Monarch", "Swimming", "Cold", "6", "Restart"];
let thrdopt = ["Mountain", "Fish", "Jupiter", "Fruits", "Yellow", "Bow", "Mage", "Flying", "Temperate", "7", "Restart"];
let frthopt = ["Traveling", "Bird", "Saturn", "Dessert", "Blue", "Whip", "Knight", "Teleporting", "Variable", "Less than 5 / More than 7", "Restart"];

let elemenz = ["Air", "Ground", "Water", "Fire", "Ice", "Vegetation", "Electricity", "Shadow", "Rock", "Light"];
let resultz = ["The people of the Air live with their heads in the clouds and place themselves unconsciously before the rest. They are always ready for change and newness and indeed await these things full of hope. The people of the Air are the only ones who can truly be considered free and who, in fact, are unpredictable for anyone else.", 
               "The people of the Ground are a bit squared away but at the same time sweet and caring. These people are usually full of energy even if they do not always use it. It is difficult for them to show others what they feel and they live as if they were on a mission. They are able to endure anything to do what they have set themselves to.",
               "The people of the Water are wise and thoughtful. They try to live in harmony with other entities and know how to love deeply. However, it is difficult for them to change their ideas, which annoys most people. They always aspire to something more although they know reality. The people of the Water are able to adapt to every situation.",
               "The people of the Fire are passionate and impatient. These people struggle to be alone and are always ready to start something as much as to stop dealing with it without completing it. The people of the Fire have an extraordinary willpower and are able to transmit it to those around them.",
               "The people of the Ice always give the impression of living behind a barrier. Almost nobody can fully understand these people. The people of the Ice change according to who observes them and might seem to possess purity or selfishness depending on the matter. The people of the Ice can seem lonely even when they are in a group, quite and pungent.",
               "The people of the Vegetation live in harmony with nature, a little less with other people, with whom they have a mutual effort to understand each other. These people are often in their own world but, if necessary, they are also able to get out of it. They know how to love life and how to devote time to what deserves it.",
               "The people of the Electricity always have something in their heads. These are impulsive and planning people at the same time. These people are rare and have an absurd potential. They are charismatic, though not always positively and are able to bring people together quickly if necessary.",
               "The people of the Shadow prefer not to show off but do not hold back when there is something to be done. They simply prefer to do it secretly. The people of the Shadow are also silent if not asked but, once they feel comfortable, they have a lot to say. The people of the Shadow are often the creators of many useful things that nobody pays attention to.",
               "The people of the Rock have a strong balance. They are people who are strict with themselves and often intransigent. They do not follow what is said to them and are irremovable on many issues. The people of the Rock are well known for their strength of mind and their patience.",
               "The people of the Light are common. The most commonplace people you know are people of the Light. They are not able to see behind one's behaviorr and expect everything to go as they believe it will. They change their minds based on what happens and always try to convince the others of their new beliefs."];

const choices=(num) => {
    c++;
    if (c <= 10) {
        switch(c) {
            case 1:  choicez[3-num]++;
                     break;
            case 2:  if (num===0) choicez[1]++;
                     else if (num===1) choicez[3]++;
                     else if (num===2) choicez[2]++;
                     else if (num===3) choicez[0]++;
                     break;
            case 3:  if (num===0) choicez[2]++;
                     else if (num===1) choicez[3]++;
                     else if (num===2) choicez[1]++;
                     else if (num===3) choicez[0]++;
                     break;
            case 4:  if (num===0) choicez[3]++;
                     else if (num===1) choicez[2]++;
                     else if (num===2) choicez[0]++;
                     else if (num===3) choicez[1]++;
                     break;
            case 5:  if (num===0) choicez[3]++;
                     else if (num===1) choicez[1]++;
                     else if (num===2) choicez[0]++;
                     else if (num===3) choicez[2]++;
                     break;
            case 6:  if (num===0) choicez[2]++;
                     else if (num===1) choicez[3]++;
                     else if (num===2) choicez[1]++;
                     else if (num===3) choicez[0]++;
                     break;
            case 7:  if (num===0) choicez[3]++;
                     else if (num===1) choicez[0]++;
                     else if (num===2) choicez[2]++;
                     else if (num===3) choicez[1]++;
                     break;
            case 8:  if (num===0) choicez[2]++;
                     else if (num===1) choicez[0]++;
                     else if (num===2) choicez[1]++;
                     else if (num===3) choicez[3]++;
                     break;
            case 9:  if (num===0) choicez[3]++;
                     else if (num===1) choicez[1]++;
                     else if (num===2) choicez[2]++;
                     else if (num===3) choicez[0]++;
                     break;
            case 10: if (num===0) choicez[1]++;
                     else if (num===1) choicez[3]++;
                     else if (num===2) choicez[2]++;
                     else if (num===3) choicez[0]++;
                     break;
        }
    }
    document.getElementById('q0').textContent = frstopt[c];
    document.getElementById('q1').textContent = scndopt[c];
    document.getElementById('q2').textContent = thrdopt[c];
    document.getElementById('q3').textContent = frthopt[c];
    if (c===10) {
        let r = 0;
        if (choicez[0] > (choicez[1]+choicez[2]+choicez[3]))
            r=0;
        else if (choicez[1] > (choicez[0]+choicez[2]+choicez[3]))
            r=1;
        else if (choicez[2] > (choicez[1]+choicez[0]+choicez[3]))
            r=2;
        else if (choicez[3] > (choicez[1]+choicez[2]+choicez[0]))
            r=3;
        else if (choicez[0] === (choicez[1]+choicez[2]+choicez[3]))
            r=4;
        else if (choicez[1] === (choicez[0]+choicez[2]+choicez[3]))
            r=5;
        else if (choicez[2] === (choicez[1]+choicez[0]+choicez[3]))
            r=6;
        else if (choicez[3] === (choicez[1]+choicez[2]+choicez[0]))
            r=7;
        else if (choicez[0]<=3 && choicez[1]<=3 && choicez[2]<= 3 && choicez[3]<=3)
            r=8;
        else
            r=9;
        document.getElementById('qq0').innerText = resultz[r];
        choicez = [0, 0, 0, 0];
        c=0;
    } else {
        document.getElementById('qq0').innerText = questiz[c];
    }

}