import { createContext } from "react";
const countries = [{id: 1, en:'korea', ko:'한국'},{id: 2, en:'america', ko:'미국'},{id: 3, en:'vietnam', ko:'베트남'},{id: 4, en:'japan', ko:'일본'},{id: 5, en:'china', ko:'중국'},
    {id: 6, en:'thailand', ko:'태국'},{id: 7, en:'philippines', ko:'필리핀'},{id: 8, en:'hongkong', ko:'홍콩'},{id: 9, en:'france', ko:'프랑스'},{id: 10, en:'russia', ko:'러시아'},
    {id: 11, en:'australia', ko:'호주'},{id: 12, en:'taiwan', ko:'대만'},{id: 13, en:'england', ko:'영국'},{id: 14, en:'singapore', ko:'싱가포르'},{id: 15, en:'italy', ko:'이탈리아'},
    {id: 16, en:'netherlands', ko:'네덜란드'},{id: 17, en:'indonesia', ko:'인도네시아'},{id: 18, en:'malaysia', ko:'말레이시아'},{id: 19, en:'canada', ko:'캐나다'},{id: 20, en:'cambodia', ko:'캄보디아'},
    ];

const sortings = [{id: 1, en: 'recent', ko:'최신 순'}, {id: 2, en: 'likey', ko:'좋아요 순'}, {id: 3, en: 'clicks', ko:'조회수 순'}]

const tags = [{id: 1, en: 'vacation', ko:'휴양지'}, {id: 2, en: 'historic', ko:'유적지'}, {id: 3, en: 'hotel', ko:'호텔 투어'}, {id: 4, en: 'train', ko:'기차 투어'}]

const Option = createContext({
    countryList : countries.map(country=>(<option key={country.id} value={country.en}>{country.ko}</option>)),
    sortingList : sortings.map(sorting=>(<option key={sorting.id} value={sorting.en}>{sorting.ko}</option>)),
    tagList : tags.map(tag=>(<option key={tag.id} value={tag.en}>{tag.ko}</option>))
});

export default Option;
