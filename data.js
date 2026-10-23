/* Public-source specifications dated 2026-10-15, with approved historical email quote summaries. */
globalThis.PARAXANTHINE_DATA = {
  updated: '2026-10-23',
  scope: 'China-based raw-material supplier research; public-source specifications and dated historical email quote summaries.',
  email_quote_context: 'Historical email quotes, with dates in China time; not guaranteed current offers. Quoted quantities do not establish MOQ. No explicit MOQ or quote expiry was stated in the reviewed messages.',
  identity: {name: 'Paraxanthine', synonym: '1,7-Dimethylxanthine', cas: '611-59-6', formula: 'C7H8N4O2', molar_mass_g_mol: 180.16},
  independent_batch_tests: 0,
  limitations: [
    'Supplier specifications, grade, certification and sample statements are attributed marketing or document claims, not independent laboratory verification.',
    'No record establishes that a particular supplied batch is suitable or legally authorized for human consumption.',
    'Purity is not the same as assay. Neither alone establishes contaminant control or intended-use suitability.',
    'No dose, capsule preparation or consumption recommendation is included.'
  ],
  suppliers: [
    {
      id: 'varror', company: 'Shenzhen Varror Biotech Co., Ltd.', location: 'Shenzhen, Guangdong, China', source_type: 'official',
      purity: '≥98.5%; representative public batch PX260621 reports 99.1%.',
      grade: 'Bulk nutraceutical / formulation ingredient marketed to qualified B2B projects. Consumer grade is not verified.',
      moq: 'Low-MOQ sampling advertised; no fixed minimum stated. Standard 25 kg drums and custom packaging.',
      document_status: 'Public example COA', has_coa: true,
      documentation: 'Example COA uses an in-house standard. Methods, chromatograms, residual solvents and additional impurity testing need further documentation.',
      restriction: 'Sampling and supply are framed for qualified businesses.', restriction_tags: ['business'],
      caveat: 'Representative public batch results are supplier document claims, not independent testing or verification of a supplied batch.', warning: '',
      sources: [{label: 'Product page', url: 'https://varror.com/products/paraxanthine-powder/'}]
    },
    {
      id: 'heya', company: 'Shenzhen Heya Biotechnology Co., Ltd. / 深圳赫亚生物科技有限公司', location: 'Shenzhen, Guangdong, China', source_type: 'marketplace',
      purity: '99% in a supplier-submitted listing.',
      grade: 'Raw material. Platform-wide terms specify non-food, non-medical industrial / scientific use.',
      moq: '1 g listed; 1 kg, 10 kg and 25 kg packaging.',
      document_status: 'No batch COA verified', has_coa: false,
      documentation: 'No batch-specific COA verified. The legal supplying entity and relationship to the contact domain remain to be confirmed.',
      restriction: 'Non-consumption restriction. Supplement marketing does not override the platform terms.', restriction_tags: ['research'],
      caveat: 'This is a supplier-posted marketplace listing, not an independent certification.', warning: '',
      sources: [{label: 'Listing', url: 'https://www.chemicalbook.com/SupplyInfo_3039382.htm'}]
    },
    {
      id: 'gihi', company: 'GIHI Chemicals Co., Limited', location: 'Hangzhou, Zhejiang, China', source_type: 'official',
      purity: '≥99.0%.',
      grade: 'Listed in the human-nutrition / dietary-supplement category. Actual supplied grade is unverified.',
      moq: 'Minimum not specified. 25 kg/drum listed; smaller sample availability requires confirmation.',
      document_status: 'No batch COA verified', has_coa: false,
      documentation: 'No actual batch COA verified.',
      restriction: 'Domestic individual supply and intended-use suitability are not established.', restriction_tags: ['unknown'],
      caveat: 'A product-category label does not establish supplied grade or regulatory authorization.', warning: '',
      sources: [{label: 'Product page', url: 'https://www.gihichem.com/nutrition-supplements/human-nutrition/dietary-supplements/paraxanthine-caffeine-alternative-cas-611-59.html'}]
    },
    {
      id: 'jianfeng', company: 'Jinan Jianfeng Chemical Co., Ltd.', location: 'Jinan, Shandong, China', source_type: 'official',
      email_quote_status: 'Can supply; quote pending (no price given).',
      purity: '≥98% HPLC.',
      grade: 'Research / formulation positioning; exercise and cosmetics research described on the product page.',
      moq: '10 g. 1 / 5 / 25 kg packaging; samples and custom packing advertised.',
      document_status: 'COA by request', has_coa: false,
      documentation: 'COA offered by request, but no actual batch document verified. Lead-time statements conflict: 4–6 working days versus 2–5 days.',
      restriction: 'Individual-buyer eligibility and exact grade require confirmation.', restriction_tags: ['unknown'],
      caveat: 'Advertised samples and a small MOQ do not confirm individual-buyer eligibility.', warning: '',
      sources: [{label: 'Product page', url: 'https://www.jianfengchemicals.com/products/Nutraceutical-Ingredients/Paraxanthine.html'}]
    },
    {
      id: 'kintai', company: 'Kintai / Kintainutri', location: 'China; exact legal supplying entity to be confirmed', source_type: 'official',
      email_quote: {date: '2026-10-16', offers: [{quantity: '30 g sample', price: '$54 (currency unconfirmed)'}], terms: 'Shipping waived. Currency code and tax unspecified.'},
      purity: '97–99%, HPLC; synthetic origin.',
      grade: 'Marketed as a dietary / healthcare supplement ingredient. Certification claims are not independently validated.',
      moq: 'Normal MOQ 1 kg. Gram-scale / free samples advertised.',
      document_status: 'Public example COA', has_coa: true,
      documentation: 'Web example COA image exists; it is not independently qualified for a supplied batch.',
      restriction: 'Free samples or gram quantities do not establish an individual retail offer.', restriction_tags: ['unknown'],
      caveat: 'Confirm the legal supplying entity on a quotation. Marketing and example documentation are not independent batch verification.', warning: '',
      sources: [{label: 'Product page', url: 'https://www.kintainutri.com/paraxanthine-powder-1/'}]
    },
    {
      id: 'yuanrui', company: 'Suzhou Yuanrui Biotech Co., Ltd.', location: 'Suzhou, Jiangsu, China', source_type: 'official',
      purity: '≥98% HPLC.',
      grade: 'Marketed as a nutraceutical / sports-nutrition ingredient.',
      moq: 'Gram, kilogram and tonne quantities advertised. 25 kg/drum or custom packaging; fixed minimum unstated.',
      document_status: 'Public specification', has_coa: false,
      documentation: 'Public specification includes HNMR identity and contaminant limits. No supplied-batch measured results verified.',
      restriction: 'Marketing about food / supplement compliance is not independent approval.', restriction_tags: ['unknown'],
      caveat: 'A specification gives acceptance limits; it does not demonstrate measured results for a particular batch.', warning: '',
      sources: [{label: 'Product page', url: 'https://yuanruibio.com/product/17-dimethylxanthine-paraxanthine-cas-611-59-6/'}]
    },
    {
      id: 'youyou', company: 'Youyou Biotechnology Co., Ltd.', location: 'Suzhou, Jiangsu, China', source_type: 'official',
      email_quote: {date: '2026-10-17', offers: [{quantity: '30 g', price: 'RMB 245'}, {quantity: '100 g', price: 'RMB 450'}], terms: 'Shipping included for both. Tax unspecified.'},
      purity: 'Purity and assay both ≥99.0% HPLC.',
      grade: 'PRAXPULSE™ branded ingredient. ISO9001 / FSSC22000 / HALAL / KOSHER and SELF-GRAS claimed.',
      moq: 'Flexible MOQ, laboratory quantities and samples advertised. No fixed minimum.',
      document_status: 'No batch COA verified', has_coa: false,
      documentation: 'Certifications and self-GRAS claim are not independently validated. No actual batch COA verified.',
      restriction: 'Self-GRAS wording does not establish Chinese domestic food authorization or universal safety.', restriction_tags: ['unknown'],
      caveat: 'Purity and assay are separately claimed measures. Certifications and self-GRAS marketing are not verified approvals in this record.', warning: '',
      sources: [{label: 'Product page', url: 'https://www.uubiotech.com/productdetail/PRAXPULSE-Paraxanthine-482'}]
    },
    {
      id: 'prius', company: "Xi'an Prius Biological Engineering Co., Ltd.", location: "Xi'an, Shaanxi, China", source_type: 'official',
      email_quote: {date: '2026-10-19', offers: [{quantity: '30 g', price: 'CNY 200 total'}], terms: 'Tax and domestic shipping included.'},
      purity: 'Headline ≥99%; example table reports 97.1% HPLC against a ≥95.0% specification.',
      grade: 'Health-care raw material; OEM / ODM and custom supplement marketing.',
      moq: 'Free samples advertised; fixed minimum unstated.',
      document_status: 'Public example results', has_coa: true,
      documentation: 'Example table: bulk density 0.44 g/cm³ (specification 0.4–0.5), drying loss 3.8%, mostly conforming contaminant results.',
      restriction: 'Purity discrepancy remains unresolved. Do not transfer density or other properties between suppliers or batches.', restriction_tags: ['unknown'],
      caveat: 'These are public example results, not independently verified supplied-batch measurements.', warning: 'Conflicting purity claims',
      sources: [{label: 'Product page', url: 'https://www.prius-biotech.com/health-care-raw-material/paraxanthine-powder.html'}]
    },
    {
      id: 'cima', company: 'Wuxi Cima Science Co., Ltd.', location: 'Wuxi, Jiangsu, China', source_type: 'official',
      email_quote: {date: '2026-10-14', offers: [{quantity: '30 g', price: 'RMB 200 total'}], terms: 'Shipping included. Tax unspecified.'},
      purity: 'Headline 99% minimum; body states a standard specification of 98% minimum.',
      grade: 'All products restricted to laboratory / research use; human and animal use prohibited.',
      moq: 'Sample / custom services advertised. Standard 25 kg/drum; fixed minimum unstated.',
      document_status: 'Expired example COA', has_coa: true,
      documentation: 'Web example CS-PA-240418: made 2024-04-18; expired 2026-04-17. Reports purity 99.40% and dry-basis assay 99.00%.',
      restriction: 'Research only. The expired web example cannot establish a current batch.', restriction_tags: ['research'],
      caveat: 'The example expired before this record date. Neither its results nor the conflicting product specifications establish a current supplied batch.', warning: 'Expired example · specification conflict',
      sources: [{label: 'Product page', url: 'https://cimasci.com/products/paraxanthine-powder/'}, {label: 'Use restriction', url: 'https://cimasci.com/contact-us/'}]
    },
    {
      id: 'faithful', company: "Xi'an Faithful BioTech Co., Ltd.", location: "Xi'an, Shaanxi, China", source_type: 'official',
      purity: 'Headline 99% and separate 99.5% claim; example COA reports 98.92% against ≥98.0%.',
      grade: 'Medicine / pharmaceutical grade and research uses claimed; not independently validated.',
      moq: '1 g. Custom packaging and free samples advertised.',
      document_status: 'Public example COA', has_coa: true,
      documentation: 'Example COA has identity / impurity entries and mostly “Qualified” contaminant results. No independently verified supplied batch.',
      restriction: 'USA / EU / AU warehouses advertised. A Chinese base does not establish domestic individual fulfillment.', restriction_tags: ['unknown'],
      caveat: 'Conflicting purity claims remain unresolved. Example results do not establish the grade or quality of any supplied batch.', warning: 'Conflicting purity claims',
      sources: [{label: 'Product page', url: 'https://www.faithfulbiochem.com/api-powder/raw-material-1-7-dimethylxanthine'}]
    }
  ]
};
