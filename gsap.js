jQuery(document).ready(function($) {

    gsap.registerPlugin(SplitText);

    /*
     * Split Text Animation
     */
    const splitPhrases = document.querySelectorAll(".split-text");
    function setupSplits() {
        function generateText(){
            let personArray = [
                'a nun', 
                'a librarian',
                'a viking',
                'a movie star',
                'a greek goddess',
                'a video game designer',
                'a serial killer',
                'a Roman emperor',
                'a ski instructor',
                'a cupcake enthusiast',
                'a farmer',
                'a marine biologist',
                'the girl next door',
                'an absent-minded professor',
                'a struggling poet',
                'a war veteran',
                'a bug-eyed monster',
                'a giant caterpillar',
                'a con artist',
                'a damsel in distress',
                'an evil twin',
                'a circus clown',
                'a french maid',
                'a gentle giant',
                'a snake',
                'a cat',
                'a housewife',
                'a loner',
                'a mad scientist',
                'an opera singer',
                'a native tribesman',
                'a ghost',
                'a cop',
                'a firefighter',
                'a manic pixie dream girl',
                'the milkman',
                'the mailman',
                'an evil genius',
                'an orange-hued world leader',
                'an outlaw',
                'a starving artist',
                'a starship captain',
                'an aspiring rapper',
                'a time traveler',
                'an intergalactic fugitive',
                'a drunken pirate',
                ];
              
            let placeArray = [
                'Kentucky',
                'Ireland',
                'Colombia',
                'outer space',
                'the future',
                'the past',
                'the Wild West',
                'Ohio',
                'China',
                'North Korea',
                'Hawaii',
                'Atlantis',
                'Ancient Rome',
                'Ancient Greece',
                'Mount Olympus',
                'New York',
                'Nazi era Germany',
                'Middle Earth',
                'Philadelphia',
                'a galaxy far, far away',
                'a tropical island in the Pacific',
                'the bottom of the ocean',
                'West Virginia',
                'heaven',
                'hell'];
            
            let conditionArray = [
                'with restless leg syndrome',
                'who speaks only in riddles',
                'with a photographic memory',
                'who, until very recently, resided in a lamp',
                'who lives in a coalmine',
                'who won the lottery',
                'who wants a baby',
                'who cannot stand to be alone',
                'with social anxiety',
                'who shies away from the spotlight',
                'who is accused of murder',
                'who swears they were immaculately conceived',
                'with a potty mouth'
            ];
            
            let interactionArray = [
                'rooms with',
                'marries',
                'divorces',
                'kidnaps',
                'escapes from',
                'randomly stumbles across',
                'opens a spaghetti restaurant with',
                'is held captive in a virtual world with',
                'befriends',
                'betrays',
                'hides from',
                'competes for a job against',
                'works alongside',
                'teams up with',
                'is locked in a room with',
                'hatches a plot to rob a bank with',
                'runs an elaborate scam on',
                'finds an unlikely companion in',
                'begins to obsessively stalk'
            ];
            
            let extension = '';
            switch(Math.floor(Math.random() * 4)) {
                case 0:
                extension = '';
                break;
                case 1:
                extension = ' who is ' + personArray[Math.floor(Math.random() * personArray.length)];
                break;
                case 2:
                extension = ' from ' + placeArray[Math.floor(Math.random() * placeArray.length)];
                break;
                case 3:
                extension = ' ' + conditionArray[Math.floor(Math.random() * conditionArray.length)]
                break;
                default:
                extension = '';
                break;
            }
            
            let extensionTwo = '';
            switch(Math.floor(Math.random() * 4)) {
                case 0:
                extensionTwo = '';
                break;
                case 1:
                extensionTwo = ' who is ' + personArray[Math.floor(Math.random() * personArray.length)];
                break;
                case 2:
                extensionTwo = ' from ' + placeArray[Math.floor(Math.random() * placeArray.length)];
                break;
                case 3:
                extensionTwo = ' ' + conditionArray[Math.floor(Math.random() * conditionArray.length)]
                break;
                default:
                extensionTwo = '';
                break;
            }
            
            let personOne = personArray[Math.floor(Math.random() * personArray.length)];
            let personTwo = personArray[Math.floor(Math.random() * personArray.length)];
            let interaction = interactionArray[Math.floor(Math.random() * interactionArray.length)];
            
            document.getElementById('person').textContent = personOne;  
            document.getElementById('extension').textContent = extension;
            document.getElementById('interaction').textContent = interaction;
            document.getElementById('person-2').textContent = personTwo;
            document.getElementById('extension-2').textContent = extensionTwo; 
        };
        
        splitPhrases.forEach(splitPhrase => {
        // Reset if needed
        if(splitPhrase.anim) {
        splitPhrase.anim.progress(1).kill();
        splitPhrase.split.revert();
        }

        splitPhrase.split = new SplitText(splitPhrase, { 
        type: "lines,words,chars",
        linesClass: "split-line"
        });

        // Set up the anim
        splitPhrase.anim = gsap.from(splitPhrase.split.chars, {
        duration: 0.4, 
        ease: "circ.out", 
        y: 30, 
        stagger: 0.02,
        opacity:0,
        });

        generateText();
    });
    }
    setupSplits();
    $('#click').click(setupSplits);
});