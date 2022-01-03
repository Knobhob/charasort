dataSetVersion = "2022-01-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options= [
    {
        name: "Select genders",
        key: "gender",
        tooltip: "Select the genders you want to rank.",
        checked: false,
        sub: [
            { name: "Female", key: "female" },
            { name: "Male", key: "male"}
        ]
    },
    {
        name: "Select outfits",
        key: "outfit",
        tooltip: "Select the outfits for characters you want to rank",
        checked: true,
        sub: [
            { name: "Base Outfit", key: "base"},
            { name: "Bond Outfit", key: "bond", checked: false},
            { name: "Swimsuits", key: "swimsuit", checked: false},
            { name: "Christmas Outfits", key: "christmas", checked: false},
            { name: "New Year Outfits", key: "newyear", checked: false},
            { name: "Halloween Outfits", key: "halloween", checked: false},
            { name: "Festival Outfits", key: "festival", checked: false},
            { name: "School Outfits", key: "school", checked: false},
            { name: "Miscellaneous Outfits", key: "misc", checked: false}
        ]
    },
    {
        name: "Remove lolis/shotas",
        key: "loli",
        tooltip: "Check this if you don't want to include loli/shota characters.",
        checked: false
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Ichihime",
        img: "Ichihime base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime (Bonded)",
        img: "Ichihime bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Ichihime",
        img: "Ichihime swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime (New Year)",
        img: "Ichihime new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Invincible Ichihime",
        img: "Ichihime invincible.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou",
        img: "Miki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou (Bonded)",
        img: "Miki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou (Halloween)",
        img: "Miki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Celebration Miki Nikaidou",
        img: "Miki festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita",
        img: "Kana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Bonded)",
        img: "Kana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Christmas)",
        img: "Kana christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Halloween)",
        img: "Kana halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chiori Mikami",
        img: "Chiori base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Bonded)",
        img: "Chiori bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Christmas)",
        img: "Chiori christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Swimsuit)",
        img: "Chiori swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Sweet Refreshment Chiori Mikami",
        img: "Chiori sweets.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Mai Aihara",
        img: "Mai base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mai Aihara (Bonded)",
        img: "Mai bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Mai Aihara",
        img: "Mai swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Wonderful Youth Mai Aihara",
        img: "Mai new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko",
        img: "Nadeshiko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko (Bonded)",
        img: "Nadeshiko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Nadeshiko",
        img: "Nadeshiko swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Auspicious Snow Nadeshiko",
        img: "Nadeshiko new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi",
        img: "Yui base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Bonded)",
        img: "Yui bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Christmas)",
        img: "Yui christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Halloween)",
        img: "Yui halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou",
        img: "Riu base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou (Bonded)",
        img: "Riu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Riu Kujou",
        img: "Riu swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou (New Year)",
        img: "Riu new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia",
        img: "Xenia base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia (Bonded)",
        img: "Xenia bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia (Halloween)",
        img: "Xenia halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Xenia",
        img: "Xenia swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi",
        img: "Kaavi base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi (Bonded)",
        img: "Kaavi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi (Swimsuit)",
        img: "Kaavi swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya",
        img: "Natsuki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya (Bonded)",
        img: "Natsuki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya (Halloween)",
        img: "Natsuki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Auspicious Snow Natsuki Shinomiya",
        img: "Natsuki new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou",
        img: "Wanjirou base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou (Bonded)",
        img: "Wanjirou bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou (Halloween)",
        img: "Wanjirou halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sora Ichinose",
        img: "Sora base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Sora Ichinose (Bonded)",
        img: "Sora bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Sora Ichinose (Christmas)",
        img: "Sora christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Spring Homecoming Sora Ichinose",
        img: "Sora school.png",
        opts: {
            outfit: ["school"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Hideki Akechi",
        img: "Hideki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Bonded)",
        img: "Hideki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Halloween)",
        img: "Hideki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Swimsuit)",
        img: "Hideki swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Keikumusume",
        img: "Keikumusume base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume (Bonded)",
        img: "Keikumusume bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume (Swimsuit)",
        img: "Keikumusume swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara",
        img: "Sara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara (Bonded)",
        img: "Sara bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara (New Year)",
        img: "Sara new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Homecoming Sara",
        img: "Sara school.png",
        opts: {
            outfit: ["school"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya",
        img: "Hana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya (Bonded)",
        img: "Hana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Celebration Hana Ninomiya",
        img: "Hana festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya (Swimsuit)",
        img: "Hana swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi",
        img: "Nana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi (Bonded)",
        img: "Nana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi (Swimsuit)",
        img: "Nana swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi",
        img: "Hinata base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi (Bonded)",
        img: "Hinata bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sweet Refreshment Hinata Takanashi",
        img: "Hinata sweets.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Firework Date Hinata Takanashi",
        img: "Hinata festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Haruna Igarashi",
        img: "Haruna base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Haruna Igarashi (Bonded)",
        img: "Haruna bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Haruna Igarashi (Swimsuit)",
        img: "Haruna swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Spring Homecoming Haruna Igarashi",
        img: "Haruna school.png",
        opts: {
            outfit: ["school"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Anju Suzumiya",
        img: "Anju base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Anju Suzumiya (Bonded)",
        img: "Anju bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Bedtime Stories Anju Suzumiya",
        img: "Anju pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Firework Date Anju Suzumiya",
        img: "Anju festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Joseph",
        img: "Joseph base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph (Bonded)",
        img: "Joseph bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph (New Year)",
        img: "Joseph new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou",
        img: "Osamu base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou (Bonded)",
        img: "Osamu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Firework Date Osamu Saitou",
        img: "Osamu festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami",
        img: "Sawako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami (Bonded)",
        img: "Sawako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami (Christmas)",
        img: "Sawako christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ein",
        img: "Ein base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein (Bonded)",
        img: "Ein bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein (Swimsuit)",
        img: "Ein swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Momo Hina",
        img: "Momo base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Momo Hina (Bonded)",
        img: "Momo bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Wonderful Youth Momo Hina",
        img: "Momo new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Zan Tsukimi",
        img: "Zan base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Zan Tsukimi (Bonded)",
        img: "Zan bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Spring Homecoming Zan Tsukimi",
        img: "Zan school.png",
        opts: {
            outfit: ["school"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto",
        img: "Kirara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto (Bonded)",
        img: "Kirara bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto (New Year)",
        img: "Kirara new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaguyahime",
        img: "Kaguyahime base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaguyahime (Bonded)",
        img: "Kaguyahime bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Snowy Night Whisper Kaguyahime",
        img: "Kaguyahime christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi",
        img: "Ren base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi (Bonded)",
        img: "Ren bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi (Halloween)",
        img: "Ren halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara",
        img: "Usumi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara (Bonded)",
        img: "Usumi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "White Hymn Usumi Ishihara",
        img: "Usumi christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Eliisa",
        img: "Eliisa base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Eliisa (Bonded)",
        img: "Eliisa bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Bedtime Stories Eliisa",
        img: "Eliisa pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chihori Terasaki",
        img: "Chihori base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chihori Terasaki (Bonded)",
        img: "Chihori bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga",
        img: "Saki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga (Bonded)",
        img: "Saki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga (Collab)",
        img: "Saki collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura",
        img: "Nodoka base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura (Bonded)",
        img: "Nodoka bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura (Collab)",
        img: "Nodoka collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Koromo Amae",
        img: "Koromo base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Koromo Amae (Bonded)",
        img: "Koromo bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Koromo Amae (Collab)",
        img: "Koromo collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Teru Miyanaga",
        img: "Teru base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Teru Miyanaga (Bonded)",
        img: "Teru bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Teru Miyanaga (Collab)",
        img: "Teru collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji",
        img: "Fu Ji base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji (Bonded)",
        img: "Fu Ji bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Qi Xi",
        img: "Qi Xi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Qi Xi (Bonded)",
        img: "Qi Xi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Yumeko Jabami",
        img: "Yumeko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami (Bonded)",
        img: "Yumeko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami (Collab)",
        img: "Yumeko collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome",
        img: "Mary base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome (Bonded)",
        img: "Mary bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome (Collab)",
        img: "Mary collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima",
        img: "Midari base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima (Bonded)",
        img: "Midari bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima (Collab)",
        img: "Midari collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami",
        img: "Kirari base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami (Bonded)",
        img: "Kirari bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami (Collab)",
        img: "Kirari collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami",
        img: "Reina base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami (Bonded)",
        img: "Reina bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "White Hymn Reina Nanami",
        img: "Reina christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "A-37",
        img: "A-37 base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "A-37 (Bonded)",
        img: "A-37 bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Firework Date A-37",
        img: "A-37 festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hibiki Himekawa",
        img: "Hibiki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Hibiki Himekawa (Bonded)",
        img: "Hibiki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ryan",
        img: "Ryan base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ryan (Bonded)",
        img: "Ryan bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ayako Morikawa",
        img: "Ayako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ayako Morikawa (Bonded)",
        img: "Ayako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Natsuhiko Takigawa",
        img: "Natsuhiko base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuhiko Takigawa (Bonded)",
        img: "Natsuhiko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru",
        img: "Akagi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru (Bonded)",
        img: "Akagi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru (Collab)",
        img: "Akagi collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao",
        img: "Washizu base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao (Bonded)",
        img: "Washizu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao (Collab)",
        img: "Washizu collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Kazuha Saionji",
        img: "Kazuha base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kazuha Saionji (Bonded)",
        img: "Kazuha bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nian",
        img: "nian.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    }
];