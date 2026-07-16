const i18n = {
    es: {
        hero: "El primer bar cofrade de Écija. Tradición, incienso y sabor bajo palio.",
        allergens: "Tenemos a su disposición la información sobre alérgenos. Pregunte a nuestro personal.",
        address: "Plaza de Santa María, Écija",
        locationTitle: "Ubicación",
        locationAddress: "Plaza de Santa María, 6, Écija",
        locationHours: "Abierto todos los días",
        locationDirections: "Cómo llegar"
    },
    en: {
        hero: "The first Holy Week themed bar in Écija. Tradition, incense and flavor under the canopy.",
        allergens: "Allergen information is available. Please ask our staff.",
        address: "Santa María Square, Écija",
        locationTitle: "Location",
        locationAddress: "Santa María Square, 6, Écija",
        locationHours: "Open every day",
        locationDirections: "Get Directions"
    },
    de: {
        hero: "Die erste Karwoche-Themenbar in Écija. Tradition, Weihrauch und Geschmack.",
        allergens: "Informationen zu Allergenen sind verfügbar. Bitte fragen Sie unser Personal.",
        address: "Plaza de Santa María, Écija",
        locationTitle: "Standort",
        locationAddress: "Plaza de Santa María, 6, Écija",
        locationHours: "Täglich geöffnet",
        locationDirections: "Anfahrt"
    },
    fr: {
        hero: "Le premier bar à thème de la Semaine Sainte à Écija. Tradition, encens et saveur.",
        allergens: "Des informations sur les allergènes sont disponibles. Veuillez demander à notre personnel.",
        address: "Place Santa María, Écija",
        locationTitle: "Emplacement",
        locationAddress: "Place Santa María, 6, Écija",
        locationHours: "Ouvert tous les jours",
        locationDirections: "Comment s'y rendre"
    }
};

