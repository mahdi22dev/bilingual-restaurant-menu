export type Lang = 'ar' | 'en';

export interface Translations {
  dir: 'rtl' | 'ltr';
  lang: Lang;
  nav: {
    brandName: string;
    starters: string;
    mains: string;
    desserts: string;
    drinks: string;
    qr: string;
    contact: string;
    home: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaMenu: string;
    ctaQr: string;
    location: string;
    hours: string;
    phone: string;
    // menu page hero
    menuBadge: string;
    menuTitle: string;
    menuSubtitle: string;
    tableLabel: string;
    wifi: string;
  };
  menu: {
    title: string;
    subtitle: string;
    allCats: string;
    startersCat: string;
    mainsCat: string;
    dessertsCat: string;
    drinksCat: string;
    searchPlaceholder: string;
    allDiet: string;
    vegDiet: string;
    spicyDiet: string;
    popularDiet: string;
    currency: string;
    quickView: string;
    detailsBtn: string;
    addBtn: string;
    noResults: string;
  };
  modal: {
    close: string;
    ingredients: string;
    pairing: string;
  };
  special: {
    badge: string;
    title: string;
    desc: string;
    price: string;
    cta: string;
  };
  qrSection: {
    title: string;
    subtitle: string;
    openMenuBtn: string;
    downloadBtn: string;
    printBtn: string;
    copyBtn: string;
    copiedMsg: string;
  };
  cart: {
    summary: string;
    sendBtn: string;
    title: string;
    total: string;
    confirmBtn: string;
    empty: string;
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    hoursTitle: string;
    hoursText: string;
    contactTitle: string;
    address: string;
    phone: string;
    whatsappBtn: string;
    mapTitle: string;
    mapBtn: string;
    rights: string;
    subtitle: string;
    whatsapp: string;
  };
  badges: {
    vegetarian: string;
    spicy: string;
    popular: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    nav: {
      brandName: 'قصر الياسمين',
      starters: 'المقبلات',
      mains: 'الأطباق الرئيسية',
      desserts: 'الحلويات',
      drinks: 'المشروبات',
      qr: 'رمز القائمة',
      contact: 'تواصل معنا',
      home: 'الرئيسية',
    },
    hero: {
      badge: '✦ ضيافة مغربية وشرقية أصيلة ✦',
      title: 'نكهة الأصالة',
      subtitle: 'مطعم قصر الياسمين — رحلة طهي استثنائية تجمع بين عراقة التقاليد واللمسات المعاصرة في قلب مراكش.',
      ctaMenu: 'اطلع على القائمة',
      ctaQr: 'امسح رمز القائمة',
      location: 'مراكش، جيليز',
      hours: '١٢:٠٠ ظهراً - ١١:٣٠ مساءً',
      phone: '+212 524 400 123',
      menuBadge: '✦ القائمة الرقمية التفاعلية ✦',
      menuTitle: 'قائمة الطعام الفاخرة',
      menuSubtitle: 'استمتع بتصفح أطباقنا الفاخرة المجهزة خصيصاً لك.',
      tableLabel: 'رقم الطاولة:',
      wifi: 'الإنترنت المجاني للزوار:',
    },
    menu: {
      title: 'تشكيلة أطباقنا الفاخرة',
      subtitle: 'أطباق صُممت بعناية فائقة وتُحضّر يومياً بأجود المكونات الطبيعية والبهارات العطرية',
      allCats: 'الكل',
      startersCat: 'المقبلات',
      mainsCat: 'الأطباق الرئيسية',
      dessertsCat: 'الحلويات',
      drinksCat: 'المشروبات',
      searchPlaceholder: 'ابحث عن طبقك المفضل...',
      allDiet: 'الكل',
      vegDiet: '🌿 نباتي',
      spicyDiet: '🌶️ حار',
      popularDiet: '⭐ الأكثر طلباً',
      currency: 'د.م.',
      quickView: 'تفاصيل الطبق',
      detailsBtn: 'تفاصيل الطبق',
      addBtn: 'إضافة للطلب',
      noResults: 'لم يتم العثور على أطباق تطابق بحثك',
    },
    modal: {
      close: 'إغلاق',
      ingredients: 'المكونات الأساسية',
      pairing: 'توصية التذوق',
    },
    special: {
      badge: 'توصية الشيف الملكية',
      title: 'تجربة الطاجين الملكي المراكشي',
      desc: 'لحم الضأن المعطر برحيق الزعفران الحر، طُهي على نار هادئة لمدة ٦ ساعات مع البرقوق المعسل واللوز المحمص.',
      price: '180 د.م.',
      cta: 'احجز طاولتك الآن',
    },
    qrSection: {
      title: 'امسح لفتح القائمة',
      subtitle: 'استخدم كاميرا هاتفك للوصول المباشر إلى القائمة الرقمية في أي وقت ومشاركتها مع أصدقائك.',
      openMenuBtn: 'تصفح القائمة الرقمية',
      downloadBtn: 'تحميل رمز QR',
      printBtn: 'طباعة القائمة',
      copyBtn: 'نسخ الرابط',
      copiedMsg: 'تم نسخ الرابط بنجاح!',
    },
    cart: {
      summary: 'إجمالي الطلب:',
      sendBtn: 'إرسال الطلب عبر الواتساب',
      title: 'تفاصيل الطلب الخاص بك',
      total: 'المجموع الإجمالي:',
      confirmBtn: 'تأكيد وإرسال الطلب للمطبخ',
      empty: 'سلة الطلب فارغة حالياً',
    },
    footer: {
      aboutTitle: 'مطعم قصر الياسمين',
      aboutText: 'وجهتكم المثالية لتذوق أصالة المطبخ المغربي والشرقي في أجواء فاخرة وحميمة.',
      hoursTitle: 'أوقات العمل',
      hoursText: 'يومياً من الساعة ١٢:٠٠ ظهراً حتى ١١:٣٠ مساءً',
      contactTitle: 'التواصل والحجز',
      address: 'شارع محمد الخامس، حي جيليز، مراكش، المغرب',
      phone: '+212 524 400 123',
      whatsappBtn: 'احجز عبر الواتساب',
      mapTitle: 'خريطة الموقع',
      mapBtn: 'افتح في خرائط Google',
      rights: 'جميع الحقوق محفوظة © 2026 مطعم قصر الياسمين.',
      subtitle: 'مراكش — شارع محمد الخامس، حي جيليز | هاتف: +212 524 400 123',
      whatsapp: 'خدمة العملاء',
    },
    badges: {
      vegetarian: '🌿 نباتي',
      spicy: '🌶️ حار',
      popular: '⭐ الأكثر طلباً',
    },
  },

