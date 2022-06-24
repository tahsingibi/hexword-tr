import { useState } from 'react'

const copyIcon = <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><rect x="4" y="7" width="12" height="14"></rect><path d="M16 17h4V3H8v4"></path></svg>;

function Allhex({setBgChange}) {
  const hexAll = [
    {
        "word": "aba",
        "hex": "#ABA"
    },
    {
        "word": "aba",
        "hex": "#ABA"
    },
    {
        "word": "abasız",
        "hex": "#ABA512"
    },
    {
        "word": "abdest",
        "hex": "#ABDE57"
    },
    {
        "word": "abe",
        "hex": "#ABE"
    },
    {
        "word": "abi",
        "hex": "#AB1"
    },
    {
        "word": "ace",
        "hex": "#ACE"
    },
    {
        "word": "acı",
        "hex": "#AC1"
    },
    {
        "word": "acısız",
        "hex": "#AC1512"
    },
    {
        "word": "acıtış",
        "hex": "#AC1715"
    },
    {
        "word": "ada",
        "hex": "#ADA"
    },
    {
        "word": "adatış",
        "hex": "#ADA715"
    },
    {
        "word": "adi",
        "hex": "#AD1"
    },
    {
        "word": "afetzede",
        "hex": "#AFE72EDE"
    },
    {
        "word": "afi",
        "hex": "#AF1"
    },
    {
        "word": "aft",
        "hex": "#AF7"
    },
    {
        "word": "ağa",
        "hex": "#A6A"
    },
    {
        "word": "ağdacı",
        "hex": "#A6DAC1"
    },
    {
        "word": "ağı",
        "hex": "#A61"
    },
    {
        "word": "ait",
        "hex": "#A17"
    },
    {
        "word": "asa",
        "hex": "#A5A"
    },
    {
        "word": "asbest",
        "hex": "#A5BE57"
    },
    {
        "word": "asesbaşı",
        "hex": "#A5E5BA51"
    },
    {
        "word": "asetat",
        "hex": "#A5E7A7"
    },
    {
        "word": "ası",
        "hex": "#A51"
    },
    {
        "word": "asi",
        "hex": "#A51"
    },
    {
        "word": "ast",
        "hex": "#A57"
    },
    {
        "word": "aşı",
        "hex": "#A51"
    },
    {
        "word": "aşısız",
        "hex": "#A51512"
    },
    {
        "word": "ata",
        "hex": "#A7A"
    },
    {
        "word": "atbaşı",
        "hex": "#A7BA51"
    },
    {
        "word": "ate",
        "hex": "#A7E"
    },
    {
        "word": "ateist",
        "hex": "#A7E157"
    },
    {
        "word": "atıfet",
        "hex": "#A71FE7"
    },
    {
        "word": "ati",
        "hex": "#A71"
    },
    {
        "word": "aza",
        "hex": "#A2A"
    },
    {
        "word": "azı",
        "hex": "#A21"
    },
    {
        "word": "babaca",
        "hex": "#BABACA"
    },
    {
        "word": "babacı",
        "hex": "#BABAC1"
    },
    {
        "word": "bacabaşı",
        "hex": "#BACABA51"
    },
    {
        "word": "bad",
        "hex": "#BAD"
    },
    {
        "word": "badısaba",
        "hex": "#BAD15ABA"
    },
    {
        "word": "bağ",
        "hex": "#BA6"
    },
    {
        "word": "bağ",
        "hex": "#BA6"
    },
    {
        "word": "bağdaş",
        "hex": "#BA6DA5"
    },
    {
        "word": "bağdat",
        "hex": "#BA6DA7"
    },
    {
        "word": "bağıcı",
        "hex": "#BA61C1"
    },
    {
        "word": "bağıtsız",
        "hex": "#BA617512"
    },
    {
        "word": "bağsız",
        "hex": "#BA6512"
    },
    {
        "word": "bas",
        "hex": "#BA5"
    },
    {
        "word": "basıcı",
        "hex": "#BA51C1"
    },
    {
        "word": "baş",
        "hex": "#BA5"
    },
    {
        "word": "baş",
        "hex": "#BA5"
    },
    {
        "word": "başoda",
        "hex": "#BA50DA"
    },
    {
        "word": "başsız",
        "hex": "#BA5512"
    },
    {
        "word": "bat",
        "hex": "#BA7"
    },
    {
        "word": "batıcı",
        "hex": "#BA71C1"
    },
    {
        "word": "batsat",
        "hex": "#BA75A7"
    },
    {
        "word": "baz",
        "hex": "#BA2"
    },
    {
        "word": "bazısı",
        "hex": "#BA2151"
    },
    {
        "word": "bazofobi",
        "hex": "#BA20F0B1"
    },
    {
        "word": "bed",
        "hex": "#BED"
    },
    {
        "word": "besici",
        "hex": "#BE51C1"
    },
    {
        "word": "bestesiz",
        "hex": "#BE57E512"
    },
    {
        "word": "beş",
        "hex": "#BE5"
    },
    {
        "word": "beştaş",
        "hex": "#BE57A5"
    },
    {
        "word": "bet",
        "hex": "#BE7"
    },
    {
        "word": "bez",
        "hex": "#BE2"
    },
    {
        "word": "bez",
        "hex": "#BE2"
    },
    {
        "word": "bezzaz",
        "hex": "#BE22A2"
    },
    {
        "word": "bızbız",
        "hex": "#B12B12"
    },
    {
        "word": "bis",
        "hex": "#B15"
    },
    {
        "word": "bit",
        "hex": "#B17"
    },
    {
        "word": "biz",
        "hex": "#B12"
    },
    {
        "word": "biz",
        "hex": "#B12"
    },
    {
        "word": "biz",
        "hex": "#B12"
    },
    {
        "word": "bizsiz",
        "hex": "#B12512"
    },
    {
        "word": "bizzat",
        "hex": "#B122A7"
    },
    {
        "word": "boa",
        "hex": "#B0A"
    },
    {
        "word": "boğada",
        "hex": "#B06ADA"
    },
    {
        "word": "boğası",
        "hex": "#B06A51"
    },
    {
        "word": "boğata",
        "hex": "#B06A7A"
    },
    {
        "word": "boğazsız",
        "hex": "#B06A2512"
    },
    {
        "word": "boş",
        "hex": "#B05"
    },
    {
        "word": "boşboğaz",
        "hex": "#B05B06A2"
    },
    {
        "word": "bot",
        "hex": "#B07"
    },
    {
        "word": "bot",
        "hex": "#B07"
    },
    {
        "word": "boz",
        "hex": "#B02"
    },
    {
        "word": "bozacı",
        "hex": "#B02AC1"
    },
    {
        "word": "bozcaada",
        "hex": "#B02CAADA"
    },
    {
        "word": "böğ",
        "hex": "#B06"
    },
    {
        "word": "cafcaf",
        "hex": "#CAFCAF"
    },
    {
        "word": "cağ",
        "hex": "#CA6"
    },
    {
        "word": "cağ",
        "hex": "#CA6"
    },
    {
        "word": "cağ",
        "hex": "#CA6"
    },
    {
        "word": "caz",
        "hex": "#CA2"
    },
    {
        "word": "cazibe",
        "hex": "#CA21BE"
    },
    {
        "word": "cazsız",
        "hex": "#CA2512"
    },
    {
        "word": "cebeci",
        "hex": "#CEBEC1"
    },
    {
        "word": "cet",
        "hex": "#CE7"
    },
    {
        "word": "cetbecet",
        "hex": "#CE7BECE7"
    },
    {
        "word": "cezbediş",
        "hex": "#CE2BED15"
    },
    {
        "word": "cezbesiz",
        "hex": "#CE2BE512"
    },
    {
        "word": "cıdağı",
        "hex": "#C1DA61"
    },
    {
        "word": "cıs",
        "hex": "#C15"
    },
    {
        "word": "cız",
        "hex": "#C12"
    },
    {
        "word": "cızbız",
        "hex": "#C12B12"
    },
    {
        "word": "cicibaba",
        "hex": "#C1C1BABA"
    },
    {
        "word": "dadacı",
        "hex": "#DADAC1"
    },
    {
        "word": "dağ",
        "hex": "#DA6"
    },
    {
        "word": "dağ",
        "hex": "#DA6"
    },
    {
        "word": "dağıtıcı",
        "hex": "#DA6171C1"
    },
    {
        "word": "daz",
        "hex": "#DA2"
    },
    {
        "word": "debbağ",
        "hex": "#DEBBA6"
    },
    {
        "word": "def",
        "hex": "#DEF"
    },
    {
        "word": "defaat",
        "hex": "#DEFAA7"
    },
    {
        "word": "değişici",
        "hex": "#DE6151C1"
    },
    {
        "word": "desise",
        "hex": "#DE515E"
    },
    {
        "word": "dessas",
        "hex": "#DE55A5"
    },
    {
        "word": "dış",
        "hex": "#D15"
    },
    {
        "word": "dızdız",
        "hex": "#D12D12"
    },
    {
        "word": "dızdızcı",
        "hex": "#D12D12C1"
    },
    {
        "word": "dibace",
        "hex": "#D1BACE"
    },
    {
        "word": "diş",
        "hex": "#D15"
    },
    {
        "word": "dişeği",
        "hex": "#D15E61"
    },
    {
        "word": "dişsiz",
        "hex": "#D15512"
    },
    {
        "word": "diz",
        "hex": "#D12"
    },
    {
        "word": "dizgesiz",
        "hex": "#D126E512"
    },
    {
        "word": "dizici",
        "hex": "#D121C1"
    },
    {
        "word": "doğacı",
        "hex": "#D06AC1"
    },
    {
        "word": "doz",
        "hex": "#D02"
    },
    {
        "word": "döş",
        "hex": "#D05"
    },
    {
        "word": "ebe",
        "hex": "#EBE"
    },
    {
        "word": "ebesiz",
        "hex": "#EBE512"
    },
    {
        "word": "ece",
        "hex": "#ECE"
    },
    {
        "word": "eczacı",
        "hex": "#EC2AC1"
    },
    {
        "word": "eda",
        "hex": "#EDA"
    },
    {
        "word": "eda",
        "hex": "#EDA"
    },
    {
        "word": "ede",
        "hex": "#EDE"
    },
    {
        "word": "edi",
        "hex": "#ED1"
    },
    {
        "word": "edi",
        "hex": "#ED1"
    },
    {
        "word": "efe",
        "hex": "#EFE"
    },
    {
        "word": "ege",
        "hex": "#E6E"
    },
    {
        "word": "ego",
        "hex": "#E60"
    },
    {
        "word": "egoist",
        "hex": "#E60157"
    },
    {
        "word": "eğe",
        "hex": "#E6E"
    },
    {
        "word": "eğe",
        "hex": "#E6E"
    },
    {
        "word": "eğitiş",
        "hex": "#E61715"
    },
    {
        "word": "esasta",
        "hex": "#E5A57A"
    },
    {
        "word": "eti",
        "hex": "#E71"
    },
    {
        "word": "etibba",
        "hex": "#E71BBA"
    },
    {
        "word": "eza",
        "hex": "#E2A"
    },
    {
        "word": "faizci",
        "hex": "#FA12C1"
    },
    {
        "word": "faş",
        "hex": "#FA5"
    },
    {
        "word": "faşist",
        "hex": "#FA5157"
    },
    {
        "word": "faz",
        "hex": "#FA2"
    },
    {
        "word": "fecaat",
        "hex": "#FECAA7"
    },
    {
        "word": "fes",
        "hex": "#FE5"
    },
    {
        "word": "fetişist",
        "hex": "#FE715157"
    },
    {
        "word": "fısfıs",
        "hex": "#F15F15"
    },
    {
        "word": "fideci",
        "hex": "#F1DEC1"
    },
    {
        "word": "fiğ",
        "hex": "#F16"
    },
    {
        "word": "fiş",
        "hex": "#F15"
    },
    {
        "word": "fişsiz",
        "hex": "#F15512"
    },
    {
        "word": "fit",
        "hex": "#F17"
    },
    {
        "word": "fit",
        "hex": "#F17"
    },
    {
        "word": "fit",
        "hex": "#F17"
    },
    {
        "word": "fos",
        "hex": "#F05"
    },
    {
        "word": "fosfat",
        "hex": "#F05FA7"
    },
    {
        "word": "foş",
        "hex": "#F05"
    },
    {
        "word": "gaf",
        "hex": "#6AF"
    },
    {
        "word": "gag",
        "hex": "#6A6"
    },
    {
        "word": "gaz",
        "hex": "#6A2"
    },
    {
        "word": "gaz",
        "hex": "#6A2"
    },
    {
        "word": "gazebo",
        "hex": "#6A2EB0"
    },
    {
        "word": "gazete",
        "hex": "#6A2E7E"
    },
    {
        "word": "gazeteci",
        "hex": "#6A2E7EC1"
    },
    {
        "word": "gazışı",
        "hex": "#6A2151"
    },
    {
        "word": "gazsız",
        "hex": "#6A2512"
    },
    {
        "word": "gececi",
        "hex": "#6ECEC1"
    },
    {
        "word": "gez",
        "hex": "#6E2"
    },
    {
        "word": "gez",
        "hex": "#6E2"
    },
    {
        "word": "gezici",
        "hex": "#6E21C1"
    },
    {
        "word": "gibisi",
        "hex": "#61B151"
    },
    {
        "word": "gidici",
        "hex": "#61D1C1"
    },
    {
        "word": "giz",
        "hex": "#612"
    },
    {
        "word": "giz",
        "hex": "#612"
    },
    {
        "word": "goşist",
        "hex": "#605157"
    },
    {
        "word": "göt",
        "hex": "#607"
    },
    {
        "word": "göz",
        "hex": "#602"
    },
    {
        "word": "gözetici",
        "hex": "#602E71C1"
    },
    {
        "word": "ısı",
        "hex": "#151"
    },
    {
        "word": "ısıtış",
        "hex": "#151715"
    },
    {
        "word": "ıstıfa",
        "hex": "#1571FA"
    },
    {
        "word": "ibadet",
        "hex": "#1BADE7"
    },
    {
        "word": "icabet",
        "hex": "#1CABE7"
    },
    {
        "word": "icazet",
        "hex": "#1CA2E7"
    },
    {
        "word": "iddiasız",
        "hex": "#1DD1A512"
    },
    {
        "word": "ide",
        "hex": "#1DE"
    },
    {
        "word": "ifa",
        "hex": "#1FA"
    },
    {
        "word": "ifadesiz",
        "hex": "#1FADE512"
    },
    {
        "word": "iffetsiz",
        "hex": "#1FFE7512"
    },
    {
        "word": "ifşaat",
        "hex": "#1F5AA7"
    },
    {
        "word": "isa",
        "hex": "#15A"
    },
    {
        "word": "isabet",
        "hex": "#15ABE7"
    },
    {
        "word": "istibdat",
        "hex": "#1571BDA7"
    },
    {
        "word": "istida",
        "hex": "#1571DA"
    },
    {
        "word": "istifa",
        "hex": "#1571FA"
    },
    {
        "word": "istifade",
        "hex": "#1571FADE"
    },
    {
        "word": "işbaşı",
        "hex": "#15BA51"
    },
    {
        "word": "işitiş",
        "hex": "#151715"
    },
    {
        "word": "ita",
        "hex": "#17A"
    },
    {
        "word": "itaatsiz",
        "hex": "#17AA7512"
    },
    {
        "word": "iti",
        "hex": "#171"
    },
    {
        "word": "izafet",
        "hex": "#12AFE7"
    },
    {
        "word": "oba",
        "hex": "#0BA"
    },
    {
        "word": "oda",
        "hex": "#0DA"
    },
    {
        "word": "otağcı",
        "hex": "#07A6C1"
    },
    {
        "word": "öge",
        "hex": "#06E"
    },
    {
        "word": "öte",
        "hex": "#07E"
    },
    {
        "word": "özbeöz",
        "hex": "#02BE02"
    },
    {
        "word": "özcesi",
        "hex": "#02CE51"
    },
    {
        "word": "öze",
        "hex": "#02E"
    },
    {
        "word": "özgeci",
        "hex": "#026EC1"
    },
    {
        "word": "saadet",
        "hex": "#5AADE7"
    },
    {
        "word": "sabite",
        "hex": "#5AB17E"
    },
    {
        "word": "sabote",
        "hex": "#5AB07E"
    },
    {
        "word": "sac",
        "hex": "#5AC"
    },
    {
        "word": "sadece",
        "hex": "#5ADECE"
    },
    {
        "word": "sadist",
        "hex": "#5AD157"
    },
    {
        "word": "saf",
        "hex": "#5AF"
    },
    {
        "word": "saf",
        "hex": "#5AF"
    },
    {
        "word": "saffet",
        "hex": "#5AFFE7"
    },
    {
        "word": "sağ",
        "hex": "#5A6"
    },
    {
        "word": "sağ",
        "hex": "#5A6"
    },
    {
        "word": "satıcı",
        "hex": "#5A71C1"
    },
    {
        "word": "saz",
        "hex": "#5A2"
    },
    {
        "word": "saz",
        "hex": "#5A2"
    },
    {
        "word": "sazsız",
        "hex": "#5A2512"
    },
    {
        "word": "sebatsız",
        "hex": "#5EBA7512"
    },
    {
        "word": "sebzesiz",
        "hex": "#5EB2E512"
    },
    {
        "word": "ses",
        "hex": "#5E5"
    },
    {
        "word": "sessiz",
        "hex": "#5E5512"
    },
    {
        "word": "sessizce",
        "hex": "#5E5512CE"
    },
    {
        "word": "sesteş",
        "hex": "#5E57E5"
    },
    {
        "word": "set",
        "hex": "#5E7"
    },
    {
        "word": "set",
        "hex": "#5E7"
    },
    {
        "word": "sezgisiz",
        "hex": "#5E261512"
    },
    {
        "word": "sıfatsız",
        "hex": "#51FA7512"
    },
    {
        "word": "sığ",
        "hex": "#516"
    },
    {
        "word": "sızgıt",
        "hex": "#512617"
    },
    {
        "word": "sızıcı",
        "hex": "#5121C1"
    },
    {
        "word": "siesta",
        "hex": "#51E57A"
    },
    {
        "word": "sif",
        "hex": "#51F"
    },
    {
        "word": "sis",
        "hex": "#515"
    },
    {
        "word": "sistit",
        "hex": "#515717"
    },
    {
        "word": "sit",
        "hex": "#517"
    },
    {
        "word": "siz",
        "hex": "#512"
    },
    {
        "word": "sizsiz",
        "hex": "#512512"
    },
    {
        "word": "sobacı",
        "hex": "#50BAC1"
    },
    {
        "word": "sof",
        "hex": "#50F"
    },
    {
        "word": "sofist",
        "hex": "#50F157"
    },
    {
        "word": "soğdca",
        "hex": "#506DCA"
    },
    {
        "word": "sos",
        "hex": "#505"
    },
    {
        "word": "söz",
        "hex": "#502"
    },
    {
        "word": "stoacı",
        "hex": "#570AC1"
    },
    {
        "word": "şad",
        "hex": "#5AD"
    },
    {
        "word": "şaibesiz",
        "hex": "#5A1BE512"
    },
    {
        "word": "şaşaasız",
        "hex": "#5A5AA512"
    },
    {
        "word": "şat",
        "hex": "#5A7"
    },
    {
        "word": "şaz",
        "hex": "#5A2"
    },
    {
        "word": "şeb",
        "hex": "#5EB"
    },
    {
        "word": "şecaat",
        "hex": "#5ECAA7"
    },
    {
        "word": "şef",
        "hex": "#5EF"
    },
    {
        "word": "şefaat",
        "hex": "#5EFAA7"
    },
    {
        "word": "şeffaf",
        "hex": "#5EFFAF"
    },
    {
        "word": "şeş",
        "hex": "#5E5"
    },
    {
        "word": "şeşbeş",
        "hex": "#5E5BE5"
    },
    {
        "word": "şet",
        "hex": "#5E7"
    },
    {
        "word": "şia",
        "hex": "#51A"
    },
    {
        "word": "şiddet",
        "hex": "#51DDE7"
    },
    {
        "word": "şif",
        "hex": "#51F"
    },
    {
        "word": "şii",
        "hex": "#511"
    },
    {
        "word": "şiş",
        "hex": "#515"
    },
    {
        "word": "şiş",
        "hex": "#515"
    },
    {
        "word": "şişeci",
        "hex": "#515EC1"
    },
    {
        "word": "şizoit",
        "hex": "#512017"
    },
    {
        "word": "tab",
        "hex": "#7AB"
    },
    {
        "word": "tab",
        "hex": "#7AB"
    },
    {
        "word": "tabaat",
        "hex": "#7ABAA7"
    },
    {
        "word": "tabiat",
        "hex": "#7AB1A7"
    },
    {
        "word": "tağşiş",
        "hex": "#7A6515"
    },
    {
        "word": "tas",
        "hex": "#7A5"
    },
    {
        "word": "taş",
        "hex": "#7A5"
    },
    {
        "word": "taşsız",
        "hex": "#7A5512"
    },
    {
        "word": "tat",
        "hex": "#7A7"
    },
    {
        "word": "tat",
        "hex": "#7A7"
    },
    {
        "word": "tat",
        "hex": "#7A7"
    },
    {
        "word": "tatsız",
        "hex": "#7A7512"
    },
    {
        "word": "tazece",
        "hex": "#7A2ECE"
    },
    {
        "word": "tazıcı",
        "hex": "#7A21C1"
    },
    {
        "word": "tecdit",
        "hex": "#7ECD17"
    },
    {
        "word": "tef",
        "hex": "#7EF"
    },
    {
        "word": "tefeci",
        "hex": "#7EFEC1"
    },
    {
        "word": "teftiş",
        "hex": "#7EF715"
    },
    {
        "word": "tesdis",
        "hex": "#7E5D15"
    },
    {
        "word": "testis",
        "hex": "#7E5715"
    },
    {
        "word": "teşdit",
        "hex": "#7E5D17"
    },
    {
        "word": "tez",
        "hex": "#7E2"
    },
    {
        "word": "tez",
        "hex": "#7E2"
    },
    {
        "word": "tığ",
        "hex": "#716"
    },
    {
        "word": "tığ",
        "hex": "#716"
    },
    {
        "word": "tıs",
        "hex": "#715"
    },
    {
        "word": "tiz",
        "hex": "#712"
    },
    {
        "word": "tos",
        "hex": "#705"
    },
    {
        "word": "toz",
        "hex": "#702"
    },
    {
        "word": "tös",
        "hex": "#705"
    },
    {
        "word": "töz",
        "hex": "#702"
    },
    {
        "word": "zabıta",
        "hex": "#2AB17A"
    },
    {
        "word": "zağ",
        "hex": "#2A6"
    },
    {
        "word": "zağsız",
        "hex": "#2A6512"
    },
    {
        "word": "zat",
        "hex": "#2A7"
    },
    {
        "word": "zazaca",
        "hex": "#2A2ACA"
    },
    {
        "word": "zıt",
        "hex": "#217"
    },
    {
        "word": "zibidi",
        "hex": "#21B1D1"
    }
]
    const [filterHex, setFilterHex] = useState('')
    const filtered = hexAll.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(filterHex.toLocaleLowerCase()))
    })

    return (
    <>
     <div className="filterBox">
        <input placeholder='Kelime veya HEX kodu girin' value={filterHex}
        onChange={(e)=>setFilterHex(e.target.value)} />
    </div>
    <div className="colorContainer">
        {
        filtered.map(
            (item, i)=>
            <div key={i} className="colorCard" onClick={()=>{setBgChange(`${item.hex}`)}} aria-hidden="true"> 
                <div className="colorBox" style={{backgroundColor:`${item.hex}`}}></div>
                <div className="text"> 
                <p className="word" >{item.word}</p>
                <p className="hex" >{item.hex}</p>
                </div>
                <button className="copyButton" onClick={() => {
                    navigator.clipboard.writeText(item.hex)
                    alert(`${item.hex} renk kodu kopyalandı!`)
                    }}>{copyIcon}</button>
            </div>
            )}
        </div>
        </>    
  )}
export default Allhex