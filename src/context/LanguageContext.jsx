import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      qualifications: 'Qualifications',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookNow: 'Book Now',
      brandName: 'Acharya Venkateswarlu',
      brandSubtitle: 'Astrologer',
    },
    // Hero
    hero: {
      titleLine1: 'Trusted Hereditary',
      titleLine2: 'Astrologer',
      titleHighlightPart1: '15+ Years',
      titleHighlightPart2: 'of Vedic Excellence',
      subtitle: 'Guiding lives through ancient Jyotisha wisdom passed through generations',
      cta1: 'Book Consultation',
      cta2: 'Consult on WhatsApp',
      badge1: '15+ Years',
      badge2: 'Hereditary',
      badge3: '10000+ Consultations',
    },
    // About
    about: {
      sectionTag: 'Our Legacy',
      title: 'About Acharya Venkateswarlu',
      profileName: 'Acharya Venkateswarlu',
      profileTitle: 'Hereditary Astrologer',
      profileSubtitle: 'Jyotisha Acharya',
      description: 'Astrology has been practiced in our family for generations, passed down from our revered ancestors and forefathers. This sacred knowledge of Jyotisha Shastra has been preserved and refined through each generation, combining the timeless wisdom of Vedic astrology with modern analytical approaches.',
      description2: 'With over 15 years of dedicated practice, Astrologer Acharya Venkateswarlu has guided thousands of families and individuals through life\'s most important decisions — from marriage compatability and career choices to resolving planetary doshas and vastu consultations.',
      stat1Title: '15+',
      stat1Label: 'Years Experience',
      stat2Title: '10000+',
      stat2Label: 'Consultations',
      stat3Title: '5000+',
      stat3Label: 'Families Guided',
      highlight1: '15+ Years of Experience',
      highlight2: 'Trusted by Thousands of Families',
      highlight3: 'Traditional + Scientific Approach',
      highlight4: 'Hereditary Astrological Lineage',
    },
    // Qualifications
    qualifications: {
      sectionTag: 'Credentials',
      title: 'Qualifications & Certifications',
      subtitle: 'Recognized by premier institutions for excellence in Jyotisha Shastra',
      items: [
        {
          title: 'Jothisha Mani',
          issuer: 'Thiru Guruvarul Jothisha Welfare Association',
          icon: '🏆',
          certificateImage: '/assets/jothisha_mani_certificate.jpg',
        },
        {
          title: 'Jyotish Visharada',
          issuer: 'NS Live Astro Company',
          icon: '🌟',
          certificateImage: '/assets/jyothish_visharada_certificate.jpg',
        },
        {
          title: 'Certificate of Appreciation',
          issuer: 'KP Stellar Research Institute',
          icon: '📜',
          certificateImage: '/assets/kp_stellar_certificate.jpg',
        },
        {
          title: 'Certificate of Appreciation',
          issuer: 'ISKCON',
          icon: '🙏',
          certificateImage: '/assets/iskcon_certificate.jpg',
        },
        {
          title: 'Diploma in Jyotisha & Vastu',
          issuer: 'Rashtriya Sanskrit Vidyapeetha',
          icon: '📚',
          certificateImage: '/assets/diploma_jyotisha_vastu_certificate.jpg',
        },
        {
          title: 'M.A. (Phalitha Jyotisha)',
          issuer: 'Post Graduate Degree',
          icon: '🎓',
          certificateImage: '/assets/ma_phalitha_jyotisha_certificate.jpg',
        },
        {
          title: 'Jyotisha Acharya',
          issuer: 'National Sanskrit University',
          icon: '⭐',
          certificateImage: '/assets/jyotisha_acharya_certificate.jpg',
        },
      ],
    },
    // Services
    services: {
      sectionTag: 'Our Services',
      title: 'Astrology Services',
      subtitle: 'Comprehensive Vedic astrology services to guide every aspect of your life',
      items: [
        {
          title: 'Horoscope Reading',
          description: 'Detailed analysis of your birth chart revealing planetary influences, strengths, and life path guidance based on Vedic principles.',
          icon: '🔮',
        },
        {
          title: 'Marriage Matching',
          description: 'Traditional Kundali matching with Guna Milan analysis ensuring compatibility and harmonious union for prospective couples.',
          icon: '💍',
        },
        {
          title: 'Career Guidance',
          description: 'Astrological insights into ideal career paths, favorable periods for business ventures, and professional growth timing.',
          icon: '💼',
        },
        {
          title: 'Vastu Consultation',
          description: 'Expert Vastu Shastra guidance for homes, offices, and commercial spaces to ensure positive energy flow and prosperity.',
          icon: '🏠',
        },
        {
          title: 'Dosha Analysis',
          description: 'Identification and remedies for Mangal Dosha, Kaal Sarp Dosha, Sade Sati, and other planetary afflictions.',
          icon: '⚡',
        },
        {
          title: 'Muhurtham Fixing',
          description: 'Auspicious timing selection for weddings, griha pravesh, business inaugurations, and other important life events.',
          icon: '🌿',
        },
        {
          title: 'Personal Consultation',
          description: 'One-on-one consultation for specific life concerns including health, relationships, finances, and spiritual growth.',
          icon: '🙏',
        },
      ],
    },
    // Testimonials
    testimonials: {
      sectionTag: 'Testimonials',
      title: 'What Our Clients Say',
      subtitle: 'Trusted by thousands of families across India',
      items: [
        {
          name: 'Ramesh Kumar',
          location: 'Hyderabad',
          text: 'Venkateswarlu garu\'s predictions about my career change were absolutely accurate. He guided me through a difficult transition and now I am thriving in my new role. His hereditary knowledge is truly remarkable.',
          rating: 5,
        },
        {
          name: 'Lakshmi Devi',
          location: 'Vijayawada',
          text: 'We consulted Venkateswarlu garu for our daughter\'s marriage matching. His thorough analysis and accurate predictions gave us complete confidence. The marriage is blessed and harmonious.',
          rating: 5,
        },
        {
          name: 'Suresh Reddy',
          location: 'Tirupati',
          text: 'The Vastu consultation for our new home was incredibly detailed. After implementing his suggestions, we noticed positive changes in our family\'s well-being and prosperity.',
          rating: 5,
        },
        {
          name: 'Priya Sharma',
          location: 'Bangalore',
          text: 'I was going through Sade Sati and was very worried. Venkateswarlu garu not only explained the effects clearly but provided effective remedies. His approach blends tradition with practical wisdom.',
          rating: 4,
        },
        {
          name: 'Anand Rao',
          location: 'Chennai',
          text: 'Having consulted many astrologers, I can say that Venkateswarlu garu stands apart. His hereditary knowledge and scientific approach make his readings exceptionally accurate and helpful.',
          rating: 5,
        },
        {
          name: 'Meena Kumari',
          location: 'Visakhapatnam',
          text: 'The Muhurtham fixed by Guruji for our new business inauguration brought us immense success within the first year itself. His calculations are flawless.',
          rating: 5,
        },
        {
          name: 'Karthik Iyer',
          location: 'Chennai',
          text: 'I was skeptical at first, but his detailed analysis of my horoscope completely changed my perspective. Every major life event he predicted has come true.',
          rating: 5,
        },
        {
          name: 'Srinivas Goud',
          location: 'Warangal',
          text: 'We approached him for Kaal Sarp Dosha nivarana. The remedies he suggested were simple yet highly effective. Our family feels much more peaceful now.',
          rating: 5,
        },
        {
          name: 'Aarti Desai',
          location: 'Mumbai',
          text: 'His deep knowledge of Vedic astrology is matched only by his compassionate approach. He took the time to explain everything in a way we could easily understand.',
          rating: 4,
        },
        {
          name: 'Venkata Ramana',
          location: 'Guntur',
          text: 'The career guidance provided by Acharya was a turning point for me. Following his advice, I switched industries and have seen tremendous growth.',
          rating: 5,
        },
        {
          name: 'Radha Krishna',
          location: 'Kurnool',
          text: 'We are incredibly grateful for his marriage matching services. He didn\'t just look at the points but deeply analyzed the charts for long-term compatibility.',
          rating: 5,
        },
        {
          name: 'Sneha Patel',
          location: 'Ahmedabad',
          text: 'The Vastu changes he recommended for my office were minimal but the impact on our team\'s productivity and business revenue was immediate and significant.',
          rating: 5,
        },
        {
          name: 'Manoj Tiwari',
          location: 'New Delhi',
          text: 'A true master of Jyotisha. His predictions regarding my health issues were spot on, and the gemstone recommendations have helped immensely.',
          rating: 5,
        },
        {
          name: 'Bhavani Shankar',
          location: 'Rajahmundry',
          text: 'His hereditary wisdom shines through in every consultation. You can feel the weight of generations of knowledge in his practical and spiritual guidance.',
          rating: 5,
        },
        {
          name: 'Rajeshwari M.',
          location: 'Coimbatore',
          text: 'Finding an astrologer who genuinely cares is rare. Venkateswarlu garu not only predicted the obstacles but stood by us with solutions until they were resolved.',
          rating: 5,
        },
      ],
    },
    // Contact
    contact: {
      sectionTag: 'Get in Touch',
      title: 'Contact Us',
      subtitle: 'Book your consultation today and discover the cosmic blueprint of your life',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'Enter your phone number',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell us about your query...',
      offerText: 'Please fill in your details below. Our team will get back to you within 24 hours to guide you further.',
      submitBtn: 'Book Consultation',
      callText: 'Call Now',
      whatsappText: 'WhatsApp',
      whatsappAction: 'Click to chat',
      emailText: 'Email',
      locationText: 'Location',
      phone: '+91 77990 99069',
      email: 'astrologervenkateswarlu1@gmail.com',
      address: 'Tirupati, Andhra Pradesh, India',
      consultationCenter: 'Consultation Center',
      locationDetail: 'Tirupati, Andhra Pradesh, India',
      servingClients: 'Serving clients across India and Worldwide.',
    },
    // Share
    share: {
      button: 'Share Website',
      copied: 'Link copied to clipboard!',
      title: 'Astrologer Venkateswarlu',
      text: 'Explore ancient Jyotisha wisdom.',
    },
    // Events
    events: {
      sectionTag: 'Gallery',
      title: 'Spiritual Journey & Events',
      subtitle: 'Glimpses of our spiritual ceremonies, astrology seminars, and divine gatherings.',
    },
    // Footer
    footer: {
      quote: '"The stars in the sky shine to guide us, the wisdom of Jyotisha illuminates the path."',
      copyright: '© 2026 Astrologer Venkateswarlu. All rights reserved.',
      quickLinks: 'Quick Links',
      services: 'Services',
      followUs: 'Follow Us',
      designedBy: 'Crafted with ✨ spiritual essence',
      description: 'Hereditary astrologer with 15+ years of experience guiding lives through ancient Jyotisha wisdom.',
      disclaimer: 'Astrology requires faith and is an interpretative art based on ancient scriptures. The readings provided are indicative and for spiritual guidance only. They should not substitute for professional medical, legal, or financial advice. Results interpretation may vary.',
      disclaimerTitle: 'Disclaimer: ',
    },
  },
  te: {
    // Navbar
    nav: {
      home: 'హోమ్',
      about: 'గురించి',
      qualifications: 'అర్హతలు',
      services: 'సేవలు',
      testimonials: 'అభిప్రాయాలు',
      contact: 'సంప్రదించండి',
      bookNow: 'బుక్ చేయండి',
      brandName: 'ఆచార్య వేంకటేశ్వర్లు',
      brandSubtitle: 'జ్యోతిష్కులు',
    },
    // Hero
    hero: {
      titleLine1: 'విశ్వసనీయ వంశపారంపర్య',
      titleLine2: 'జ్యోతిష్కులు',
      titleHighlightPart1: '15+ సంవత్సరాల',
      titleHighlightPart2: 'వేద నైపుణ్యం',
      subtitle: 'తరతరాలుగా అందించబడిన ప్రాచీన జ్యోతిష శాస్త్ర జ్ఞానంతో జీవితాలను మార్గదర్శనం చేస్తున్నాము',
      cta1: 'సంప్రదింపు బుక్ చేయండి',
      cta2: 'వాట్సాప్‌ చేయండి',
      badge1: '15+ సంవత్సరాలు',
      badge2: 'వంశపారంపర్యం',
      badge3: '10000+ సంప్రదింపులు',
    },
    // About
    about: {
      sectionTag: 'మా వారసత్వం',
      title: 'ఆచార్య వేంకటేశ్వర్లు గురించి',
      profileName: 'ఆచార్య వేంకటేశ్వర్లు',
      profileTitle: 'వంశపారంపర్య జ్యోతిష్కులు',
      profileSubtitle: 'జ్యోతిష ఆచార్య',
      description: 'జ్యోతిష శాస్త్రం మా కుటుంబంలో తరతరాలుగా ఆచరించబడుతోంది, మా పూజ్యులైన పూర్వీకులు మరియు తాతలు నుండి అందించబడింది. జ్యోతిష శాస్త్రం యొక్క ఈ పవిత్ర జ్ఞానం ప్రతి తరంలో సంరక్షించబడి మరియు మెరుగుపరచబడింది, వేద జ్యోతిషం యొక్క కాలాతీత జ్ఞానాన్ని ఆధునిక విశ్లేషణ విధానాలతో కలుపుతూ.',
      description2: '15 సంవత్సరాలకు పైగా అంకితభావంతో ఆచరిస్తూ, జ్యోతిష్కులు ఆచార్య వేంకటేశ్వర్లు వేలాది కుటుంబాలను మరియు వ్యక్తులను జీవితంలోని అతి ముఖ్యమైన నిర్ణయాలలో - వివాహ అనుకూలత మరియు వృత్తి ఎంపికల నుండి గ్రహ దోషాల పరిష్కారం మరియు వాస్తు సంప్రదింపుల వరకు - మార్గదర్శనం చేశారు.',
      stat1Title: '15+',
      stat1Label: 'సంవత్సరాల అనుభవం',
      stat2Title: '10000+',
      stat2Label: 'సంప్రదింపులు',
      stat3Title: '5000+',
      stat3Label: 'కుటుంబాలు',
      highlight1: '15+ సంవత్సరాల అనుభవం',
      highlight2: 'వేలాది కుటుంబాల విశ్వాసం',
      highlight3: 'సాంప్రదాయ + శాస్త్రీయ విధానం',
      highlight4: 'వంశపారంపర్య జ్యోతిష వంశం',
    },
    // Qualifications
    qualifications: {
      sectionTag: 'ధ్రువపత్రాలు',
      title: 'అర్హతలు & ధ్రువపత్రాలు',
      subtitle: 'జ్యోతిష శాస్త్రంలో ప్రముఖ సంస్థల గుర్తింపు',
      items: [
        {
          title: 'జ్యోతిష మణి',
          issuer: 'తిరు గురువారుళ్ జ్యోతిష వెల్ఫేర్ అసోసియేషన్',
          icon: '🏆',
          certificateImage: '/assets/jothisha_mani_certificate.jpg',
        },
        {
          title: 'జ్యోతిష్ విశారద',
          issuer: 'NS లైవ్ ఆస్ట్రో కంపెనీ',
          icon: '🌟',
          certificateImage: '/assets/jyothish_visharada_certificate.jpg',
        },
        {
          title: 'ప్రశంసా పత్రం',
          issuer: 'KP స్టెల్లార్ రీసెర్చ్ ఇన్‌స్టిట్యూట్',
          icon: '📜',
          certificateImage: '/assets/kp_stellar_certificate.jpg',
        },
        {
          title: 'ప్రశంసా పత్రం',
          issuer: 'ఇస్కాన్ (ISKCON)',
          icon: '🙏',
          certificateImage: '/assets/iskcon_certificate.jpg',
        },
        {
          title: 'జ్యోతిష & వాస్తు డిప్లొమా',
          issuer: 'రాష్ట్రీయ సంస్కృత విద్యాపీఠం',
          icon: '📚',
          certificateImage: '/assets/diploma_jyotisha_vastu_certificate.jpg',
        },
        {
          title: 'M.A. (ఫలిత జ్యోతిష)',
          issuer: 'పోస్ట్ గ్రాడ్యుయేట్ డిగ్రీ',
          icon: '🎓',
          certificateImage: '/assets/ma_phalitha_jyotisha_certificate.jpg',
        },
        {
          title: 'జ్యోతిష ఆచార్య',
          issuer: 'నేషనల్ సంస్కృత యూనివర్సిటీ',
          icon: '⭐',
          certificateImage: '/assets/jyotisha_acharya_certificate.jpg',
        },
      ],
    },
    // Services
    services: {
      sectionTag: 'మా సేవలు',
      title: 'జ్యోతిష సేవలు',
      subtitle: 'మీ జీవితంలోని ప్రతి అంశాన్ని మార్గదర్శనం చేయడానికి సమగ్ర వేద జ్యోతిష సేవలు',
      items: [
        {
          title: 'జాతక చదవడం',
          description: 'వేద సూత్రాల ఆధారంగా గ్రహ ప్రభావాలు, బలాలు మరియు జీవిత మార్గ మార్గదర్శనాన్ని వెల్లడించే మీ జన్మ చార్ట్ యొక్క వివరమైన విశ్లేషణ.',
          icon: '🔮',
        },
        {
          title: 'వివాహ అనుకూలత',
          description: 'భావి జంటలకు అనుకూలత మరియు సామరస్య ఐక్యతను నిర్ధారించే గుణ మిళన విశ్లేషణతో సాంప్రదాయ కుండలి అనుకూలత.',
          icon: '💍',
        },
        {
          title: 'వృత్తి మార్గదర్శనం',
          description: 'ఆదర్శ వృత్తి మార్గాలు, వ్యాపార వెంచర్లకు అనుకూల కాలాలు మరియు వృత్తిపరమైన వృద్ధి సమయం గురించి జ్యోతిష అంతర్దృష్టులు.',
          icon: '💼',
        },
        {
          title: 'వాస్తు సంప్రదింపు',
          description: 'ఇళ్ళు, కార్యాలయాలు మరియు వాణిజ్య ప్రదేశాలలో సానుకూల శక్తి ప్రవాహం మరియు సమృద్ధిని నిర్ధారించడానికి నిపుణుల వాస్తు శాస్త్ర మార్గదర్శనం.',
          icon: '🏠',
        },
        {
          title: 'దోష విశ్లేషణ',
          description: 'మంగళ దోష, కాల సర్ప దోష, సాడే సాతి మరియు ఇతర గ్రహ బాధల గుర్తింపు మరియు పరిహారాలు.',
          icon: '⚡',
        },
        {
          title: 'ముహూర్త నిర్ణయం',
          description: 'వివాహాలు, గృహ ప్రవేశాలు, వ్యాపార ప్రారంభాలు మరియు ఇతర ముఖ్యమైన జీవిత సంఘటనల కోసం అనుకూల సమయ ఎంపిక.',
          icon: '🌿',
        },
        {
          title: 'వ్యక్తిగత సంప్రదింపు',
          description: 'ఆరోగ్యం, సంబంధాలు, ఆర్ధికం మరియు ఆధ్యాత్మిక వృద్ధితో సహా నిర్దిష్ట జీవిత ఆందోళనల కోసం ఒంటరి సంప్రదింపు.',
          icon: '🙏',
        },
      ],
    },
    // Testimonials
    testimonials: {
      sectionTag: 'అభిప్రాయాలు',
      title: 'మా క్లయింట్లు ఏమంటున్నారు',
      subtitle: 'భారతదేశం అంతటా వేలాది కుటుంబాల విశ్వాసం',
      items: [
        {
          name: 'రమేష్ కుమార్',
          location: 'హైదరాబాద్',
          text: 'నా వృత్తి మార్పు గురించి వేంకటేశ్వర్లు గారు చేసిన అంచనాలు పూర్తిగా ఖచ్చితమైనవి. ఆయన నన్ను కష్టమైన మార్పులో మార్గదర్శనం చేశారు మరియు ఇప్పుడు నేను నా కొత్త పాత్రలో అభివృద్ధి చెందుతున్నాను.',
          rating: 5,
        },
        {
          name: 'లక్ష్మి దేవి',
          location: 'విజయవాడ',
          text: 'మా అమ్మాయి వివాహ అనుకూలత కోసం వేంకటేశ్వర్లు గారిని సంప్రదించాము. ఆయన సమగ్ర విశ్లేషణ మరియు ఖచ్చితమైన అంచనాలు మాకు పూర్తి విశ్వాసాన్ని ఇచ్చాయి.',
          rating: 5,
        },
        {
          name: 'సురేష్ రెడ్డి',
          location: 'తిరుపతి',
          text: 'మా కొత్త ఇంటి కోసం వాస్తు సంప్రదింపు చాలా వివరంగా ఉంది. ఆయన సూచనలను అమలు చేసిన తర్వాత, మా కుటుంబ శ్రేయస్సు మరియు సమృద్ధిలో సానుకూల మార్పులను గమనించాము.',
          rating: 5,
        },
        {
          name: 'ప్రియ శర్మ',
          location: 'బెంగళూరు',
          text: 'నేను సాడే సాతిలో ఉన్నాను మరియు చాలా ఆందోళన చెందాను. వేంకటేశ్వర్లు గారు ప్రభావాలను స్పష్టంగా వివరించడమే కాకుండా సమర్థవంతమైన పరిహారాలను అందించారు.',
          rating: 4,
        },
        {
          name: 'ఆనంద్ రావు',
          location: 'చెన్నై',
          text: 'చాలా మంది జ్యోతిషులను సంప్రదించిన తర్వాత, వేంకటేశ్వర్లు గారు ప్రత్యేకంగా నిలబడతారని చెప్పగలను. ఆయన వంశపారంపర్య జ్ఞానం మరియు శాస్త్రీయ విధానం ఆయన చదువులను అద్భుతంగా ఖచ్చితంగా చేస్తాయి.',
          rating: 5,
        },
        {
          name: 'మీనా కుమారి',
          location: 'విశాఖపట్నం',
          text: 'మా కొత్త వ్యాపార ప్రారంభానికి గురువుగారు నిర్ణయించిన ముహూర్తం మొదటి సంవత్సరంలోనే మాకు అపారమైన విజయాన్ని తెచ్చిపెట్టింది. ఆయన లెక్కలు లోపరహితమైనవి.',
          rating: 5,
        },
        {
          name: 'కార్తీక్ అయ్యర్',
          location: 'చెన్నై',
          text: 'నేను మొదట సందేహించాను, కానీ నా జాతకంపై ఆయన చేసిన వివరణాత్మక విశ్లేషణ నా దృక్పథాన్ని పూర్తిగా మార్చివేసింది. ఆయన అంచనా వేసిన ప్రతి ముఖ్యమైన జీవిత సంఘటన నిజమైంది.',
          rating: 5,
        },
        {
          name: 'శ్రీనివాస్ గౌడ్',
          location: 'వరంగల్',
          text: 'మేము కాల సర్ప దోష నివారణ కోసం ఆయనను సంప్రదించాము. ఆయన సూచించిన పరిహారాలు సులభమైనవి కానీ అత్యంత ప్రభావవంతమైనవి.',
          rating: 5,
        },
        {
          name: 'ఆరతి దేశాయ్',
          location: 'ముంబై',
          text: 'వేద జ్యోతిషశాస్త్రంపై ఆయనకున్న లోతైన జ్ఞానం ఆయన దయగల విధానంతో మాత్రమే సరిపోతుంది. మాకు సులభంగా అర్థమయ్యే విధంగా ప్రతిదీ వివరించడానికి ఆయన సమయం తీసుకున్నారు.',
          rating: 4,
        },
        {
          name: 'వెంకట రమణ',
          location: 'గుంటూరు',
          text: 'ఆచార్య అందించిన వృత్తి మార్గదర్శనం నాకు ఒక మలుపు. ఆయన సలహాను అనుసరించి, నేను పరిశ్రమలను మార్చాను మరియు అద్భుతమైన వృద్ధిని చూశాను.',
          rating: 5,
        },
        {
          name: 'రాధా కృష్ణ',
          location: 'కర్నూలు',
          text: 'ఆయన వివాహ అనుకూలత సేవలకు మేము చాలా కృతజ్ఞులము. ఆయన కేవలం పాయింట్లను మాత్రమే చూడలేదు, దీర్ఘకాలిక అనుకూలత కోసం చార్టులను లోతుగా విశ్లేషించారు.',
          rating: 5,
        },
        {
          name: 'స్నేహ పటేల్',
          location: 'అహ్మదాబాద్',
          text: 'నా ఆఫీస్ కోసం ఆయన సిఫార్సు చేసిన వాస్తు మార్పులు చిన్నవే కానీ మా బృందం ఉత్పాదకత మరియు వ్యాపార ఆదాయంపై ప్రభావం తక్షణమే మరియు గణనీయంగా ఉంది.',
          rating: 5,
        },
        {
          name: 'మనోజ్ తివారీ',
          location: 'న్యూఢిల్లీ',
          text: 'జ్యోతిషశాస్త్రంలో నిజమైన గురువు. నా ఆరోగ్య సమస్యల గురించి ఆయన అంచనాలు ఖచ్చితమైనవి, మరియు రత్నాల సిఫార్సులు ఎంతో సహాయపడ్డాయి.',
          rating: 5,
        },
        {
          name: 'భవాని శంకర్',
          location: 'రాజమండ్రి',
          text: 'ప్రతి సంప్రదింపులలో ఆయన వంశపారంపర్య జ్ఞానం ప్రకాశిస్తుంది. ఆయన ఆచరణాత్మక మరియు ఆధ్యాత్మిక మార్గదర్శకత్వంలో తరాల జ్ఞానం యొక్క బరువును మీరు అనుభవించవచ్చు.',
          rating: 5,
        },
        {
          name: 'రాజేశ్వరి ఎం.',
          location: 'కోయంబత్తూర్',
          text: 'నిజంగా శ్రద్ధ వహించే జ్యోతిష్కుడిని కనుగొనడం అరుదు. వేంకటేశ్వర్లు గారు అడ్డంకులను అంచనా వేయడమే కాకుండా, అవి పరిష్కరించబడే వరకు పరిష్కారాలతో మాకు అండగా నిలిచారు.',
          rating: 5,
        },
      ],
    },
    // Contact
    contact: {
      sectionTag: 'సంప్రదించండి',
      title: 'మమ్మల్ని సంప్రదించండి',
      subtitle: 'ఈ రోజే మీ సంప్రదింపును బుక్ చేయండి మరియు మీ జీవితం యొక్క గ్రహ రూపకల్పనను కనుగొనండి',
      nameLabel: 'మీ పేరు',
      namePlaceholder: 'మీ పూర్తి పేరు నమోదు చేయండి',
      phoneLabel: 'ఫోన్ నంబర్',
      phonePlaceholder: 'మీ ఫోన్ నంబర్ నమోదు చేయండి',
      messageLabel: 'మీ సందేశం',
      messagePlaceholder: 'మీ ప్రశ్న గురించి చెప్పండి...',
      offerText: 'దయచేసి మీ వివరాలను నమోదు చేయండి. తదుపరి మార్గదర్శకత్వం కోసం మా బృందం 24 గంటల్లో మిమ్మల్ని సంప్రదిస్తుంది.',
      submitBtn: 'సంప్రదింపు బుక్ చేయండి',
      callText: 'ఇప్పుడు కాల్ చేయండి',
      whatsappText: 'వాట్సాప్',
      whatsappAction: 'చాట్ చేయడానికి క్లిక్ చేయండి',
      emailText: 'ఈమెయిల్',
      locationText: 'ప్రదేశం',
      phone: '+91 77990 99069',
      email: 'astrologervenkateswarlu1@gmail.com',
      address: 'తిరుపతి, ఆంధ్రప్రదేశ్, ఇండియా',
      consultationCenter: 'సంప్రదింపు కేంద్రం',
      locationDetail: 'తిరుపతి, ఆంధ్రప్రదేశ్, ఇండియా',
      servingClients: 'భారతదేశం మరియు ప్రపంచవ్యాప్తంగా ఖాతాదారులకు సేవలు అందిస్తున్నాము.',
    },
    // Share
    share: {
      button: 'వెబ్‌సైట్ షేర్ చేయండి',
      copied: 'లింక్ కాపీ చేయబడింది!',
      title: 'జ్యోతిష్కులు వేంకటేశ్వర్లు',
      text: 'ప్రాచీన జ్యోతిష జ్ఞానాన్ని అన్వేషించండి.',
    },
    // Events
    events: {
      sectionTag: 'గ్యాలరీ',
      title: 'ఆధ్యాత్మిక ప్రయాణం & సంఘటనలు',
      subtitle: 'మా ఆధ్యాత్మిక వేడుకలు, జ్యోతిష సదస్సులు మరియు పవిత్ర సమావేశాల దృశ్యాలు.',
    },
    // Footer
    footer: {
      quote: '"ఆకాశంలో నక్షత్రాలు మనకు మార్గదర్శనం చేయడానికి ప్రకాశిస్తాయి, జ్యోతిష జ్ఞానం మార్గాన్ని ప్రకాశింపజేస్తుంది."',
      copyright: '© 2026 జ్యోతిష్కులు వేంకటేశ్వర్లు. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
      quickLinks: 'త్వరిత లింకులు',
      services: 'సేవలు',
      followUs: 'మమ్ములను ఫాలో అవ్వండి',
      designedBy: '✨ ఆధ్యాత్మిక సారంతో రూపొందించబడింది',
      description: 'ప్రాచీన జ్యోతిష శాస్త్ర జ్ఞానంతో జీవితాలను మార్గదర్శనం చేస్తూ 15+ సంవత్సరాల అనుభవం ఉన్న వంశపారంపర్య జ్యోతిష్కులు.',
      disclaimer: 'జ్యోతిషశాస్త్రానికి విశ్వాసం అవసరం మరియు ఇది ప్రాచీన గ్రంథాలపై ఆధారపడిన వివరణాత్మక కళ. అందించబడిన అంచనాలు సూచనాత్మకమైనవి మరియు ఆధ్యాత్మిక మార్గదర్శకత్వం కోసం మాత్రమే. ఇవి వృత్తిపరమైన వైద్య, చట్టపరమైన లేదా ఆర్థిక సలహాలకు ప్రత్యామ్నాయం కాకూడదు. ఫలితాల వివరణ మారవచ్చు.',
      disclaimerTitle: 'గమనిక: ',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = translations[language];
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'te' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
