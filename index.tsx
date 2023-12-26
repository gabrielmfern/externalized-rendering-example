import React from "react";
import { join } from "path";
import { existsSync } from "fs";

import { renderAsync } from "@react-email/components";

const emailFilename = process.argv[2];
if (typeof emailFilename === "undefined") {
  throw new Error(`The first argument must be the email file to render!`);
}

const emailPath = `./emails/${emailFilename}.tsx`;

if (!existsSync(emailPath)) {
  throw new Error(`No email could be found at the path "${emailPath}"`);
}

const EmailComponent: React.FC<Record<string, any>> = (await import(emailPath))
  .default;

if (typeof EmailComponent !== "function") {
  throw new Error(
    `The email at ${emailPath} does not seem to export as defualt a React component!`,
  );
}

let props: Record<string, any>;

try {
  const expectedStringifiedProps = process.argv.slice(3).join(" ") || '{}'; // defaults to an empty object

  props = JSON.parse(expectedStringifiedProps);
} catch (exception) {
  throw new Error(
    `What comes after the email's file name should be the JSON for its props and it seems to be invalid!\n Exception: ${exception}`,
  );
}

console.log(await renderAsync(<EmailComponent {...props} />));
