# Turn your markdown into a PDF file!

This is a nodejs app (super simple) with a whole bunch of code brought together from different sources on the internet.

I made it so we could automate for my business Now Native (nownative.com), which produced advertising widgets.

Lots of sites, not enough time to manually make them instructions.

Enjoy!

# Usage

    npm install
    TARGETSITE=freemans.website node main.js

TARGETSITE is an environment variable. You can have as many of these as you want, or none. Take a look at `test.md` and hopefully you'll understand how they work.

Basic command:

    node main.js

spits out a PDF file with the same name as the md file. `test.md` -> `test.pdf`!
