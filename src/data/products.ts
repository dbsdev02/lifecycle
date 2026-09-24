import tubesPipes from "@/assets/products/tubes-pipes.jpg";
import tubesPipes2 from "@/assets/products/tubes-pipes-2.jpg";
import tubesPipes3 from "@/assets/products/tubes-pipes-3.jpg";
import copperCoils from "@/assets/products/copper-coils.jpg";
import copperCoils2 from "@/assets/products/copper-coils-2.jpg";
import copperCoils3 from "@/assets/products/copper-coils-3.jpg";
import copperFlats from "@/assets/products/copper-flats.jpg";
import copperRods from "@/assets/products/copper-rods.jpg";
import copperWires from "@/assets/products/copper-wires.jpg";
import copperNuggets from "@/assets/products/copper-nuggets.jpg";
import phosphorusBars from "@/assets/products/phosphorus-bars.jpg";
import phosphorusBars2 from "@/assets/products/phosphorus-bars-2.jpg";
import copperIngots from "@/assets/products/copper-ingots.jpg";
import copperBillets from "@/assets/products/copper-billets.jpg";
import copperAnodes from "@/assets/products/copper-anodes.jpg";
import copperCathode from "@/assets/products/copper-cathode.jpg";
import brassWire from "@/assets/products/brass-wire.jpg";
import brassStrip from "@/assets/products/brass-strip.jpg";
import brassStrip2 from "@/assets/products/brass-strip-2.jpg";
import brassTubes from "@/assets/products/brass-tubes.jpg";
import brassTubes2 from "@/assets/products/brass-tubes-2.jpg";
import brassTubes3 from "@/assets/products/brass-tubes-3.jpg";

export type ProductSection = { title: string; items: string[] };

export type Product = {
  slug: string;
  category: "copper" | "brass";
  title: string;
  brand?: string;
  tagline: string;
  detail: string;
  applications: string[];
  sections?: ProductSection[];
  image: string;
  imageAlt: string;
  gallery?: string[];
};

const cathoflow = "CATHOFLOW Copper Tubes — by SVG Metals Upcycling Pvt Ltd · Pure Copper. Perfect flow.";

