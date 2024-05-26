import { FC } from "react";

const QuranVerse: FC = () => {
  return (
    <div className="text-center my-8 lg:text-xl text-md  ">
      <p className="font-light lg:px-24 px-4">
        إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا
        الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا
      </p>
      <p className="italic lg:px-24 px-4">
        &quot;Sesungguhnya Allah dan malaikat-malaikat-Nya bershalawat untuk
        Nabi. Hai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan
        ucapkanlah salam penghormatan kepadanya.&quot;
      </p>
      <p className="mt-2">~ QS. Al-Ahzab: 56 ~</p>
    </div>
  );
};

export default QuranVerse;
