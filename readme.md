# Externalized react email rendering POC

This is a proof of concept of how you could render React Email templates without any templating langauge
from somewhere that is not JavaScript. This will require NodeJS though, there is no other way to render
the templates without running JavaScript.

## How does this work?

This contains a file `./index.tsx` at the root which expects itself to be ran and be called,
similar to how you would do to a CLI, with two things coming in as CLI parameters. The first one is
the name of the email template inside of `emails/*`. The second one is a JSON object that will
be parsed and used to render the email template.

After having the dependencies installed (i.e., `pnpm install`), this project can be tested by
running `pnpm render notion-magic-link {}`. Once this is ran, it will output the matching email
template HTML.

## What do I need to use this?

The only thing necessary is going to have Node, and the dependencies installed on the project here to run.
You then only need to run the `./index.tsx` file, you can run it compiled into `js` (which you can do with something like `tsup`)
or you can directly run the file (which you can do with something like `tsx`).

You can see an example of running this inside of [./run.sh](./run.sh).

As long as you have NodeJS and a way to run a command inside of your environment, you can then render the
email templates without that many hoola hoops for when writing the email templates.