const menuData = {
    categories: [
        {
            id: "montaditos",
            name: { es: "MONTADITOS", en: "SANDWICHES (MONTADITOS)", de: "BRÖTCHEN (MONTADITOS)", fr: "SANDWICHES (MONTADITOS)" },
            items: [
                { name: "JARTIBLE", price: "2.50€", desc: { es: "Carne mechá con mojo picón", en: "Roasted shredded pork with mojo picón sauce", de: "Gezupftes Schweinefleisch mit Mojo-Picón-Sauce", fr: "Porc effiloché rôti avec sauce mojo picón" } },
                { name: "REBOTO", price: "2.50€", desc: { es: "Carne mechá con salmorejo", en: "Roasted shredded pork with salmorejo", de: "Gezupftes Schweinefleisch mit Salmorejo", fr: "Porc effiloché rôti avec salmorejo" } },
                { name: "CIRIAL", price: "2.50€", desc: { es: "Carne mechá con salsa gaucha", en: "Roasted shredded pork with gaucha sauce", de: "Gezupftes Schweinefleisch mit Gaucha-Sauce", fr: "Porc effiloché rôti avec sauce gaucha" } },
                { name: "ZANCO", price: "2.50€", desc: { es: "Carne mechá con roquefort", en: "Roasted shredded pork with Roquefort cheese", de: "Gezupftes Schweinefleisch mit Roquefort-Käse", fr: "Porc effiloché rôti au Roquefort" } },
                { name: "REVIRÁ", price: "2.50€", desc: { es: "Chicharrón", en: "Traditional Andalusian pork belly (Chicharrón)", de: "Traditioneller andalusischer Schweinebauch", fr: "Poitrine de porc andalouse traditionnelle" } },
                { name: "NAVETA", price: "2.50€", desc: { es: "Caballa con tomate y mahonesa", en: "Mackerel with tomato and mayonnaise", de: "Makrele mit Tomate und Mayonnaise", fr: "Maquereau avec tomate et mayonnaise" } },
                { name: "MUÑIDOR", price: "2.50€", desc: { es: "Caballa con pimiento del piquillo", en: "Mackerel with piquillo peppers", de: "Makrele mit Piquillo-Paprika", fr: "Maquereau aux piments piquillo" } },
                { name: "PERTIGUERO", price: "2.50€", desc: { es: "Chorizo picante", en: "Spicy chorizo", de: "Würzige Chorizo", fr: "Chorizo épicé" } },
                { name: "COSTAL", price: "2.50€", desc: { es: "Atún en manteca ibérica", en: "Tuna in Iberian pork lard", de: "Thunfisch in iberischem Schweineschmalz", fr: "Thon au saindoux ibérique" } },
                { name: "TRABAJADERA", price: "3.00€", desc: { es: "Salmón y queso fresco", en: "Salmon and fresh cheese", de: "Lachs und Frischkäse", fr: "Saumon et fromage frais" } },
                { name: "LLAMADOR", price: "2.50€", desc: { es: "Pringá", en: "Traditional slow-cooked meat stew (Pringá)", de: "Traditionelles geschmortes Fleisch (Pringá)", fr: "Viande mijotée traditionnelle (Pringá)" } },
                { name: "CANDELABRO", price: "3.00€", desc: { es: "Lacón con rulo de cabra y cebolla caramelizada", en: "Cured pork shoulder with goat cheese and caramelized onion", de: "Gepökelte Schweineschulter mit Ziegenkäse und karamellisierten Zwiebeln", fr: "Épaule de porc séchée avec fromage de chèvre et oignon caramélisé" } },
                { name: "CORRIENTE", price: "2.00€", desc: { es: "Tortilla", en: "Spanish potato omelette", de: "Spanisches Kartoffelomelett", fr: "Omelette espagnole aux pommes de terre" } },
                { name: "RESPIRADERO", price: "2.00€", desc: { es: "Lomo", en: "Pork loin", de: "Schweinelende", fr: "Longe de porc" } },
                { name: "IZQUIERDO", price: "3.00€", desc: { es: "Solomillo de atún rojo encebollado al queso viejo", en: "Bluefin tuna sirloin with onions and aged cheese", de: "Roter Thunfischrücken mit Zwiebeln und altem Käse", fr: "Filet de thon rouge aux oignons et fromage affiné" } },
                { name: "PEREGRINO", price: "3.00€", desc: { es: "Anchoa con rulo de cabra", en: "Anchovy with goat cheese", de: "Sardelle mit Ziegenkäse", fr: "Anchois avec fromage de chèvre" } }
            ]
        },
        {
            id: "tapas-frias",
            name: { es: "TAPAS FRÍAS", en: "COLD TAPAS", de: "KALTE TAPAS", fr: "TAPAS FROIDES" },
            items: [
                { name: "SALMOREJO", price: "2.50€", desc: { es: "", en: "Cold tomato and bread puree", de: "Kaltes Tomaten-Brot-Püree", fr: "Purée froide de tomates et pain" } },
                { name: "TORTILLA", price: "2.50€", desc: { es: "", en: "Spanish potato omelette", de: "Spanisches Kartoffelomelett", fr: "Omelette espagnole aux pommes de terre" } },
                { name: "ENSALADILLA", price: "2.50€", desc: { es: "", en: "Russian potato salad", de: "Russischer Kartoffelsalat", fr: "Salade de pommes de terre russe" } },
                { name: "ESPINACA LABRÁ", price: "2.50€", desc: { es: "", en: "Traditional mashed spinach", de: "Traditioneller andalusischer Spinat", fr: "Épinards écrasés traditionnels" } },
                { name: "BANDERILLAS DE ATÚN AHUMADO Y QUESO", price: "3.00€", desc: { es: "", en: "Smoked tuna and cheese skewers", de: "Spieße mit geräuchertem Thunfisch und Käse", fr: "Brochettes de thon fumé et fromage" } },
                { name: "BANDERILLAS DE MOJAMA Y QUESO", price: "3.00€", desc: { es: "", en: "Cured tuna (mojama) and cheese skewers", de: "Spieße mit luftgetrocknetem Thunfisch und Käse", fr: "Brochettes de thon séché et fromage" } },
                { name: "BANDERILLAS DE BOQUERÓN Y ANCHOA", price: "3.00€", desc: { es: "", en: "Pickled white anchovy and salted anchovy skewers", de: "Spieße mit eingelegten und gesalzenen Sardellen", fr: "Brochettes de boquerón et anchois" } },
                { name: "GILDAS", price: "3.50€", desc: { es: "", en: "Olive, anchovy and pepper skewers", de: "Oliven-Sardellen-Paprika-Spieße", fr: "Brochettes d'olives, anchois et piments" } },
                { name: "MEJILLONES AL NATURAL", price: "2.50€", desc: { es: "", en: "Natural mussels", de: "Naturbelassene Miesmuscheln", fr: "Moules nature" } },
                { name: "MEJILLÓN AL NATURAL CON PICADILLO", price: "3.00€", desc: { es: "", en: "Natural mussels with minced vegetables", de: "Naturbelassene Miesmuscheln mit gehacktem Gemüse", fr: "Moules nature avec légumes hachés" } },
                { name: "MEJILLONES EN ESCABECHE", price: "2.50€", desc: { es: "", en: "Pickled mussels", de: "Eingelegte Miesmuscheln", fr: "Moules à l'escabèche" } },
                { name: "SALPICÓN", price: "2.50€", desc: { es: "", en: "Seafood vinaigrette salad", de: "Meeresfrüchtesalat mit Vinaigrette", fr: "Salade de fruits de mer vinaigrette" } },
                { name: "CHASCA", price: "2.50€", desc: { es: "", en: "Traditional local tapa", de: "Traditionelle lokale Tapa", fr: "Tapa locale traditionnelle" } },
                { name: "PATATAS ALIOLI", price: "2.50€", desc: { es: "", en: "Potatoes with garlic mayonnaise", de: "Kartoffeln mit Knoblauchmayonnaise", fr: "Pommes de terre aïoli" } },
                { name: "SARTENCITA DE QUESO PROVOLONE", price: "3.50€", desc: { es: "", en: "Melted provolone cheese pan", de: "Geschmolzener Provolone-Käse in der Pfanne", fr: "Poêle de fromage provolone fondu" } },
                { name: "CORAZONCITO DE ALCACHOFA", price: "2.50€", desc: { es: "", en: "Artichoke hearts", de: "Artischockenherzen", fr: "Coeurs d'artichaut" } }
            ]
        },
        {
            id: "tostas",
            name: { es: "TOSTAS", en: "TOASTS", de: "TOASTS", fr: "TOASTS" },
            items: [
                { name: "PRIOSTE", price: "3.50€", desc: { es: "Anchoa con leche condensada", en: "Anchovy with condensed milk", de: "Sardelle mit Kondensmilch", fr: "Anchois au lait concentré" } },
                { name: "VESTIDOR", price: "3.50€", desc: { es: "Atún en manteca", en: "Tuna in pork lard", de: "Thunfisch in Schweineschmalz", fr: "Thon au saindoux" } },
                { name: "VOCAL", price: "3.50€", desc: { es: "Anchoa", en: "Anchovy", de: "Sardelle", fr: "Anchois" } },
                { name: "MAYORDOMO", price: "3.50€", desc: { es: "Sardina ahumada con salmorejo", en: "Smoked sardine with salmorejo", de: "Geräucherte Sardine mit Salmorejo", fr: "Sardine fumée au salmorejo" } },
                { name: "SECRETARIO", price: "3.50€", desc: { es: "Anchoa y queso", en: "Anchovy and cheese", de: "Sardelle und Käse", fr: "Anchois et fromage" } },
                { name: "DIPUTADO", price: "3.50€", desc: { es: "Atún ahumado, queso brie y cebolla caramelizada", en: "Smoked tuna, brie cheese and caramelized onion", de: "Geräucherter Thunfisch, Brie und karamellisierte Zwiebeln", fr: "Thon fumé, brie et oignon caramélisé" } },
                { name: "CAMARERA", price: "3.50€", desc: { es: "Mojama", en: "Cured tuna (Mojama)", de: "Luftgetrockneter Thunfisch", fr: "Thon séché (Mojama)" } },
                { name: "AGUAÓ", price: "3.50€", desc: { es: "Tomate con palometa ahumada", en: "Tomato with smoked pomfret", de: "Tomate mit geräucherter Brachse", fr: "Tomate et castagnole fumée" } },
                { name: "CONTRAGUIA", price: "4.00€", desc: { es: "Aguacate y palometa ahumada", en: "Avocado and smoked pomfret", de: "Avocado und geräucherte Brachse", fr: "Avocat et castagnole fumée" } },
                { name: "MONAGUILLO", price: "3.50€", desc: { es: "Hueva de atún de leche", en: "Tuna roe", de: "Thunfischrogen", fr: "Oeufs de thon" } },
                { name: "MANTOLETA", price: "3.50€", desc: { es: "Base de salmorejo cubierta de chicharrón", en: "Salmorejo base topped with pork belly", de: "Salmorejo-Basis belegt mit Schweinebauch", fr: "Base de salmorejo garnie de poitrine de porc" } },
                { name: "MISTERIO", price: "4.00€", desc: { es: "Base de pico de gallo cubierta de palometa, punto de guacamole y crema agria con toque de camarón", en: "Pico de gallo base, smoked pomfret, guacamole, sour cream and shrimp touch", de: "Pico de gallo, geräucherte Brachse, Guacamole, Sauerrahm und Garnelen-Touch", fr: "Pico de gallo, castagnole fumée, guacamole, crème aigre et touche de crevette" } },
                { name: "POTENCIAS", price: "3.50€", desc: { es: "Velo de tocino ibérico veteado", en: "Iberian marbled bacon veil", de: "Hauchdünner iberischer Speck", fr: "Voile de lard ibérique marbré" } },
                { name: "CARRETA", price: "4.00€", desc: { es: "Morcilla con rulo de cabra y cebolla caramelizada", en: "Blood sausage with goat cheese and caramelized onion", de: "Blutwurst mit Ziegenkäse und karamellisierten Zwiebeln", fr: "Boudin noir avec fromage de chèvre et oignon caramélisé" } },
                { name: "TAMBORILERO", price: "3.50€", desc: { es: "Queso curado con anchoa", en: "Cured cheese with anchovy", de: "Gereifter Käse mit Sardelle", fr: "Fromage affiné et anchois" } },
                { name: "AL CIELO CON ÉL", price: "4.00€", desc: { es: "Lomo de orza con pimienta y sal de hielo", en: "Preserved pork loin with pepper and ice salt", de: "Eingelegte Schweinelende mit Pfeffer und Eissalz", fr: "Longe de porc confite au poivre et sel de glace" } },
                { name: "ROCIERO", price: "4.00€", desc: { es: "Ensalada de salmón", en: "Salmon salad", de: "Lachssalat", fr: "Salade de saumon" } }
            ]
        },
        {
            id: "chacina",
            name: { es: "CHACINA", en: "COLD CUTS", de: "AUFSCHNITT", fr: "CHARCUTERIE" },
            items: [
                { name: "QUESO CURADO DE OVEJA", price: "2.50€", desc: { es: "(Tapa)", en: "Cured sheep cheese (Tapa)", de: "Gereifter Schafskäse (Tapa)", fr: "Fromage de brebis affiné (Tapa)" } },
                { name: "SALCHICHÓN IBÉRICO", price: "2.50€", desc: { es: "(Tapa)", en: "Iberian salchichón (Tapa)", de: "Iberische Salami (Tapa)", fr: "Saucisson ibérique (Tapa)" } },
                { name: "JAMÓN IBÉRICO DE CEBO", price: "12.00€", desc: { es: "(Plato)", en: "Iberian bait-fed ham (Platter)", de: "Iberischer Schinken (Platte)", fr: "Jambon ibérique (Assiette)" } },
                { name: "ATÚN PATA NEGRA", price: "16.00€", desc: { es: "", en: "Premium tuna", de: "Premium-Thunfisch", fr: "Thon premium" } },
                { name: "CHICHARRÓN", price: "8.00€", desc: { es: "(Plato)", en: "Pork belly platter", de: "Schweinebauch-Platte", fr: "Assiette de poitrine de porc" } },
                { name: "CAÑA LOMO", price: "2.50€ / 10.00€", desc: { es: "(Tapa / Plato)", en: "Cured pork loin (Tapa / Platter)", de: "Luftgetrocknete Schweinelende (Tapa / Platte)", fr: "Longe de porc séchée (Tapa / Assiette)" } },
                { name: "CECINA DE LEÓN", price: "3.50€", desc: { es: "", en: "Cured beef from León", de: "Luftgetrocknetes Rindfleisch aus León", fr: "Bœuf séché de León" } },
                { name: "TABLA DE EMBUTIDOS GOURMET", price: "16.00€", desc: { es: "(200 gr aprox)", en: "Gourmet cold cuts platter", de: "Gourmet-Aufschnittplatte", fr: "Assiette de charcuterie gourmet" } }
            ]
        },
        {
            id: "tostones",
            name: { es: "TOSTONES", en: "LARGE TOASTS", de: "GROSSE TOASTS", fr: "GRANDS TOASTS" },
            items: [
                { name: "CAPATAZ", price: "10.00€", desc: { es: "Carne mechá con crema de queso viejo", en: "Roasted pork with aged cheese cream", de: "Gebratenes Schweinefleisch mit alter Käsecreme", fr: "Porc rôti avec crème de fromage affiné" } },
                { name: "HERMANO MAYOR", price: "13.00€", desc: { es: "Lomo al whisky y jamón con crema de queso viejo", en: "Pork in whisky sauce and ham with aged cheese cream", de: "Schweinefleisch in Whiskysauce und Schinken mit alter Käsecreme", fr: "Porc au whisky et jambon avec crème de fromage affiné" } },
                { name: "FISCAL", price: "13.00€", desc: { es: "Ahumados", en: "Smoked fish assortment", de: "Auswahl an Räucherfisch", fr: "Assortiment de poissons fumés" } }
            ]
        },
        {
            id: "platos",
            name: { es: "PLATOS", en: "MAIN PLATES", de: "HAUPTGERICHTE", fr: "PLATS PRINCIPAUX" },
            items: [
                { name: "TOMATE CON MELVA", price: "9.00€", desc: { es: "", en: "Tomato with frigate tuna", de: "Tomate mit Fregattmakrele", fr: "Tomate et maquereau" } },
                { name: "PAPAS ALIÑÁS SANLUQUEÑAS CON MELVA CANUTERA", price: "5.00€", desc: { es: "", en: "Dressed potatoes (Sanlúcar style) with frigate tuna", de: "Marinierte Kartoffeln mit Fregattmakrele", fr: "Pommes de terre assaisonnées avec maquereau" } },
                { name: "PLACERES DEL MAR", price: "13.00€", desc: { es: "Daditos de atún al ajillo", en: "Diced garlic tuna", de: "Gewürfelter Thunfisch mit Knoblauch", fr: "Dés de thon à l'ail" } },
                { name: "PLACERES DEL MAR", price: "13.00€", desc: { es: "Ventresca de atún a las finas hierbas", en: "Tuna belly with fine herbs", de: "Thunfischbauch mit feinen Kräutern", fr: "Ventrèche de thon aux fines herbes" } },
                { name: "PLACERES DEL MAR", price: "13.00€", desc: { es: "Solomillo de atún en salsa de setas", en: "Tuna sirloin in mushroom sauce", de: "Thunfischrücken in Pilzsauce", fr: "Filet de thon sauce aux champignons" } }
            ]
        },
        {
            id: "extras",
            name: { es: "EXTRAS", en: "EXTRAS", de: "EXTRAS", fr: "EXTRAS" },
            items: [
                { name: "SERVICIO DE PAN Y ROSCOS", price: "1.00€", desc: { es: "", en: "Bread and breadsticks service", de: "Brot und Gebäck", fr: "Service de pain et gressins" } },
                { name: "PAQUETES DE PATATAS", price: "1.00€", desc: { es: "", en: "Potato chips", de: "Kartoffelchips", fr: "Chips de pommes de terre" } }
            ]
        }
    ]
};
