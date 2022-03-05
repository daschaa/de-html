import { decode } from '../index';

describe.each([
  ["\t","&#9;"],
  ["\n","&#10;"],
  [" ","&#32;"],
  ["!","&#33;"],
  ["“","&#34;"],
  ["#","&#35;"],
  ["$","&#36;"],
  ["%","&#37;"],
  ["&","&#38;"],
  ["‘","&#39;"],
  ["(","&#40;"],
  [")","&#41;"],
  ["*","&#42;"],
  ["+","&#43;"],
  [",","&#44;"],
  ["–","&#45;"],
  [".","&#46;"],
  ["/","&#47;"],
  ["0","&#48;"],
  ["1","&#49;"],
  ["2","&#50;"],
  ["3","&#51;"],
  ["4","&#52;"],
  ["5","&#53;"],
  ["6","&#54;"],
  ["7","&#55;"],
  ["8","&#56;"],
  ["9","&#57;"],
  [":","&#58;"],
  [";","&#59;"],
  ["<","&#60;"],
  ["=","&#61;"],
  [">","&#62;"],
  ["?","&#63;"],
  ["@","&#64;"],
  ["A","&#65;"],
  ["B","&#66;"],
  ["C","&#67;"],
  ["D","&#68;"],
  ["E","&#69;"],
  ["F","&#70;"],
  ["G","&#71;"],
  ["H","&#72;"],
  ["I","&#73;"],
  ["J","&#74;"],
  ["K","&#75;"],
  ["L","&#76;"],
  ["M","&#77;"],
  ["N","&#78;"],
  ["O","&#79;"],
  ["P","&#80;"],
  ["Q","&#81;"],
  ["R","&#82;"],
  ["S","&#83;"],
  ["T","&#84;"],
  ["U","&#85;"],
  ["V","&#86;"],
  ["W","&#87;"],
  ["X","&#88;"],
  ["Y","&#89;"],
  ["Z","&#90;"],
  ["[","&#91;"],
  ["\\","&#92;"],
["]","&#93;"],
["^","&#94;"],
["_","&#95;"],
["`","&#96;"],
["a","&#97;"],
["b","&#98;"],
["c","&#99;"],
["d","&#100;"],
["e","&#101;"],
["f","&#102;"],
["g","&#103;"],
["h","&#104;"],
["i","&#105;"],
["j","&#106;"],
["k","&#107;"],
["l","&#108;"],
["m","&#109;"],
["n","&#110;"],
["o","&#111;"],
["p","&#112;"],
["q","&#113;"],
["r","&#114;"],
["s","&#115;"],
["t","&#116;"],
["u","&#117;"],
["v","&#118;"],
["w","&#119;"],
["x","&#120;"],
["y","&#121;"],
["z","&#122;"],
["{","&#123;"],
["|","&#124;"],
["}","&#125;"],
["~","&#126;"],
["€","&#128;"],
["‚","&#130;"],
["ƒ","&#131;"],
["„","&#132;"],
["…","&#133;"],
["†","&#134;"],
["‡","&#135;"],
["ˆ","&#136;"],
["‰","&#137;"],
["Š","&#138;"],
["‹","&#139;"],
["Œ","&#140;"],
["Ž","&#142;"],
["‘","&#145;"],
["’","&#146;"],
["“","&#147;"],
["”","&#148;"],
["•","&#149;"],
["–","&#150;"],
["—","&#151;"],
["˜","&#152;"],
["™","&#153;"],
["š","&#154;"],
["›","&#155;"],
["œ","&#156;"],
["ž","&#158;"],
["Ÿ","&#159;"],
["Non-breaking space","&#160;"],
["¡","&#161;"],
["¢","&#162;"],
["£","&#163;"],
["¤","&#164;"],
["¥","&#165;"],
["¦","&#166;"],
["§","&#167;"],
["¨","&#168;"],
["©","&#169;"],
["ª","&#170;"],
["«","&#171;"],
["¬","&#172;"],
["­Soft hyphen","&#173;"],
["®","&#174;"],
["¯","&#175;"],
["°","&#176;"],
["±","&#177;"],
["²","&#178;"],
["³","&#179;"],
["´","&#180;"],
["µ","&#181;"],
["¶","&#182;"],
["·","&#183;"],
["¸","&#184;"],
["¹","&#185;"],
["º","&#186;"],
["»","&#187;"],
["¼","&#188;"],
["½","&#189;"],
["¾","&#190;"],
["¿","&#191;"],
["À","&#192;"],
["Á","&#193;"],
["Â","&#194;"],
["Ã","&#195;"],
["Ä","&#196;"],
["Å","&#197;"],
["Æ","&#198;"],
["Ç","&#199;"],
["È","&#200;"],
["É","&#201;"],
["Ê","&#202;"],
["Ë","&#203;"],
["Ì","&#204;"],
["Í","&#205;"],
["Î","&#206;"],
["Ï","&#207;"],
["Ð","&#208;"],
["Ñ","&#209;"],
["Ò","&#210;"],
["Ó","&#211;"],
["Ô","&#212;"],
["Õ","&#213;"],
["Ö","&#214;"],
["×","&#215;"],
["Ø","&#216;"],
["Ù","&#217;"],
["Ú","&#218;"],
["Û","&#219;"],
["Ü","&#220;"],
["Ý","&#221;"],
["Þ","&#222;"],
["ß","&#223;"],
["à","&#224;"],
["á","&#225;"],
["â","&#226;"],
["ã","&#227;"],
["ä","&#228;"],
["å","&#229;"],
["æ","&#230;"],
["ç","&#231;"],
["è","&#232;"],
["é","&#233;"],
["ê","&#234;"],
["ë","&#235;"],
["ì","&#236;"],
["í","&#237;"],
["î","&#238;"],
["ï","&#239;"],
["ð","&#240;"],
["ñ","&#241;"],
["ò","&#242;"],
["ó","&#243;"],
["ô","&#244;"],
["õ","&#245;"],
["ö","&#246;"],
["÷","&#247;"],
["ø","&#248;"],
["ù","&#249;"],
["ú","&#250;"],
["û","&#251;"],
["ü","&#252;"],
["ý","&#253;"],
["þ","&#254;"],
["ÿ","&#255;"],
["Ā","&#256;"],
["ā","&#257;"],
["Ă","&#258;"],
["ă","&#259;"],
["Ą","&#260;"],
["ą","&#261;"],
["Ć","&#262;"],
["ć","&#263;"],
["Ĉ","&#264;"],
["ĉ","&#265;"],
["Ċ","&#266;"],
["ċ","&#267;"],
["Č","&#268;"],
["č","&#269;"],
["Ď","&#270;"],
["ď","&#271;"],
["Đ","&#272;"],
["đ","&#273;"],
["Ē","&#274;"],
["ē","&#275;"],
["Ĕ","&#276;"],
["ĕ","&#277;"],
["Ė","&#278;"],
["ė","&#279;"],
["Ę","&#280;"],
["ę","&#281;"],
["Ě","&#282;"],
["ě","&#283;"],
["Ĝ","&#284;"],
["ĝ","&#285;"],
["Ğ","&#286;"],
["ğ","&#287;"],
["Ġ","&#288;"],
["ġ","&#289;"],
["Ģ","&#290;"],
["ģ","&#291;"],
["Ĥ","&#292;"],
["ĥ","&#293;"],
["Ħ","&#294;"],
["ħ","&#295;"],
["Ĩ","&#296;"],
["ĩ","&#297;"],
["Ī","&#298;"],
["ī","&#299;"],
["Ĭ","&#300;"],
["ĭ","&#301;"],
["Į","&#302;"],
["į","&#303;"],
["İ","&#304;"],
["ı","&#305;"],
["Ĳ","&#306;"],
["ĳ","&#307;"],
["Ĵ","&#308;"],
["ĵ","&#309;"],
["Ķ","&#310;"],
["ķ","&#311;"],
["ĸ","&#312;"],
["Ĺ","&#313;"],
["ĺ","&#314;"],
["Ļ","&#315;"],
["ļ","&#316;"],
["Ľ","&#317;"],
["ľ","&#318;"],
["Ŀ","&#319;"],
["ŀ","&#320;"],
["Ł","&#321;"],
["ł","&#322;"],
["Ń","&#323;"],
["ń","&#324;"],
["Ņ","&#325;"],
["ņ","&#326;"],
["Ň","&#327;"],
["ň","&#328;"],
["ŉ","&#329;"],
["Ŋ","&#330;"],
["ŋ","&#331;"],
["Ō","&#332;"],
["ō","&#333;"],
["Ŏ","&#334;"],
["ŏ","&#335;"],
["Ő","&#336;"],
["ő","&#337;"],
["Œ","&#338;"],
["œ","&#339;"],
["Ŕ","&#340;"],
["ŕ","&#341;"],
["Ŗ","&#342;"],
["ŗ","&#343;"],
["Ř","&#344;"],
["ř","&#345;"],
["Ś","&#346;"],
["ś","&#347;"],
["Ŝ","&#348;"],
["ŝ","&#349;"],
["Ş","&#350;"],
["ş","&#351;"],
["Š","&#352;"],
["š","&#353;"],
["Ţ","&#354;"],
["ţ","&#355;"],
["Ť","&#356;"],
["ť","&#357;"],
["Ŧ","&#358;"],
["ŧ","&#359;"],
["Ũ","&#360;"],
["ũ","&#361;"],
["Ū","&#362;"],
["ū","&#363;"],
["Ŭ","&#364;"],
["ŭ","&#365;"],
["Ů","&#366;"],
["ů","&#367;"],
["Ű","&#368;"],
["ű","&#369;"],
["Ų","&#370;"],
["ų","&#371;"],
["Ŵ","&#372;"],
["ŵ","&#373;"],
["Ŷ","&#374;"],
["ŷ","&#375;"],
["Ÿ","&#376;"],
["ƒ","&#402;"],
["ˆ","&#710;"],
["˜","&#732;"],
["Α","&#913;"],
["Β","&#914;"],
["Γ","&#915;"],
["Δ","&#916;"],
["Ε","&#917;"],
["Ζ","&#918;"],
["Η","&#919;"],
["Θ","&#920;"],
["Ι","&#921;"],
["Κ","&#922;"],
["Λ","&#923;"],
["Μ","&#924;"],
["Ν","&#925;"],
["Ξ","&#926;"],
["Ο","&#927;"],
["Π","&#928;"],
["Ρ","&#929;"],
["Σ","&#931;"],
["Τ","&#932;"],
["Υ","&#933;"],
["Φ","&#934;"],
["Χ","&#935;"],
["Ψ","&#936;"],
["Ω","&#937;"],
["α","&#945;"],
["β","&#946;"],
["γ","&#947;"],
["δ","&#948;"],
["ε","&#949;"],
["ζ","&#950;"],
["η","&#951;"],
["θ","&#952;"],
["ι","&#953;"],
["κ","&#954;"],
["λ","&#955;"],
["μ","&#956;"],
["ν","&#957;"],
["ξ","&#958;"],
["ο","&#959;"],
["π","&#960;"],
["ρ","&#961;"],
["ς","&#962;"],
["σ","&#963;"],
["τ","&#964;"],
["υ","&#965;"],
["φ","&#966;"],
["χ","&#967;"],
["ψ","&#968;"],
["ω","&#969;"],
["ϑ","&#977;"],
["ϒ","&#978;"],
["ϖ","&#982;"],
// TODO: Implement these
// ["En space","&#8194;"],
// ["Em space","&#8195;"],
// ["Thin space","&#8201;"],
// ["Zero width non-joiner","&#8204;"],
// ["Zero width joiner","&#8205;"],
// ["Left-to-right mark","&#8206;"],
// ["Right-to-left mark","&#8207;"],
["–","&#8211;"],
["—","&#8212;"],
["‘","&#8216;"],
["’","&#8217;"],
["‚","&#8218;"],
["“","&#8220;"],
["”","&#8221;"],
["„","&#8222;"],
["†","&#8224;"],
["‡","&#8225;"],
["•","&#8226;"],
["…","&#8230;"],
["‰","&#8240;"],
["′","&#8242;"],
["″","&#8243;"],
["‹","&#8249;"],
["›","&#8250;"],
["‾","&#8254;"],
["€","&#8364;"],
["™","&#8482;"],
["←","&#8592;"],
["↑","&#8593;"],
["→","&#8594;"],
["↓","&#8595;"],
["↔","&#8596;"],
["↵","&#8629;"],
["∀","&#8704;"],
["∂","&#8706;"],
["∃","&#8707;"],
["∅","&#8709;"],
["∇","&#8711;"],
["∈","&#8712;"],
["∉","&#8713;"],
["∋","&#8715;"],
["∏","&#8719;"],
["∑","&#8721;"],
["−","&#8722;"],
["∗","&#8727;"],
["√","&#8730;"],
["∝","&#8733;"],
["∞","&#8734;"],
["∠","&#8736;"],
["∧","&#8743;"],
["∨","&#8744;"],
["∩","&#8745;"],
["∪","&#8746;"],
["∫","&#8747;"],
["∴","&#8756;"],
["∼","&#8764;"],
["≅","&#8773;"],
["≈","&#8776;"],
["≠","&#8800;"],
["≡","&#8801;"],
["≤","&#8804;"],
["≥","&#8805;"],
["⊂","&#8834;"],
["⊃","&#8835;"],
["⊄","&#8836;"],
["⊆","&#8838;"],
["⊇","&#8839;"],
["⊕","&#8853;"],
["⊗","&#8855;"],
["⊥","&#8869;"],
["⋅","&#8901;"],
["⌈","&#8968;"],
["⌉","&#8969;"],
["⌊","&#8970;"],
["⌋","&#8971;"],
["◊","&#9674;"],
["♠","&#9824;"],
["♣","&#9827;"],
["♥","&#9829;"],
["♦","&#9830;"],
])('Decode HTML encoded strings', function(symbol, code) {
  it('should decode escaped characters', () => {
    const actual = decode(`This is a text: ${code}`);
    const expected = `This is a text: ${symbol}`;
    expect(actual).toEqual(expected);
  });
});