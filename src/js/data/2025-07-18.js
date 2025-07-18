dataSetVersion = "2025-07-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
        tooltip: "Select the outfits for characters you want to rank, uncheck this to enable all outfits.",
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
        name: "Remove Nians",
        key: "nian",
        tooltip: "Check this if you don't want to include Nian characters.",
        checked: false
    },
    {
        name: "Remove collabs",
        key: "collab",
        tooltip: "Check this if you don't want to include collab characters.",
        checked: false
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Ichihime",
        img: "Ichihime base.png",
        fullbody: "Ichihime base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Ichihime (Bonded)",
        img: "Ichihime bond.png",
        fullbody: "Ichihime bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Beach Party Ichihime",
        img: "Ichihime swimsuit.png",
        fullbody: "Ichihime swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Ichihime (New Year)",
        img: "Ichihime new year.png",
        fullbody: "Ichihime new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Invincible Ichihime",
        img: "Ichihime invincible.png",
        fullbody: "Ichihime invincible.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Miki Nikaidou",
        img: "Miki base.png",
        fullbody: "Miki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Miki Nikaidou (Bonded)",
        img: "Miki bond.png",
        fullbody: "Miki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Miki Nikaidou (Halloween)",
        img: "Miki halloween.png",
        fullbody: "Miki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"]
        }
    },
    {
        name: "Spring Celebration Miki Nikaidou",
        img: "Miki festival.png",
        fullbody: "Miki festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"]
        }
    },
    {
        name: "Kana Fujita",
        img: "Kana base.png",
        fullbody: "Kana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Kana Fujita (Bonded)",
        img: "Kana bond.png",
        fullbody: "Kana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Kana Fujita (Christmas)",
        img: "Kana christmas.png",
        fullbody: "Kana christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"]
        }
    },
    {
        name: "Kana Fujita (Halloween)",
        img: "Kana halloween.png",
        fullbody: "Kana halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"]
        }
    },
    {
        name: "Chiori Mikami",
        img: "Chiori base.png",
        fullbody: "Chiori base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Chiori Mikami (Bonded)",
        img: "Chiori bond.png",
        fullbody: "Chiori bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Chiori Mikami (Christmas)",
        img: "Chiori christmas.png",
        fullbody: "Chiori christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"]
        }
    },
    {
        name: "Chiori Mikami (Swimsuit)",
        img: "Chiori swimsuit.png",
        fullbody: "Chiori swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Sweet Refreshment Chiori Mikami",
        img: "Chiori sweets.png",
        fullbody: "Chiori sweets.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Mai Aihara",
        img: "Mai base.png",
        fullbody: "Mai base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Mai Aihara (Bonded)",
        img: "Mai bond.png",
        fullbody: "Mai bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Beach Party Mai Aihara",
        img: "Mai swimsuit.png",
        fullbody: "Mai swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Wonderful Youth Mai Aihara",
        img: "Mai new year.png",
        fullbody: "Mai new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Nadeshiko",
        img: "Nadeshiko base.png",
        fullbody: "Nadeshiko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Nadeshiko (Bonded)",
        img: "Nadeshiko bond.png",
        fullbody: "Nadeshiko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Beach Party Nadeshiko",
        img: "Nadeshiko swimsuit.png",
        fullbody: "Nadeshiko swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Auspicious Snow Nadeshiko",
        img: "Nadeshiko new year.png",
        fullbody: "Nadeshiko new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Yui Yagi",
        img: "Yui base.png",
        fullbody: "Yui base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Yui Yagi (Bonded)",
        img: "Yui bond.png",
        fullbody: "Yui bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Yui Yagi (Christmas)",
        img: "Yui christmas.png",
        fullbody: "Yui christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"]
        }
    },
    {
        name: "Yui Yagi (Halloween)",
        img: "Yui halloween.png",
        fullbody: "Yui halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"]
        }
    },
    {
        name: "MoonlightWaltz Yui Yagi",
        img: "Yui moonlightwaltz.png",
        fullbody: "Yui moonlightwaltz.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Riu Kujou",
        img: "Riu base.png",
        fullbody: "Riu base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Riu Kujou (Bonded)",
        img: "Riu bond.png",
        fullbody: "Riu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Beach Party Riu Kujou",
        img: "Riu swimsuit.png",
        fullbody: "Riu swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Riu Kujou (New Year)",
        img: "Riu new year.png",
        fullbody: "Riu new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Soul-Colored Fantasy Riu Kujou",
        img: "Riu fantasy.png",
        fullbody: "Riu fantasy.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Xenia",
        img: "Xenia base.png",
        fullbody: "Xenia base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Xenia (Bonded)",
        img: "Xenia bond.png",
        fullbody: "Xenia bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Xenia (Halloween)",
        img: "Xenia halloween.png",
        fullbody: "Xenia halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"]
        }
    },
    {
        name: "Beach Party Xenia",
        img: "Xenia swimsuit.png",
        fullbody: "Xenia swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Kaavi",
        img: "Kaavi base.png",
        fullbody: "Kaavi base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Kaavi (Bonded)",
        img: "Kaavi bond.png",
        fullbody: "Kaavi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Kaavi (Swimsuit)",
        img: "Kaavi swimsuit.png",
        fullbody: "Kaavi swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Natsuki Shinomiya",
        img: "Natsuki base.png",
        fullbody: "Natsuki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Natsuki Shinomiya (Bonded)",
        img: "Natsuki bond.png",
        fullbody: "Natsuki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Natsuki Shinomiya (Halloween)",
        img: "Natsuki halloween.png",
        fullbody: "Natsuki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"]
        }
    },
    {
        name: "Auspicious Snow Natsuki Shinomiya",
        img: "Natsuki new year.png",
        fullbody: "Natsuki new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"]
        }
    },
    {
        name: "Wanjirou",
        img: "Wanjirou base.png",
        fullbody: "Wanjirou base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Wanjirou (Bonded)",
        img: "Wanjirou bond.png",
        fullbody: "Wanjirou bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Wanjirou (Halloween)",
        img: "Wanjirou halloween.png",
        fullbody: "Wanjirou halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"]
        }
    },
    {
        name: "Sora Ichinose",
        img: "Sora base.png",
        fullbody: "Sora base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Sora Ichinose (Bonded)",
        img: "Sora bond.png",
        fullbody: "Sora bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Sora Ichinose (Christmas)",
        img: "Sora christmas.png",
        fullbody: "Sora christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"]
        }
    },
    {
        name: "Spring Homecoming Sora Ichinose",
        img: "Sora school.png",
        fullbody: "Sora school.png",
        opts: {
            outfit: ["school"],
            gender: ["male"]
        }
    },
    {
        name: "Hideki Akechi",
        img: "Hideki base.png",
        fullbody: "Hideki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Hideki Akechi (Bonded)",
        img: "Hideki bond.png",
        fullbody: "Hideki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Hideki Akechi (Halloween)",
        img: "Hideki halloween.png",
        fullbody: "Hideki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"]
        }
    },
    {
        name: "Hideki Akechi (Swimsuit)",
        img: "Hideki swimsuit.png",
        fullbody: "Hideki swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"]
        }
    },
    {
        name: "Keikumusume",
        img: "Keikumusume base.png",
        fullbody: "Keikumusume base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Keikumusume (Bonded)",
        img: "Keikumusume bond.png",
        fullbody: "Keikumusume bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Keikumusume (Swimsuit)",
        img: "Keikumusume swimsuit.png",
        fullbody: "Keikumusume swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Sara",
        img: "Sara base.png",
        fullbody: "Sara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Sara (Bonded)",
        img: "Sara bond.png",
        fullbody: "Sara bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Sara (New Year)",
        img: "Sara new year.png",
        fullbody: "Sara new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Spring Homecoming Sara",
        img: "Sara school.png",
        fullbody: "Sara school.png",
        opts: {
            outfit: ["school"],
            gender: ["female"]
        }
    },
    {
        name: "Hana Ninomiya",
        img: "Hana base.png",
        fullbody: "Hana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hana Ninomiya (Bonded)",
        img: "Hana bond.png",
        fullbody: "Hana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Spring Celebration Hana Ninomiya",
        img: "Hana festival.png",
        fullbody: "Hana festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"]
        }
    },
    {
        name: "Hana Ninomiya (Swimsuit)",
        img: "Hana swimsuit.png",
        fullbody: "Hana swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Nana Shiraishi",
        img: "Nana base.png",
        fullbody: "Nana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Nana Shiraishi (Bonded)",
        img: "Nana bond.png",
        fullbody: "Nana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Nana Shiraishi (Swimsuit)",
        img: "Nana swimsuit.png",
        fullbody: "Nana swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Hinata Takanashi",
        img: "Hinata base.png",
        fullbody: "Hinata base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hinata Takanashi (Bonded)",
        img: "Hinata bond.png",
        fullbody: "Hinata bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Sweet Refreshment Hinata Takanashi",
        img: "Hinata sweets.png",
        fullbody: "Hinata sweets.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Firework Date Hinata Takanashi",
        img: "Hinata festival.png",
        fullbody: "Hinata festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"]
        }
    },
    {
        name: "Soul-Colored Fantasy Hinata Takanashi",
        img: "Hinata fantasy.png",
        fullbody: "Hinata fantasy.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Haruna Igarashi",
        img: "Haruna base.png",
        fullbody: "Haruna base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Haruna Igarashi (Bonded)",
        img: "Haruna bond.png",
        fullbody: "Haruna bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Haruna Igarashi (Swimsuit)",
        img: "Haruna swimsuit.png",
        fullbody: "Haruna swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Spring Homecoming Haruna Igarashi",
        img: "Haruna school.png",
        fullbody: "Haruna school.png",
        opts: {
            outfit: ["school"],
            gender: ["female"]
        }
    },
    {
        name: "Anju Suzumiya",
        img: "Anju base.png",
        fullbody: "Anju base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Anju Suzumiya (Bonded)",
        img: "Anju bond.png",
        fullbody: "Anju bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Bedtime Stories Anju Suzumiya",
        img: "Anju pyjama.png",
        fullbody: "Anju pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Firework Date Anju Suzumiya",
        img: "Anju festival.png",
        fullbody: "Anju festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"]
        }
    },
    {
        name: "Day of Celebration Anju Suzumiya",
        img: "Anju celebration.png",
        fullbody: "Anju celebration.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Joseph",
        img: "Joseph base.png",
        fullbody: "Joseph base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Joseph (Bonded)",
        img: "Joseph bond.png",
        fullbody: "Joseph bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Joseph (New Year)",
        img: "Joseph new year.png",
        fullbody: "Joseph new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"]
        }
    },
    {
        name: "Osamu Saitou",
        img: "Osamu base.png",
        fullbody: "Osamu base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Osamu Saitou (Bonded)",
        img: "Osamu bond.png",
        fullbody: "Osamu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Firework Date Osamu Saitou",
        img: "Osamu festival.png",
        fullbody: "Osamu festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"]
        }
    },
    {
        name: "Sawako Kitami",
        img: "Sawako base.png",
        fullbody: "Sawako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Sawako Kitami (Bonded)",
        img: "Sawako bond.png",
        fullbody: "Sawako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Sawako Kitami (Christmas)",
        img: "Sawako christmas.png",
        fullbody: "Sawako christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"]
        }
    },
    {
        name: "MoonlightWaltz Sawako Kitami",
        img: "Sawako moonlightwaltz.png",
        fullbody: "Sawako moonlightwaltz.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Ein",
        img: "Ein base.png",
        fullbody: "Ein base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Ein (Bonded)",
        img: "Ein bond.png",
        fullbody: "Ein bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Ein (Swimsuit)",
        img: "Ein swimsuit.png",
        fullbody: "Ein swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"]
        }
    },
    {
        name: "Momo Hina",
        img: "Momo base.png",
        fullbody: "Momo base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Momo Hina (Bonded)",
        img: "Momo bond.png",
        fullbody: "Momo bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Wonderful Youth Momo Hina",
        img: "Momo new year.png",
        fullbody: "Momo new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Summertime Coffeeshop Momo Hina",
        img: "Momo cafe.png",
        fullbody: "Momo cafe.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Zan Tsukimi",
        img: "Zan base.png",
        fullbody: "Zan base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Zan Tsukimi (Bonded)",
        img: "Zan bond.png",
        fullbody: "Zan bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Spring Homecoming Zan Tsukimi",
        img: "Zan school.png",
        fullbody: "Zan school.png",
        opts: {
            outfit: ["school"],
            gender: ["male"]
        }
    },
    {
        name: "Kirara Fujimoto",
        img: "Kirara base.png",
        fullbody: "Kirara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Kirara Fujimoto (Bonded)",
        img: "Kirara bond.png",
        fullbody: "Kirara bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Kirara Fujimoto (New Year)",
        img: "Kirara new year.png",
        fullbody: "Kirara new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Perfect Holiday Kirara Fujimoto",
        img: "Kirara pyjama.png",
        fullbody: "Kirara pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Kaguyahime",
        img: "Kaguyahime base.png",
        fullbody: "Kaguyahime base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Kaguyahime (Bonded)",
        img: "Kaguyahime bond.png",
        fullbody: "Kaguyahime bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Snowy Night Whisper Kaguyahime",
        img: "Kaguyahime christmas.png",
        fullbody: "Kaguyahime christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"]
        }
    },
    {
        name: "Festive Aroma Kaguyahime",
        img: "Kaguyahime new year.png",
        fullbody: "Kaguyahime new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Ren Kisaragi",
        img: "Ren base.png",
        fullbody: "Ren base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Ren Kisaragi (Bonded)",
        img: "Ren bond.png",
        fullbody: "Ren bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Ren Kisaragi (Halloween)",
        img: "Ren halloween.png",
        fullbody: "Ren halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"]
        }
    },
    {
        name: "Usumi Ishihara",
        img: "Usumi base.png",
        fullbody: "Usumi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Usumi Ishihara (Bonded)",
        img: "Usumi bond.png",
        fullbody: "Usumi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "White Hymn Usumi Ishihara",
        img: "Usumi christmas.png",
        fullbody: "Usumi christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"]
        }
    },
    {
        name: "Eliisa",
        img: "Eliisa base.png",
        fullbody: "Eliisa base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Eliisa (Bonded)",
        img: "Eliisa bond.png",
        fullbody: "Eliisa bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Bedtime Stories Eliisa",
        img: "Eliisa pyjama.png",
        fullbody: "Eliisa pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Festive Aroma Eliisa",
        img: "Eliisa new year.png",
        fullbody: "Eliisa new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"]
        }
    },
    {
        name: "Chihori Terasaki",
        img: "Chihori base.png",
        fullbody: "Chihori base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Chihori Terasaki (Bonded)",
        img: "Chihori bond.png",
        fullbody: "Chihori bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Saki Miyanaga",
        img: "Saki base.png",
        fullbody: "Saki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Saki Miyanaga (Bonded)",
        img: "Saki bond.png",
        fullbody: "Saki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Saki Miyanaga (Collab)",
        img: "Saki collab.png",
        fullbody: "Saki collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Nodoka Haramura",
        img: "Nodoka base.png",
        fullbody: "Nodoka base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Nodoka Haramura (Bonded)",
        img: "Nodoka bond.png",
        fullbody: "Nodoka bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Nodoka Haramura (Collab)",
        img: "Nodoka collab.png",
        fullbody: "Nodoka collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Koromo Amae",
        img: "Koromo base.png",
        fullbody: "Koromo base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Koromo Amae (Bonded)",
        img: "Koromo bond.png",
        fullbody: "Koromo bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Koromo Amae (Collab)",
        img: "Koromo collab.png",
        fullbody: "Koromo collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Teru Miyanaga",
        img: "Teru base.png",
        fullbody: "Teru base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Teru Miyanaga (Bonded)",
        img: "Teru bond.png",
        fullbody: "Teru bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Teru Miyanaga (Collab)",
        img: "Teru collab.png",
        fullbody: "Teru collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Fu Ji",
        img: "Fu Ji base.png",
        fullbody: "Fu Ji base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Fu Ji (Bonded)",
        img: "Fu Ji bond.png",
        fullbody: "Fu Ji bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Spring Relaxation Fu Ji",
        img: "Fu Ji springrelaxation.png",
        fullbody: "Fu Ji springrelaxation.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"]
        }
    },
    {
        name: "Qi Xi",
        img: "Qi Xi base.png",
        fullbody: "Qi Xi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Qi Xi (Bonded)",
        img: "Qi Xi bond.png",
        fullbody: "Qi Xi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Yumeko Jabami",
        img: "Yumeko base.png",
        fullbody: "Yumeko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Yumeko Jabami (Bonded)",
        img: "Yumeko bond.png",
        fullbody: "Yumeko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Yumeko Jabami (Collab)",
        img: "Yumeko collab.png",
        fullbody: "Yumeko collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Mary Saotome",
        img: "Mary base.png",
        fullbody: "Mary base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Mary Saotome (Bonded)",
        img: "Mary bond.png",
        fullbody: "Mary bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Mary Saotome (Collab)",
        img: "Mary collab.png",
        fullbody: "Mary collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Midari Ikishima",
        img: "Midari base.png",
        fullbody: "Midari base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Midari Ikishima (Bonded)",
        img: "Midari bond.png",
        fullbody: "Midari bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Midari Ikishima (Collab)",
        img: "Midari collab.png",
        fullbody: "Midari collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Kirari Momobami",
        img: "Kirari base.png",
        fullbody: "Kirari base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Kirari Momobami (Bonded)",
        img: "Kirari bond.png",
        fullbody: "Kirari bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Kirari Momobami (Collab)",
        img: "Kirari collab.png",
        fullbody: "Kirari collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Reina Nanami",
        img: "Reina base.png",
        fullbody: "Reina base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Reina Nanami (Bonded)",
        img: "Reina bond.png",
        fullbody: "Reina bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "White Hymn Reina Nanami",
        img: "Reina christmas.png",
        fullbody: "Reina christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"]
        }
    },
    {
        name: "A-37",
        img: "A-37 base.png",
        fullbody: "A-37 base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "A-37 (Bonded)",
        img: "A-37 bond.png",
        fullbody: "A-37 bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Firework Date A-37",
        img: "A-37 festival.png",
        fullbody: "A-37 festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"]
        }
    },
    {
        name: "Summertime Coffeeshop A-37",
        img: "A-37 cafe.png",
        fullbody: "A-37 cafe.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"]
        }
    },
    {
        name: "Bond of the Restless Night A-37",
        img: "A-37 restless night.png",
        fullbody: "A-37 restless night.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"]
        }
    },
    {
        name: "Hibiki Himekawa",
        img: "Hibiki base.png",
        fullbody: "Hibiki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hibiki Himekawa (Bonded)",
        img: "Hibiki bond.png",
        fullbody: "Hibiki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Ryan",
        img: "Ryan base.png",
        fullbody: "Ryan base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Ryan (Bonded)",
        img: "Ryan bond.png",
        fullbody: "Ryan bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Ayako Morikawa",
        img: "Ayako base.png",
        fullbody: "Ayako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Ayako Morikawa (Bonded)",
        img: "Ayako bond.png",
        fullbody: "Ayako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Perfect Holiday Ayako Morikawa",
        img: "Ayako pyjama.png",
        fullbody: "Ayako pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Daybreak in G Major Ayako Morikawa",
        img: "Ayako daybreak.png",
        fullbody: "Ayako daybreak.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Bond of the Restless Night Ayako Morikawa",
        img: "Ayako restless night.png",
        fullbody: "Ayako restless night.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"]
        }
    },
    {
        name: "Natsuhiko Takigawa",
        img: "Natsuhiko base.png",
        fullbody: "Natsuhiko base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Natsuhiko Takigawa (Bonded)",
        img: "Natsuhiko bond.png",
        fullbody: "Natsuhiko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Akagi Shigeru",
        img: "Akagi base.png",
        fullbody: "Akagi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Akagi Shigeru (Bonded)",
        img: "Akagi bond.png",
        fullbody: "Akagi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Akagi Shigeru (Collab)",
        img: "Akagi collab.png",
        fullbody: "Akagi collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Washizu Iwao",
        img: "Washizu base.png",
        fullbody: "Washizu base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Washizu Iwao (Bonded)",
        img: "Washizu bond.png",
        fullbody: "Washizu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Washizu Iwao (Collab)",
        img: "Washizu collab.png",
        fullbody: "Washizu collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Kazuha Saionji",
        img: "Kazuha base.png",
        fullbody: "Kazuha base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Kazuha Saionji (Bonded)",
        img: "Kazuha bond.png",
        fullbody: "Kazuha bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Nian",
        img: "nian.png",
        fullbody: "nian.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            nian: true
        }
    },
    {
        name: "Nanaha Onodera",
        img: "Nanaha base.png",
        fullbody: "Nanaha base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Nanaha Onodera (Bonded)",
        img: "Nanaha bond.png",
        fullbody: "Nanaha bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Sammir",
        img: "Sammir base.png",
        fullbody: "Sammir base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Sammir (Bonded)",
        img: "Sammir bond.png",
        fullbody: "Sammir bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Spring Relaxation Sammir",
        img: "Sammir springrelaxation.png",
        fullbody: "Sammir springrelaxation.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"]
        }
    },
    {
        name: "Tiger Nian",
        img: "Tiger Nian.png",
        fullbody: "Tiger Nian.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            nian: true
        }
    },
    {
        name: "Shinomiya Kaguya",
        img: "Kaguya base.png",
        fullbody: "Kaguya base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Shinomiya Kaguya (bonded)",
        img: "Kaguya bond.png",
        fullbody: "Kaguya bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Heart Thief Shinomiya Kaguya",
        img: "Kaguya phantom.png",
        fullbody: "Kaguya phantom.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Shirogane Miyuki",
        img: "Miyuki base.png",
        fullbody: "Miyuki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Shirogane Miyuki (bonded)",
        img: "Miyuki bond.png",
        fullbody: "Miyuki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Heart Thief Shirogane Miyuki",
        img: "Miyuki phantom.png",
        fullbody: "Miyuki phantom.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Hayasaka Ai",
        img: "Hayasaka Ai base.png",
        fullbody: "Hayasaka Ai base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Hayasaka Ai (bonded)",
        img: "Hayasaka Ai bond.png",
        fullbody: "Hayasaka Ai bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Heart Thief Hayasaka Ai",
        img: "Hayasaka Ai phantom.png",
        fullbody: "Hayasaka Ai phantom.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Shirogane Kei",
        img: "Kei base.png",
        fullbody: "Kei base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Shirogane Kei (bonded)",
        img: "Kei bond.png",
        fullbody: "Kei bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Heart Thief Shirogane Kei",
        img: "Kei phantom.png",
        fullbody: "Kei phantom.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Yuzu",
        img: "Yuzu base.png",
        fullbody: "Yuzu base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Yuzu (bonded)",
        img: "Yuzu bond.png",
        fullbody: "Yuzu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"]
        }
    },
    {
        name: "Zechs",
        img: "Zekes base.png",
        fullbody: "Zekes base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Zechs (bonded)",
        img: "Zekes bond.png",
        fullbody: "Zekes bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"]
        }
    },
    {
        name: "Ako Atarashi",
        img: "Ako base.png",
        fullbody: "Ako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Ako Atarashi (bonded)",
        img: "Ako bond.png",
        fullbody: "Ako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Ako Atarashi (collab)",
        img: "Ako bunny.png",
        fullbody: "Ako bunny.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Takei Hisa",
        img: "Hisa base.png",
        fullbody: "Hisa base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Fukuji Mihoko",
        img: "Mihoko base.png",
        fullbody: "Mihoko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Onjoji Toki",
        img: "Toki base.png",
        fullbody: "Toki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Archer",
        img: "Archer base.png",
        fullbody: "Archer base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Archer (bonded)",
        img: "Archer bond.png",
        fullbody: "Archer bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Archer (collab)",
        img: "Archer fated night.png",
        fullbody: "Archer fated night.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Matou Sakura",
        img: "Sakura base.png",
        fullbody: "Sakura base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Saber",
        img: "Saber base.png",
        fullbody: "Saber base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Tohsaka Rin",
        img: "Tohsaka Rin base.png",
        fullbody: "Tohsaka Rin base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Gil",
        img: "Gil base.png",
        fullbody: "Gil base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Illya",
        img: "Illya base.png",
        fullbody: "Illya base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Kuro",
        img: "Kuro base.png",
        fullbody: "Kuro base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Miyu",
        img: "Miyu base.png",
        fullbody: "Miyu base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Aru",
        img: "Aru base.png",
        fullbody: "Aru base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Hoshino",
        img: "Hoshino base.png",
        fullbody: "Hoshino base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Mutsuki",
        img: "Mutsuki base.png",
        fullbody: "Mutsuki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Shiroko",
        img: "Shiroko base.png",
        fullbody: "Shiroko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "C.C.",
        img: "CC base.png",
        fullbody: "CC base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Kallen Kouzuki",
        img: "Kallen base.png",
        fullbody: "Kallen base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Lelouch Lamperouge",
        img: "Lelouch base.png",
        fullbody: "Lelouch base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Suzaku Kururugi",
        img: "Suzaku base.png",
        fullbody: "Suzaku base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            collab: true
        }
    },
    {
        name: "Ayane Kisaragi",
        img: "Ayane base.png",
        fullbody: "Ayane base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Ciri",
        img: "Ciri base.png",
        fullbody: "Ciri base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Cynthia",
        img: "Cynthia base.png",
        fullbody: "Cynthia base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Eve Krist",
        img: "Eve base.png",
        fullbody: "Eve base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hinana Ichikawa",
        img: "Hinana base.png",
        fullbody: "Hinana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Koito Fukumaru",
        img: "Koito base.png",
        fullbody: "Koito base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Madoka Higuchi",
        img: "Madoka Higuchi base.png",
        fullbody: "Madoka Higuchi base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Toru Asakura",
        img: "Toru Asakura base.png",
        fullbody: "Toru Asakura base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            collab: true
        }
    },
    {
        name: "Fei Ming",
        img: "Fei Ming base.png",
        fullbody: "Fei Ming base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Fuuka Minami",
        img: "Fuuka Minami base.png",
        fullbody: "Fuuka Minami base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Fuyumi Shinomiya",
        img: "Fuyumi base.png",
        fullbody: "Fuyumi base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hannah",
        img: "Hannah base.png",
        fullbody: "Hannah base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hua Yubai",
        img: "Hua Yubai base.png",
        fullbody: "Hua Yubai base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Hua Yuqing",
        img: "Hua Yuqing base.png",
        fullbody: "Hua Yuqing base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Ju",
        img: "Ju base.png",
        fullbody: "Ju base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Kurone Toujou",
        img: "Kurone base.png",
        fullbody: "Kurone base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Kutsuji",
        img: "Kutsuji base.png",
        fullbody: "Kutsuji base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Leia",
        img: "Leia base.png",
        fullbody: "Leia base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Lily Kitahara",
        img: "Lily Kitahara base.png",
        fullbody: "Lily Kitahara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Ling",
        img: "Ling base.png",
        fullbody: "Ling base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Lin Lang",
        img: "Lin Lang base.png",
        fullbody: "Lin Lang base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Lin Lang",
        img: "Lin Lang base.png",
        fullbody: "Lin Lang base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Mirai",
        img: "Mirai base.png",
        fullbody: "Mirai base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Musa",
        img: "Musa base.png",
        fullbody: "Musa base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Qing Luan",
        img: "Qing Luan base.png",
        fullbody: "Qing Luan base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Ransei",
        img: "Ransei base.png",
        fullbody: "Ransei base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Yuan Feng",
        img: "Yuan Feng base.png",
        fullbody: "Yuan Feng base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    },
    {
        name: "Yuan Xiao",
        img: "Yuan Xiao base.png",
        fullbody: "Yuan Xiao base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Jane",
        img: "Jane base.png",
        fullbody: "Jane base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"]
        }
    },
    {
        name: "Saturne",
        img: "Saturne base.png",
        fullbody: "Saturne base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"]
        }
    }
];