  en: {
    dir: 'ltr',
    lang: 'en',
    nav: {
      brandName: 'Al-Yasmine Palace',
      starters: 'Starters',
      mains: 'Mains',
      desserts: 'Desserts',
      drinks: 'Drinks',
      qr: 'QR Menu',
      contact: 'Contact',
      home: 'Main Site',
    },
    hero: {
      badge: '✦ AUTHENTIC MOROCCAN & EASTERN CUISINE ✦',
      title: 'A Taste of Tradition',
      subtitle: 'Al-Yasmine Palace — An extraordinary culinary journey blending time-honored recipes with refined elegance in the heart of Marrakech.',
      ctaMenu: 'View Full Menu',
      ctaQr: 'Scan QR Menu',
      location: 'Marrakech, Gueliz',
      hours: '12:00 PM - 11:30 PM',
      phone: '+212 524 400 123',
      menuBadge: '✦ INTERACTIVE DIGITAL MENU ✦',
      menuTitle: 'Gourmet Digital Menu',
      menuSubtitle: 'Explore our culinary selection masterfully prepared for you.',
      tableLabel: 'Table Number:',
      wifi: 'Free Guest Wi-Fi:',
    },
    menu: {
      title: 'Our Gourmet Selection',
      subtitle: 'Handcrafted dishes masterfully prepared daily with fresh local ingredients and aromatic heritage spices',
      allCats: 'All',
      startersCat: 'Starters',
      mainsCat: 'Mains',
      dessertsCat: 'Desserts',
      drinksCat: 'Drinks',
      searchPlaceholder: 'Search for a dish...',
      allDiet: 'All',
      vegDiet: '🌿 Vegetarian',
      spicyDiet: '🌶️ Spicy',
      popularDiet: '⭐ Popular',
      currency: 'MAD',
      quickView: 'Dish Details',
      detailsBtn: 'Dish Details',
      addBtn: 'Add to Order',
      noResults: 'No dishes found matching your search',
    },
    modal: {
      close: 'Close',
      ingredients: 'Key Ingredients',
      pairing: 'Pairing Recommendation',
    },
    special: {
      badge: "CHEF'S SIGNATURE SELECTION",
      title: 'Royal Marrakesh Lamb Tagine',
      desc: 'Tender lamb slow-cooked for 6 hours with pure saffron filaments, caramelized prunes, toasted almonds, and aromatic spices.',
      price: '180 MAD',
      cta: 'Reserve a Table',
    },
    qrSection: {
      title: 'Scan to Open This Menu',
      subtitle: 'Use your smartphone camera to immediately access our contactless digital menu or share it with guests.',
      openMenuBtn: 'Open Digital Menu',
      downloadBtn: 'Download QR',
      printBtn: 'Print Menu Card',
      copyBtn: 'Copy Link',
      copiedMsg: 'Menu link copied to clipboard!',
    },
    cart: {
      summary: 'Order Total:',
      sendBtn: 'Send Order via WhatsApp',
      title: 'Your Order Summary',
      total: 'Grand Total:',
      confirmBtn: 'Confirm & Send to Kitchen',
      empty: 'Your order list is currently empty',
    },
    footer: {
      aboutTitle: 'Al-Yasmine Palace',
      aboutText: 'Your premier destination for authentic Moroccan and Middle Eastern gastronomy in an opulent, welcoming atmosphere.',
      hoursTitle: 'Opening Hours',
      hoursText: 'Daily from 12:00 PM to 11:30 PM',
      contactTitle: 'Contact & Reservations',
      address: 'Boulevard Mohamed V, Gueliz, Marrakech, Morocco',
      phone: '+212 524 400 123',
      whatsappBtn: 'Reserve via WhatsApp',
      mapTitle: 'Our Location',
      mapBtn: 'Open in Google Maps',
      rights: 'All rights reserved © 2026 Al-Yasmine Palace Restaurant.',
      subtitle: 'Marrakech — Boulevard Mohamed V, Gueliz | Tel: +212 524 400 123',
      whatsapp: 'Customer Support',
    },
    badges: {
      vegetarian: '🌿 Vegetarian',
      spicy: '🌶️ Spicy',
      popular: '⭐ Popular',
    },
  },
};
