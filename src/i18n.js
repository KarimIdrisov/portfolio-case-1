import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      header: {
        login: "login",
        registration: "registration",
      },
      intro: {
        deposit: "zero \n deposit fee",
        start: "start",
      },
      estonia: {
        desc: "Estonian Financial Intelligence Unit (FIU, or RAB in Estonian) is responsible for overseeing crypto activities as well as issuing crypto licenses.",
        trading: "trading",
      },
      products: {
        spot: {
          title: "Spot platform",
          desc: "Customizable interface Several types of orders Professional charts Powerful match engine",
        },
        exchange: {
          title: "Fast Exchange",
          desc: "Quick purchase/sale of cryptocurrencies in 1 click. Exchange cryptocurrencies and provide security automatically at a fast rate.",
        },
        wallet: {
          title: "Crypto Wallet",
          desc: "All transactions in one cryptocurrency wallet Create your free wallet on UNI Stex to store and transfer cryptocurrencies, as well as fiat funds.",
        },
        exchanger: {
          title: "Non-custodial exchanger",
          desc: "Non-custodial exchanger (immediately hang up on the partition). Designed for fast and anonymous exchange of cryptocurrencies with fiat funds.",
        },
        affilate: {
          title: "Affiliate Program",
          desc: "Become a partner and get profit Invite friends and get up to 60% of the amount of commissions paid by them for trading.",
        },
      },
      unitex: {
        title:
            "Multifunctional blockchain management platform \n and trading of crypto and digital assets, designed to:",
        advantages: {
          owners: "owners of any cryptocurrencies",
          projects: "projects that issue their own cryptocurrency or tokens for business",
          organizations: "commercial organizations wishing to carry out measurements in cryptocurrency",
          exchange: "Cryptocurrency exchange to fiat and back",
          cryptocurrencies: "buying and selling cryptocurrencies",
        },
      },
      bitcoin: {
        title: "Buy and sell Bitcoin \n on the UNI Stex crypto exchange",
        desc: "UNI Stex is a convenient trading platform with natural and contact trading instruments,\n with help, you can easily trade and exchange cryptocurrency, \n and also convert it to fiat.",
        partner: " The main partner in Moldova is BPay",
        registration: "registration",
        deposit: "deposit fee",
        but: "buy bitcoin",
      },
      exchange: {
        title: "ADJUSTABLE EXCHANGE",
        advantages: [
          "MODERN TRADING TERMINAL",
          "0% DEPOSIT FEES",
          "MULTILEVEL REFERRAL PROGRAM",
          "FAST CRYPTOCURRENCY EXCHANGE WITHOUT REGISTRATION",
          "27/7 SUPPORT",
        ],
        trading: "trading",
      },
      trade: {
        title: "Trade Anytime Anywhere",

        desc: "All UNI Stex services are always with you. Powerful platform for cryptocurrency trading for those who trade to make money. Download UNI Stex Cryptocurrency Mobile App Today.",
      },

      affilate: {
        title: "Affiliate program",
        desc: "With the help of the UNI Stex service, you can not only profitably exchange e-currency, but also make good money on it (Affiliate program) You can receive the payment in any way convenient for you presented in your personal account UNI Stex.",
        link: "link",
      },
    }
  },
  ru: {
    translation: {
      header: {
        login: "ВХОД",
        registration: "РЕГИСТРАЦИЯ",
      },
      intro: {
        deposit: "на ввод средств",
        start: "НАЧАТЬ",
      },
      estonia: {
        desc: "Эстонский отдел финансовой разведки (FIU или RAB на эстонском языке) регулирует оборот обмен, выдачу лицензий на проведение операций с криптовалютой.",
        trading: "НАЧАТЬ ТОРГОВЛЮ",
      },
      products: [
        {
          title: "Спотовая торговля",
          desc: "Кастомизируемый интерфейс Несколько типов ордеров Простые в построении графики Мощный матчинговый движок",
        },
        {
          title: "Простой обмен",
          desc: "Быстрая покупка и продажа криптовалюты в один клик. Быстрый и безопасный обмен в автоматическом режиме.",
        },
        {
          title: "Криптовалютный кошелек",
          desc: "Все операции в одном криптовалютном кошельке. Создавай свой бесплатный кошелек, обменивай криптовалюты и фиат.",
        },
        {
          title: "Некастодиальный обменник",
          desc: "Создан специально для быстрого и анонимного обмена криптовалют и фиатных средств.",
        },
        {
          title: "Партнерская программа",
          desc: "Станьте партнером и получайте прибыль от приглашенных друзей. До 60% от суммы комиссий, оплаченных ими за торговлю.",
        },
      ],
      unitex: {
        title:
            "Многофункциональная блокчейн-платформа для управления и торговли крипто и цифровыми активами, предназначенная для:",
        advantages: [
          "владельцев любых криптовалют",
          "проектов, выпускающих свою криптовалюту или токены для бизнеса",
          "комерческих организаций, желающих проводить транзакции в криптовалюте",
          "Обмена криптовалют на фиааты и обратно",
          "покупка и продажа криптовалют",
        ],
      },
      bitcoin: {
        title: "Покупай и продавай Bitcoin на криптобирже UNI Stex",
        stex: "UNI Stex",
        desc: "- удобная торговая площадка с простыми и понятными торговыми инструментами, при помощи которых можно легко торговать и обменивать криптовалюту, а также конвертировать ее в фиаты.",
        patrner: "Основным партнером по Молдавии является компания BPay",
        registration: "ЗАРЕГИСТРИРОВАТЬСЯ",
        deposit: "на ввод средств ",
        but: "КУПИТЬ BITCOIN",
      },
      exchange: {
        title: "Регулируемая криптовалютная биржа",
        advantages: [
          "УдобныЙ интерфейс ",
          "0% на ввод средств",
          "Многоуровневая реферальнАЯ программА",
          "БЫСТРЫЙ обменник без регистрации",
          "поддержка 24/7",
        ],
        trading: "НАЧАТЬ ТОРГОВЛЮ",
      },
      trade: {
        title: "Tоргуй везде с UNI Stex",

        desc: "Все сервисы UNI Stex всегда с вами в нашем приложении. Быть всегда на волне тренда – это выбор тех, кто торгует и получает прибыль. Скачайте наше приложение и не упускайте прибыльных движений рынка.",
      },

      affilate: {
        title: "Партнерская программа",
        desc: "С помощью сервиса UNI Stex Вы можете не только выгодно обменивать электронную валюту, но и хорошо зарабатывать на этом (Партнерская программа) Выплату сможете получить любым удобным для Вас способом представленным в вашем личном кабинете UNI Stex.",
        link: "ПОЛУЧИТЬ ССЫЛКУ",
      },
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