const rawProducts: Product[] = [
  {
    slug: "copper-tubes-pipes",
    category: "copper",
    title: "Tubes & Pipes",
    brand: cathoflow,
    tagline: "Copper and copper-alloy tubes and pipes made to national and international standards, to customer specification.",
    detail:
      "At SVG Group, our commitment lies in delivering high-quality raw materials tailored to meet the specific requirements of our clients. Our extensive range of copper and copper-based alloy products is crafted using high-quality raw materials and employs advanced manufacturing techniques. We adhere to rigorous quality control measures throughout the production process. At SVG we ensure the production of copper and copper alloy products in compliance with both national and international standards, based on customer specifications.",
    applications: [
      "Air Conditioning & Refrigeration",
      "Plumbing & Waterlines",
      "Medical Gas",
      "Instrumentation",
      "Electricals",
      "Defence",
      "General Engineering",
      "Oil & Gas",
      "Desalination Plants",
      "Architectural & Furniture work",
    ],
    sections: [
      {
        title: "Grades",
        items: ["Electrolytic Tough Pitch (ETP)", "Phosphorus Deoxidized (DHP)", "Deoxidized Low Phosphorus (DLP)"],
      },
      {
        title: "Straight Pipes and Tubes",
        items: ["Sizes: 2 mm OD to 250 mm OD", "Length: up to 10 mtrs or as required", "Thickness: 0.30 mm to 20 mm", "Temper: O / HH / H"],
      },
      {
        title: "Tubes for Plumbing & Medical Gases",
        items: ["Sizes: 6 mm OD to 159 mm OD", "Length: 10 ft or as required", "Thickness: 0.5 mm to 2.5 mm", "Temper: H / HH"],
      },
      { title: "Shapes", items: ["Round, square, rectangular, etc. as per requirement"] },
    ],
    image: tubesPipes2,
    imageAlt: "Copper tubes of varying diameters",
    gallery: [tubesPipes, tubesPipes3],
  },
  {
    slug: "copper-coils",
    category: "copper",
    title: "Coils",
    brand: cathoflow,
    tagline: "Bright annealed copper pancake coils, meticulously crafted for air conditioning and refrigeration.",
    detail:
      "Introducing our Copper Pancake Coils, meticulously crafted for air conditioning and refrigeration excellence. Designed with a specialized tube configuration, these coils comply with rigorous industry standards, ensuring reliability and durability. Available in various delivery forms, they offer installation flexibility to suit diverse system requirements. After a comprehensive cleaning process, our coils are sealed to maintain purity and prevent contamination, guaranteeing sustained performance. The internal surfaces are bright, clean, and dry, optimizing heat transfer and minimizing corrosion risks. Trust in our commitment to quality, providing a superior solution that not only meets but exceeds the expectations of the air conditioning and refrigeration industry.",
    applications: [
      "Chiller",
      "Evaporators",
      "Coolers",
      "Refrigeration",
      "Air Conditioning, VRV & VRF",
      "Heat Exchangers",
      "Electrical Transformers",
      "Induction Heating Systems",
      "Automotive Radiators",
      "Solar Thermal Collectors",
      "Medical Imaging Equipment",
      "Wireless Power Transfer Systems",
    ],
    sections: [
      {
        title: "Specifications",
        items: [
          'Sizes: 1/8" (3.2 mm) OD to 1" (25.4 mm) OD',
          "Length: 50 ft / 100 ft as per requirement",
          "Thickness: 10 s.w.g (3.2 mm) to 27 s.w.g (0.4 mm)",
          "Temper: O",
        ],
      },
    ],
    image: copperCoils,
    imageAlt: "Bright annealed copper pancake coil",
    gallery: [copperCoils2, copperCoils3],
  },
  {
    slug: "copper-flats",
    category: "copper",
    title: "Flats",
    tagline: "Used in busbars, electrical connections and industrial fabrication.",
    detail:
      "Manufactured to close dimensional tolerances, our copper flats are used wherever a flat, high-conductivity section is required — from busbars carrying heavy electrical loads to structural and fabrication applications across industry.",
    applications: [
      "Electrical components",
      "Electrical wiring",
      "Busbars",
      "Heat exchangers",
      "Automotive radiator fins",
      "Solar panel manufacturing",
      "Cookware and kitchen utensils",
      "Railway electrification systems",
      "Industrial machinery",
    ],
    sections: [
      {
        title: "Specifications",
        items: [
          "Sizes: width up to 250 mm, thickness up to 25 mm",
          "Length: as per customer specifications",
          "Temper: HH, O",
          "Grade: Copper — Commercial, EC, ETP, OFHC",
        ],
      },
    ],
    image: copperFlats,
    imageAlt: "Copper flats",
  },
  {
    slug: "copper-rods",
    category: "copper",
    title: "Rods",
    tagline: "A core input for wire drawing and further downstream manufacturing.",
    detail:
      "Our copper rods are produced as a core semi-finished input for wire drawing and further downstream processing, manufactured to consistent diameter and purity so that customers can rely on predictable results through their own manufacturing process.",
    applications: [
      "Electrical components",
      "Electrical wiring",
      "Busbars",
      "Heat exchangers",
      "Automotive radiator fins",
      "Solar panel manufacturing",
      "Cookware and kitchen utensils",
      "Railway electrification systems",
      "Industrial machinery",
    ],
    sections: [
      {
        title: "Specifications",
        items: [
          "Sizes: 6 mm to 150 mm",
          "Length: as per customer specifications",
          "Temper: HH, O",
          "Grade: Copper — Commercial, EC, ETP, OFHC",
        ],
      },
    ],
    image: copperRods,
    imageAlt: "Copper rods and bars",
  },
  {
    slug: "copper-wires",
    category: "copper",
    title: "Wires",
    tagline: "Manufactured for electrical, power and general engineering applications.",
    detail:
      "Drawn from high-purity copper rod, our wires are manufactured for applications where consistent conductivity, ductility and surface finish are critical — supporting power infrastructure, EV and automotive wiring harnesses, and general engineering use.",
    applications: ["Electroplating", "Electrical wiring", "Electronic components", "Power distribution systems"],
    sections: [
      {
        title: "Features",
        items: ["Excellent electrical conductivity", "High tensile strength", "Smooth surface for easy handling"],
      },
    ],
    image: copperWires,
    imageAlt: "Coils of copper wire",
  },
  {
    slug: "copper-nuggets",
    category: "copper",
    title: "Nuggets",
    tagline: "Compact, high-copper-content pieces — a convenient raw material for melting, refining and alloy production.",
    detail:
      "Copper Nuggets are compact, high-copper-content pieces used as a convenient raw material for melting, refining and alloy production. Their consistent composition and easy handling make them suitable for various metallurgical and copper-processing applications.",
    applications: [
      "Copper Melting & Refining",
      "Copper Alloy Manufacturing",
      "Foundries",
      "Electrical & Conductive Products",
      "Industrial Components",
    ],
    image: copperNuggets,
    imageAlt: "Pile of copper nuggets",
  },
  {
    slug: "copper-phosphorus-bars",
    category: "copper",
    title: "Phosphorus Bars",
    tagline: "Copper-phosphorus alloy bars with excellent deoxidizing properties.",
    detail:
      "Copper Phosphorus Bars are copper-based alloy products containing phosphorus, designed to provide excellent deoxidizing properties, good fluidity and strong metallurgical performance. They are widely used in copper and copper-alloy processing, particularly where improved casting quality, joint strength and resistance to oxidation are required.",
    applications: [
      "Copper & Copper-Alloy Casting",
      "Brazing & Soldering",
      "Heat Exchangers",
      "Plumbing & Refrigeration",
      "Electrical Components",
    ],
    image: phosphorusBars,
    imageAlt: "Stacked copper phosphorus bars",
    gallery: [phosphorusBars2],
  },
  {
    slug: "copper-ingots",
    category: "copper",
    title: "Ingots",
    tagline: "Controlled melting and casting for consistent chemical composition.",
    detail:
      "Our copper ingots are produced under controlled melting and casting conditions to ensure consistent chemical composition, dimensional uniformity and dependable performance. Suitable for remelting, alloy manufacturing and diverse industrial applications.",
    applications: [
      "Copper rods and wires",
      "Sheets and plates",
      "Tubes and pipes",
      "Electrical components",
      "Industrial components",
      "Construction applications",
    ],
    image: copperIngots,
    imageAlt: "Stacked copper ingots",
  },
  {
    slug: "copper-billets",
    category: "copper",
    title: "Billets",
    tagline: "Engineered for efficient extrusion.",
    detail:
      "Our copper billets offer uniform composition, excellent surface quality and reliable hot-working performance. Manufactured with precise process control, they are ideal for producing seamless and dimensionally consistent copper products.",
    applications: [
      "Copper tubes and pipes",
      "Rods and bars",
      "Profiles and sections",
      "Fittings and connectors",
      "HVAC components",
      "Automotive and engineering components",
    ],
    image: copperBillets,
    imageAlt: "Stacked copper billets",
  },
  {
    slug: "copper-anodes",
    category: "copper",
    title: "Anodes",
    tagline: "The foundation of refined copper.",
    detail:
      "Our copper anodes are manufactured with controlled chemistry and uniform casting to support efficient electrorefining and consistent cathode production. Their dependable quality enables stable refining, improved recovery and reliable output.",
    applications: [
      "Electrolytic copper refining",
      "Production of copper cathodes",
      "Electrical wires and cables",
      "Conductors and busbars",
      "Electronics and electrical components",
      "High-purity copper manufacturing",
    ],
    image: copperAnodes,
    imageAlt: "Stacked copper anode plates",
  },
  {
    slug: "copper-cathode",
    category: "copper",
    title: "Cathodes",
    tagline: "High-purity copper. Consistent quality. Reliable performance.",
    detail:
      "Manufactured through advanced electrorefining, our copper cathodes deliver exceptional purity, uniform composition and consistent performance. Produced from responsibly recycled copper, they provide dependable conductivity and processability for demanding electrical and industrial applications.",
    applications: [
      "Copper Rod & Wire Manufacturing",
      "Electrical & Power Industry",
      "HVAC & Refrigeration",
      "Automotive & EVs",
      "Renewable Energy",
      "Electronics",
      "Industrial Manufacturing",
    ],
    sections: [
      {
        title: "Key Features",
        items: ["High purity", "Excellent conductivity", "Consistent quality", "Traceable production", "Sustainable manufacturing"],
      },
    ],
    image: copperCathode,
    imageAlt: "Copper cathode sheets lifted by a crane at the plant",
  },
  {
    slug: "brass-wires",
    category: "brass",
    title: "Wire",
    tagline: "Alloy composition for enhanced strength and corrosion resistance.",
    detail:
      "Featuring alloy composition for enhanced strength and corrosion resistance, SVG Brass Wire finds applications in fasteners, musical instruments, and jewellery manufacturing. Choose SVG for versatility and quality in brass wire solutions.",
    applications: ["Jewellery Manufacturing", "Fasteners and Screws", "Musical Instruments", "Zipper Industries"],
    image: brassWire,
    imageAlt: "Coils of brass wire",
  },
  {
    slug: "brass-strips",
    category: "brass",
    title: "Strip",
    tagline: "A balanced copper–zinc alloy in a range of precise thicknesses.",
    detail:
      "SVG Group proudly presents our brass strips, meticulously crafted to redefine versatility and precision in diverse applications. These strips exemplify our commitment to delivering top-notch quality, making them the preferred choice across various industries. SVG Brass Strips feature a carefully balanced alloy composition, combining copper and zinc for enhanced strength and corrosion resistance. Our brass strips are available in a range of precise thicknesses, offering flexibility for different requirements.",
    applications: ["Electrical Components", "Automotive Industry", "Decorative Elements", "Industrial Fabrication"],
    image: brassStrip,
    imageAlt: "Brass strips",
    gallery: [brassStrip2],
  },
  {
    slug: "brass-tubes",
    category: "brass",
    title: "Tubes",
    tagline: "Exceptional corrosion resistance and high wear resistance, with a low friction coefficient against steel.",
    detail:
      "Leveraging our extensive industry expertise and profound product knowledge, we adeptly manage the requirements of Brass Tubes. Our state-of-the-art manufacturing facility ensures adherence to stringent international standards, guaranteeing top-notch quality. Renowned for their exceptional corrosion resistance and high wear resistance, these brass tubes also exhibit a low friction coefficient against steel. These versatile Brass Tubes find application in diverse sectors such as Furniture & Lighting Fixtures, General Engineering, Arsenic Brass Tubes for Sugar Industries, Admiralty Brass Tubes for Evaporators & Coolers, Sanitary Fittings & Accessories, and Agriculture Equipment, showcasing their adaptability across various industries.",
    applications: [
      "Architectural elements",
      "Instrumentation",
      "Decorative fixtures",
      "Automotive Cooling Systems",
      "Marine Applications",
      "Furniture Manufacturing",
      "Water Purification Systems",
      "Gas and Fluid Transportation",
      "Imitation Bangles",
    ],
    sections: [
      {
        title: "Specifications",
        items: [
          "Sizes: 6 mm to 150 mm",
          "Length: up to 10 mtrs",
          "Thickness: 0.5 to 10 mm",
          "Temper: O, HH",
          "Shapes: Round, Oval, Reeded, Square, Rectangular or any non-standard type",
        ],
      },
    ],
    image: brassTubes2,
    imageAlt: "Brass tubes of varying diameters",
    gallery: [brassTubes, brassTubes3],
  },
];

const order = [
  "copper-cathode",
  "copper-ingots",
  "copper-billets",
  "copper-anodes",
  "copper-tubes-pipes",
  "copper-coils",
  "copper-nuggets",
  "copper-phosphorus-bars",
  "copper-flats",
  "copper-rods",
  "copper-wires",
  "brass-tubes",
  "brass-wires",
  "brass-strips",
];

export const products: Product[] = [...rawProducts].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
