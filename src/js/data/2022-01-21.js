dataSetVersion = "2022-01-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
        fullbody: "https://i.imgur.com/4qrNj1T.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime (Bonded)",
        img: "Ichihime bond.png",
        fullbody: "https://i.imgur.com/6z7ojjZ.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Ichihime",
        img: "Ichihime swimsuit.png",
        fullbody: "https://i.imgur.com/AjPbGdo.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime (New Year)",
        img: "Ichihime new year.png",
        fullbody: "https://i.imgur.com/chDYuKW.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Invincible Ichihime",
        img: "Ichihime invincible.png",
        fullbody: "https://i.imgur.com/92kHFFO.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou",
        img: "Miki base.png",
        fullbody: "https://i.imgur.com/S6F9pgX.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou (Bonded)",
        img: "Miki bond.png",
        fullbody: "https://i.imgur.com/0xTT4vm.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou (Halloween)",
        img: "Miki halloween.png",
        fullbody: "https://i.imgur.com/LkhYziy.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Celebration Miki Nikaidou",
        img: "Miki festival.png",
        fullbody: "https://i.imgur.com/QrMJRfw.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita",
        img: "Kana base.png",
        fullbody: "https://i.imgur.com/WwKmRDa.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Bonded)",
        img: "Kana bond.png",
        fullbody: "https://i.imgur.com/sft8zzw.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Christmas)",
        img: "Kana christmas.png",
        fullbody: "https://i.imgur.com/fH0XOkw.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Halloween)",
        img: "Kana halloween.png",
        fullbody: "https://i.imgur.com/t7kg3CQ.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chiori Mikami",
        img: "Chiori base.png",
        fullbody: "https://i.imgur.com/5coQ3Hd.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Bonded)",
        img: "Chiori bond.png",
        fullbody: "https://i.imgur.com/wf1LzLJ.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Christmas)",
        img: "Chiori christmas.png",
        fullbody: "https://i.imgur.com/8iM3JjF.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Swimsuit)",
        img: "Chiori swimsuit.png",
        fullbody: "https://i.imgur.com/Pddafut.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Sweet Refreshment Chiori Mikami",
        img: "Chiori sweets.png",
        fullbody: "https://i.imgur.com/dNyZTq2.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Mai Aihara",
        img: "Mai base.png",
        fullbody: "https://i.imgur.com/CI1Ki7p.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mai Aihara (Bonded)",
        img: "Mai bond.png",
        fullbody: "https://i.imgur.com/lHWCJlL.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Mai Aihara",
        img: "Mai swimsuit.png",
        fullbody: "https://i.imgur.com/1C4FoUB.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Wonderful Youth Mai Aihara",
        img: "Mai new year.png",
        fullbody: "https://i.imgur.com/MtJVvQS.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko",
        img: "Nadeshiko base.png",
        fullbody: "https://i.imgur.com/51iPcAx.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko (Bonded)",
        img: "Nadeshiko bond.png",
        fullbody: "https://i.imgur.com/myyGTz2.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Nadeshiko",
        img: "Nadeshiko swimsuit.png",
        fullbody: "https://i.imgur.com/WO0HTUw.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Auspicious Snow Nadeshiko",
        img: "Nadeshiko new year.png",
        fullbody: "https://i.imgur.com/PS7X7ud.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi",
        img: "Yui base.png",
        fullbody: "https://i.imgur.com/qXQaycu.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Bonded)",
        img: "Yui bond.png",
        fullbody: "https://i.imgur.com/fSbi9nF.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Christmas)",
        img: "Yui christmas.png",
        fullbody: "https://i.imgur.com/sCrgB9S.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Halloween)",
        img: "Yui halloween.png",
        fullbody: "https://i.imgur.com/29qtBwH.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou",
        img: "Riu base.png",
        fullbody: "https://i.imgur.com/p7p09db.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou (Bonded)",
        img: "Riu bond.png",
        fullbody: "https://i.imgur.com/KQPERGv.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Riu Kujou",
        img: "Riu swimsuit.png",
        fullbody: "https://i.imgur.com/zxTEKJ0.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou (New Year)",
        img: "Riu new year.png",
        fullbody: "https://i.imgur.com/Azlt9AJ.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia",
        img: "Xenia base.png",
        fullbody: "https://i.imgur.com/RtSYtSo.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia (Bonded)",
        img: "Xenia bond.png",
        fullbody: "https://i.imgur.com/SvqTHVy.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia (Halloween)",
        img: "Xenia halloween.png",
        fullbody: "https://i.imgur.com/1xmEo2n.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Xenia",
        img: "Xenia swimsuit.png",
        fullbody: "https://i.imgur.com/NMgmqqj.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi",
        img: "Kaavi base.png",
        fullbody: "https://i.imgur.com/0J4QPy6.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi (Bonded)",
        img: "Kaavi bond.png",
        fullbody: "https://i.imgur.com/0RKPl0B.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi (Swimsuit)",
        img: "Kaavi swimsuit.png",
        fullbody: "https://i.imgur.com/zBmW7nQ.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya",
        img: "Natsuki base.png",
        fullbody: "https://i.imgur.com/6tqOtbd.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya (Bonded)",
        img: "Natsuki bond.png",
        fullbody: "https://i.imgur.com/ngGIstr.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya (Halloween)",
        img: "Natsuki halloween.png",
        fullbody: "https://i.imgur.com/65iVtEb.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Auspicious Snow Natsuki Shinomiya",
        img: "Natsuki new year.png",
        fullbody: "https://i.imgur.com/IwUpWEb.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou",
        img: "Wanjirou base.png",
        fullbody: "https://i.imgur.com/RHiW9y5.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou (Bonded)",
        img: "Wanjirou bond.png",
        fullbody: "https://i.imgur.com/3CJEWgI.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou (Halloween)",
        img: "Wanjirou halloween.png",
        fullbody: "https://i.imgur.com/FhDyba2.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sora Ichinose",
        img: "Sora base.png",
        fullbody: "https://i.imgur.com/aiTlhOX.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Sora Ichinose (Bonded)",
        img: "Sora bond.png",
        fullbody: "https://i.imgur.com/aCwDSc9.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Sora Ichinose (Christmas)",
        img: "Sora christmas.png",
        fullbody: "https://i.imgur.com/MzNGk71.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Spring Homecoming Sora Ichinose",
        img: "Sora school.png",
        fullbody: "https://i.imgur.com/BFFS156.png",
        opts: {
            outfit: ["school"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Hideki Akechi",
        img: "Hideki base.png",
        fullbody: "https://i.imgur.com/eRAQwfQ.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Bonded)",
        img: "Hideki bond.png",
        fullbody: "https://i.imgur.com/s6e9krW.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Halloween)",
        img: "Hideki halloween.png",
        fullbody: "https://i.imgur.com/im8KNov.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Swimsuit)",
        img: "Hideki swimsuit.png",
        fullbody: "https://i.imgur.com/mOk4CsU.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Keikumusume",
        img: "Keikumusume base.png",
        fullbody: "https://i.imgur.com/V6zgmTq.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume (Bonded)",
        img: "Keikumusume bond.png",
        fullbody: "https://i.imgur.com/k86mVHS.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume (Swimsuit)",
        img: "Keikumusume swimsuit.png",
        fullbody: "https://i.imgur.com/GT0JyCC.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara",
        img: "Sara base.png",
        fullbody: "https://i.imgur.com/16AnOCQ.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara (Bonded)",
        img: "Sara bond.png",
        fullbody: "https://i.imgur.com/cBysfDu.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara (New Year)",
        img: "Sara new year.png",
        fullbody: "https://i.imgur.com/lHSZO7t.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Homecoming Sara",
        img: "Sara school.png",
        fullbody: "https://i.imgur.com/GZFhjCT.png",
        opts: {
            outfit: ["school"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya",
        img: "Hana base.png",
        fullbody: "https://i.imgur.com/WX0zhta.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya (Bonded)",
        img: "Hana bond.png",
        fullbody: "https://i.imgur.com/4deu9q9.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Celebration Hana Ninomiya",
        img: "Hana festival.png",
        fullbody: "https://i.imgur.com/Lts9F1d.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya (Swimsuit)",
        img: "Hana swimsuit.png",
        fullbody: "https://i.imgur.com/92MNtmR.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi",
        img: "Nana base.png",
        fullbody: "https://i.imgur.com/jPOo7zb.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi (Bonded)",
        img: "Nana bond.png",
        fullbody: "https://i.imgur.com/7ddKpUW.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi (Swimsuit)",
        img: "Nana swimsuit.png",
        fullbody: "https://i.imgur.com/7YMfHmI.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi",
        img: "Hinata base.png",
        fullbody: "https://i.imgur.com/Nh6CP0B.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi (Bonded)",
        img: "Hinata bond.png",
        fullbody: "https://i.imgur.com/TTWgXdM.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sweet Refreshment Hinata Takanashi",
        img: "Hinata sweets.png",
        fullbody: "https://i.imgur.com/oqrwSy1.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Firework Date Hinata Takanashi",
        img: "Hinata festival.png",
        fullbody: "https://i.imgur.com/h6186O9.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Haruna Igarashi",
        img: "Haruna base.png",
        fullbody: "https://i.imgur.com/ztMqKun.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Haruna Igarashi (Bonded)",
        img: "Haruna bond.png",
        fullbody: "https://i.imgur.com/xySDqI5.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Haruna Igarashi (Swimsuit)",
        img: "Haruna swimsuit.png",
        fullbody: "https://i.imgur.com/L6Ol7D7.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Spring Homecoming Haruna Igarashi",
        img: "Haruna school.png",
        fullbody: "https://i.imgur.com/l4BVFJc.png",
        opts: {
            outfit: ["school"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Anju Suzumiya",
        img: "Anju base.png",
        fullbody: "https://i.imgur.com/dTMJFAv.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Anju Suzumiya (Bonded)",
        img: "Anju bond.png",
        fullbody: "https://i.imgur.com/n4TF97f.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Bedtime Stories Anju Suzumiya",
        img: "Anju pyjama.png",
        fullbody: "https://i.imgur.com/TFd9JDx.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Firework Date Anju Suzumiya",
        img: "Anju festival.png",
        fullbody: "https://i.imgur.com/7Fn1XFt.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Joseph",
        img: "Joseph base.png",
        fullbody: "https://i.imgur.com/0g28JTv.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph (Bonded)",
        img: "Joseph bond.png",
        fullbody: "https://i.imgur.com/mbmkAdn.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph (New Year)",
        img: "Joseph new year.png",
        fullbody: "https://i.imgur.com/wkvRi8k.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou",
        img: "Osamu base.png",
        fullbody: "https://i.imgur.com/mJ98132.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou (Bonded)",
        img: "Osamu bond.png",
        fullbody: "https://i.imgur.com/RsccmOu.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Firework Date Osamu Saitou",
        img: "Osamu festival.png",
        fullbody: "https://i.imgur.com/4QCRS1E.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami",
        img: "Sawako base.png",
        fullbody: "https://i.imgur.com/LPjYqok.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami (Bonded)",
        img: "Sawako bond.png",
        fullbody: "https://i.imgur.com/oxrLiG7.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami (Christmas)",
        img: "Sawako christmas.png",
        fullbody: "https://i.imgur.com/4iy0SUp.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ein",
        img: "Ein base.png",
        fullbody: "https://i.imgur.com/Zi9Sm81.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein (Bonded)",
        img: "Ein bond.png",
        fullbody: "https://i.imgur.com/2GDM5WB.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein (Swimsuit)",
        img: "Ein swimsuit.png",
        fullbody: "https://i.imgur.com/WPbbJbL.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Momo Hina",
        img: "Momo base.png",
        fullbody: "https://i.imgur.com/iZsxadH.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Momo Hina (Bonded)",
        img: "Momo bond.png",
        fullbody: "https://i.imgur.com/C8TTfS7.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Wonderful Youth Momo Hina",
        img: "Momo new year.png",
        fullbody: "https://i.imgur.com/EJCrhpg.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Zan Tsukimi",
        img: "Zan base.png",
        fullbody: "https://i.imgur.com/rzP05KR.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Zan Tsukimi (Bonded)",
        img: "Zan bond.png",
        fullbody: "https://i.imgur.com/K9gpvdp.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Spring Homecoming Zan Tsukimi",
        img: "Zan school.png",
        fullbody: "https://i.imgur.com/P9Fo5yD.png",
        opts: {
            outfit: ["school"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto",
        img: "Kirara base.png",
        fullbody: "https://i.imgur.com/FC2gdGP.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto (Bonded)",
        img: "Kirara bond.png",
        fullbody: "https://i.imgur.com/TVPwyUg.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto (New Year)",
        img: "Kirara new year.png",
        fullbody: "https://i.imgur.com/di6bNUV.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaguyahime",
        img: "Kaguyahime base.png",
        fullbody: "https://i.imgur.com/Vo2oI1r.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaguyahime (Bonded)",
        img: "Kaguyahime bond.png",
        fullbody: "https://i.imgur.com/UnRHuJP.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Snowy Night Whisper Kaguyahime",
        img: "Kaguyahime christmas.png",
        fullbody: "https://i.imgur.com/1BH0geg.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi",
        img: "Ren base.png",
        fullbody: "https://i.imgur.com/iiRzt0a.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi (Bonded)",
        img: "Ren bond.png",
        fullbody: "https://i.imgur.com/u0phhLg.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi (Halloween)",
        img: "Ren halloween.png",
        fullbody: "https://i.imgur.com/ke76EOZ.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara",
        img: "Usumi base.png",
        fullbody: "https://i.imgur.com/g5KRuQF.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara (Bonded)",
        img: "Usumi bond.png",
        fullbody: "https://i.imgur.com/n22xQQ5.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "White Hymn Usumi Ishihara",
        img: "Usumi christmas.png",
        fullbody: "https://i.imgur.com/cEq16Ok.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Eliisa",
        img: "Eliisa base.png",
        fullbody: "https://i.imgur.com/9MirypL.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Eliisa (Bonded)",
        img: "Eliisa bond.png",
        fullbody: "https://i.imgur.com/PyQ54rC.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Bedtime Stories Eliisa",
        img: "Eliisa pyjama.png",
        fullbody: "https://i.imgur.com/CWTENiE.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chihori Terasaki",
        img: "Chihori base.png",
        fullbody: "https://i.imgur.com/5lmfRIb.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chihori Terasaki (Bonded)",
        img: "Chihori bond.png",
        fullbody: "https://i.imgur.com/FSP2ZQI.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga",
        img: "Saki base.png",
        fullbody: "https://i.imgur.com/d8WbiZF.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga (Bonded)",
        img: "Saki bond.png",
        fullbody: "https://i.imgur.com/tnE6P97.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga (Collab)",
        img: "Saki collab.png",
        fullbody: "https://i.imgur.com/ZmoayVG.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura",
        img: "Nodoka base.png",
        fullbody: "https://i.imgur.com/s58VvXy.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura (Bonded)",
        img: "Nodoka bond.png",
        fullbody: "https://i.imgur.com/NOOsTeZ.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura (Collab)",
        img: "Nodoka collab.png",
        fullbody: "https://i.imgur.com/5EPU2As.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Koromo Amae",
        img: "Koromo base.png",
        fullbody: "https://i.imgur.com/VRdJUDa.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Koromo Amae (Bonded)",
        img: "Koromo bond.png",
        fullbody: "https://i.imgur.com/InvhvtN.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Koromo Amae (Collab)",
        img: "Koromo collab.png",
        fullbody: "https://i.imgur.com/1wr1ijK.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Teru Miyanaga",
        img: "Teru base.png",
        fullbody: "https://i.imgur.com/zp52EsQ.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Teru Miyanaga (Bonded)",
        img: "Teru bond.png",
        fullbody: "https://i.imgur.com/LBTJAWf.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Teru Miyanaga (Collab)",
        img: "Teru collab.png",
        fullbody: "https://i.imgur.com/Ye85UOc.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji",
        img: "Fu Ji base.png",
        fullbody: "https://i.imgur.com/QuQ1BDV.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji (Bonded)",
        img: "Fu Ji bond.png",
        fullbody: "https://i.imgur.com/mV02Nxz.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Qi Xi",
        img: "Qi Xi base.png",
        fullbody: "https://i.imgur.com/dzLaWMB.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Qi Xi (Bonded)",
        img: "Qi Xi bond.png",
        fullbody: "https://i.imgur.com/4oz4QW5.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Yumeko Jabami",
        img: "Yumeko base.png",
        fullbody: "https://i.imgur.com/LILsALd.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami (Bonded)",
        img: "Yumeko bond.png",
        fullbody: "https://i.imgur.com/VzRwr8a.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami (Collab)",
        img: "Yumeko collab.png",
        fullbody: "https://i.imgur.com/zblv04Z.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome",
        img: "Mary base.png",
        fullbody: "https://i.imgur.com/lE2zzWj.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome (Bonded)",
        img: "Mary bond.png",
        fullbody: "https://i.imgur.com/Zpc04dH.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome (Collab)",
        img: "Mary collab.png",
        fullbody: "https://i.imgur.com/GPP6hmG.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima",
        img: "Midari base.png",
        fullbody: "https://i.imgur.com/fuHNGFS.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima (Bonded)",
        img: "Midari bond.png",
        fullbody: "https://i.imgur.com/GW8pi8K.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima (Collab)",
        img: "Midari collab.png",
        fullbody: "https://i.imgur.com/eCH5N0V.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami",
        img: "Kirari base.png",
        fullbody: "https://i.imgur.com/pH91Ew3.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami (Bonded)",
        img: "Kirari bond.png",
        fullbody: "https://i.imgur.com/dYPRhX4.png", 
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami (Collab)",
        img: "Kirari collab.png",
        fullbody: "https://i.imgur.com/eQBWG79.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami",
        img: "Reina base.png",
        fullbody: "https://i.imgur.com/Wqd3RFa.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami (Bonded)",
        img: "Reina bond.png",
        fullbody: "https://i.imgur.com/z3PdEu4.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "White Hymn Reina Nanami",
        img: "Reina christmas.png",
        fullbody: "https://i.imgur.com/BMfp9Mc.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "A-37",
        img: "A-37 base.png",
        fullbody: "https://i.imgur.com/PoaTGjb.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "A-37 (Bonded)",
        img: "A-37 bond.png",
        fullbody: "https://i.imgur.com/6dKrOlR.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Firework Date A-37",
        img: "A-37 festival.png",
        fullbody: "https://i.imgur.com/qx2HOiC.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hibiki Himekawa",
        img: "Hibiki base.png",
        fullbody: "https://i.imgur.com/zpB3Kmq.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Hibiki Himekawa (Bonded)",
        img: "Hibiki bond.png",
        fullbody: "https://i.imgur.com/P3IGuoW.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ryan",
        img: "Ryan base.png",
        fullbody: "https://i.imgur.com/jMVG8Py.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ryan (Bonded)",
        img: "Ryan bond.png",
        fullbody: "https://i.imgur.com/IBp9Hdf.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ayako Morikawa",
        img: "Ayako base.png",
        fullbody: "https://i.imgur.com/KWhsRwD.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ayako Morikawa (Bonded)",
        img: "Ayako bond.png",
        fullbody: "https://i.imgur.com/QwZFrQo.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Natsuhiko Takigawa",
        img: "Natsuhiko base.png",
        fullbody: "https://i.imgur.com/po4v1UT.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuhiko Takigawa (Bonded)",
        img: "Natsuhiko bond.png",
        fullbody: "https://i.imgur.com/UD3GUzq.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru",
        img: "Akagi base.png",
        fullbody: "https://i.imgur.com/nKk4mhD.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru (Bonded)",
        img: "Akagi bond.png",
        fullbody: "https://i.imgur.com/f1busNe.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru (Collab)",
        img: "Akagi collab.png",
        fullbody: "https://i.imgur.com/QrOzxL9.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao",
        img: "Washizu base.png",
        fullbody: "https://i.imgur.com/ZQjTR7I.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao (Bonded)",
        img: "Washizu bond.png",
        fullbody: "https://i.imgur.com/bTWwSH6.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao (Collab)",
        img: "Washizu collab.png",
        fullbody: "https://i.imgur.com/tnsaogR.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Kazuha Saionji",
        img: "Kazuha base.png",
        fullbody: "https://i.imgur.com/RhoYKJb.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kazuha Saionji (Bonded)",
        img: "Kazuha bond.png",
        fullbody: "https://i.imgur.com/LnVgHcs.png",
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