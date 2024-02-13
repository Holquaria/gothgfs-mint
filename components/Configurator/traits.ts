const traits = {
    "Head Accessory": {
      "Bat ears": 0.0043084877208099965,
      "Black bunny ears": 0.008616975441619993,
      "Black heart clip": 0.0043084877208099965,
      "Cat ear headband": 0.0043084877208099965,
      "Cat ears": 0.0021542438604049982,
      "Gold tiara": 0.000043084877208099964,
      "Hair clips": 0.008616975441619993,
      "Halo": 0.00043084877208099967,
      "Heart headset": 0.0043084877208099965,
      "Hockey mask": 0.00043084877208099967,
      "Horns": 0.0043084877208099965,
      "Lilac bow": 0.008616975441619993,
      "Lilac headphones": 0.008616975441619993,
      "Lilac headset": 0.008616975441619993,
      "Pink bunny ears": 0.008616975441619993,
      "Pink headset": 0.008616975441619993,
      "Red heart clip": 0.0043084877208099965,
      "Skull + ears": 0.0021542438604049982,
      "White bunny ears": 0.008616975441619993
    },
    "Glasses": {
      "Two tone glasses": 0.005434782608695653,
      "Thick rim black": 0.010869565217391306,
      "Secretary glasses": 0.010869565217391306,
      "Scouter": 0.0010869565217391307,
      "Pink sunglasses": 0.005434782608695653,
      "Nerd glasses": 0.010869565217391306,
      "Heart sunglasses": 0.010869565217391306,
      "Gold rim glasses": 0.0010869565217391307,
      "Giant round glasses": 0.010869565217391306,
      "Cool guy": 0.010869565217391306,
      "Cat eye sunglasses": 0.010869565217391306,
      "Cat eye black": 0.010869565217391306
    },
    "Mouth Accessory": {
      "X mask": 0.01388888888888889,
      "Pink vape": 0.01388888888888889,
      "Pentagram mask": 0.01388888888888889,
      "Lilac vape": 0.01388888888888889,
      "Cross mask": 0.01388888888888889,
      "Black vape": 0.01388888888888889,
      "Tongue out": 0.01388888888888889,
      "Demon teeth": 0.0027777777777777783
    },
    "Hair": {
      "Witch hat": 0.0005215939912372219,
      "Pink beanie": 0.010431879824744436,
      "Pink cat cap": 0.010431879824744436,
      "Pink baseball cap": 0.010431879824744436,
      "Cat mask": 0.010431879824744436,
      "Black beanie": 0.010431879824744436,
      "Black baseball cap": 0.010431879824744436,
      "Winona": 0.002607969956186109,
      "Wavy pink": 0.010431879824744436,
      "Space buns undercut": 0.010431879824744436,
      "Short peach": 0.010431879824744436,
      "Short curly": 0.010431879824744436,
      "Shego": 0.005215939912372218,
      "Shaved": 0.010431879824744436,
      "Red streaks": 0.010431879824744436,
      "Red half shaved": 0.010431879824744436,
      "Red fauxhawk": 0.010431879824744436,
      "Red braids": 0.010431879824744436,
      "Purple pointed fringe": 0.010431879824744436,
      "Purple half shaved": 0.010431879824744436,
      "Pointed fringe": 0.010431879824744436,
      "Pink short": 0.010431879824744436,
      "Pink short fringe long": 0.010431879824744436,
      "Pink pony": 0.010431879824744436,
      "Pink pixie": 0.010431879824744436,
      "Pink fringe": 0.010431879824744436,
      "Red + Black Split Fringe": 0.010431879824744436,
      "Blonde + Black Split Fringe": 0.010431879824744436,
      "Pink curly": 0.010431879824744436,
      "Peach fringe": 0.010431879824744436,
      "Peach anime": 0.010431879824744436,
      "Orange mullet": 0.010431879824744436,
      "Nun habit": 0.005215939912372218,
      "Multicolour": 0.002607969956186109,
      "Moon": 0.0005215939912372219,
      "Misty": 0.0005215939912372219,
      "Lydia": 0.0005215939912372219,
      "Long purple": 0.010431879824744436,
      "Long black": 0.010431879824744436,
      "Long black wavy": 0.010431879824744436,
      "Lilac half shaved": 0.010431879824744436,
      "Lilac cat ears": 0.010431879824744436,
      "Leia": 0.005215939912372218,
      "Jane": 0.002607969956186109,
      "Harley Quinn": 0.0005215939912372219,
      "Grey half shaved": 0.010431879824744436,
      "Green Ramona": 0.010431879824744436,
      "Green pigtails": 0.010431879824744436,
      "Green mullet": 0.000052159399123722184,
      "Green Mohican": 0.010431879824744436,
      "Green glam": 0.010431879824744436,
      "Green fringe": 0.010431879824744436,
      "Green Chelsea": 0.010431879824744436,
      "Green braids": 0.010431879824744436,
      "Green anime": 0.010431879824744436,
      "Green + black pony": 0.010431879824744436,
      "Ginger short fringe long": 0.010431879824744436,
      "Femme fatale hat": 0.0005215939912372219,
      "Egirl": 0.010431879824744436,
      "Deathlock": 0.010431879824744436,
      "Choppy": 0.010431879824744436,
      "Bulma": 0.002607969956186109,
      "Brown pigtails": 0.010431879824744436,
      "Brown party pony": 0.010431879824744436,
      "Brown bun": 0.010431879824744436,
      "Brown braids": 0.010431879824744436,
      "Blue space buns": 0.010431879824744436,
      "Blue Ramona": 0.002607969956186109,
      "Blue punk": 0.010431879824744436,
      "Blue pony": 0.010431879824744436,
      "Blue long": 0.010431879824744436,
      "Blue fringe": 0.010431879824744436,
      "Blue fringe long": 0.010431879824744436,
      "Blonde tucked": 0.010431879824744436,
      "Blonde streaks": 0.010431879824744436,
      "Blonde streak pixie": 0.010431879824744436,
      "Blonde straight": 0.010431879824744436,
      "Blonde side part": 0.010431879824744436,
      "Blonde short fringe long": 0.010431879824744436,
      "Blonde pony": 0.010431879824744436,
      "Blonde pompadour": 0.010431879824744436,
      "Blonde mullet": 0.010431879824744436,
      "Blonde long": 0.010431879824744436,
      "Blonde half shaved": 0.010431879824744436,
      "Blonde glam": 0.005215939912372218,
      "Blonde crown horns": 0.002607969956186109,
      "Black tucked": 0.010431879824744436,
      "Black spikes": 0.010431879824744436,
      "Black short waves": 0.010431879824744436,
      "Black short fringe": 0.010431879824744436,
      "Black short fringe long": 0.010431879824744436,
      "Black shaved pigtails": 0.010431879824744436,
      "Black scene queen": 0.010431879824744436,
      "Black red two tone": 0.010431879824744436,
      "Black punk": 0.010431879824744436,
      "Black pony": 0.010431879824744436,
      "Black pompadour": 0.010431879824744436,
      "Black pixie": 0.010431879824744436,
      "Black pigtails": 0.010431879824744436,
      "Black mullet": 0.010431879824744436,
      "Black Mohawk": 0.010431879824744436,
      "Black messy pony": 0.010431879824744436,
      "Black long": 0.010431879824744436,
      "Black high pigtails": 0.010431879824744436,
      "Black half shaved": 0.010431879824744436,
      "Black glam": 0.010431879824744436,
      "Black fauxhawk": 0.010431879824744436,
      "Black Chelsea": 0.010431879824744436,
      "Black beehive": 0.010431879824744436,
      "Billie": 0.0005215939912372219,
      "Zero Two": 0.000052159399123722184
    },
    "Earring Upper": { "Earring": 0.05, "Stud": 0.05 },
    "Earring Lower": {
      "White plug": 0.1,
      "Tunnel": 0.1,
      "Star plug": 0.1,
      "Pink plug": 0.1,
      "Gold heart plug": 0.001,
      "Earring": 0.1,
      "Stud": 0.1,
      "Black Plug": 0.1
    },
    "Orbital Piercing": { "Orbital": 0.1 },
    "Industrial Piercing": { "Industrial": 0.1 },
    "Helix Piercing": { "Helix": 0.1 },
    "Tragus Piercing": { "Tragus": 1 },
    "Snug Piercing": { "Snug": 0.1 },
    "Neck Accessory": {
      "Yellow Spotty Choker": 0.002773540424351689,
      "XXX Necklace": 0.002773540424351689,
      "X Necklace": 0.002773540424351689,
      "Bloody Vampire teeth necklace": 0.002773540424351689,
      "Tooth necklace": 0.002773540424351689,
      "Thin band": 0.002773540424351689,
      "String bow": 0.002773540424351689,
      "Solana chain": 0.002773540424351689,
      "Skull necklace": 0.002773540424351689,
      "Sailor Moon Choker": 0.002773540424351689,
      "Ruby crystal necklace": 0.002773540424351689,
      "Ruby choker": 0.002773540424351689,
      "Red ribbon": 0.002773540424351689,
      "Red heart choker": 0.002773540424351689,
      "Red collar": 0.002773540424351689,
      "Red candy laces": 0.002773540424351689,
      "Razorblade necklace": 0.002773540424351689,
      "Rainbow necklace": 0.002773540424351689,
      "Pink spotty choker": 0.002773540424351689,
      "Peridot crystal necklace": 0.002773540424351689,
      "Pentagram choker": 0.002773540424351689,
      "Pearl necklace": 0.002773540424351689,
      "Patterned choker": 0.002773540424351689,
      "Padlock": 0.002773540424351689,
      "Moon necklace": 0.002773540424351689,
      "Lace choker": 0.002773540424351689,
      "Heart of the ocean": 0.0002773540424351689,
      "Heart chain studded": 0.002773540424351689,
      "Handcuff choker": 0.002773540424351689,
      "Gold skull necklace": 0.002773540424351689,
      "Gold ring necklace": 0.002773540424351689,
      "Gold leash": 0.002773540424351689,
      "Gold heart locket": 0.002773540424351689,
      "Gold choker": 0.002773540424351689,
      "Gold choker 2": 0.002773540424351689,
      "Gold chain": 0.00002773540424351689,
      "Eyeball necklace": 0.002773540424351689,
      "Dollar chain": 0.002773540424351689,
      "Daddy choker": 0.002773540424351689,
      "Cry baby necklace": 0.002773540424351689,
      "Coffin choker": 0.002773540424351689,
      "Bone choker": 0.002773540424351689,
      "Blue lacy bow": 0.002773540424351689,
      "Blue heart collar": 0.002773540424351689,
      "Bloody vampire teeth necklace": 0.002773540424351689,
      "Bloody choker": 0.002773540424351689,
      "Black thick choker": 0.002773540424351689,
      "Black studded leather ring": 0.002773540424351689,
      "Black studded heart collar": 0.002773540424351689,
      "Black studded collar": 0.002773540424351689,
      "Black studded choker": 0.002773540424351689,
      "Black ruffle": 0.002773540424351689,
      "Black ruffle + lace": 0.002773540424351689,
      "Black ribbon": 0.002773540424351689,
      "Black leather ring": 0.002773540424351689,
      "Black leather heart": 0.002773540424351689,
      "Black leash": 0.002773540424351689,
      "Black lace": 0.002773540424351689,
      "Black lace choker": 0.002773540424351689,
      "Black heart collar": 0.002773540424351689,
      "Black heart choker studded": 0.002773540424351689,
      "Black harness": 0.002773540424351689,
      "Black crescent moon": 0.002773540424351689,
      "Black collar": 0.002773540424351689,
      "Black cameo choker": 0.002773540424351689,
      "Bat choker": 0.002773540424351689,
      "Barb wire": 0.002773540424351689,
      "Baby choker": 0.002773540424351689,
      "Aquamarine crystal necklace": 0.002773540424351689,
      "Anchor necklace": 0.002773540424351689,
      "Anarchy necklace": 0.002773540424351689,
      "Amethyst crystal necklace": 0.002773540424351689,
      "Amber crystal necklace": 0.002773540424351689,
      "13 necklace": 0.002773540424351689
    },
    "Clothes": {
      "666": 0.017021276595744685,
      "Yellow tshirt": 0.017021276595744685,
      "White vest": 0.017021276595744685,
      "White tshirt": 0.017021276595744685,
      "White stripes": 0.017021276595744685,
      "White polo": 0.017021276595744685,
      "Track jacket": 0.017021276595744685,
      "Shirt collar": 0.017021276595744685,
      "Sailor shirt": 0.017021276595744685,
      "Red stripes": 0.017021276595744685,
      "Red bustier": 0.017021276595744685,
      "Red + black segments": 0.017021276595744685,
      "Purple stripes": 0.017021276595744685,
      "Purple + Cream Segments": 0.017021276595744685,
      "Pink vest": 0.017021276595744685,
      "Pink tshirt": 0.017021276595744685,
      "Pink sprinkles": 0.017021276595744685,
      "Pink segments": 0.017021276595744685,
      "Pink polo": 0.017021276595744685,
      "Pink hoodie": 0.017021276595744685,
      "Pink heart cutout": 0.017021276595744685,
      "Pink braces": 0.017021276595744685,
      "Pilgrim dress": 0.017021276595744685,
      "Overalls": 0.017021276595744685,
      "Lilac vest": 0.017021276595744685,
      "Leopard spots": 0.017021276595744685,
      "Houndstooth": 0.017021276595744685,
      "Hoodie": 0.017021276595744685,
      "Heart shirt": 0.017021276595744685,
      "Grey tshirt": 0.017021276595744685,
      "Grey polo": 0.017021276595744685,
      "Flannel": 0.017021276595744685,
      "Fishnets": 0.017021276595744685,
      "Claret + Blue segments": 0.017021276595744685,
      "Camo": 0.017021276595744685,
      "Black vest": 0.017021276595744685,
      "Black tshirt": 0.017021276595744685,
      "Black strap vest": 0.017021276595744685,
      "Black segments": 0.017021276595744685,
      "Black heart cutout": 0.017021276595744685,
      "Black dungarees": 0.017021276595744685,
      "Black crossover harness": 0.017021276595744685,
      "Black corset": 0.017021276595744685,
      "Black bustier": 0.017021276595744685,
      "Black braces": 0.017021276595744685,
      "Black bandeau": 0.017021276595744685,
      "Alice dress": 0.017021276595744685
    },
    "Chest Accessory": {
      "Cleavage": 0.018181818181818184,
      "Red straps": 0.018181818181818184,
      "Purple straps": 0.018181818181818184,
      "Pink straps": 0.018181818181818184,
      "Pentagram harness": 0.009090909090909092,
      "Black straps": 0.018181818181818184
    },
    "Eye Accessory": {
      "Moon Tiara": 0.0029411764705882353,
      "Nurse eye patch": 0.0029411764705882353,
      "Hero mask": 0.014705882352941178,
      "Black eye patch": 0.029411764705882356
    },
    "Eyes": {
      "Starstruck": 0.0070921985815602835,
      "Starry": 0.0007092198581560284,
      "Sith": 0.0070921985815602835,
      "Rolling": 0.035460992907801414,
      "Heart": 0.0070921985815602835,
      "Cross": 0.035460992907801414,
      "Black": 0.0070921985815602835
    },
    "Eye Shadow": {
      "Red": 0.05331556147950683,
      "Pink": 0.05331556147950683,
      "Pale teal": 0.05331556147950683,
      "Pale blue": 0.05331556147950683,
      "Orange": 0.05331556147950683,
      "Olive": 0.05331556147950683,
      "Lilac": 0.05331556147950683,
      "Light pink": 0.05331556147950683,
      "Grey": 0.05331556147950683,
      "Gold eyeshadow": 0.0002665778073975341,
      "Dark purple": 0.05331556147950683,
      "Dark grey": 0.05331556147950683,
      "Dark brown": 0.05331556147950683,
      "Dark blue": 0.05331556147950683,
      "Brown": 0.05331556147950683,
      "Black": 0.05331556147950683
    },
    "Eyebrows": {
      "Lost soul": 0.005205622071837584,
      "goth gfs": 0.005205622071837584,
      "uwu": 0.02602811035918792,
      "thick": 0.02602811035918792,
      "red": 0.10411244143675168,
      "rainbow": 0.05205622071837584,
      "pink": 0.10411244143675168,
      "pencil": 0.02602811035918792,
      "green": 0.10411244143675168,
      "Gold brows": 0.0005205622071837585,
      "flapper": 0.02602811035918792,
      "dark blonde": 0.10411244143675168,
      "concerned": 0.02602811035918792,
      "bushy": 0.05205622071837584,
      "blue": 0.10411244143675168,
      "blonde": 0.10411244143675168,
      "black": 0.10411244143675168,
      "angry": 0.02602811035918792
    },
    "Nose Accessory": {
      "white plaster": 0.008333333333333333,
      "purple plaster": 0.008333333333333333,
      "pink plaster": 0.008333333333333333,
      "mouse whiskers": 0.008333333333333333,
      "beige plaster": 0.008333333333333333
    },
    "Under Eye Makeup": {
      "Red tears": 0.004329004329004328,
      "Red smudged": 0.021645021645021644,
      "Pink smudged": 0.021645021645021644,
      "Harley Quinn": 0.021645021645021644,
      "Gold tears": 0.00043290043290043285,
      "Blue tears": 0.004329004329004328,
      "Black tears": 0.004329004329004328,
      "Black smudged": 0.021645021645021644
    },
    "Face Paint": {
      "Raccoon": 0.005000000000000001,
      "Red Eye Paint": 0.005000000000000001,
      "Thick black": 0.005000000000000001,
      "White paint": 0.005000000000000001,
      "War paint": 0.005000000000000001,
      "Stars": 0.005000000000000001,
      "Lines tattoo": 0.005000000000000001,
      "Glasgow smile": 0.005000000000000001,
      "Cartoon lashes": 0.005000000000000001,
      "Blood splatter": 0.005000000000000001
    },
    "Blush": {
      "Blush 1": 0.08000000000000002,
      "Blush 2": 0.08000000000000002,
      "Blush 3": 0.08000000000000002,
      "Blush 4": 0.08000000000000002,
      "Blush 5": 0.08000000000000002
    },
    "Eyes Base": { "Regular": 1 },
    "Eyelashes & Liner": {
      "Wings x3": 0.1,
      "Wings x2": 0.1,
      "Thick top": 0.1,
      "Thick full": 0.1,
      "Small wings": 0.1,
      "Large wings": 0.1,
      "Full": 0.1,
      "Full lashes + wings": 0.1,
      "Full half": 0.1,
      "Bottom": 0.1
    },
    "Cheekbone": {
      "Three dots": 0.010869565217391302,
      "Tear drop outline": 0.010869565217391302,
      "Tear drop": 0.010869565217391302,
      "Star": 0.010869565217391302,
      "Spider web": 0.010869565217391302,
      "Spider": 0.010869565217391302,
      "Smile sad": 0.010869565217391302,
      "Rose": 0.010869565217391302,
      "PMA": 0.010869565217391302,
      "Pentagram": 0.010869565217391302,
      "NYHC": 0.010869565217391302,
      "Inverted rose": 0.010869565217391302,
      "Inverted cross": 0.010869565217391302,
      "Heart": 0.010869565217391302,
      "Dollar": 0.010869565217391302,
      "Dagger": 0.010869565217391302,
      "Crossbones": 0.010869565217391302,
      "Cross": 0.010869565217391302,
      "Cheekbone piercing": 0.010869565217391302,
      "Broken heart": 0.010869565217391302,
      "Barb wire": 0.010869565217391302,
      "ACAB": 0.010869565217391302,
      "Thirteen": 0.010869565217391302
    },
    "Nose Piercing Right": { "Nose Ring Right": 0.1 },
    "Nose Piercing Left": { "Nose Stud Left": 0.05, "Nose Ring Left": 0.05 },
    "Septum Piercing": { "septum ring": 0.05, "septum bullring": 0.05 },
    "Monroe Piercing": { "Monroe": 0.2 },
    "Medusa Piercing": { "Medusa": 0.1 },
    "Madonna Piercing": { "Madonna": 0.2 },
    "Labret Right": { "Ring": 0.1, "Stud": 0.1 },
    "Labret Left": { "Ring": 0.1, "Stud": 0.1 },
    "Labret Centre": { "Ring": 0.1, "Stud": 0.1 },
    "Lipstick": {
      "Violet": 0.05762028233938346,
      "Vampire teeth": 0.002881014116969173,
      "Teal": 0.05762028233938346,
      "Red": 0.05762028233938346,
      "Pink": 0.05762028233938346,
      "Peach": 0.05762028233938346,
      "Orange": 0.05762028233938346,
      "Olive": 0.05762028233938346,
      "Mauve": 0.05762028233938346,
      "Light Red": 0.05762028233938346,
      "Light purple": 0.05762028233938346,
      "Light pink": 0.05762028233938346,
      "Hot pink": 0.05762028233938346,
      "Gold lipstick": 0.00028810141169691725,
      "Dark purple": 0.05762028233938346,
      "Dark grey": 0.05762028233938346,
      "Blue": 0.05762028233938346,
      "Black": 0.05762028233938346,
      "Black + White": 0.014405070584845865,
      "Beige": 0.05762028233938346,
      "Amidala": 0.002881014116969173
    },
    "Bridge Piercing": { "Bridge": 0.3 },
    "Beauty Mark": {
      "Beauty Mark 1": 0.01666666666666667,
      "Beauty Mark 2": 0.01666666666666667,
      "Beauty Mark 3": 0.01666666666666667,
      "Beauty Mark 4": 0.01666666666666667,
      "Beauty Mark 5": 0.01666666666666667,
      "Beauty Mark 6": 0.01666666666666667
    },
    "Forehead Tattoo": {
      "Gold pentagram": 0.0018018018018018018,
      "Forehead cross paint": 0.0900900900900901,
      "Cross forehead": 0.0900900900900901,
      "Barb wire": 0.018018018018018018
    },
    "Scalp Tattoo": {
      "Spider web": 0.03333333333333333,
      "Spider": 0.03333333333333333,
      "Demon": 0.03333333333333333
    },
    "Head Side Tattoo": {
      "Snake": 0.03333333333333334,
      "Panther": 0.03333333333333334,
      "Ouija": 0.03333333333333334,
      "Lipstick": 0.03333333333333334,
      "Heart padlock": 0.03333333333333334,
      "Dragon": 0.03333333333333334
    },
    "Shoulder Tattoo": {
      "Succulent": 0.016666666666666663,
      "Snake": 0.016666666666666663,
      "Skull": 0.016666666666666663,
      "Reptile": 0.016666666666666663,
      "Peach": 0.016666666666666663,
      "Monkey": 0.016666666666666663,
      "Medusa": 0.016666666666666663,
      "Lantern": 0.016666666666666663,
      "Imp": 0.016666666666666663,
      "Ghost": 0.016666666666666663,
      "Flowers": 0.016666666666666663,
      "Devil": 0.016666666666666663,
      "Coffin Skull": 0.016666666666666663,
      "Coffin Eye": 0.016666666666666663,
      "Candle": 0.016666666666666663,
      "Cactus": 0.016666666666666663,
      "Bat": 0.016666666666666663,
      "Anchor": 0.016666666666666663
    },
    "Chest Tattoo": {
      "Web Diamond": 0.009999999999999998,
      "Umbrella Rose": 0.009999999999999998,
      "Tiger": 0.009999999999999998,
      "Stars": 0.009999999999999998,
      "Spiderweb": 0.009999999999999998,
      "Spider": 0.009999999999999998,
      "Ouija": 0.009999999999999998,
      "Medusa": 0.009999999999999998,
      "Illuminati": 0.009999999999999998,
      "Hourglass": 0.009999999999999998,
      "Flowers": 0.009999999999999998,
      "Eye": 0.009999999999999998,
      "Eagle": 0.009999999999999998,
      "Dragon": 0.009999999999999998,
      "Devil": 0.009999999999999998,
      "Demon": 0.009999999999999998,
      "Coffin skull": 0.009999999999999998,
      "Hand": 0.009999999999999998,
      "Butterfly": 0.009999999999999998,
      "Anchor": 0.009999999999999998
    },
    "Base": { "Base": 1 },
    "Skin Tone": {
      "Zombie green": 0.016490765171503958,
      "Zombie decomposed": 0.016490765171503958,
      "Vitiligo": 0.032981530343007916,
      "Space": 0.0032981530343007917,
      "Sally": 0.016490765171503958,
      "Red": 0.016490765171503958,
      "Medium 4": 0.06596306068601583,
      "Medium 3": 0.06596306068601583,
      "Medium 2": 0.06596306068601583,
      "Medium 1": 0.06596306068601583,
      "Light freckles": 0.032981530343007916,
      "Light 1": 0.06596306068601583,
      "Light 2": 0.06596306068601583,
      "Light 3": 0.06596306068601583,
      "Light 4": 0.06596306068601583,
      "Grey Alien": 0.0032981530343007917,
      "Green": 0.0032981530343007917,
      "Gold": 0.00032981530343007914,
      "Deep 1": 0.06596306068601583,
      "Deep 2": 0.06596306068601583,
      "Deep 3": 0.06596306068601583,
      "Deep 4": 0.06596306068601583,
      "Corpse paint": 0.032981530343007916,
      "CMN": 0.032981530343007916,
      "Blue glow": 0.00032981530343007914
    },
    "Background": {
      "Beige": 0.11104941699056083,
      "Black": 0.11104941699056083,
      "Galactic": 0.000555247084952804,
      "Green": 0.11104941699056083,
      "Orange": 0.11104941699056083,
      "Pink": 0.11104941699056083,
      "Purple": 0.11104941699056083,
      "Red": 0.11104941699056083,
      "Teal": 0.11104941699056083,
      "Yellow": 0.11104941699056083
    }
  }

export { traits };