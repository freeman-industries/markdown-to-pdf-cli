# Turn your markdown into a PDF file!

This is a nodejs app (super simple) with a whole bunch of code brought together from different sources on the internet.

Nabil made it so he could automate documents for his last business (💀), and we use it extensively in-house now.

Lots of contracts, not enough time. 😎

Enjoy!

# Usage

    npm install
    TARGETSITE=freemans.website node main.js

TARGETSITE is an environment variable. You can have as many of these as you want, or none. Take a look at `test.md` and hopefully you'll understand how they work.

Basic command:

    node main.js

spits out a PDF file with the same name as the md file. `test.md` -> `test.pdf`!
