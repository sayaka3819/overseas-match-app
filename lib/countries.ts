import type { Country } from "./data";

export type CountryDetail = {
  livingCost: {
    rent: string;
    food: string;
    transport: string;
    total: string;
  };
  visa: {
    workingHoliday: string;
    work: string;
    study: string;
  };
  cities: {
    name: string;
    description: string;
  }[];
};

export const COUNTRY_DETAILS: Record<Country, CountryDetail> = {
  オーストラリア: {
    livingCost: { rent: "12〜20万円", food: "4〜6万円", transport: "1〜2万円", total: "25〜35万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長3年まで延長可能。年間枠あり。",
      work: "技術系・医療系など職種別に永住権ルートあり。スキルビザが主流。",
      study: "学生ビザで週20時間までの就労可。卒業後の就労ビザルートも充実。",
    },
    cities: [
      { name: "シドニー", description: "オーストラリア最大の都市。IT・金融系の求人が豊富。" },
      { name: "メルボルン", description: "カフェ文化・アートシーンが盛ん。留学生に人気No.1。" },
      { name: "ブリスベン", description: "温暖な気候と比較的低い物価。2032年五輪開催予定。" },
    ],
  },
  カナダ: {
    livingCost: { rent: "10〜18万円", food: "4〜6万円", transport: "1〜2万円", total: "22〜32万円" },
    visa: {
      workingHoliday: "18〜30歳対象。抽選制（IEC）で年間枠あり。競争率高め。",
      work: "Express Entryポイント制で永住権申請可能。IT・医療・建設系需要高。",
      study: "卒業後にPGWP（最長3年）取得可能。永住権への近道として人気。",
    },
    cities: [
      { name: "バンクーバー", description: "温暖で自然豊か。日本人コミュニティが充実。" },
      { name: "トロント", description: "カナダ最大の都市。金融・IT系求人が多い。" },
      { name: "モントリオール", description: "フランス語圏。物価が安く学生・クリエイターに人気。" },
    ],
  },
  アメリカ: {
    livingCost: { rent: "15〜30万円", food: "5〜8万円", transport: "2〜3万円", total: "30〜50万円" },
    visa: {
      workingHoliday: "日米間のワーホリ協定なし。J-1ビザ（インターンシップ等）は別途あり。",
      work: "H-1Bビザは年間抽選制で超激戦。O-1（卓越能力）ビザも手段のひとつ。",
      study: "F-1ビザ。卒業後OPT（最大3年）で就労可。IT系はSTEM OPT延長可。",
    },
    cities: [
      { name: "サンフランシスコ", description: "シリコンバレー近郊。スタートアップ・IT職の聖地。" },
      { name: "ニューヨーク", description: "金融・ファッション・メディアの中心地。" },
      { name: "オースティン", description: "テック系企業が急増中。物価はSFより安い。" },
    ],
  },
  イギリス: {
    livingCost: { rent: "15〜25万円", food: "4〜6万円", transport: "2〜3万円", total: "28〜40万円" },
    visa: {
      workingHoliday: "Youth Mobility Schemeとして18〜30歳対象。2年間就労可。",
      work: "Skilled Worker Visaが主流。雇用主スポンサーが必要。",
      study: "Student Visa。卒業後にGraduate Visa（2年）で就労可能。",
    },
    cities: [
      { name: "ロンドン", description: "世界的金融・文化都市。求人数は断トツ。物価は高め。" },
      { name: "マンチェスター", description: "ロンドンより物価安め。IT・メディア系が成長中。" },
      { name: "エディンバラ", description: "スコットランドの首都。大学が多く留学生に人気。" },
    ],
  },
  ニュージーランド: {
    livingCost: { rent: "10〜16万円", food: "4〜5万円", transport: "1〜2万円", total: "20〜28万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長23ヶ月。農業・観光業中心。",
      work: "Skilled Migrant Category（ポイント制）で永住権申請可。",
      study: "Student Visa。卒業後Post-Study Work Visa取得可能。",
    },
    cities: [
      { name: "オークランド", description: "NZ最大の都市。日本人コミュニティあり。ビジネス拠点。" },
      { name: "クイーンズタウン", description: "アドベンチャーの聖地。観光・スキーリゾートで仕事多数。" },
      { name: "ウェリントン", description: "首都。IT・公務員・映像業界が集まる文化的な都市。" },
    ],
  },
  シンガポール: {
    livingCost: { rent: "15〜25万円", food: "3〜5万円", transport: "1〜2万円", total: "25〜40万円" },
    visa: {
      workingHoliday: "日星間のワーホリ協定なし。",
      work: "Employment Pass（EP）が主流。月給約50万円以上が条件。Tech系需要高。",
      study: "Student Pass。NUSなどアジアトップクラスの大学あり。",
    },
    cities: [
      { name: "シティエリア", description: "金融・テック企業が集中。MRTで移動便利。" },
      { name: "ジュロン", description: "製造・研究開発系企業が多い西部エリア。" },
      { name: "ワンノース", description: "スタートアップ・研究機関が集まるイノベーション拠点。" },
    ],
  },
  ドイツ: {
    livingCost: { rent: "8〜15万円", food: "3〜5万円", transport: "1〜2万円", total: "18〜27万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長1年間。農業・観光業に加えオフィス系も可。",
      work: "Job Seeker Visa（6ヶ月）で現地で仕事探し可能。エンジニア需要高。",
      study: "公立大学の学費がほぼ無料。学生ビザで週20時間就労可。",
    },
    cities: [
      { name: "ベルリン", description: "スタートアップの聖地。英語でも生活可能。物価比較的安め。" },
      { name: "ミュンヘン", description: "BMW・シーメンスなど大企業本社多数。高収入求人が豊富。" },
      { name: "ハンブルク", description: "港湾都市。メディア・物流・貿易系企業が集積。" },
    ],
  },
  フランス: {
    livingCost: { rent: "10〜20万円", food: "4〜6万円", transport: "1〜2万円", total: "22〜33万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長1年間。農業・観光・オフィス系就労可。",
      work: "Talent Passport（高スキル人材向け）が取得しやすい。",
      study: "学生ビザ。公立大学は学費が日本より安い。卒業後の就労ビザあり。",
    },
    cities: [
      { name: "パリ", description: "ファッション・美食・アートの都。グローバル企業本社多数。" },
      { name: "リヨン", description: "美食の街。物価がパリより安くIT系企業も増加中。" },
      { name: "ボルドー", description: "ワインの産地。観光・農業・食品業界での就労チャンスあり。" },
    ],
  },
  台湾: {
    livingCost: { rent: "4〜8万円", food: "2〜4万円", transport: "0.5〜1万円", total: "10〜16万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長1年間。製造・サービス業中心。",
      work: "就労ビザは雇用主スポンサーが必要。IT・日本語教育系の需要高。",
      study: "学生ビザ。台湾大学など評価高い大学多数。奨学金制度充実。",
    },
    cities: [
      { name: "台北", description: "経済・文化の中心。日本食も多く日本人に住みやすい。" },
      { name: "高雄", description: "台湾第2の都市。物価が台北より安く港湾産業が盛ん。" },
      { name: "台中", description: "温暖な気候と豊かな自然。アート・デザイン系で注目の街。" },
    ],
  },
  タイ: {
    livingCost: { rent: "3〜8万円", food: "2〜3万円", transport: "0.5〜1万円", total: "8〜16万円" },
    visa: {
      workingHoliday: "日タイ間のワーホリ協定なし。観光ビザ延長で滞在する人が多い。",
      work: "Non-B Visaが必要。外国人就労には条件あり。外資系・IT系で求人あり。",
      study: "学生ビザ。語学学校も多く短期留学に人気。",
    },
    cities: [
      { name: "バンコク", description: "コワーキング・デジタルノマドの聖地。物価安くインフラ充実。" },
      { name: "チェンマイ", description: "涼しく落ち着いた雰囲気。ノマドワーカーに大人気の街。" },
      { name: "コサムイ", description: "リゾートアイランド。ダイビング・観光系で働く日本人多数。" },
    ],
  },
  アイルランド: {
    livingCost: { rent: "12〜20万円", food: "4〜6万円", transport: "1〜2万円", total: "22〜33万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長1年間。Google等のEU拠点での就労チャンスあり。",
      work: "Critical Skills Employment Permit（高需要職種向け）が主流。",
      study: "学生ビザ。卒業後にStay Back Permit（2年）で就労可能。",
    },
    cities: [
      { name: "ダブリン", description: "Google・Meta・Appleなどビッグテックのヨーロッパ本社集積。" },
      { name: "コーク", description: "アイルランド第2の都市。物価がダブリンより安め。" },
      { name: "ゴールウェイ", description: "大学都市。自然豊かでアイルランドらしい雰囲気。" },
    ],
  },
  オランダ: {
    livingCost: { rent: "12〜20万円", food: "4〜6万円", transport: "1〜2万円", total: "22〜33万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長1年間。英語で働ける環境が多い。",
      work: "Highly Skilled Migrant Visa（給与条件あり）。英語で働けるポジション多数。",
      study: "学生ビザ。英語で授業を受けられる大学が多い。",
    },
    cities: [
      { name: "アムステルダム", description: "スタートアップ・クリエイティブ産業が集積。英語が通じる。" },
      { name: "ロッテルダム", description: "ヨーロッパ最大の港湾都市。物流・エンジニア系求人多数。" },
      { name: "アイントホーフェン", description: "フィリップス発祥のテクノロジー都市。デザイン系も盛ん。" },
    ],
  },
  韓国: {
    livingCost: { rent: "5〜12万円", food: "3〜5万円", transport: "0.5〜1万円", total: "12〜22万円" },
    visa: {
      workingHoliday: "18〜30歳対象。最長1年間。韓国語能力があると就労の幅が広がる。",
      work: "E-7ビザ（専門職）が主流。IT・エンタメ・日本語教育で求人あり。",
      study: "学生ビザ。韓国語学校・大学ともに充実。奨学金制度も豊富。",
    },
    cities: [
      { name: "ソウル", description: "K-POP・テック・エンタメの中心。若者文化が最先端。" },
      { name: "釜山", description: "韓国第2の都市。海辺の街で物価安め。観光・映像産業が盛ん。" },
      { name: "済州島", description: "リゾートアイランド。デジタルノマドビザ（試験導入）で注目。" },
    ],
  },
  ポルトガル: {
    livingCost: { rent: "6〜12万円", food: "3〜5万円", transport: "0.5〜1万円", total: "12〜22万円" },
    visa: {
      workingHoliday: "18〜35歳対象（日本は要確認）。最長1年間。",
      work: "D8デジタルノマドビザが取得しやすく注目。リモートワーカーに人気。",
      study: "学生ビザ。大学の学費が西欧の中では安め。",
    },
    cities: [
      { name: "リスボン", description: "デジタルノマドの人気No.1都市。スタートアップが急増中。" },
      { name: "ポルト", description: "リスボンより物価安め。歴史的街並みとワインが魅力。" },
      { name: "アルガルヴェ", description: "南部リゾートエリア。温暖な気候とビーチが魅力。" },
    ],
  },
  UAE: {
    livingCost: { rent: "15〜30万円", food: "4〜8万円", transport: "2〜3万円", total: "28〜50万円" },
    visa: {
      workingHoliday: "日UAE間のワーホリ協定なし。",
      work: "雇用主スポンサーが必要。フリーランサービザ・フリーゾーン設立も選択肢。",
      study: "学生ビザ。UAE大学・国際大学の分校が複数ある。",
    },
    cities: [
      { name: "ドバイ", description: "税金ゼロ・高収入求人が豊富。ビジネス・観光の国際都市。" },
      { name: "アブダビ", description: "UAE首都。石油・金融・政府系機関の求人が多い。" },
      { name: "シャルジャ", description: "ドバイより物価安め。文化・教育分野で存在感がある。" },
    ],
  },
};
