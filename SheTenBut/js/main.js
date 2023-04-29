console.log('loaded');

let btnText = document.querySelector('.btn-text');
let i=0;

btnText.addEventListener('click', function(){
    let texts = ['she’s a 10 but she never says how she feels',
        'she’s a 10 but says “huh” a lot',
        'she’s a 10 but she says “im fine” when she’s sad',
        'she’s a 10 but she takes out her whole closet when she gets ready',
        'she’s a 10 but she talks to a lot of guys',
        'she’s a 10 but she’s confusing',
        'she’s a 10 but she’s extremely possessive and will go crazy if u look at someone else',
        'she’s a 10 but she gets overstimulated at the supermarket',
        'she’s a 10 but she’s obsessed with astrology',
        'she’s a 10 but she loves being alone, takes too long to open up, has daddy issues, and uses music as therapy',
        'she’s a 10 but she drinks a lot',
        'she’s a 10 but she loves being alone but hates feeling alone',
        'she’s a 10 but she has OF',
       'she’s a 10 but cries at every father/daughter scene in movies/shows because she has daddy issues',
        'she’s a 10 but she disappears when she’s not ok',
       ' she’s a 10 but her entire life revolves around her eating disorder',
        'she’s a 10 but she romanticizes every single thing in her life',
       ' she’s a 10 but cries when she gets overwhelmed',
       ' she’s a 10 but she can’t decide on a book to read even though she has 100+ books',
       ' she’s a 10 but ignores every boy who tries to talk to her',
       'she’s a 10 but she’s on her phone 24/7',
       'she’s a 10 but needs a nap every day',
       'she’s a 10 but she has anxiety and overthinks about everything',
       'she’s a 10 but she has anger issues',
       'she’s a 10 but posts bikini pics on Instagram',
       'she’s a 10 but she asks you if you’d still love her if she was a worm',
       'she’s a 10 but she hasn’t left her bedroom in three months',
       'she’s a 10 but she’s controlling',
       'she’s a 10 but she talks to animals like they’re gonna respond',
       'she’s a 10 but she expresses her feelings on Twitter',
       'she’s a 10 but she never makes plans to hangout',
       'she’s a 10 but she disappears from social media from time to time because people drain her energy',
       'she’s a 10 but she needs constant words of affirmation to believe that anyone actually cares about her',
       'she’s a 10 but she online shops every time she’s sad',
       'she’s a 10 but she hides in the bathroom when she’s overwhelmed',
       'she’s a 10 but her body count is double digits',
       'she’s a 10 but has a deep voice',
       'she’s a 10 but she ghosts you every 2-3 business days',
       'she’s a 10 but she’s actually in love with the version of you that she made up in her head',
       'she’s a 10 but has low iron deficiency',
      ' she’s a 10 but she rewatches the same show over & over again just to feel something',
     '  she’s a 10 but her parents are very strict',
     '  she’s a 10 but you have to talk to her 24/7 to keep her interested',
     '  she’s a 10 but she’s terrible at replying back to her messages',
     '  she’s a 10 but she claps when the plane lands',
     '  she’s a 10 but she wants you to feed her other 3 kids',
       'she’s a 10 but she talks too much',
       'she’s a 10 but she’s taller than you',
      ' she’s a 10 but she doesn’t talk when she’s upset',
       'she’s a 10 but has anger issues',
      ' she’s a 10 but she has her bed on the floor',
       'she’s a 10 but she loves arguing 24/7',
      ' she’s a 10 but she’s vegan',
       'she’s a 10 but she’s obsessed with a fictional character',
       'she’s a 10 but needs reassurance 24/7',
       'she’s a 10 but randomly switches between obsession and complete disinterest',
       'she’s a 1 but she has grain cart experience and makes good potato salad',
       'she’s a 1 but she’s nice to you',
       'she’s a 3 but she lives around the corner',
      ' she’s a 4 but she apologizes for everything she does and doesn’t do',
      ' she’s a 4 but she knows how to cook',
      ' she’s a 5 but she loves you a lot',
      ' she’s a 5 but she checks up on you every day to make sure you’re doing okay',
      ' she’s a 5 but she goes to the gym',
       'she’s a 6 but she got a fat ass',
      ' she’s a 6 but she met you at a very strange time in your life',
      'she’s a 6 but she got a family cabin up at the lake',
      'she’s a 6 but she knows the calories of every food',
      'she’s a 6 but she has her own company',
      'she’s a 6 but she gave you a compliment',
      'she’s a 7 but she’s dumb',
      'she’s a 7 but she’s taller than you',
      'she’s an 8 but she wears makeup',
      'she’s an 8 but she might stab you',
      'she’s an 8 but she’s a micro-celebrity on twitter',
      'she’s an 8 but she says “literally” in every sentence',
      'she’s a 9 but she’s a “Disney adult”',
      'she’s a 9 but she has plants in her room',
      'she’s a 9 but the majority of her friends are dudes',

]
    let rand = Math.floor(Math.random()*texts.length);
    let randomText =texts[rand]
    console.log(randomText);
    i++;
    
        let displayText = document.querySelector('.random-text');
        displayText.innerHTML=randomText;   

    let displaycount = document.querySelector('.count');
    displaycount.innerHTML=i;
})