// src/DemoBook.js
import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Page component to handle text and images
const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-media">
            {/* Render an image if provided */}
            {props.image && <img src={props.image} alt={`Page ${props.number}`} />}
  
            {/* Render a video if provided */}
            {props.video && (
              <iframe
                width="100%"
                height="315"
                src={props.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
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
        <Page number={1} image="https://i.imgur.com/YfoUrHp.png">
        <p>
        In the cool shadows of the Lake Tahoe forest, Beeble and Bot tumble among the pines. 
        </p>
        <p>
        As the snow thaws, the cubs grow more adventurous, and their mother takes them farther to find food. 
        </p>

        <p>
        They see strange, upright walkers covered in multiple colors moving through the woods, leaving behind objects that catch the sunlight.
        </p>
        
        </Page>

        <Page number={2} image="https://i.imgur.com/cPObhWL.jpeg">
        <p>
        “Keep away from them. They are humans,” their mother warns, nudging Beeble with her nose. “They leave things that don’t belong in our forest.”
        </p>

        <p>
        But Beeble and Bot don’t understand.
        </p>

        <p>
        As spring melts into summer, they spot odd piles left behind—soft, thin clouds that drift near the ground, tearing easily like brittle leaves; shiny things that clatter and roll when touched, spilling dark liquid that smells sharp and sour; and crumpled things that give off a sweet, artificial scent that makes Beeble’s nose twitch.
        </p>

        <p>
        Their mother always pulls them back, her eyes weary and sad.
        </p>
        </Page>
        <Page number={3} image="https://i.imgur.com/9ROXqek.jpeg">
        <p>
        One morning, Beeble wakes to find her stomach grumbling and her mother gone.
        </p>
        <p>
        Beeble sniffs the air, catching her mother’s scent mingled with something else—something sweet, salty, and metallic.
        </p>
        <p>
        She follows it to the edge of the forest, where humans live near large, dark containers.
        </p>
        </Page>

        <Page number={4} image='https://i.imgur.com/Ano9M7J.png'>
        <p>
        Her mother is there, hunched over one of the containers, pulling out crinkly objects that shine in the sun.
        </p>

        <p>
        Beeble watches from the bushes as her mother rips into a torn bundle, licking at the insides with a hunger that makes Beeble’s fur stand on end.
        </p>

        <p>
        Her mother’s eyes are unfocused, her movements frantic, clawing at the strange things like she can’t get enough.
        </p>

        <p>
        “Mama?” Beeble calls, but her mother doesn’t turn. She is lost in whatever she has found, nose buried deep in the mess, oblivious to the world around her.
        </p>
        </Page>

        <Page number={5} image='https://i.imgur.com/WwjK411.jpeg'>
        <p>
        Beeble turns and runs, her heart pounding despite the emptiness in her belly.
        </p>
        <p>
        She finds Bot back at the den, chewing on a stick and going through every branch looking for any berries still clinging deep in the interior, blissfully unaware of what their mother is doing.
        </p>
        <p>
        Beeble wants to tell him, but the words stick in her throat like thorns.
        </p>
        </Page>

        <Page number={6} image="https://i.imgur.com/RJSfHxh.png">
        <p>
        Their mother increasingly spends more time near the dark containers, returning with strange smells clinging to her fur—smells that do not belong to the forest. 
        </p>
        <p>
        She grows thinner, her steps unsteady, and sometimes she doesn’t come home at all.
        </p>
        <p>
        Beeble watches from a distance as humans toss strange objects into the containers without a thought—soft, crumpled things that flap in the breeze, bright, shiny bundles that tear open to reveal sticky, rotting insides.
        </p>
        </Page>

        <Page number={7} image="https://i.imgur.com/orwm295.png">
        <p>
        One hot afternoon, Beeble and Bot wait at the den, but their mother never returns. Beeble tracks her scent to the edge of a clearing near a human house, where people gather in clusters. Beeble hides behind a tree and sees her mother lying still among the shiny things, surrounded by humans holding long, hard sticks that glint in the sunlight.
        </p>

        <p>
        <i>“She’s down,”</i> one human says, looking at a device in his hand. <i>“Female California Brown Bear, possibly a mother.”</i>
        </p>

        <p>
        Beeble’s heart pounds as the humans speak loudly, pointing and gesturing at her mother like she’s some object to be moved. There is no more tearing, no more licking at the strange bundles. Beeble doesn’t understand why her mother won’t get up, but she knows, deep down, that she is gone.
        </p>

        </Page>

        <Page number={8} image="https://i.imgur.com/gjDZbDt.png">
        <p>
        After that, Beeble and Bot are alone. They try to forage, but their mother never had the chance to teach them everything. With their clumsy paw-steps, they search for berries and insects, but their stomachs remain empty. As hunger gnaws at Beeble’s insides, her thoughts turn to the shiny things scattered along the trails like bright, dangerous berries. 
        </p>

        <p>
        Desperation drives them to a large, dark container near a row of human houses, where the strange smells are strongest.
        </p>

        <p>
        Bot’s nose twitches, and before Beeble can stop him, he dives into the pile, tearing into the crinkly objects with the same hunger their mother had shown. A bright, sticky liquid coats his paws as he pulls apart a shiny bundle, licking frantically at the insides.
        </p>

        </Page>

        <Page number={9} image="https://i.imgur.com/4TG9LK3.png">
        <p>
        “Bot, no!” Beeble cries, but Bot doesn’t listen. His eyes are wide, lost in the sweet, salty flavors, just like their mother had been.
        </p>

        <p>
        Beeble yanks Bot away, her heart aching. Bot snarls and snaps at Beeble, fur bristling.
        </p>

        <p>
        <b>“I’m hungry. Let me eat.”</b>
        </p>

        <p>
        Beeble wants to argue, but she can’t deny the sharp hunger gnawing at her own belly. She stares at the mess the humans have left behind, the easy and greasy food… But the image of her mother surrounded by humans drives her away.
        </p>
        </Page>

        <Page number={10} image="https://i.imgur.com/pVWbaDO.png">
        <p>
        Beeble tries to stay away from the dark containers, but Bot returns night after night, pawing through the piles of discarded things. His fur grows dull, his belly round but empty of anything real. 
        </p>
        <p>
        Beeble watches as Bot tears into the shiny bundles, licking at the insides with the same desperate hunger their mother had shown. 
        </p>
        </Page>

        <Page number={11} video="https://www.youtube.com/embed/fKl2Aj4CCqE?si=PPSHTFZuzmxkcNzO">
        <p>
        The more he eats, the more he craves, and each night he ventures closer to the human houses, no longer afraid.
        </p>
        </Page>
        <Page number={12} video="https://www.youtube.com/embed/tW3hZPDhZAY?si=9GjDBZFsqaNPX9sA">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/ThB-7EIPPT4?si=Dg74nx2xwt1y57hA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Page>
        <Page number={13} image="https://i.imgur.com/GnFQq0E.jpeg">
        The next time Beeble sees Bot, he has a colorful tag hanging from his right ear.
        </Page>

        <Page number={14} image="https://i.imgur.com/dn10teF.png">
        And the time after that she sees a matching one on the other ear.
        </Page>

        <Page
          number={15}
          video="https://www.youtube.com/embed/8x0u1tE7OyQ?si=O4PjvzHawy34Msxi"
        >
          Beeble hears from the birds that Bot's hunger had lead him to seek food at a human at the beach.
        </Page>

        <Page number={16} image="https://i.imgur.com/5YirBQm.png">
        After that, she didn’t see or hear about Bot again, even though she returned to the beach to look for him.
        </Page>
        <Page number={17} image="https://i.imgur.com/9TMUUCH.jpeg">
        <p>Years passed, and Beeble came to have two cubs of her own.</p>
        <p>Still searching for Bot, she would take them to the beach.</p>
        </Page>
        <Page number={18} image="https://i.imgur.com/LynN6eO.jpeg">
        <p>But she never found him, and although Beeble tried to keep her cubs away from the trash that had taken her Mother and her Brother, she couldn't avoid the mountains of trash that now covered everywhere the eye could see.</p>
        </Page>
        <Page number={19} image="https://i.imgur.com/7KggGc0.jpeg">
        <p>She would tell her cubs about Bot, and the dangers of the trash, and the humans that left it behind.</p>
        <p>But she would also tell them about the beauty of the forest, and the importance of protecting it.</p>
        <p>So they retreated to Desolation Wilderness where traces of humans were minimal and the spirit of the Wild was still strong.</p>
        <p>The End</p>
        </Page>
        <Page number={20} image="https://sierranevadaalliance.org/wp-content/uploads/2022/11/General-Social-and-Event-Post-Template-1.png">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LQmW47oWoIo?si=7poHPl79oBwv7d2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p style={{fontSize: '.6rem'}}>All photos are from social media and/or news sources of trash and bears in the Lake Tahoe area.</p>
        </Page>
        <PageCover></PageCover>
      </HTMLFlipBook>

    </div>
  );
}

export default DemoBook;
