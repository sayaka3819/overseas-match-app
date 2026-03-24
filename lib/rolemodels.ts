import type { Country } from "./data";

export type RoleModel = {
  id: string;
  name: string;
  age: number;
  occupation: string;
  country: Country;
  purpose: "study" | "working_holiday" | "work" | "startup";
  duration: string;
  comment: string;
};

export const PURPOSE_LABEL: Record<RoleModel["purpose"], string> = {
  study: "🎓 留学・進学",
  working_holiday: "✈️ ワーキングホリデー",
  work: "💼 転職・就職",
  startup: "🚀 起業・フリーランス",
};

export const ROLE_MODELS: RoleModel[] = [
  // オーストラリア
  { id: "au1", name: "Mさん", age: 24, occupation: "カフェスタッフ → グラフィックデザイナー", country: "オーストラリア", purpose: "working_holiday", duration: "2年", comment: "ワーホリで来てそのまま現地就職。英語力ゼロから始めて今はデザイン会社で働いています。" },
  { id: "au2", name: "Kさん", age: 27, occupation: "エンジニア", country: "オーストラリア", purpose: "work", duration: "3年", comment: "シドニーのIT企業にリモートで転職。日本の1.5倍の給与で、週末はサーフィン三昧です。" },
  { id: "au3", name: "Rさん", age: 22, occupation: "大学生", country: "オーストラリア", purpose: "study", duration: "1年", comment: "メルボルン大学に交換留学中。物価は高いけど、多文化な環境で視野が広がりました。" },

  // カナダ
  { id: "ca1", name: "Yさん", age: 26, occupation: "料理人", country: "カナダ", purpose: "working_holiday", duration: "1年半", comment: "バンクーバーのレストランで働きながら英語を勉強。治安が良く女性一人でも安心でした。" },
  { id: "ca2", name: "Tさん", age: 30, occupation: "データサイエンティスト", country: "カナダ", purpose: "work", duration: "4年", comment: "トロントのテック企業に就職。永住権も取得でき、今は家族と安定した生活を送っています。" },

  // アメリカ
  { id: "us1", name: "Sさん", age: 28, occupation: "UXデザイナー", country: "アメリカ", purpose: "work", duration: "3年", comment: "サンフランシスコのスタートアップに就職。競争は激しいけど、給与と成長速度は別格です。" },
  { id: "us2", name: "Hさん", age: 23, occupation: "大学院生", country: "アメリカ", purpose: "study", duration: "2年", comment: "NYの大学院でコンピューターサイエンスを専攻。奨学金制度が充実していて助かっています。" },

  // イギリス
  { id: "gb1", name: "Aさん", age: 25, occupation: "マーケター", country: "イギリス", purpose: "work", duration: "2年", comment: "ロンドンの日系企業から外資に転職。ヨーロッパ旅行が週末にできるのが最高です。" },
  { id: "gb2", name: "Nさん", age: 21, occupation: "語学学生", country: "イギリス", purpose: "study", duration: "6ヶ月", comment: "英国のアクセントに憧れてロンドンへ。物価は高いけど文化の深さに毎日感動しています。" },

  // ニュージーランド
  { id: "nz1", name: "Eさん", age: 25, occupation: "農場ワーカー → カフェ店員", country: "ニュージーランド", purpose: "working_holiday", duration: "1年", comment: "大自然の中でリセット期間。ゆったりした国民性に癒されて、人生観が変わりました。" },
  { id: "nz2", name: "Iさん", age: 29, occupation: "ヨガインストラクター", country: "ニュージーランド", purpose: "startup", duration: "2年", comment: "オークランドでヨガスタジオを開業。ウェルネス文化が根付いていて日本人にも人気です。" },

  // シンガポール
  { id: "sg1", name: "Jさん", age: 32, occupation: "金融アナリスト", country: "シンガポール", purpose: "work", duration: "5年", comment: "アジアのハブで働くのが夢でした。英語で仕事ができて、税率も低く生活水準も高いです。" },
  { id: "sg2", name: "Cさん", age: 27, occupation: "ITコンサルタント", country: "シンガポール", purpose: "work", duration: "2年", comment: "多国籍な職場環境で毎日刺激的。フードコートのご飯が安くて美味しいのも魅力です。" },

  // ドイツ
  { id: "de1", name: "Fさん", age: 26, occupation: "エンジニア", country: "ドイツ", purpose: "work", duration: "3年", comment: "ベルリンのスタートアップに就職。英語で働けてドイツ語も少しずつ上達中です。" },
  { id: "de2", name: "Bさん", age: 23, occupation: "大学院生", country: "ドイツ", purpose: "study", duration: "2年", comment: "公立大学なので学費がほぼ無料。奨学金と合わせて生活費も十分まかなえています。" },

  // フランス
  { id: "fr1", name: "Lさん", age: 24, occupation: "料理学校生 → シェフ", country: "フランス", purpose: "study", duration: "2年", comment: "パリで料理を学ぶのが夢でした。フランス語は大変だけど、毎日が学びの連続です。" },
  { id: "fr2", name: "Oさん", age: 28, occupation: "ファッションデザイナー", country: "フランス", purpose: "work", duration: "4年", comment: "パリのアパレルブランドで勤務。センスの高い環境に身を置くことで急成長できました。" },

  // 台湾
  { id: "tw1", name: "Pさん", age: 25, occupation: "日本語教師", country: "台湾", purpose: "work", duration: "2年", comment: "台北は物価が安くて住みやすい！日本食も多く、最初の海外移住先としておすすめです。" },
  { id: "tw2", name: "Qさん", age: 22, occupation: "語学学生", country: "台湾", purpose: "study", duration: "1年", comment: "中国語を学ぶなら台湾が一番。親日的な雰囲気で安心して生活できています。" },

  // タイ
  { id: "th1", name: "Wさん", age: 30, occupation: "Webマーケター（フリーランス）", country: "タイ", purpose: "startup", duration: "3年", comment: "バンコクのコワーキングスペースで仕事。月15万円で豊かな暮らしができます。" },
  { id: "th2", name: "Xさん", age: 27, occupation: "ダイビングインストラクター", country: "タイ", purpose: "working_holiday", duration: "1年", comment: "コサムイでダイビングの資格を取り、そのままインストラクターに。夢が現実になりました。" },

  // アイルランド
  { id: "ie1", name: "Vさん", age: 24, occupation: "カフェスタッフ", country: "アイルランド", purpose: "working_holiday", duration: "1年", comment: "ダブリンはフレンドリーで生活しやすい。EU各国への旅行拠点にもなっています。" },
  { id: "ie2", name: "Uさん", age: 26, occupation: "ソフトウェアエンジニア", country: "アイルランド", purpose: "work", duration: "2年", comment: "GoogleやMetaなどビッグテックのEU拠点がダブリンに集中。転職のチャンスが多いです。" },

  // オランダ
  { id: "nl1", name: "Zさん", age: 29, occupation: "プロダクトマネージャー", country: "オランダ", purpose: "work", duration: "3年", comment: "アムステルダムは英語が通じるし、自転車文化が快適。ワークライフバランスが最高です。" },
  { id: "nl2", name: "Dさん", age: 25, occupation: "スタートアップ共同創業者", country: "オランダ", purpose: "startup", duration: "2年", comment: "スタートアップビザで起業。欧州マーケットへのアクセスが魅力でオランダを選びました。" },

  // 韓国
  { id: "kr1", name: "Gさん", age: 23, occupation: "語学学生 → 映像クリエイター", country: "韓国", purpose: "study", duration: "1年半", comment: "K-POPの影響で韓国語を学びに。ソウルのトレンドの速さに刺激を受けて映像制作を始めました。" },
  { id: "kr2", name: "Hさん", age: 27, occupation: "ゲームプランナー", country: "韓国", purpose: "work", duration: "2年", comment: "韓国のゲーム会社に就職。英語+韓国語で仕事ができ、給与水準も日本より高いです。" },

  // ポルトガル
  { id: "pt1", name: "Kさん", age: 31, occupation: "フリーランスエンジニア", country: "ポルトガル", purpose: "startup", duration: "2年", comment: "デジタルノマドビザで移住。リスボンは物価が安くて日当たりが良く、最高の仕事環境です。" },
  { id: "pt2", name: "Mさん", age: 26, occupation: "フォトグラファー", country: "ポルトガル", purpose: "startup", duration: "1年", comment: "ポルトガルの光と色彩に惚れて移住。SNSで発信したら仕事の依頼が増えました。" },

  // UAE
  { id: "ae1", name: "Rさん", age: 33, occupation: "セールスマネージャー", country: "UAE", purpose: "work", duration: "4年", comment: "ドバイは所得税ゼロ。高収入を貯蓄に回せるので将来の起業資金を着々と積み上げています。" },
  { id: "ae2", name: "Tさん", age: 28, occupation: "建築デザイナー", country: "UAE", purpose: "work", duration: "2年", comment: "世界最先端の建築プロジェクトに関われる場所。スケールの大きさに毎日圧倒されています。" },
];
