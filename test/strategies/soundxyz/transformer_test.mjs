//@format
import test from "ava";
import Ajv from "ajv";
import addFormats from "ajv-formats";

import { track } from "@music-os/schema";

import { transform } from "../../../src/strategies/soundxyz/transformer.mjs";

const ajv = new Ajv();
addFormats(ajv);

const payload = {
  name: "Fever Dream #19",
  artist_name: "Dot",
  description:
    "My name is Kate Ellwanger, and I make music as Dot. I'm originally from Olympia, WA, and now spend my time between Los Angeles and Ketchum, Idaho. \n\n\"Fever Dream\" is the first single from my new EP, and each song on the project represents a different type of battle I've fought with grief and depression over the past year. While the instrumental of this song has a brighter and easygoing feel, the lyrics hint at some darkness underneath the glossy exterior. \n\nThe song paints a surrealistic picture of a person's desire to wake up from the dream states so many of us live in, but going about it in all the wrong ways -- through self-destructive behavior and romanticized substance abuse. It follows the main character on a road trip from LA to Las Vegas, with the lyrics becoming more and more nonsensical and drifting further from reality as the music progresses. \n\nI wrote this song as a reminder to myself that seeking altered states through those shortcuts will never lead you to true fulfillment or wakefulness -- they just keep you in a feedback loop of dishonest self-reflection, and searching for more highs that ultimately take you nowhere. \n\nI think this message is especially important during a time when so many of us are trying to find meaning in our lives, but what we see spread across the news and on our timelines devalues human life on so many levels. It's easier to take on a carefree \"yolo\" mentality in this environment than to truly show love to ourselves and the people around us, because the cognitive dissonance becomes so overwhelming amidst current events.",
  external_url: "https://www.sound.xyz/dot/fever-dream",
  image:
    "https://soundxyz.mypinata.cloud/ipfs/QmSJ3waSjiqLLgrW3n6dXUJhmRaouUYsBdf1kGs1duC9St",
  audio_url:
    "https://soundxyz.mypinata.cloud/ipfs/QmfXoeHScHC68PVCdtTj8NhxGeSSmhVRNqQSt6kVv4TxiG",
  animation_url:
    "https://soundxyz.mypinata.cloud/ipfs/QmfXoeHScHC68PVCdtTj8NhxGeSSmhVRNqQSt6kVv4TxiG",
  comment_wall_url:
    "https://soundxyz.mypinata.cloud/ipfs/QmZ6VjoAWciv3soxfc3u2aqivVYLiY3bh4DmZMjYXxXF8F",
  attributes: [
    { trait_type: "Fever Dream", value: "Song Edition" },
    { value: "Genesis" },
  ],
};
const sPayload = JSON.stringify(payload);

test("soundxyz transformer", (t) => {
  const result = transform(sPayload);
  const validate = ajv.compile(track);
  const valid = validate(result);
  t.true(valid);
});
