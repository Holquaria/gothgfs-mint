import mergeImages from "merge-images-v2";
import{order} from './order';

const capitalize = (s = '') => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

var swapArrayElements = function (arr , indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

const capitalizeWords = (w = '') =>
  w
    .split(" ")
    .map((w) => capitalize(w))
    .join(" ");
    
const HAIR_BEHIND = [
    "Black Beehive",
    "Black Bun",
    "Black Fauxhawk",
    "Black Glam",
    "Black High Pigtails",
    "Black Mullet",
    "Black Pigtails 2",
    "Black Pixie",
    "Black Pompadour",
    "Black Pony",
    "Black Scene Queen",
    "Black Shaved + Spiky",
    "Black Shaved Pigtails",
    "Black Short Waves",
    "Black Spikes",
    "Black Tucked",
    "Blonde + Black Split Fringe",
    "Blonde Crown Horns",
    "Blonde Glam",
    "Blonde Mullet",
    "Blonde Pompadour",
    "Blonde Pony",
    "Blonde Streak Pixie",
    "Blonde Tucked",
    "Blue Pony",
    "Brown Braids",
    "Brown Party Pony",
    "Brown Pigtails",
    "Curly Bob",
    "Deathlock",
    "Green Braids",
    "Green Glam",
    "Green Mohican",
    "Green Mullet",
    "Green Pigtails",
    "Jane",
    "Lilac Fauxhawk",
    "Lilac Glam",
    "Misty",
    "Moon",
    "Olive Fauxhawk",
    "Orange Mullet",
    "Pink Pixie",
    "Pink Pony",
    "Pointed Fringe",
    "Red + Black Segments",
    "Red Braids",
    "Red Fauxhawk",
  ];  

export const generateGoth = async (traits) => {
  traits = traits.filter(t => t.value !== 'None').concat([
    {trait_type: 'Base', value: 'Base'},
    {trait_type: 'Eyes Base', value: 'Regular'},
  ]);
  const b = { attributes: traits.sort((a, b) => order.indexOf(a.trait_type) - order.indexOf(b.trait_type)) };
  const hair = b.attributes.findIndex((a) => a.trait_type === "Hair");
  if (hair > -1) {
    
    const isBehind = HAIR_BEHIND.indexOf(b.attributes[hair].value) > -1;
    const earrings = [
      "Earring Upper",
      "Earring Lower",
      "Orbital Piercing",
      "Industrial Piercing",
      "Helix Piercing",
      "Tragus Piercing",
      "Snug Piercing",
    ];
    const indicesOfEarrrings = b.attributes
      .map((t, index) => {
        return earrings.indexOf(t.trait_type) > -1
          ? { index: index, ...t }
          : null;
      })
      .filter((r) => r !== null);

    const highest = indicesOfEarrrings[indicesOfEarrrings.length - 1];

    if (isBehind && highest) {
      swapArrayElements(b.attributes, highest.index, hair);
    }
  } 

  const images = b.attributes
    .map((t) => {
      if (!t.trait_type) {
        return undefined;
      }
      return `generator/${t.trait_type}/${capitalizeWords(
        b.attributes.filter(t => t.value !== 'None').find(
          (c) => capitalizeWords(c.trait_type) === capitalizeWords(t.trait_type)
        )?.value
      )}.png`;
    })
    .filter((t) => !!t)
    .reverse();

    console.log(images)

  return await mergeImages(images);
};
