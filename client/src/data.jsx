
const list = [
    {
        id: 1,
        name: "Poke Ball",
        description: "A Poké Ball is a type of item that is critical to a Trainer's quest, used for catching and storing Pokémon.",
        price: 1,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/pokeball_VOhaWEM.png"
    },
    {
        id: 2,
        name: "Great Ball",
        description: "The Great Ball is a type of Poké Ball introduced in Generation I. It is an improved variant of the regular Poké Ball that can be used to catch wild Pokémon.",
        price: 2,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/great_ball_1rY2Bbx.png"
    },
    {
        id: 4,
        name: "Ultra Ball",
        description: "The Ultra Ball is a type of Poké Ball introduced in Generation I. It is an improved variant of the Great Ball that can be used to catch wild Pokémon.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/ultra_ball_R9gVrn6.png"
    },
    {
        id: 5,
        name: "Master Ball",
        description: "The Master Ball is a type of Poké Ball introduced in Generation I. It can be used to catch a wild Pokémon without fail. It was invented by the Silph Co.",
        price: 10000,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/master_ball_KRItZuj.png"
    },
    {
        id: 6,
        name: "Potion",
        description: "The Potion is a type of medicine that can be used to restore a Pokémon's HP.",
        price: 1,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/potion_vHvVsq2.png"
    },
    {
        id: 7,
        name: "Super Potion",
        description: "The Super Potion is a type of medicine that can be used to restore a Pokémon's HP. It is an improved counterpart of the Potion.",
        price: 2,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Super_potion_D6VitJG.png"
    },
    {
        id: 8,
        name: "Hyper Potion",
        description: "The Hyper Potion is a type of medicine that can can be used to restore a Pokémon's HP. It is an improved counterpart of the Potion and Super Potion.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/hyper_potion_XG41oYh.png"
    },
    {
        id: 9,
        name: "Max Potion",
        description: "The Max Potion is a type of medicine that can be used to restore a Pokémon's HP. It is an improved counterpart of the Potion, Super Potion and Hyper Potion.",
        price: 5,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/max_potion_svKJryZ.png"
    },
    {
        id: 10,
        name: "Full Restore",
        description: "The Full Restore is a type of medicine that can fully restores a Pokémon's HP and cures it of all non-volatile status conditions and confusion.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/full_restore_xz9Qnmy.png"
    },
    {
        id: 11,
        name: "Antidote",
        description: "The Antidote is a type of status condition healing medicine. It cures a Pokémon of poison.",
        price: 8,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Antidote_LkA8r8x.png"
    },
    {
        id: 12,
        name: "Revive",
        description: "The Revive is a type of medicine. It revives a fainted Pokémon and restores half of its maximum HP.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/revive_Bo4SeEr.png"
    },
    {
        id: 13,
        name: "Burn Heal",
        description: "The Burn Heal is a type of medicine. It cures a Pokémon from a burn.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Burn_heal_fH5B4Km.png"
    },
    {
        id: 14,
        name: "Ice Heal",
        description: "The Ice Heal is a type of medicine. It can be used to thaw a frozen Pokémon.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Ice_heal_u5OHqwT.png"
    },
    {
        id: 15,
        name: "Paralyze Heal",
        description: "The Paralyze Heal called is a type of medicine. It can be used to cure a Pokémon from paralysis.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Paralyze_Heal_3RrLWNh.png"
    },
    {
        id: 16,
        name: "Awakening",
        description: "The Awakening is a type of medicine. It can be used to wake a Pokémon from sleep.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Awakening_GvxTfXL.png"
    },
    {
        id: 17,
        name: "Full Heal",
        description: "The Full Heal is a type of medicine. It can be used to cure a Pokémon of all non-volatile status conditions and confusion.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Full_heal_XSh05iv.png"
    },
    {
        id: 18,
        name: "Repel",
        description: "Prevents wild Pokémon with a lower level than the first member of the party from appearing for 100 steps.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/repel_iJuCjHs.png"
    },
    {
        id: 19,
        name: "Max Repel",
        description: "One-time-use item that allows the user to walk 250 steps without encountering any wild Pokémon lower than the level of the user's first Pokémon in their party.",
        price: 5,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Max_repel_Qz0KgtZ.png"
    },
    {
        id: 20,
        name: "HP Up",
        description: "The HP Up is a type of vitamin. It increases the HP of a Pokémon.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/HP_Up_gpcP8RO.png"
    },
    {
        id: 21,
        name: "Protein",
        description: "It increases the Attack of a Pokémon.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Protein_sjLtgOl.png"
    },
    {
        id: 22,
        name: "Iron",
        description: "The Iron is a type of vitamin that increases the Defense of a Pokémon.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Iron_OQea2Jd.png"
    },
    {
        id: 23,
        name: "Carbos",
        description: "The Carbos  is a type of vitamin that increases the Speed of a Pokémon.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Carbos_2nFFFrY.png"
    },
    {
        id: 24,
        name: "Calcium",
        description: "The Calcium is a type of vitamin that increases the Special Attack of a Pokémon.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Calcium_gGX9dwA.png"
    },
    {
        id: 25,
        name: "Rare Candy",
        description: "It raises the level of a single Pokémon by one. A candy that is packed with energy. When consumed, it will instantly raise the level of a single Pokémon by one.",
        price: 20,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Rare_Candy_JLObRGE.png"
    },
    {
        id: 26,
        name: "Leaf Stone",
        description: "The Leaf Stone is a special elemental stone, which, when used on certain Pokémon, evolves them. It is an elliptical-shape stone that is brown and has a leaf on it, and usually makes Grass-type Pokémon evolve.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Leaf_stone_cM9t7io.png"
    },
    {
        id: 27,
        name: "Fire Stone",
        description: "The Fire Stone is a type of Evolution stone that makes certain Fire-type Pokemon evolve.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Fire_stone_jX0IJUA.png"
    },
    {
        id: 28,
        name: "Water Stone",
        description: "The Water Stone is a type of Evolution stone that makes certain Water-type Pokemon evolve.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Water_Stone_QoJupnL.png"
    },
    {
        id: 29,
        name: "Thunder Stone",
        description: "The Thunder Stone is a type of Evolution stone that makes certain Electric-type Pokemon evolve.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Thunder_stone_5PpeiHx.png"
    },
    {
        id: 30,
        name: "Fresh Water",
        description: "Fresh Water is a type of medicine drink that restores a Pokémon's HP.",
        price: 5,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/fresh_water_iitkyVj.png"
    },
    {
        id: 31,
        name: "Soda Pop",
        description: "Soda Pop is a type of medicine drink that restores a Pokémon's HP.",
        price: 5,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/soda_pop_lzmRD9E.png"
    },
    {
        id: 32,
        name: "Lemonade",
        description: "Lemonade is a type of medicine drink that restores a Pokémon's HP.",
        price: 5,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/lemonade_B9WM0c6.png"
    },
    {
        id: 33,
        name: "X Attack",
        description: "The X Attack is a type of battle item that temporarily boosts the Attack stat.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/X_attack_FIFhrXU.png"
    },
    {
        id: 34,
        name: "X Speed",
        description: "The X Speed is a type of battle item that temporarily boosts the Speed stat.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/X_Speed_jlRyjPz.png"
    },
    {
        id: 35,
        name: "X Accuracy",
        description: "The X Accuracy is a type of battle item that temporarily boosts a Pokémon's accuracy.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/X_Accuracy_QpKrsK9.png"
    },
    {
        id: 36,
        name: "X Defend",
        description: "The X Defense is a type of battle item that temporarily boosts the Defense stat.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/X_Defend_8yK3UOp.png"
    },
    {
        id: 37,
        name: "X Secial",
        description: "The X Special is a type of battle item that temporarily boosts the Special Attack.",
        price: 7,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/X_Special_b3Nrri2.png"
    },
    {
        id: 38,
        name: "PP UP",
        description: "The PP Up is a type of vitamin that raises the PP of a selected move by 1/5 of the move's base PP.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/PP_Up_N4Ew6HH.png"
    },
    {
        id: 39,
        name: "Ether",
        description: "The Ether is a type of medicine that restores 10 PP for one of a Pokémon's moves.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Ether_qkK6fH5.png"
    },
    {
        id: 40,
        name: "Max Ether",
        description: "The Max Ether is a type of medicine that fully restores PP for one of a Pokémon's moves.",
        price: 3,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Max_Ether_JvKGg9t.png"
    },
    {
        id: 41,
        name: "Max Elixer",
        description: "The Max Elixer is a type of medicine that fully restores PP for all of a Pokémon's moves.",
        price: 5,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Max_Elixer_aTpdyHU.png"
    },
    {
        id: 42,
        name: "Escape Rope",
        description: "The Escape Rope is an item that is used to escape a cave or dungeon.",
        price: 10,
        image: "http://127.0.0.1:8000/media/pokemart/uploads/items/Escape_Rope_OqnY9oM.png"
    }
]

export default list;