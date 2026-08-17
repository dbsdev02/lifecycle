export type Product = {
  slug: string;
  category: "copper" | "brass";
  title: string;
  tagline: string;
  detail: string;
  applications: string[];
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "copper-tubes-pipes",
    category: "copper",
    title: "Tubes & Pipes",
    tagline: "Precision-manufactured for plumbing, HVAC, refrigeration and industrial fluid-carrying applications.",
    detail:
      "Manufactured to consistent wall thickness and diameter tolerances, our copper tubes and pipes are suited to fluid- and gas-carrying applications where leak-proof jointing and long-term corrosion resistance matter. From plumbing risers to refrigerant lines, they are produced through our integrated recycling-to-manufacturing process for consistent quality batch after batch.",
    applications: ["Plumbing & water supply lines", "HVAC & refrigeration systems", "Medical gas piping", "Industrial fluid transfer"],
    image: "https://images.unsplash.com/photo-1560883123-04646fef95df?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Copper pipe elbow fitting",
  },
  {
    slug: "copper-coils",
    category: "copper",
    title: "Coils",
    tagline: "Manufactured to consistent gauge and quality for electrical and industrial winding applications.",
    detail:
      "Wound to precise gauge and length, our copper coils are produced for applications where consistent electrical conductivity and a smooth, defect-free surface are essential. They serve as a core input for transformer, motor and general electrical winding work across our customer base.",
    applications: ["Transformer & motor winding", "Electrical coil manufacturing", "General industrial winding applications"],
    image: "https://images.unsplash.com/photo-1707409464255-e78eb873298a?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Coil of copper wire",
  },
  {
    slug: "copper-flats",
    category: "copper",
    title: "Flats",
    tagline: "Used in busbars, electrical connections and industrial fabrication.",
    detail:
      "Manufactured to close dimensional tolerances, our copper flats are used wherever a flat, high-conductivity section is required — from busbars carrying heavy electrical loads to structural and fabrication applications across industry.",
    applications: ["Busbars & electrical connections", "Switchgear & panel fabrication", "General industrial fabrication"],
    image: "https://images.unsplash.com/photo-1743964817509-f171e2539363?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Brushed copper sheet surface",
  },
  {
    slug: "copper-rods",
    category: "copper",
    title: "Rods",
    tagline: "A core input for wire drawing and further downstream manufacturing.",
    detail:
      "Our copper rods are produced as a core semi-finished input for wire drawing and further downstream processing, manufactured to consistent diameter and purity so that customers can rely on predictable results through their own manufacturing process.",
    applications: ["Wire drawing feedstock", "Fastener & component manufacturing", "General engineering fabrication"],
    image: "https://images.unsplash.com/photo-1681108212545-04cabe9cf771?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Polished cylindrical metal rods",
  },
  {
    slug: "copper-wires",
    category: "copper",
    title: "Wires",
    tagline: "Manufactured for electrical, power and general engineering applications.",
    detail:
      "Drawn from high-purity copper rod, our wires are manufactured for applications where consistent conductivity, ductility and surface finish are critical — supporting power infrastructure, EV and automotive wiring harnesses, and general engineering use.",
    applications: ["Power & electrical wiring", "EV & automotive harnesses", "General engineering applications"],
    image: "https://images.unsplash.com/photo-1678119895596-411628b1f6be?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Braided high-purity copper cable",
  },
  {
    slug: "copper-ingots",
    category: "copper",
    title: "Ingots",
    tagline: "High-purity ingots for further processing and manufacturing use.",
    detail:
      "Cast from refined copper, our ingots serve as a high-purity raw material for customers running their own downstream melting, casting or alloying processes, offering a consistent, traceable starting point for further manufacturing.",
    applications: ["Downstream melting & casting", "Alloy production feedstock", "Foundry & industrial use"],
    image: "https://images.unsplash.com/photo-1763926062529-1edf8664c366?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Metal bars stacked in a warehouse",
  },
  {
    slug: "copper-billets",
    category: "copper",
    title: "Billets",
    tagline: "Semi-finished copper for extrusion and further fabrication.",
    detail:
      "Produced as a semi-finished cylindrical form, our copper billets are manufactured for customers running extrusion or further hot- and cold-working processes, offering a consistent cross-section and purity for predictable downstream results.",
    applications: ["Extrusion feedstock", "Forging & further fabrication", "General industrial processing"],
    image: "https://images.unsplash.com/photo-1763926025477-423847028860?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Metal bars and rods stacked on warehouse shelves",
  },
  {
    slug: "copper-anodes",
    category: "copper",
    title: "Anodes",
    tagline: "Produced for electro-refining and further copper processing.",
    detail:
      "Cast as flat plates, our copper anodes are produced for electro-refining processes, where they are dissolved and redeposited as high-purity cathode copper. They form an important intermediate step in our integrated recycling-to-refining value chain.",
    applications: ["Electro-refining processes", "Further copper purification", "Industrial processing feedstock"],
    image: "https://plus.unsplash.com/premium_photo-1756717265408-ff18012bd238?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Diamond-embossed copper metal plate",
  },
  {
    slug: "copper-nuggets",
    category: "copper",
    title: "Nuggets",
    tagline: "Recovered and refined copper in nugget form for remelting and manufacturing.",
    detail:
      "Recovered through our systematic collection, sorting and refining process, copper nuggets offer customers a convenient, high-purity form for remelting and further manufacturing, reflecting our commitment to responsible resource recovery.",
    applications: ["Remelting feedstock", "Alloy production", "Foundry use"],
    image: "https://images.unsplash.com/photo-1725258913349-a107acd5f7f6?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Pile of recovered copper scrap pieces",
  },
  {
    slug: "copper-cathode",
    category: "copper",
    title: "Cathode",
    tagline: "High-purity refined copper, a key raw material for downstream manufacturing.",
    detail:
      "Produced through electro-refining to a consistently high level of purity, copper cathode is a key raw material for our own downstream manufacturing as well as for customers producing wire rod, alloys and other copper-based products.",
    applications: ["Wire rod manufacturing", "Alloy production", "Downstream copper manufacturing"],
    image: "https://images.unsplash.com/photo-1753771145085-d71e89c23092?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Stacked copper cathode sheets in a storage yard",
  },
  {
    slug: "brass-wires",
    category: "brass",
    title: "Wires",
    tagline: "Manufactured for electrical, engineering and fastener applications.",
    detail:
      "Drawn to precise gauge, our brass wires combine good conductivity with the strength and corrosion resistance brass is known for, making them suited to electrical, engineering and fastener manufacturing applications.",
    applications: ["Electrical components", "Fastener manufacturing", "General engineering applications"],
    image: "https://plus.unsplash.com/premium_photo-1783091468169-dd9f1e571f63?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Thin brass rods on a white surface",
  },
  {
    slug: "brass-strips",
    category: "brass",
    title: "Strips",
    tagline: "Used across electrical components, engineering and fabrication industries.",
    detail:
      "Manufactured to consistent gauge and temper, our brass strips are used across the manufacture of electrical components, connectors and terminals, as well as broader engineering and fabrication applications.",
    applications: ["Electrical components & connectors", "Terminal manufacturing", "Engineering & fabrication"],
    image: "https://images.unsplash.com/photo-1723492289003-218ad9ef67c8?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Textured brass metal surface",
  },
  {
    slug: "brass-tubes",
    category: "brass",
    title: "Tubes",
    tagline: "Suited for plumbing, engineering and industrial applications.",
    detail:
      "Corrosion-resistant and easy to machine, our brass tubes are manufactured for plumbing fittings, engineering components and a broad range of industrial applications where brass's combination of strength and workability is valued.",
    applications: ["Plumbing fittings & fixtures", "Engineering components", "General industrial applications"],
    image: "https://images.unsplash.com/photo-1707409464203-df2f21c32b9c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Brass valves and fittings",
  },
  {
    slug: "brass-other-products",
    category: "brass",
    title: "Other Brass Products",
    tagline: "Additional brass products manufactured as per industry and customer requirements.",
    detail:
      "Beyond our standard brass range, our integrated manufacturing capabilities allow us to produce additional brass products to customer specification — please get in touch to discuss your specific requirement.",
    applications: ["Customer-specified components", "Fittings & fasteners", "Custom industrial requirements"],
    image: "https://images.unsplash.com/photo-1785827485643-1ba197d53e5b?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Brass hex fitting close-up",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
