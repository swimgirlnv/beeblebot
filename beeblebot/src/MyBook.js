// src/DemoBook.js
import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Page component to handle text and images
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image">
          {props.image && <img src={props.image} alt={`Page ${props.number}`} />}
        </div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">Page {props.number}</div>
      </div>
    </div>
  );
});

// PageCover component for the book cover
const PageCover = React.forwardRef((props, ref) => {
    return (
      <div
        className="page page-cover"
        ref={ref}
        data-density="hard"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Optional: Add overlay text or any additional content */}
        {props.children && (
          <div className="page-cover-content">
            <h2>{props.children}</h2>
          </div>
        )}
      </div>
    );
  });

// Main DemoBook component
function DemoBook() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Set the total number of pages when the component mounts
    if (bookRef.current && bookRef.current.pageFlip()) {
      setTotalPages(bookRef.current.pageFlip().getPageCount());
    }
  }, []);

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };


  return (
    <div className="book-container">
      <HTMLFlipBook
        width={600} /* Adjusted width to be smaller */
        height={800} /* Adjusted height to be smaller */
        size="stretch"
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={800}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={handleFlip}
        ref={bookRef}
        className="demo-book"
      >
        <PageCover></PageCover>
        <Page number={1} image="https://i.imgur.com/cPObhWL.jpeg">
        In the cool shadows of the Lake Tahoe forest, Beeble and Bot tumble among the pines. As the snow thaws, the cubs grow more adventurous, and their mother takes them farther to find food. They see strange, upright walkers covered in multiple colors moving through the woods, leaving behind objects that catch the sunlight.

“Keep away from them. They are humans,” their mother warns, nudging Beeble with her nose. “They leave things that don’t belong in our forest.”

But Beeble and Bot don’t understand. As spring melts into summer, they spot odd piles left behind—soft, thin clouds that drift near the ground, tearing easily like brittle leaves; shiny things that clatter and roll when touched, spilling dark liquid that smells sharp and sour; and crumpled things that give off a sweet, artificial scent that makes Beeble’s nose twitch. Their mother always pulls them back, her eyes weary and sad.

        </Page>
        <Page number={2} image="https://i.imgur.com/Ano9M7J.png">
        One morning, Beeble wakes to find her stomach grumbling and her mother gone. Beeble sniffs the air, catching her mother’s scent mingled with something else—something sweet, salty, and metallic. She follows it to the edge of the forest, where humans live near large, dark containers.

Her mother is there, hunched over one of the containers, pulling out crinkly objects that shine in the sun. Beeble watches from the bushes as her mother rips into a torn bundle, licking at the insides with a hunger that makes Beeble’s fur stand on end. Her mother’s eyes are unfocused, her movements frantic, clawing at the strange things like she can’t get enough.

“Mama?” Beeble calls, but her mother doesn’t turn. She is lost in whatever she has found, nose buried deep in the mess, oblivious to the world around her.

Beeble turns and runs, her heart pounding despite the emptiness in her belly. She finds Bot back at the den, chewing on a stick and going through every branch looking for any berries still clinging deep in the interior, blissfully unaware of what their mother is doing. Beeble wants to tell him, but the words stick in her throat like thorns.
        </Page>

        <Page number={3} image="https://i.imgur.com/RJSfHxh.png">
        Their mother increasingly spends more time near the dark containers, returning with strange smells clinging to her fur—smells that do not belong to the forest. She grows thinner, her steps unsteady, and sometimes she doesn’t come home at all. Beeble watches from a distance as humans toss strange objects into the containers without a thought—soft, crumpled things that flap in the breeze, bright, shiny bundles that tear open to reveal sticky, rotting insides.
        </Page>

        <Page number={4} image="https://i.imgur.com/orwm295.png">
        One hot afternoon, Beeble and Bot wait at the den, but their mother never returns. Beeble tracks her scent to the edge of a clearing near a human house, where people gather in clusters. Beeble hides behind a tree and sees her mother lying still among the shiny things, surrounded by humans holding long, hard sticks that glint in the sunlight.

“She’s down,” one human says, looking at a device in his hand. “Female California Brown Bear, possibly a mother.”

Beeble’s heart pounds as the humans speak loudly, pointing and gesturing at her mother like she’s some object to be moved. There is no more tearing, no more licking at the strange bundles. Beeble doesn’t understand why her mother won’t get up, but she knows, deep down, that she is gone.
        </Page>

        <Page number={5} image="https://i.imgur.com/gjDZbDt.png">
        After that, Beeble and Bot are alone. They try to forage, but their mother never had the chance to teach them everything. With their clumsy paw-steps, they search for berries and insects, but their stomachs remain empty. As hunger gnaws at Beeble’s insides, her thoughts turn to the shiny things scattered along the trails like bright, dangerous berries. Desperation drives them to a large, dark container near a row of human houses, where the strange smells are strongest.

Bot’s nose twitches, and before Beeble can stop him, he dives into the pile, tearing into the crinkly objects with the same hunger their mother had shown. A bright, sticky liquid coats his paws as he pulls apart a shiny bundle, licking frantically at the insides.
        </Page>

        <Page number={6} image="https://i.imgur.com/4TG9LK3.png">
        “Bot, no!” Beeble cries, but Bot doesn’t listen. His eyes are wide, lost in the sweet, salty flavors, just like their mother had been.

Beeble yanks Bot away, her heart aching. Bot snarls and snaps at Beeble, fur bristling. “I’m hungry. Let me eat.”

Beeble wants to argue, but she can’t deny the sharp hunger gnawing at her own belly. She stares at the mess the humans have left behind, the easy and greasy food… But the image of her mother surrounded by humans drives her away.

        </Page>

        <Page number={7} image="https://i.imgur.com/pVWbaDO.png">
        Beeble tries to stay away from the dark containers, but Bot returns night after night, pawing through the piles of discarded things. His fur grows dull, his belly round but empty of anything real. Beeble watches as Bot tears into the shiny bundles, licking at the insides with the same desperate hunger their mother had shown. The more he eats, the more he craves, and each night he ventures closer to the human houses, no longer afraid.
        </Page>

        <Page number={8} image="https://i.imgur.com/GnFQq0E.jpeg">
        The next time Beeble sees Bot, he has a colorful tag hanging from his right ear.
        </Page>

        <Page number={9} image="https://i.imgur.com/dn10teF.png">
        And the time after that she sees a matching one on the other ear.
        </Page>

        <Page number={10} image="https://i.imgur.com/5YirBQm.png">
        After that, she didn’t see Bot again.
        </Page>
        <PageCover></PageCover>
      </HTMLFlipBook>

    </div>
  );
}

export default DemoBook;
