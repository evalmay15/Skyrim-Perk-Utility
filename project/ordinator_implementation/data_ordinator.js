/**
This document contains all of the perk information.  To create a new note, copy the node labeled
'Node X'.  Follow the example as given by the first perk, in the first perk tree.  Each perk tree
is labeled accordingly.  Do not change this as this is how the scripts display the information to
the canvas on the website.  If you have any questions, leave a comment on the issue documentation
on GitHub.  https://github.com/aaronmaynard/Skyrim-Perk-Utility
**/

(function() {

  window.perkTrees = [
    {
      name: 'Alchemy Ordinator',	// The name that shows on the top of the perk tree, as well as in the branch list.
      cname: 'alchemy',	// Do not change the name and cname.
      perks: [
        {
          name: 'Node 0',	// The name of the perk, ie: "Alchemist".
          levels: 5,		// The number of times this perk can be developed. If set to anything other then one, progress will show.
          desc: ['Description'],	// Description of what the perk does, ie: "Potions and poisons you make are 20% stronger.".
          req: [0, 20, 40, 60, 80],	// The skill level required to obtain the level(s) of the perk.
          pos: [0, 0],				// The position on the canvas. The canvas reposition based on the balance point.
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']	// The perk ID's. The number of perk ID's should match the number of levels.
        }, {
          name: 'Node X',	// NODE TEMPLATE
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Illusion',
      cname: 'illusion',
      perks: [
        {
          name: 'N0 - Illusion Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Illusion Dual Casting',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Quiet Before the Storm',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Night Eye',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 - Ghost of the Tenth Eye',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 - Dream Theif',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 - Kindred Mage',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Fickle Fate',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 - Master of the Mind',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Dream Charm',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N10 - Dream Geas',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 - Commanding Presence',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 - Crown of the False King',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 - Imperious Splendor',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Protect Your God',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Imposing Presence',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 - Shadow Refuge',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N17 - Wilting',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N18 - Neverworld',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N19 - Terror',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N20 - Soulcrusher',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 - Pandemonium',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N22 - Nightfall',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [21],
          id: ['00000000']
        }, {
          name: 'N23 - The Reaper Comes',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N24 - Lamb to the Slaughter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [23],
          id: ['00000000']
        }, {
          name: 'N25 - Heavy Weighs the Tapestry',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [24],
          id: ['00000000']
        }, {
          name: 'N26 - Entice Barter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N27 - Nemesis',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15, 26],
          id: ['00000000']
        }, {
          name: 'N28 - Blind Guardian',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [27],
          id: ['00000000']
        }, {
          name: 'N29 - Wraithwalker',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [25, 28],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Restoration',
      cname: 'restoration',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'N0 - Enchanting Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Soul Siphon',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Thunderstruck',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N3 - Spellscribe',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N4 - Might and Magic',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 - Power Echoes',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N6 - Gem Dust',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 - Preserver',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 - Regalia',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N9 - Twin Enchantment',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 - Arcane Nexus',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 - Miracle',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Last Word',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N13 - Staff Channeler',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N14 - Secret Keeper',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12, 13],
          id: ['00000000']
        }, {
          name: 'N15 - Staff Recharge',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [13, 14],
          id: ['00000000']
        }, {
          name: 'N16 - Charge Tap',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 - Attunement',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8, 15],
          id: ['00000000']
        }, {
          name: 'N18 - Heart of the Sun',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16, 17],
          id: ['00000000']
        }, {
          name: 'N19 - Flame of Magnus',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N20 - You Shall Not Pass',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16, 19],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Heavy Armor',
      cname: 'heavyarmor',
      perks: [
        {
          name: 'N0 - Heavy Armor Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Cushioned',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Battle Weary',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Born to Fight',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 - Break Upon Me',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N5 - Rise Above',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 - Primal Fear',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Reap the Whirlwind',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N8 - Sovereign',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Face of the Mountain',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 - Heavy Armor Fit',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Face of Death',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Defiance',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N13 - Bedrock',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Revel in Battle',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N15 - Rallying Standard',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N16 - Never Kneel',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12, 15],
          id: ['00000000']
        }, {
          name: 'N17 - Out of the Inferno',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 - Warbringer',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N19 - Doombringer',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 - Immortal',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17, 18],
          id: ['00000000']
        }, {
          name: 'N21 - Lead the Tempest',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3, 11, 13],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Block',
      cname: 'block',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Two-Handed',
      cname: 'twohanded',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Archery',
      cname: 'marksman',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Light Armor',
      cname: 'lightarmor',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Sneak',
      cname: 'sneak',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Lockpicking',
      cname: 'lockpicking',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Pickpocket',
      cname: 'pickpocket',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Speech',
      cname: 'speechcraft',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }
  ];

}).call(this);
