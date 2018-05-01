const speedy = `
__
\\ ______/ V\`-,
}        /~~
/_)^ --,r'
|b      |b
`;

const nymeria = `
 /^ ^\\
/ 0 0 \\
V\\ Y /V
 / - \\
 |    \\
 || (__V\\
`;

const floof = `
_   _
/(. .)\    )
 (*)____/|
 /       |
/   |--\ |
(_)(_)  (_)
`;

const ghost = `
  |\\|\\
 ..   \\       .
o--   \\\\    / @)
 v__///\\\\\\\\__/ @
  {           }
   {  } \\\\\\{  }
   <_|      <_|
 `;

const cake = `
   /                (/^\\)     /
    \\   ( \\         \\ /     ( \\    /^\\
   / )   \\ |        _|_      \\ |   |/^\\|
   | /    _|_        | |      _|_    \\ /
   _|_    | |        | |      | |    _|_
   | |    | |        | |      | |    | |
   | |    | |    ****| |******| |    | |
   | |****| |****    | |      | |****| |
  *| |    | |                 | |    | |*****
*  | |   H  A  P  P  Y               | |      *
*                                               *
| *            B  I  R  T  H  D  A  Y  !      * |
|  *****                                 *****  |
|@      **********             **********      @|
| @   @           *************           @   @ |
|  @@@ @    @                       @    @ @@@  |
|       @@@@ @      @       @      @ @@@@       |
*            @@@@@@ @     @ @@@@@@            *
*                   @@@@@                   *
*****                                 *****
**********             **********
  *************
`;

function colorLog(message, color = "black") {
  console.log("%c" + message, "color:" + color);
}

const RED = "#d32f2f";
const INDIGO = "#283593 ";
const GREEN = "#4caf50";
const ORANGE = "#f4511e";
const STEEL = "#78909c";

function lineBreak() {
  console.log("\n\n\n\n\n\n\n");
}

function tellStory() {
  // intros
  colorLog("Meet our heroes: ", INDIGO);
  colorLog("The intrepid Ghost - ", GREEN);
  colorLog(ghost, GREEN);
  colorLog("The amazing Floof - ", ORANGE);
  colorLog(floof, ORANGE);
  colorLog("The curious Nymeria - ", STEEL);
  colorLog(nymeria, STEEL);
  colorLog("And as always, Speedy, the scrappy leader of the bunch", RED);
  colorLog(speedy, RED);

  lineBreak();
  // Episode title
  colorLog("Episode 17: Floof's birthday", INDIGO);

  lineBreak();
  // Story
  colorLog("Speedy approached Ghost and Nymeria.", INDIGO);
  colorLog(speedy, RED);
  colorLog(
    `"Woof! As you both know, our amazing buddy Floof's birthday is coming up! What do you think we ought to do?"`,
    RED
  );
  colorLog(nymeria, STEEL);
  colorLog(
    `Nymeria eagerly answered, "Bark! Maybe we could bake a cake and have a picnic!"`,
    STEEL
  );
  colorLog(ghost, GREEN);
  colorLog(
    `"What a great idea, Ny! We'll bake Floof's favorite - Kibble-berry cake - and have a picnic by the lake at the Old Dog Park!", Ghost chimed in.`,
    GREEN
  );
  colorLog(speedy, RED);
  colorLog(
    "Let's get to work! I'll get the ingredients from the cupboard, Ghost can heat the oven, and Nymeria, you keep a lookout for Floof and make sure he doesn't find out about our surprise",
    RED
  );
  colorLog(
    "The three quickly set to work planning the birthday surprise.",
    INDIGO
  );

  lineBreak();
  colorLog("Some time later...");
  lineBreak();

  colorLog(floof, ORANGE);
  colorLog(
    `"Whatcha doing, friends?", Floof said, approaching the diligent trio.`,
    ORANGE
  );
  colorLog(nymeria, STEEL);
  colorLog(`"Just hanging out!" Nymeria responded. "Wanna play fetch?"`, STEEL);
  colorLog(floof, ORANGE);
  colorLog(
    `"It looks like you are working on something. Why can't I join in?"`,
    ORANGE
  );
  colorLog(speedy, RED);
  colorLog(
    `Quick-thinking Speedy responded, "Of course you can help! We're planning a nice dinner to celebrate our friendship."`,
    RED
  );
  colorLog(
    `"But, we've run out of biscuits! Can you and Nymeria go to the grocery and pick up some more?"`,
    RED
  );
  colorLog(floof, ORANGE);
  colorLog(`"Sure thing, Speedy! I love to help out however I can."`, ORANGE);
  colorLog("Nymeria and Floof went off to the store", INDIGO);
  colorLog(ghost, GREEN);
  colorLog(`"Nice thinking, Speedy! I thought we were made for sure!"`, GREEN);

  lineBreak();
  colorLog("Some time later...");
  lineBreak();

  colorLog("SURPRISE!", RED);
  colorLog("SURPRISE!", GREEN);
  colorLog("SURPRISE!", STEEL);

  colorLog("\n Floof was shocked, then laughed with delight!", INDIGO);

  colorLog(`"Happy Birthday, Floofy-beans!"`, GREEN);
  colorLog(`"Your special day!"`, STEEL);
  colorLog(`"We love you, Floof!"`, RED);
  colorLog(
    "\nHis friends surrounding him, Floof was overjoyed by his birthday surprise.",
    INDIGO
  );

  colorLog(`"Oh, shucks, friends, I couldn't have asked for more!"`, ORANGE);

  lineBreak();
  colorLog("THE END");

  colorLog(cake, RED);
}

tellStory();

// function delay(seconds) {
//   let now = new Date();
//   let future = new Date(new Date().setSeconds(now.getSeconds() + seconds));
//   while (now < future) {
//     now = new Date();
//   }
// }
//
// function tellStoryWithDelay() {}
//
