const DATA = [
    {
        "Szó":  "25 éven aluli fiatalok adókedvezménye",
        "Definíció":  "Ezt értelemszerűen a 25. életévüket még nem betöltött fiatalok vehetik igénybe a törvény által meghatározott mértékig. Abban az esetben, ha a a fiatalok összevont adóalapja (azaz a törvényben meghatározott jövedelmek összessége) nem éri el az adott évben törvényben kihirdetett összeget, akkor egyáltalán nem kell szja-t fizetniük. Ha azonban az összevont adóalap magasabb a törvényben meghatározott összegnél, akkor az azt meghaladó jövedelem után már meg kell fizetni az szja-t. (Ez az adótörvényben egy változó elem, amiről az adott évi jogszabály rendelkezik!) Olvasd el az adókedvezmény fogalma szócikket is!"
    },
    {
        "Szó":  "25-30 év közötti anyák kedvezménye",
        "Definíció":  "A 25 év alatti fiatalok kedvezményével azonos mértékben vehető igénybe. Olvasd el az adókedvezmény fogalma szócikket is!"
    },
    {
        "Szó":  "4 vagy több gyermeket nevelő anyák kedvezménye",
        "Definíció":  "A 4 vagy több gyermeket nevelő anyák, ha megfelelnek a törvényben előírtaknak, akkor a jövedelmük mértékétől függetlenül, nem fizetnek szja-t. Olvasd el az adókedvezmény fogalma szócikket is!"
    },
    {
        "Szó":  "50-30-20-as stratégia",
        "Definíció":  "Pénzügyi tervezési stratégia. Lényege, hogy a bevételeidből 50%-ot az állandó, 30%-ot az alkalomszerű kiadásokra tervezel, a fennmaradó 20% lehet így a megtakarítás, illetve a vésztartalék."
    },
    {
        "Szó":  "adathalászat",
        "Definíció":  "Az adathalászat egyfajta pszichológiai manipulációs technika, más néven social engineering, ahol valamilyen csalit alkalmaznak, hogy rávegyék az áldozatokat az adataik megadására vagy káros tartalmak letöltésére, esetleg olyan alkalmazások telepítésére, amelyek aztán ellopják az adataikat. A támadók olyan adatokat, információkat próbálnak megszerezni a célpontoktól, amelyeket később fel tudnak használni anyagi haszonszerzés vagy további támadások céljából."
    },
    {
        "Szó":  "adó",
        "Definíció":  "Közvetlen ellenszolgáltatás nélküli fizetési kötelezettség, jövedelemátengedés. Módját és mértékét az állam (illetve adott esetben pl. önkormányzat) egyoldalúan határozza meg. Az, hogy \"közvetlen ellenszolgáltatás nélküli\" azt jelenti, hogy nem akkor, abban a pillanatban kapsz cserébe valamit, amikor az adót befizeted, hanem másik időpontban. Pl. befizeted az adót, abból az állam költ a közbiztonságra vagy a közvilágításra, az iskolákra vagy a kórházakra. Te ezeket nem pont az adó befizetésének pillanatában kapod cserébe, hanem akkor, amikor szükséged van rá. Ellentétben azzal, amikor vásárolsz valamit, kifizeted és így a termék akkor, abban a pillanatban (mintegy közvetlen a fizetés ellenszolgáltatásaként) a tied."
    },
    {
        "Szó":  "adóalany",
        "Definíció":  "Az, aki a költségvetés felé ténylegesen befizeti az adót. Áfa esetében például a kereskedő vagy a szolgáltató. Nézd meg az általános forgalmi adó (áfa) szócikket is!"
    },
    {
        "Szó":  "adóbevallás",
        "Definíció":  "Egy olyan dokumentum, amelyben a magánszemélyek, illetve a vállalkozások nyilatkoznak arról, hogy az adott adóévben mennyi jövedelmük volt, ebből milyen tételek kerülhetnek levonásra, milyen adókedvezményeket vesznek igénybe, és ezek alapján mennyi adót kell az adott évben befizetniük. Az szja adóbevallás tervezetét magánszemélyek részére a NAV elkészíti. Olvasd el az adó és a személyi jövedelemadó (szja) szócikket is!"
    },
    {
        "Szó":  "adóbevallás ellenőrzése, határidő",
        "Definíció":  "Ha a NAV által készített adóbevallás tervezetét átnézted és hibátlannak találtad, akkor nincs vele teendőd. Megteheted, hogy a megfelelő gombra kattintva elfogadod azt, de ez nem kötelező. Ha van olyan tétel, akár a bevételi oldalon, akár például az adót csökkentő tételek között, amivel nem értesz egyet, ami hibásan szerepel, azt haladéktalanul (de legkésőbb minden év május 20-ig vagy, ha ez a nap hétvégére esik, akkor a következő munkanapig) jelezned kell az adóhatóság felé, hiszen ezen a napon az lesz az érvényes adóbevallásod, ami a tervezetben szerepel. Az esetleges adóvisszatérítésről, illetve az adód 1+1%-ának a felajánlásáról azonban neked kell nyilatkoznod. Olvasd el az adóbevallás szócikket is!"
    },
    {
        "Szó":  "adófizető",
        "Definíció":  "Az, akit az adóhatóság adó megfizetésére kötelez. Áfa esetében a vásárló, aki a termék vagy szolgáltatás árába beépített adót kifizeti a kereskedőnek vagy a szolgáltatónak. Nézd meg az adó és az általános forgalmi adó (áfa) szócikket is!"
    },
    {
        "Szó":  "adójóváírás",
        "Definíció":  "Lényege az, hogy a pénztári (önsegélyező és egészségpénztár) és a nyugdíjcélú megtakarításoknál a befizetésed egy bizonyos százaléka a személyi jövedelemadóból levonható. Ezt az összeget azonban nem kapod kézhez, hanem azt az adott megtakarítás számlájára utalják, ezzel növelve az azon lévő összeget. Az adójóváírás mértéke a befizetett összeg 20%-a, de a nyugdíjbiztosítás esetében maximum 130 ezer forint, az önkéntes nyugdíjbiztosítás esetében maximum 150 ezer forint, a NYESZ esetében pedig maximum 100 ezer forint. Lényeges információ, hogy a nyugdíjcélú termékekre a maximálisan visszaigényelhető összeg összesen 280 ezer forint! Mivel az adókedvezmény összege a személyi jövedelemadóból vonható le, azok, akik nem fizetnek adót, ezzel a lehetőséggel nem élhetnek. Nézd meg az adókedvezmény példák és az egészségpénztár szócikket is!"
    },
    {
        "Szó":  "adókedvezmény fogalma",
        "Definíció":  "Az adókedvezmény tulajdonképpen egy állami támogatás, amelyet olyan formában vehetünk igénybe, hogy egy adót nem teljes mértékben (adott esetben egyáltalán nem) kell megfizetni. Erre jó példa a személyi jövedelemadó, amely esetében számos kedvezményt vehetnek igénybe az érintettek. Az adókedvezmények évente változhatnak, ezért érdemes mindig utánanézni a NAV honlapján, hogy mire vagy jogosult!"
    },
    {
        "Szó":  "adókedvezmény példák",
        "Definíció":  "A teljesség igénye nélkül a következő adókedvezményeket mindenképpen érdemes ismerned: 25 éven aluli fiatalok kedvezménye, 25-30 év közötti anyák kedvezménye, 4 vagy több gyermeket nevelő anyák kedvezménye, első házasok kedvezménye, családi adókedvezmény, személyi kedvezmény. (Mivel a kedvezmények évről-évre változhatnak, érdemes folyamatosan tájékozódnod a NAV oldalán!) Az itt említett adókedvezmények leírását nézd meg az adott szócikknél!"
    },
    {
        "Szó":  "adomány",
        "Definíció":  "Olyan önkéntes és ingyenes juttatás, amelyet valaki egy személynek vagy szervezetnek ad általában jótékonysági, segítő vagy támogató szándékkal. Az adományok lehetnek pénzbeli, természetbeni vagy szolgáltatás jellegűek, és gyakran adókedvezményekkel is járhatnak az adományozó részére."
    },
    {
        "Szó":  "adóoptimalizálás",
        "Definíció":  "Azt jelenti, hogy (a törvények betartásával) igyekszel csökkenteni az adóterheidet. Odafigyelsz pl. arra, hogy milyen adókedvezményeket vehetsz igénybe, mire vagy jogosult. De arról is tudnod kell, hogy vannak olyan megtakarítási vagy biztosítási formák, amelyek után a törvényben meghatározott mértékig adójóváírást vehetsz igénybe. Ez azt jelenti, hogy ha van például egészség- vagy nyugdíjpénztári befizetésed, nyugdíjbiztosításod vagy nyugdíj-előtakarékossági számlád, akkor az ide befizetett összeg egy része az adóalapból levonható. Így ez az összeg az adott megtakarítási vagy biztosítási formába kerül, tehát annak összege növekszik."
    },
    {
        "Szó":  "adópolitika",
        "Definíció":  "Az adópolitika az állam felelőssége. Magában foglalja az adórendszer kialakítását, valamint a költségvetésbe befolyó adók összegének megtervezését, elemzését."
    },
    {
        "Szó":  "adós",
        "Definíció":  "Az a személy, aki hitelt vagy kölcsönt vett fel egy hitelezőtől, és köteles azt a szerződésben meghatározott feltételek szerint visszafizetni. Az adós felelős a kölcsön vagy hitel visszafizetéséért és a szerződésben rögzített egyéb kötelezettségeiért is."
    },
    {
        "Szó":  "adóstárs",
        "Definíció":  "Az a személy, aki a hitelszerződés alapján az adóssal együtt felel a kölcsön visszafizetéséért, vagyis mindkét fél teljes vagyonával és jövedelmével vállalja a hiteltartozást. Jogi értelemben az adós és az adóstárs felelőssége, illetve kötelezettsége megegyezik. Adóstársra akkor lehet szükséged, ha a jövedelmed önmagában nem elegendő a hitel megítéléséhez, vagy a bank kockázatcsökkentés érdekében kéri a bevonását. Olvasd el az adós szócikket is!"
    },
    {
        "Szó":  "adótudatosság",
        "Definíció":  "Az adótudatosság azt jelenti, hogy az egyén (legyen magánszemély vagy vállalkozó) tisztában van azzal, hogy adót fizetni kötelessége, ugyanis az állam az adók segítségével tudja ellátni a kötelezettségeit. Ezen kívül azt is jelenti, hogy tudatosan adózik, azaz megtalálja azokat az adózási szabályokat, amelyekkel – legálisan! – kevesebb adót fizethet. Így például tisztában van az adókedvezményekkel, az adójóváírás lehetőségével."
    },
    {
        "Szó":  "affiliate marketing",
        "Definíció":  "Más néven partnerprogram. Ez a marketingnek egy olyan fajtája, amikor egy influencer a saját oldalán hirdeti egy vele szerződött cég weboldalát. Ha te az influencer hirdetése alapján vásárolsz valamit erről az oldalról, azért a cég közvetítői díjat fizet az influencernek."
    },
    {
        "Szó":  "ajándék",
        "Definíció":  "Az ajándék önkéntes és ingyenes juttatás, amelyet általában a barátság, szeretet vagy tisztelet jeleként adnak. Az ajándékok lehetnek tárgyak, szolgáltatások, élmények vagy pénz, amiért általában nem várható el cserébe semmi. A megajándékozottnak ajándékozási illetéket kell fizetnie abban az esetben, ha vonatkozik rá az illetéktörvényi kötelezettség."
    },
    {
        "Szó":  "alapkamat",
        "Definíció":  "A jegybanki alapkamat a jegybank irányadó kamata. Ennek emelése, illetve csökkentése hatással van az egész gazdaságra. Amikor az alapkamatot emelik, akkor a kereskedelmi bankok is drágábban jutnak hitelhez, ezért a lakossági és a vállalati hitelek kamata is emelkedik. A befektetések kamata is várhatóan emelkedik. A lakosság a vásárlásokat visszafogja, inkább megtakarít. Így a gazdaságban kevesebb pénz lesz, az árak, és ezáltal az infláció csökkenhet (vagy kevésbé emelkedik). Az alapkamat csökkenése ellenkező hatással jár. Nézd meg a jegybank és a kamat szócikket is!"
    },
    {
        "Szó":  "alapszámla",
        "Definíció":  "Olyan speciális fizetési számla, amelynek díja előre rögzített. Célja, hogy azok az állampolgárok is számlát nyithassanak, akik jövedelmi vagy más okok miatt a hagyományos bankszámlákhoz nem jutnának hozzá. Ha bankszámlát akarsz nyitna, egy uniós jogszabály miatt kötelező a banknak felajánlania ezt a lehetőséget számodra. Olvasd el a fizetési számla szócikket is!"
    },
    {
        "Szó":  "alkalomszerű kiadás",
        "Definíció":  "Azok a kiadások, amelyek nem minden hónapban jelentkeznek. Ilyen lehet például a ruhavásárlás vagy egy múzeumi belépő."
    },
    {
        "Szó":  "alkusz",
        "Definíció":  "Ha biztosítást akarsz kötni, akkor számos mód áll a rendelkezésedre, hogy megtaláld a számodra legmegfelelőbbet. Az egyik lehetőség az, hogy alkusz segítségét veszed igénybe, aki több biztosító ajánlatát is ismeri. Az alkusz megbízója az, aki biztosítást szeretne kötni, nem a biztosító. Tehát, ha te felkeresel egy alkuszt és szerződést kötsz vele, akkor ő a te érdekeidet képviseli a biztosítóval történő tárgyalás során. Az alkusz köteles veled több lehetőséget is megismertetni, tanácsot adni, segíteni téged a biztosítók és az ajánlataik közötti választásban. (Ezzel szemben például a függő ügynök egy adott biztosító termékeit fogja csak megismertetni veled.)"
    },
    {
        "Szó":  "állami ösztöndíj",
        "Definíció":  "Olyan pénzbeli vagy egyéb juttatás, amelyet a tanulmányi eredmények, szociális helyzet, tehetség vagy egyéb speciális feltételek alapján ítélnek oda a tanulóknak vagy hallgatóknak."
    },
    {
        "Szó":  "állami támogatás fogalma",
        "Definíció":  "Az állami támogatásokat feloszthatjuk aszerint, hogy ki kapja azt: a háztartások vagy a vállalkozások? A háztartások esetében a célja lehet bizonyos társadalmi rétegek, korcsoportok támogatása pénzbeni vagy nem pénzbeni juttatásokkal. Az adókedvezményekkel például a fiatalokat, a gyermekes családokat, valamint a betegségben vagy fogyatékosságban szenvedőket segíti az állam."
    },
    {
        "Szó":  "állami támogatás példák háztartásoknak",
        "Definíció":  "Pénzbeni támogatás például a családi pótlék, amelynek a célja a kisgyermekes családoknak nyújtott anyagi segítség a gyermekeik neveléséhez. De ide tartozik az álláskeresési járadék is, ami pedig azoknak nyújt rövid távon anyagi segítséget, akik munka nélkül maradtak, de aktívan keresnek állást. A háztartásoknak nyújtott nem pénzbeni, azaz természetbeni támogatás pedig például az állami oktatás vagy az állami egészségügyi ellátás biztosítása. Ez utóbbi esetekben nem pénzt, hanem valamilyen szolgáltatást vehetnek igénybe a háztartások tagjai. Olvasd el az állami támogatás fogalma szócikket is!"
    },
    {
        "Szó":  "állami támogatás példák vállalkozásoknak",
        "Definíció":  "Az állami támogatások a vállalkozások esetében is fontosak. Amikor az állam úgy ítéli meg, hogy egy vállalkozás tevékenysége közérdekű célokat szolgál, akkor számára pénzbeni állami támogatást nyújthat adókedvezmény vagy beruházásra adott támogatás formájában. (Fontos azonban kiemelni, hogy egy EU-s jogszabály értelmében ezek a támogatások nem lehetnek olyanok, amelyek befolyásolják az uniós országok közötti kereskedelmet vagy versenytorzulást okoznak.) Ezek a célok lehetnek például a hátrányos helyzetű régiók felzárkóztatása, a kis- és középvállalatok támogatása vagy akár a környezetvédelem. Olvasd el az állami támogatás fogalma szócikket is!"
    },
    {
        "Szó":  "állampapír",
        "Definíció":  "Az állam által kibocsátott, hitelviszonyt megtestesítő értékpapír, tehát egy kötvény. Megvásárlásával tulajdonképpen az államnak adsz kölcsönt előre meghatározott kamatra és időre. Nézd meg a kötvény szócikket is!"
    },
    {
        "Szó":  "állandó kiadás",
        "Definíció":  "Azok a kiadások, amelyek minden hónapban rendszeresen jelentkeznek. Az összegük lehet havonta más és más, a lényeg az, hogy minden hónapban fizetned kell őket. Ilyen például az élelmiszerekre, a rezsire, a bérletekre kiadott összeg. Azt tudod, hogy minden hónapban kell élelmiszert vásárolnod, de ennek az összegét több tényező is befolyásolja (ezért változó összegű kiadás is)."
    },
    {
        "Szó":  "álláskeresési járadék",
        "Definíció":  "Álláskeresési járadékra az a személy jogosult, aki a kérelmét megelőzően a törvényben meghatározott mennyiségű ún. jogszerző idővel rendelkezik, aki munkát akar vállalni, de a kérelem benyújtásának idején nincs a számára felajánlható munkahely. Mindig a hatályos törvények szerint értelmezendő."
    },
    {
        "Szó":  "alszámla",
        "Definíció":  "A főszámlához nyitható. Célja lehet betételhelyezés vagy például az, hogy biztonságosabban fizethess online. Olvasd el a főszámla és a webkártya szócikket is!"
    },
    {
        "Szó":  "általános forgalmi adó (áfa)",
        "Definíció":  "Az általános forgalmi adó (áfa) szinte minden termék és szolgáltatás árában megtalálható, azaz azok megvásárlásával az áfát a vevő fizeti meg. Magyarországon jelenleg az áfa általános mértéke 27%, ami az EU-ban a legmagasabb áfakulcs. Ettől eltérő áfakulcsok: 0%, 5% és 18%. Amikor egy terméket vásárolsz vagy egy szolgáltatást veszel igénybe, akkor annak árába beépítve az általános forgalmi adót is megfizeted (tehát te vagy az adófizető). A kereskedő vagy a szolgáltató kötelessége az áfa összegét a költségvetésbe befizetni (tehát ő az adóalany), neked ezzel nincs dolgod. Nézd meg az adó szócikket is!"
    },
    {
        "Szó":  "ár/érték arány",
        "Definíció":  "Azt mutatja meg, hogy egy termék ára hogyan viszonyul annak minőségéhez. Vásárláskor sokszor kell döntened különböző, de hasonló célt szolgáló termékek és szolgáltatások között. Ilyenkor mérlegelned kell például azt, hogy a drágább valóban annyival jobb-e, mint amennyivel magasabb az ára."
    },
    {
        "Szó":  "árstabilitás",
        "Definíció":  "A monetáris politika egyik legfőbb célja az árstabilitás fenntartása. Annak érdekében, hogy az árak ne, vagy csak kis mértékben növekedjenek, az inflációt alacsonyan kell tartani. Olvasd el a monetáris politika szócikket is!"
    },
    {
        "Szó":  "áruhitel",
        "Definíció":  "Tartós fogyasztási cikkek vásárlásakor segíthet. A vásárlás helyszínén igényelhető áruhitel azért népszerű, mert alacsonyabb jövedelem mellett – akár önerő nélkül is – egyszerűen és gyorsan hozzáférhető, és a vevő azonnal hozzájuthat a termékhez. A nagyobb összegű áruhitel-konstrukcióknál azonban megjelenik az önerő: ebben az esetben nem vásárolhatod meg teljes mértékben hitelre a kívánt árut, hanem egy meghatározott részét saját forrásból kell finanszíroznod. Nézd meg a gépjárműhitel szócikket is!"
    },
    {
        "Szó":  "átutalás",
        "Definíció":  "Amennyiben ismered annak a számlaszámát vagy másodlagos azonosítóját, akinek pénzt akarsz küldeni, akkor az átutalás egy egyszerű és gyors megoldás lehet számodra. A fiókodba történő belépés után meg kell adnod az utalás adatait, és egyszerűen jóvá kell hagynod az utalást."
    },
    {
        "Szó":  "Azonnali Fizetési Rendszer (AFR)",
        "Definíció":  "Magyarországon 2020. március 2-án indult el az azonnali fizetési rendszer. Lényege, hogy 20 millió forintig, a hét minden napján, 24 órában, maximum 5 másodperc alatt teljesülnek a forintban történő elektronikusan indított belföldi átutalások."
    },
    {
        "Szó":  "babaváró hitel",
        "Definíció":  "A gyermekvállalás előtt álló házaspároknak nyújthat anyagi segítséget szabad felhasználású és kamatmentes kölcsön formájában. A támogatott hitel felvételétől számítva a második gyermek megszületését követően az aktuális tartozás 30%-át, a harmadik gyermek megszületését követően a hátralévő teljes tartozást elengedik."
    },
    {
        "Szó":  "baleset- és egészségbiztosítás",
        "Definíció":  "Ez a biztosítástípus akkor fizet, ha valamilyen betegség vagy baleset ér. Ha megfelelő baleset- és egészségbiztosítással rendelkezel, akkor akár egy csonttörés vagy rövidebb kórházi kezelés esetén is kapsz pénzt a biztosítótól."
    },
    {
        "Szó":  "BAMOSZ",
        "Definíció":  "Befektetési Alapkezelők és Vagyonkezelők Magyarországi Szövetsége. Oldalukon összehasonlíthatod az alapkezelők és pénzügyi szolgáltatók befektetési alapjait és kiválaszthatod a számodra legmegfelelőbbet."
    },
    {
        "Szó":  "bankbetét",
        "Definíció":  "A bankszámlához kapcsolódó betétszámlán elhelyezett összeget nevezzük bankbetétnek. Könnyen hozzáférhető, biztonságos befektetési forma, de a kamata rendkívül alacsony. Lehet látra szóló és lekötött. Olvasd el a látra szóló és lekötés szócikkeket is!"
    },
    {
        "Szó":  "bankgarancia (hitel esetén)",
        "Definíció":  "Ez főleg a vállalkozókat érintő biztosíték hitelfelvétel esetén. A bankgaranciát vállaló bank arra vállal kötelezettséget, hogy, abban az esetben, ha a hitelt felvevő nem tudja visszafizetni a kölcsönt, akkor azt kifizeti a folyósító bank számára."
    },
    {
        "Szó":  "banki szolgáltatások",
        "Definíció":  "A kereskedelmi bankok legfőbb szolgáltatásai a betétgyűjtés, hitelezés, számlavezetés és fizetési forgalom lebonyolítása, az értékpapír-kereskedelem, valutaváltás, pénzügyi tanácsadás, letétkezelés, széfszolgáltatás stb."
    },
    {
        "Szó":  "bankjegy",
        "Definíció":  "A jegybank által kibocsátott törvényes papírpénzt nevezzük bankjegynek. Nézd meg a jegybank szócikket is!"
    },
    {
        "Szó":  "bankkártya",
        "Definíció":  "A bankkártya egy készpénzt helyettesítő eszköz. Ennek több formája létezik: betéti kártya, virtuális bankkártya, hitelkártya."
    },
    {
        "Szó":  "bankszámla",
        "Definíció":  "A bankszámla kifejezés egy gyűjtőfogalom, legtöbbször a fizetési számlát értjük alatta. Tágabb értelemben minden olyan számlát értünk alatta, amelyet egy pénzforgalmi szolgáltatónál nyithatsz és arról különféle műveleteket végezhetsz."
    },
    {
        "Szó":  "bankszámlapénz",
        "Definíció":  "A bankszámlán jóváírt összeget nevezzük számlapénznek. Ez a készpénzzel ellentétben digitális és nem kézzel fogható formában létezik. Bankszámlapénz lehet az az összeg, amit a számlatulajdonos elhelyez a folyószámláján, vagy arra valaki átutal neki, illetve az az összeg, amit a bank hitelként nyújt az ügyfelének, és ennek összegét jóváírja a számláján."
    },
    {
        "Szó":  "befektetés",
        "Definíció":  "A befektetés tulajdonképpen egy eszköz, amelynek segítségével – jellemzően hosszabb távon – valamilyen hasznot, hozamot szeretnénk elérni. Befektetésnek nevezzük tehát azt a pénzügyi döntést, amit a pénzünk gyarapításának reményében hozunk meg, és ezzel különböző mértékű kockázatot vállalunk. A befektetések formájukat tekintve két csoportra oszthatók: pénzügyi piaci befektetések és nem pénzügyi piaci befektetések."
    },
    {
        "Szó":  "befektetési alap",
        "Definíció":  "Olyan megtakarítási forma, amelyben egyszerre sok más befektetővel közösen helyezhető el a megtakarítás befektetési jegy formájában. A befektetési portfólió különböző, előre meghatározott befektetési formát tartalmaz, például állampapírokat, részvényeket, de vannak ingatlan alapok is. Amikor befektetési jegyet vásárolsz, a pénzt az alapkezelő szakemberei kezelik. A hitelintézetek és alapkezelők általában számos, különböző kockázatú befektetési alapot kínálnak, melyek így, a kockázat függvényében, különböző elérhető hozamot ígérnek."
    },
    {
        "Szó":  "befektetési háromszög",
        "Definíció":  "Három tényező, a biztonság, a hozam és a likviditás szempontjából vizsgálja a befektetéseket. A befektetési háromszög elmélete kimondja, hogy nincs olyan befektetés, amelynél mindhárom szempont egyszerre teljesül, tehát biztonságos, magas hozamot ad és bármikor készpénzzé tehető. Ennek ismerete segíthet neked abban, hogy ne dőlj be az olyan pénzügyi csalóknak, akik ezzel az elmélettel ellentétes befektetést ajánlanak neked."
    },
    {
        "Szó":  "Befektető-védelmi Alap (BEVA)",
        "Definíció":  "Míg a bankbetétek esetén az OBA, a többi befektetési formánál a BEVA nyújthat védelmet. A BEVA tagjai a Magyarországon bejegyzett befektetési engedéllyel rendelkező vállalkozások lehetnek, ez azonban nem kötelező számukra. Amikor kiválasztasz egy befektetést, mindig ellenőrizd, hogy az adott hitelintézet tagja-e a BEVA-nak! A BEVA nem a piaci veszteségekre nyújt fedezetet, hanem a nem megfelelő, esetleg törvénysértő magatartásból származó károkra. 100 000 euróig kártalanít, 1 millió forintig 100%-ot, az afeletti összegnek pedig a 90%-át kaphatod meg baj esetén. Nézd meg az Országos Betétbiztosítási Alap (OBA) szócikket is!"
    },
    {
        "Szó":  "Békéltető Testület",
        "Definíció":  "Előfordulhat, hogy nem sikerül a kereskedővel rendezned a reklamációdat. Ebben az esetben a békéltető testülethez fordulhatsz, akik ingyenes segítséget nyújtanak számodra. Az ő támogatásukkal megpróbálhatsz egyezségre jutni a kereskedővel. Ha ez nem sikerül, akkor ez a független testület dönt vagy ajánlást ad az ügyben. Ha a panaszodat megalapozatlannak tarják, akkor az eljárást megszüntetik. Ha a békéltető testület döntését nem fogadod el, akkor jogod van a bírósághoz fordulni."
    },
    {
        "Szó":  "bérjegyzék",
        "Definíció":  "A kifizetett munkabér elszámolására szolgáló hivatalos dokumentum, melynek kötelező elemei vannak. Ebben részletesen megtalálható az adott időszakra vonatkozó a bruttó és nettó munkabér, az esetleges túlóra vagy kiküldetési díj, a prémium, a távolléti díj, a táppénz összege, valamint a levonások."
    },
    {
        "Szó":  "bérleti díj",
        "Definíció":  "Az ingatlan tulajdonosa kapja a tulajdonában lévő ingatlan bérbeadásáért. Ez a jövedelem általában havi rendszerességgel érkezik és a bérleti szerződésben meghatározott feltételek szerint kerül kifizetésre. A bérleti díj után a bérbeadónak a mindenkori adótörvények szerint adót kell fizetnie."
    },
    {
        "Szó":  "bérpótlék",
        "Definíció":  "A munkabér kiegészítéseként járó, jogszabályban meghatározott többlettjuttatás, amelyet a munkavállaló különleges munkakörülmények vagy rendkívüli munkavégzés esetén kap. Ilyen például az éjszakai, hétvégi vagy ünnepnapi munkáért járó pótlék vagy a túlóra. Olvasd el a munkabér szócikket is!"
    },
    {
        "Szó":  "beruházás",
        "Definíció":  "Beruházásról akkor beszélünk, amikor a gazdasági szereplők olyan javakhoz jutnak, amelyek más javak előállítására szolgálnak. Amikor egy vállalkozó egy modern gépet vesz meg, és azzal terméket állít elő, akkor az egy beruházás. De beruházás lehet például az oktatásra vagy az egészségügyre fordított pénzösszeg is, amelynek eredménye egy képzettebb és egészségesebb társadalom lesz."
    },
    {
        "Szó":  "betéti kártya",
        "Definíció":  "A betéti kártyával a bankszámládon elhelyezett pénzhez férhetsz hozzá. Ha a folyószámládhoz van hitelkereted is, akkor ahhoz is hozzáférésed van a betéti kártyával."
    },
    {
        "Szó":  "betétszámla",
        "Definíció":  "Más néven megtakarítási számla a fel nem használt pénzed kamatoztatására szolgál. Bankban nyitható számla, az itt elhelyezett pénzre a bank kamatot fizet neked. Lehetnek fizetési számlák is. Olvasd el azt a szócikket is!"
    },
    {
        "Szó":  "bevétel",
        "Definíció":  "Bevételnek nevezzük azokat a pénzösszegeket, amelyekhez valamilyen tevékenység által hozzájutunk. A háztartások bevételei a forrásuk szerint lehetnek: munkavégzésből származó jövedelem, társadalmi jövedelem, saját tulajdonból származó jövedelem és egyéb jövedelem."
    },
    {
        "Szó":  "bírság",
        "Definíció":  "A bírság egy olyan, jogszabályban meghatározott fizetési kötelezettség, amelyet az állam/önkormányzat részére fizet az, aki megszegett egy jogszabály által meghatározott kötelezettséget, szabályt."
    },
    {
        "Szó":  "biztosítás",
        "Definíció":  "A biztosítások célja, hogy csökkentsék az előre nem látható események miatt bekövetkező károkat. Létezik olyan biztosítás is, amikor az előre biztosan bekövetkező eseményre kötünk biztosítást, ilyen például a nyugdíjbiztosítás."
    },
    {
        "Szó":  "biztosító",
        "Definíció":  "Definíció szerint a biztosító olyan szervezet, amely a jogszabályokkal összhangban biztosítási és azzal összefüggő tevékenységet folytathat. Ez a gyakorlatban azt jelenti, hogy a biztosító az a szervezet, amellyel szerződést köthetsz azért, hogy egy előre nem látott esemény bekövetkeztekor az anyagi jellegű károdat csökkenthesd. A biztosítóval ezen kívül olyan eseményekre is szerződést köthetsz, amelyek biztosan bekövetkeznek, ilyen például a nyugdíjbiztosítás. Ha a szerződésben kikötött esemény bekövetkezik, akkor a biztosító a szerződésben meghatározott összeget kifizeti. Azt, hogy ezt az összeget kinek és mennyi időn belül fizeti ki a biztosító, azt a szerződés tartalmazza."
    },
    {
        "Szó":  "blokklánc",
        "Definíció":  "A blokklánc egy olyan adatbázis, amelyet nem centralizált hálózaton tárolnak. Az adatok olyan számítógépeken tárolódnak, amelyek az elosztott hálózat csomópontjain működnek. Abban az esetben, ha az adatbázisban változás történik (pl. fizetés), azt minden, a hálózatban lévő számítógép ellenőriz, majd az adatbázis frissül (tehát a küldő pénztárcájából a fogadó fél pénztárcájában kerül jóváírásra a fizetett összeg). Az első blokklánc a Bitcoiné volt."
    },
    {
        "Szó":  "bruttó",
        "Definíció":  "A teljes, azaz a levonások előtti összeg. Munkabér esetén a bruttó bérből levonásra kerül(het) a személyi jövedelemadó és a társadalombiztosítási járulék, valamint más jogcímen is lehetnek levonások (pl. gyerektartás)."
    },
    {
        "Szó":  "casco",
        "Definíció":  "Ez a biztosítás például lopás vagy töréskár esetén fizet, és a KGFB-vel ellentétben önkéntes, tehát nem kötelező. A biztosítás díja többek között függ az önrész nagyságától. Ha a saját autódban esetlegesen bekövetkező kárt szeretnéd biztosítani, akkor casco biztosítást kell kötnöd. Nézd meg az önrész és a KGFB szócikkeket is!"
    },
    {
        "Szó":  "cash back",
        "Definíció":  "A szolgáltatás keretében legfeljebb havi két alkalommal, maximum összesen 40 ezer forintig ingyenesen lehet felvenni készpénzt a szerződött kereskedőknél. Ahhoz a számlához tartozó bankkártyával vehetsz fel így pénzt, amelyik esetében nyilatkoztál az ingyenes készpénzfelvételről. Fontos, hogy csak akkor élhetsz ezzel a lehetőséggel, ha az adott boltban legalább 3 ezer forint értékben vásárolsz is. Alkalmanként max. 20.000 forintot vehetsz így fel, és a kereskedő a 3.000 forintnál magasabb küszöbértéket is megállapíthat."
    },
    {
        "Szó":  "CVC-kód/CVV-kód",
        "Definíció":  "A bankkártyákon lévő biztonsági kód. Célja az, hogy az internetes fizetések biztonságát növelje. Ha a bankkártyád egyéb adataidhoz illetéktelenek hozzá is férnek, ennek a kódnak a hiányában nem tudják igazolni, hogy jogosultak az online fizetésre."
    },
    {
        "Szó":  "családi adókedvezmény",
        "Definíció":  "Ezt azok vehetik igénybe, akik családi pótlékra jogosultak, de itt is sok szempontot kell figyelembe venni, tehát érdemes a NAV oldalán ennek is utánanézni. Olvasd el az adókedvezmény fogalma szócikket is!"
    },
    {
        "Szó":  "családi otthonteremtő kedvezmények",
        "Definíció":  "A csok egy olyan támogatás, amely gyermekes családok ingatlanhoz jutását segíti. A feltételeit törvényben szabályozzák. A támogatás mellé kamattámogatott hitel is igényelhető, amely további pénzügyi segítséget nyújt. A falusi csok is a gyermekek után jár a törvényben meghatározott személyek részére, akik kisebb településeken vásárolnak ingatlant vagy építenek házat. A gyermekek számától függ a támogatás összege."
    },
    {
        "Szó":  "családi pótlék",
        "Definíció":  "A gyermek neveléséhez és iskoláztatásához nyújtott, alanyi jogon járó állami támogatás. Az ellátás összege a gyermekek számától és speciális élethelyzetektől függ, havonta kerül kifizetésre. A családi pótlék két tényezőből, nevelési ellátásból és iskoláztatási támogatásból tevődik össze. Nevelési ellátás a még nem iskolaköteles gyermekeket nevelőknek (valamint saját jogon a tartósan beteg, illetve súlyosan fogyatékos, 18. életévét betöltött fiatalnak) jár. Iskoláztatási támogatás jár a tanköteles gyermekeket nevelőknek a tankötelezettség lejártáig, illetve a köznevelésben folytatott tanulmányainak befejeztéig (de max. 20 éves koráig, illetve SNI-s esetében 23 éves korig)."
    },
    {
        "Szó":  "családi pótlék",
        "Definíció":  "A gyermek neveléséhez és iskoláztatásához nyújtott, alanyi jogon járó állami támogatás. Az ellátás összege a gyermekek számától és speciális élethelyzetektől függ, havonta kerül kifizetésre. A családi pótlék két tényezőből, nevelési ellátásból és iskoláztatási támogatásból tevődik össze. Nevelési ellátás a még nem iskolaköteles gyermekeket nevelőknek (valamint saját jogon a tartósan beteg, illetve súlyosan fogyatékos, 18. életévét betöltött fiatalnak) jár. Iskoláztatási támogatás jár a tanköteles gyermekeket nevelőknek a tankötelezettség lejártáig, illetve a köznevelésben folytatott tanulmányainak befejeztéig (de max. 20 éves koráig, illetve SNI-s esetében 23 éves korig)."
    },
    {
        "Szó":  "csed",
        "Definíció":  "A gyermek születése után járó támogatás. A csed a csecsemőgondozási díj. Ehhez legalább 1 éves munkaviszonyt kell igazolni."
    },
    {
        "Szó":  "cselekvőképesség",
        "Definíció":  "Ez egy tág fogalom, amit a Polgári Törvénykönyv szabályoz. Röviden az a személy cselekvőképes, aki rendelkezik az ügyei intézéséhez szükséges belátási képességgel, azaz képes racionális döntést hozni. A cselekvőképességnek három fokozata van: cselekvőképes, korlátozottan cselekvőképes és cselekvőképtelen. Ebben a tananyagban a cselekvőképesség a szerződések megkötésével kapcsolatban fordul elő. Hitelszerződést például kizárólag cselekvőképes személy köthet."
    },
    {
        "Szó":  "csoportos beszedés",
        "Definíció":  "Ez az egyik legolcsóbb és legegyszerűbb módja annak, hogy a számláidat befizesd. Csoportos beszedés esetén szolgáltatód indítja el a tranzakciót a te felhatalmazásod alapján."
    },
    {
        "Szó":  "deviza",
        "Definíció":  "Devizának a külföldi pénznemekben lévő elektronikusan nyilvántartott (tehát nem fizikai) pénz értjük."
    },
    {
        "Szó":  "devizaszámla",
        "Definíció":  "Külföldi devizában vezetett fizetési számla. Ha például euróban vásárolsz és azt az euróban vezetett számládról fizeted, akkor nem kell aggódnod az árfolyamingadozás miatt."
    },
    {
        "Szó":  "diákhitel",
        "Definíció":  "Ez egy speciális fogyasztási hitel. A Diákhitel Központnál igényelheted, és egy szerződött banknál veheted fel, ha rendelkezel tanulói vagy egyetemi hallgatói jogviszonnyal. Nézd meg a Diákhitel1 és a Diákhitel2 szócikket is!"
    },
    {
        "Szó":  "Diákhitel1",
        "Definíció":  "Szabad felhasználású, az igényelt összeget bármire költheted. Éppen ezért a kamata is magasabb, mint a Diákhitel2-é. A 2024 december 31-ig igényelt Diákhitel1 kamata 7,99%. A 2025 első félévében igényelt Diákhitel1 kamata 9,65%, a második félévben igényelté 8,99%. Az igényelhető havi összeg minimum 15 ezer forint, maximum 150 ezer forint. További információt a következő oldalon találsz: https://diakhitel.hu/diakhitel1/"
    },
    {
        "Szó":  "Diákhitel2",
        "Definíció":  "A támogatott kamatozású Diákhitel2-t az önköltséges képzések tandíjára lehet felhasználni. Kamata 0% További információt a következő oldalon találsz: https://diakhitel.hu/diakhitel2/"
    },
    {
        "Szó":  "diákmunka",
        "Definíció":  "Diákmunkát a diákigazolvánnyal rendelkező nappali tagozatos diákok és hallgatók végezhetnek. Diákmunka esetén a diákokat iskolaszövetkezeten/diákszövetkezeten keresztül alkalmazzák, tehát a fiatalok rajtuk keresztül, az ő közvetítésükkel és segítségükkel találhatnak munkát maguknak. A diákmunkások beosztása sokkal rugalmasabban történik, mint a felnőtt munkavállalóké. Nézd meg a diákmunka szabályai szócikket is!"
    },
    {
        "Szó":  "diákmunka szabályai",
        "Definíció":  "A munkavégzéshez 18 éves kor alatt szülői engedély szükséges. A 18 évesnél fiatalabbak este 10 és reggel 6 között nem dolgozhatnak. A diákok 15 éves kor alatt kizárólag művészeti, kulturális és sport területen dolgozhatnak, és gyámhatósági engedélyre is szükségük van. 15 és 16 éves kor között csak az iskolai szünetekben, 16 éves kor felett azon kívül is vállalható diákmunka. Ha diákmunkát végzel, akkor TB-járulékot sem kell fizetned. Nézd meg a diákmunka és a 25 éven aluli fiatalok adókedvezménye szócikket is!"
    },
    {
        "Szó":  "diákszövetkezet",
        "Definíció":  "A diákszövetkezet vagy más néven iskolaszövetkezet olyan speciális szabályok alapján működő gazdálkodó szervezet, amely nappali tagozatos diákok és hallgatók részvételével működik. Számukra az időbeosztásukhoz igazodó munkalehetőségek felkutatásával és lebonyolításával foglalkozik. A diákok, hallgatók ebben az esetben nem munkavállalók, hanem szövetkezeti tagok, és a munkát harmadik félnek (tehát nem a diákszövetkezetnek) végzik."
    },
    {
        "Szó":  "digitális pénztárca",
        "Definíció":  "A digitális pénztárca egy olyan mobil alkalmazás, amely használatával helyettesíthető a fizikai bankkártya. Miután letöltötted az alkalmazást és regisztráltál, hozzá kell rendelned a bankkártyádat, amit az alkalmazás a bankodnál hitelesít és már használhatod is."
    },
    {
        "Szó":  "diverzifikáció",
        "Definíció":  "A befektetett pénz megosztása többféle befektetési forma között. Ezzel csökkentheted a kockázatot és, ha valamelyik befektetési eszközöd rosszabbul teljesít, mint elvárod, akkor azt a másik eszköz kompenzálhatja."
    },
    {
        "Szó":  "dologi adós",
        "Definíció":  "Az a személy, aki nem maga veszi fel a hitelt, de az ő tulajdonában lévő ingatlan – vagy más vagyontárgy – kerül fedezetként bevonásra, azaz jelzálogként lekötésre. Ha például nagy összegű lakáshitelt veszel fel, előfordulhat, hogy csak az a lakás nem lesz elegendő fedezet a bank számára. Ekkor előfordulhat, hogy például a szüleid úgy segíthetnek neked, hogy felajánlják a saját lakásukat is fedezetként. Így ők dologi adósok lesznek. Olvasd el az adós szócikket is"
    },
    {
        "Szó":  "dropshipping",
        "Definíció":  "Az online bolt, ahol nem kell készletet tartani, mert a termékek közvetlenül a beszállítótól kerülnek a vásárlókhoz."
    },
    {
        "Szó":  "EBKM",
        "Definíció":  "Egységesített betétikamatláb-mutató. Ez egy olyan százalékos mutató, amely arról tájékoztat, hogy egy bankbetét után mekkora éves kamatot kapsz a kezelési költségek és díjak levonását követően. Ez az érték segíthet összehasonlítani a bankok különféle ajánlatait."
    },
    {
        "Szó":  "egészségpénztár",
        "Definíció":  "Speciális célra gyűjtött megtakarítás. Az egészségpénztári tagság abban segít, hogy felkészülhess egy esetleges váratlan egészségügyi kiadásra. A számládra befizetett összegből bizonyos meghatározott egészségmegőrző termékeket vásárolhatsz, valamint egészségügyi szolgáltatásokat vehetsz igénybe, adott esetben kedvezményesen. Ha van egészségpénztári és önkéntes nyugdíjpénztári befizetésed is, akkor figyelj arra, hogy az ezekre befizetett összegre együttesen jár a maximum 150 ezer forintos adókedvezmény! Hogy ezt melyiknél akarod igénybe venni, arról nyilatkoznod kell az adóbevallásodban."
    },
    {
        "Szó":  "egyenlő bánásmód",
        "Definíció":  "Kimondja, hogy az azonos értékű munkát végzők között nem lehet indokolatlan különbséget tenni például nem, életkor, egészségi állapot alapján. A különbségek ugyanakkor jogszerűek lehetnek tapasztalat vagy egyedi készségek miatt."
    },
    {
        "Szó":  "egységár",
        "Definíció":  "Egy áru egy egységének (kiló, liter, méter, négyzetméter stb.) az ára. Ha például ugyanolyan fajtájú, de más márkájú, előre csomagolt sajtot szeretnél venni, amik között a 10 dekástól a fél kilósig mindenféle súlyú van, akkor csak a feltűntetett árakat nehezen tudod összehasonlítani. Ha azonban azt is tudod, hogy 1 kiló sajt mennyibe kerül, tehát mennyi a sajt egységára, akkor a különböző súlyú darabokat már össze tudod hasonlítani."
    },
    {
        "Szó":  "EHM",
        "Definíció":  "Egységesített értékpapírhozam-mutató. Ez egy százalékos formában megadott teljesítménymutató, amelyet az értékpapírokat tartalmazó befektetési termékekhez kapcsolnak. Ez mutatja meg az ajánlatok éves nettó hozamait, a kezelési költségek és egyéb díjak levonása után. Közzététele kötelező, azt kormányrendelet írja elő. Segítségével összehasonlíthatóak a különböző befektetési ajánlatok."
    },
    {
        "Szó":  "eladási árfolyam - deviza",
        "Definíció":  "Általános esetben ezt az árfolyamot alkalmazza a bank, amikor a számládon lévő forintot devizára váltod. Olvasd el a deviza szócikket is!"
    },
    {
        "Szó":  "eladási árfolyam - valuta",
        "Definíció":  "Ezen az árfolyamon adja neked a bank/pénzváltó a valutát, tehát neked ennyit kell érte fizetned. Olvasd el a valuta szócikket is!"
    },
    {
        "Szó":  "elállási jog",
        "Definíció":  "Online vásárlás esetében úgynevezett elállási jogod van, ami a legtöbb termék esetében érvényesíthető. Az elállási jog határideje online vásárláskor 14 nap, amely a termék átvételétől, illetve szolgáltatás esetében a szerződéskötéstől számít. Ez a gyakorlatban azt jelenti, hogy az online vásárolt árut, ha nem tetszik vagy nem olyan, amilyenre számítottál, visszaküldheted és kérheted az árának visszafizetését. Indokolnod sem kell a döntésedet, hiszen vásárlás előtt nem tudtad kipróbálni azt. Persze vannak olyan termékek, amelyekre ez a jog nem vonatkozik. Ilyenek pl. az élelmiszerek, a zárt csomagolású higiéniai termékek, a koncertjegyek, a méretre szabott ruhák, a számítógépes szoftverek, képfelvételek, a folyóiratok. Szintén ide tartoznak azok a termékek (pl. tüzelőolaj, nemesfém ékszerek), amelyek ára erősen függ a piac változásaitól."
    },
    {
        "Szó":  "elérési életbiztosítás",
        "Definíció":  "A biztosító akkor fizet a biztosítottnak vagy a kedvezményezetteknek, ha a biztosított a biztosítási időtartam letelte után is életben van. A biztosítás díja függ a biztosított személy életkorától, egészségügyi állapotától vagy például dohányzási szokásaitól. Nézd meg a kockázati életbiztosítás szócikket is!"
    },
    {
        "Szó":  "elkülönített célú számla",
        "Definíció":  "Olyan bankszámla, amely csak egy meghatározott célra használható. Ilyen például a letéti számla. A letéti számlán lévő összeg csak akkor használható fel, ha bizonyos előre meghatározott feltételek bekövetkeznek."
    },
    {
        "Szó":  "előleg",
        "Definíció":  "Amikor egy nagyobb értékű ingatlant vagy ingóságot vásárolsz, előfordul, hogy nem egy összegben fizeted ki a vételárat. Az előleg a vételár része, annak tulajdonképpen első részlete. Ha az adás-vétel végül mégsem jön létre, akkor az előleg összege a vevőnek visszajár. Nézd meg a foglaló szócikket is!"
    },
    {
        "Szó":  "először fizess magadnak elv",
        "Definíció":  "Az \"először fizess magadnak\" elv egy olyan pénzügyi stratégia, amely arra ösztönzi az egyéneket, hogy jövedelmük egy részét azonnal félretegyék, mielőtt bármilyen más kiadásra fordítanák. Tehát a lényeg az, hogy nem a hónap végén teszed félre azt az összeget, ami megmarad, hanem tervezetten, már a hónap elején, illetve, amikor bevételed van, annak egy részét félreteszed, megtakarítod vagy be is fekteted."
    },
    {
        "Szó":  "előtörlesztés",
        "Definíció":  "A hitel idő előtti törlesztését nevezzük így. Ez lehet részleges vagy teljes. Ez utóbbit végtörlesztésnek is nevezik. A részleges előtörlesztés az, amikor legalább három havi törlesztőrészletnek megfelelő összeget fizetsz előre. Ennek költsége lehet, amiről a bankod tud felvilágosítást adni. Az is előfordulhat, hogy ilyen esetben elvesznek a hiteledhez kapcsolódó kedvezmények. Érdemes már a hitel felvételekor erre odafigyelned! Olvasd el a végtörlesztés szócikket is!"
    },
    {
        "Szó":  "első házasok kedvezménye",
        "Definíció":  "Az első házasok kedvezményét a házaspár együttesen veheti igénybe, a törvényben meghatározott mértékig csökkenthetik az adóalapjukat. Ez a kedvezmény 24 hónapig vehető igénybe a házasságkötés után. (Ez az adótörvényben egy változó elem, amiről az adott évi jogszabály rendelkezik!) Olvasd el az adókedvezmény fogalma szócikket is!"
    },
    {
        "Szó":  "értékpapírszámla",
        "Definíció":  "Az értékpapírszámla olyan számla, ami állampapírok, befektetési jegyek, részvények és kötvények vásárlása, valamint Tartós Befektetési Számla esetén szükséges. A számla előnye, hogy az értékpapírokat nem kell papíralapon őrizned, azok elektronikusan vannak nyilvántartva. Értékpapírszámlát nyithatsz kereskedelmi bankoknál, a Magyar Államkincstárnál, valamint brókercégeknél. Az említett befektetések közül az Államkincstárnál nyitott számla csak az állampapírok vezetésére szolgál. A bankoknál vezetett értékpapírszámla megnyitásának általában feltétele, hogy rendelkezz egy náluk vezetett fizetési számlával."
    },
    {
        "Szó":  "ESG kritériumok",
        "Definíció":  "Az ESG kritériumok alapján a vállalatokat és projekteket a következő három fő terület szerint értékelik. Milyen hatással vannak a környezetre (E: Enviromental, környezeti), hogyan kezelik a társadalmi felelősségvállalással kapcsolatos kérdéseket (S: Social, társadalmi), és a vállalt vezetése és működése hogyan biztosítja az átláthatóságot és az etikai normák betartását (G:Governance, irányítás)."
    },
    {
        "Szó":  "ETF",
        "Definíció":  "Kockázatmegosztáson alapuló befektetés, amely kevés időráfordítással követi a piaci trendeket. Egyetlen ETF megvásárlásával a befektetők számos részvényhez, kötvényhez férhetnek hozzá, csökkentve ezzel a kockázatot. A kisbefektetők körében egyszerűségük és költséghatékonyságuk miatt népszerűek."
    },
    {
        "Szó":  "Európai Központi Bank (EKB)",
        "Definíció":  "Fő feladata az euró kezelése (euróövezeti kamatok, devizatartalék meghatározása, euróbankjegyek kibocsátásának engedélyezése, stb.), az EU gazdasági és monetáris politikájának kialakítása, valamint végrehajtása."
    },
    {
        "Szó":  "extrém ajánlat",
        "Definíció":  "Olyan ígéret vagy nem valós lehetőség, amely a szokásos piaci hozamokhoz képest szokatlanul magas, gyors vagy kockázatmentes nyereséggel kecsegtet, megtévesztő és/vagy csalásra épül. Jellemzője a garantáltan magas hozam, a kockázatmentesség ígérete, valamint a nyomásgyakorlás, a követhetetlen rendszer és a hamis hivatkozások."
    },
    {
        "Szó":  "fedezet",
        "Definíció":  "Vagyoni biztosíték, általában olyan értékes ingóság vagy ingatlan, amely, abban az esetben, ha nem tudod visszafizetni a felvett kölcsönt, a kölcsön folyósítójának a birtokában kerülhet. (Adott esetben a számládon lévő pénz is lehet fedezet.) Jelzáloghitelek esetében ez általában az a dolog, amire a hitelt felvetted."
    },
    {
        "Szó":  "felelősségbiztosítás",
        "Definíció":  "A másoknak okozott károk megtérítésére szolgál. Ha például valaki olyan munkát végez, amely során előfordulhat, hogy másnak kárt okoz, akkor érdemes felelősségbiztosítást kötnie. Érdemes például a lakásbiztosításodba is belevenni a felelősségbiztosítást, így abban az esetben, ha például az erkélyedről leeső muskátli ráesik egy parkoló autóra, akkor a kárt nem neked kell megfizetned. Persze csak akkor, ha a kár nem a te szándékos cselekedeted miatt keletkezett. Olvasd el a KGFB szócikket is!"
    },
    {
        "Szó":  "finanszírozás",
        "Definíció":  "balablablabla"
    },
    {
        "Szó":  "fintech vállalat",
        "Definíció":  "A fintech cégek olyan digitális pénzügyi megoldásokat kínálnak, amelyek a hagyományos pénzügyi szolgáltatásokkal szemben, gyorsabbak, modernebbek, olcsóbbak és egyszerűbbek. A fintech vállalatok sokszor azonban nem bankok, hanem olyan vállalkozások, amelyek pénzügyi szolgáltatások nyújtására jogosultak. Ennek a biztonság szempontjából lehet jelentősége, a bankok sokkal szigorúbb szabályozásnak kell, hogy megfeleljenek."
    },
    {
        "Szó":  "fix összegű kiadás",
        "Definíció":  "Azok a kiadások, amelyek összege mindig ugyanaz. Ilyen például az internet-előfizetésed vagy egy fitness-bérlet. Attól, hogy valami fix összegű kiadás, nem biztos, hogy állandó is. Ha fitness-bérletet nem havonta veszel, hanem akkor, amikor éppen kedved van menni, akkor az ugyan fix összegű, de nem állandó, hanem alkalomszerű kiadás."
    },
    {
        "Szó":  "fizetési forgalom",
        "Definíció":  "A számlán keresztül történő készpénzes és készpénzmentes fizetések összessége."
    },
    {
        "Szó":  "fizetési kérelem",
        "Definíció":  "Az átutalás egy speciális formája, amikor a kedvezményezett előzetesen kéri, hogy utald át számára az összeget. Ha ezt engedélyezed, az utalás megtörténik és minden esetben számodra ingyenes a tranzakció."
    },
    {
        "Szó":  "fizetési késedelem szakasza",
        "Definíció":  "Ha az adós nem tudja fizetni a hitelét, akkor a késedelmet három szakaszra bonthatjuk. Az első a fizetési késedelem szakasza, ami az első 89 napot jelenti. Ekkor még komolyabb lépésre nem kerül sor, de a bank megpróbálja felvenni az adóssal a kapcsolatot, hogy megtudja, miért nem tudja vagy akarja fizetni a hitelt. Közösen keresik a megoldást a probléma megszüntetésére, mert mindenkinek az az érdeke, hogy a nemfizetés megszűnjön. Nézd meg a követeléskezelési szakasz és a végrehajtási szakasz szócikkeket is!"
    },
    {
        "Szó":  "fizetési számla",
        "Definíció":  "Más néven folyószámla, a fizetések lebonyolítására szolgál. A bevételeidet erre kapod meg, és erről fizethetsz különböző módokon (utalással, bankkártyával), valamint erről tudsz készpénzt felvenni. A fizetési számlákhoz kapcsolhatsz takarékoskodási céllal lekötött betéteket, ahol megtakarításaid nem látra szólóan kamatoznak."
    },
    {
        "Szó":  "foglaló",
        "Definíció":  "Amikor egy nagyobb értékű ingatlant vagy ingóságot vásárolsz, előfordul, hogy nem egy összegben fizeted ki a vételárat. Az foglaló a vételárba beszámít, ha megvalósul az ügylet, valamint egy biztosíték az eladó részére. Ha az adás-vétel végül olyan okok miatt nem jön létre, amelyekért sem az eladó, sem a vevő nem felelős, akkor a foglaló, ugyanúgy, mint az előleg visszajár. Ha a vevő miatt nem jön létre az adás-vétel, akkor a foglalót az eladó megtarthatja, viszont abban az esetben, ha az adás-vétel az eladó miatt hiúsul meg, akkor a vevőnek a foglaló kétszerese jár vissza. Nézd meg az előleg szócikket is!"
    },
    {
        "Szó":  "fogyasztási hitel",
        "Definíció":  "Szabad felhasználásra, nagyobb értékű tárgyak vagy szolgáltatások finanszírozására szolgál, amit a hitelfelvevő jövedelme alapján lehet felvenni. Főbb típusai: áruhitel, személyi kölcsön, folyószámlahitel és hitelkártya."
    },
    {
        "Szó":  "fogyasztói jogok",
        "Definíció":  "Azoknak a jogoknak az összessége, amelyek a vásárlókat illetik meg a cégekkel, kereskedőkkel, szolgáltatókkal szemben. A fogyasztói jogok védik a vásárlók érdekeit. Magába foglalja a tájékoztatást, a biztonságos termékhez való hozzájutást is. Ha megvásárolt termék hibás vagy nem olyan, amire számítottál, akkor élhetsz a fogyasztói jogaiddal. Nézd meg a jótállás, a jótállási jegy és a szavatosság szócikket is!"
    },
    {
        "Szó":  "folyószámla",
        "Definíció":  "Más néven fizetési számla, a fizetések lebonyolítására szolgál. A bevételeidet erre kapod meg, és erről fizethetsz különböző módokon (utalással, bankkártyával), valamint erről tudsz készpénzt felvenni. A fizetési számlákhoz kapcsolhatsz takarékoskodási céllal lekötött betéteket, ahol megtakarításaid nem látra szólóan kamatoznak."
    },
    {
        "Szó":  "folyószámlahitel",
        "Definíció":  "Ez egy hitelkeret-szerződés, amelyet a bank a folyószámládhoz kapcsol a számládra érkező jövedelem alapján, ha igényled. Ennek mértékéről szerződésben kell megállapodnod a bankkal. A hitelkeret szabadon felhasználható és a hitel futamideje jellemzően egy év, ami egy automatikus felülvizsgálat után – ha nincs probléma – újraindul. A törlesztés rugalmas, és a folyószámlára beérkező összegből történik. A THM nagyon magas is lehet. Nézd meg a THM szócikket is!"
    },
    {
        "Szó":  "TESZT4",
        "Definíció":  "Főszámlának tekinthető az a számla, amelyet a bank annak jelez, és amelyről a lehető legtöbb számlaművelet a lehető legkevesebb korlátozás mellett érhető el. Nézd meg az alszámla szócikket is!"
    },
    {
        "Szó":  "futamidő",
        "Definíció":  "A hitel visszafizetésére szerződésben meghatározott időtartam. Ezen időn belül köteles az adós a hitelt (és a kamatait, díjait és egyéb költségeit) visszafizetni."
    },
    {
        "Szó":  "függő ügynök",
        "Definíció":  "Ha például biztosítást akarsz kötni, akkor számos mód áll a rendelkezésedre, hogy megtaláld a számodra legmegfelelőbbet. Az egyik lehetőség az, hogy egy függő ügynök segítségét kéred. Ekkor azonban tudnod kell, hogy ez az ügynök csak egy adott biztosító szolgáltatásait, termékeit fogja veled megismertetni. Szemben például az alkusszal, aki több biztosító termékeit és szolgáltatásait is köteles ajánlani neked. Banki termékek esetében a függő ügynöknek legalább három bank ajánlatát kell megismertetnie veled a jelenleg érvényes jogszabály szerint. Nézd meg a biztosítás szócikket is!"
    },
    {
        "Szó":  "garantált bérminimum",
        "Definíció":  "Az a jogszabályban rögzített legalacsonyabb munkabér, amit minden legalább középfokú végzettséget vagy szakképzettséget igénylő munkakörben dolgozónak meg kell kapnia, ha teljes állásban dolgozik. Részmunkaidő esetén ennek az arányos részét."
    },
    {
        "Szó":  "gazdasági környezet",
        "Definíció":  "Ide tartoznak a gazdaság szereplői, a kulturális, politikai és gazdasági döntések és történések, amelyek hatással vannak a mindennapjainkra, a döntéseinkre."
    },
    {
        "Szó":  "gépjárműhitel",
        "Definíció":  "Ez egy speciális áruhitel, ahol a gépkocsi egyben a hitel fedezete is. Nézd meg az áruhitel szócikket is!"
    },
    {
        "Szó":  "GIRO-rendszer",
        "Definíció":  "A bankközi pénzmozgások hatékony működését lehetővé tevő informatikai rendszer Magyarországon."
    },
    {
        "Szó":  "TESZT3",
        "Definíció":  "Más néven zöldre festés. A vállalkozás eltúlzottan – vagy éppen alaptalanul – azt a képet sugározza magáról, hogy környezettudatos, a fenntarthatóság elkötelezettje. Célja, hogy ezzel a félrevezető képpel azokat a befektetőket próbálja bevonzani, akik számára fontosak ezek az értékek."
    },
    {
        "Szó":  "gyed",
        "Definíció":  "A gyermek születése után járó támogatás. A gyed a gyermekgondozási díj. Ehhez legalább 1 éves munkaviszonyt kell igazolni. A gyedet a csed után lehet igényelni."
    },
    {
        "Szó":  "gyes",
        "Definíció":  "Gyermekek születése után, alanyi jogon járó támogatás. A gyes a gyermekgondozást segítő ellátás."
    },
    {
        "Szó":  "gyet",
        "Definíció":  "Gyermekek születése után, alanyi jogon járó támogatás. A gyet a gyermeknevelési támogatás."
    },
    {
        "Szó":  "gyűjtőév (TBSZ)",
        "Definíció":  "Abban az évben, amikor TBSZ-t nyitsz egy kereskedelmi banknál vagy más pénzügyi szolgáltatónál, folyamatosan fizethetsz be rá, egészen az év utolsó napjáig. Ezt az évet nevezik gyűjtőévnek. Befizetésre csak ebben az évben van lehetőség. Ha továbbra is szeretnél ebben a formában megtakarítani, akkor új TBSZ-t kell nyitnod. Egy naptári évben ugyanannál a banknál vagy pénzügyi szolgáltatónál csak egy ilyenszámlát nyithatsz. Nézd meg a Tartós Befektetési Számla (TBSZ) és a lekötési időszak (TBSZ) szócikket is!"
    },
    {
        "Szó":  "hazaváró diákhitel",
        "Definíció":  "A külföldi képzésre felvett külföldi diákhitel kiváltására szolgál, az igényelhető összeg 1-10 millió forint. Akkor veheted fel, ha befejezted a külföldön végzett tanulmányaidat és olyan hiteled van, amelyet lehet elő- vagy végtörleszteni. Kamata megegyeznek a Diákhitel1, illetve a Diákhitel2 kamatával, attól függően, hogy külföldön milyen hitelt vettél fel: szabad vagy kötött felhasználásút. További részleteket a következő oldalon találsz: https://diakhitel.hu/hazavarodiakhitel/ Olvasd el a Diákhitel1 és Diákhitel2 szócikkeket is!"
    },
    {
        "Szó":  "háztartási költségvetés",
        "Definíció":  "Pénzügyi terv, amely tartalmazza egy időszak, jellemzően egy hónap, tervezett bevételeit és kiadásait."
    },
    {
        "Szó":  "háztartási napló",
        "Definíció":  "Egy adott időszakban, jellemzően egy hónap alatt megvalósult bevételek és kiadások vezetésére szolgál."
    },
    {
        "Szó":  "hedging",
        "Definíció":  "Más néven fedezeti ügylet. Ez egy olyan módszer, amivel a befektetők vagy cégek megpróbálják minimalizálni a pénzügyi veszteségeiket, ha az árfolyamok vagy árak váratlanul változnak. Például, ha egy légitársaság attól tart, hogy az üzemanyag ára felmegy, akkor előre megvásárolhatja az üzemanyagot egy fix áron határidős szerződésen keresztül, így nem érheti meglepetés. Leginkább tapasztaltabb befektetők használják."
    },
    {
        "Szó":  "helyi adó",
        "Definíció":  "Az Alaptörvényben meghatározottak szerint az önkormányzatoknak joga van adót kivetni, beszedni és saját hatáskörben felhasználni. Nézd meg az adó szócikket is!"
    },
    {
        "Szó":  "hitel",
        "Definíció":  "Amikor hitelt veszel fel, akkor egy bizonyos hitelkeret áll a rendelkezésedre szerződésben meghatározott feltételek szerint. Ebből annyit használsz fel, amennyire szükséged van. A felhasznált összeg kamatait, valamint a kapcsolódó költségeket és díjakat megadott határidőre vissza kell fizetned."
    },
    {
        "Szó":  "hitel előbírálat",
        "Definíció":  "Ennek folyamán a bank még a hitelkérelem benyújtása előtt megvizsgálja, hogy abban az anyagi és élethelyzetben, amiben vagy, kaphatsz-e tőlük hitelt, ha igen, mekkora összegűt, milyen futamidővel. Megvizsgálják az anyagi helyzetedet, a jövedelmedet, és ennek alapján kapsz egy visszajelzést arról, mire számíthatsz. A hitel előbírálat ingyenes és nagyon hasznos, hiszen egy szerződés megkötése előtt jó tisztában lenned a lehetőségeiddel."
    },
    {
        "Szó":  "hitelbírálat",
        "Definíció":  "Az a folyamat, amelynek során a bank megvizsgálja, hogy képes leszel-e visszafizetni a felvett hitelt. Ebbe beletartozik a jövedelemvizsgálat és a pénzügyi helyzeted ellenőrzése, a benyújtott dokumentumok, valamint jelzáloghitel esetén a fedezet vizsgálata, és a hitelminősítés."
    },
    {
        "Szó":  "TESZT2",
        "Definíció":  "Hitelfelvétel esetén gondolni kell arra is, hogy mi történik egy váratlan helyzet bekövetkeztekor. Előfordulhat ugyanis az, hogy valami miatt a hitelt felvevő nem tudja fizetni a hitel törlesztőrészleteit. Erre az esetre jó a hitelbiztosítás, ami nemcsak neki, hanem a hitelezőnek is védelmet jelent. Ha egy bizonyos, előre meghatározott élethelyzet bekövetkezik, akkor a biztosító átvállalja a tartozás egy részét vagy egészét a hitelbiztosítási szerződésben foglaltak szerint."
    },
    {
        "Szó":  "hitelfedezet",
        "Definíció":  "Olyan biztosíték, amelyet a hitelfelvevő nyújt a hitelező részére azért, hogy az kevésbé legyen kitéve a fizetésképtelenség kockázatának. Ez lehet például ingatlan, autó, értékpapír vagy akár személyi biztosíték is, például kezes vagy adóstárs. Ha a hitelfelvevő nem tudja visszafizetni a hitelt, a hitelező a fedezet értékéből próbálja megtéríteni a tartozást."
    },
    {
        "Szó":  "hitelfedezeti biztosítás",
        "Definíció":  "Nagyobb összegű hitelfelvétel esetén érdemes ezt a biztosítást megkötni. Ha ezt megteszed, akkor munkanélküliség vagy keresőképtelenség esetén meghatározott időtartamig a biztosító fizeti a hitel törlesztőrészleteit a bank felé. Haláleset vagy baleseti rokkantság esetén pedig a biztosító a haláleset, illetve a baleset napján fennálló tartozást vagy annak egy részét kifizeti a bank felé. A biztosítás díja függ a törlesztőrészlet nagyságától."
    },
    {
        "Szó":  "hitelkártya",
        "Definíció":  "A hitelkártyával a bank által nyújtott hitelkerethez férhetsz hozzá. Tehát, amikor hitelkártyával fizetsz, akkor a bank pénzét \"használod\"."
    },
    {
        "Szó":  "hitelkiváltás",
        "Definíció":  "Egy meglévő hitel másik, kedvezőbb feltételekkel rendelkező hitelre cserélése. Így a régi tartozás az új hitelből rendezhő, és az új hitelt kell továbbtörleszteni. Lehetővé teszi, hogy csökkentsd a havi törlesztőrészletet, a kamatot vagy a futamidőt, illetve akár több hitelt is összevonhatsz egyetlen, kedvezőbb konstrukcióba. Akkor érdemes kiváltanod a meglévő hiteledet, ha hosszú távra kedvezőbb feltételeket kapsz."
    },
    {
        "Szó":  "hitelszámla",
        "Definíció":  "A hitelintézettel kötött kölcsönszerződéshez kapcsolódó számla. Ezen jelenik meg a hitelkereted, valamint ezen a számlán vezeti a bank a törlesztőrészletek befizetését."
    },
    {
        "Szó":  "holisztikus",
        "Definíció":  "Egészében nézni valamit. Annak figyelembe vétele, hogy a részek hogyan kapcsolódnak össze és hogyan hatnak egymásra. A pénzügyekben a holisztikus szemlélet azt jelenti, hogy nemcsak a számokra figyelsz, hanem figyelembe veszed azt is, hogy a pénzügyeid hogyan hatnak rád."
    },
    {
        "Szó":  "hosszú táv",
        "Definíció":  "Pénzügyi értelemben az 5 évnél hosszabb időszak számít hosszú távnak."
    },
    {
        "Szó":  "hozam",
        "Definíció":  "Megmutatja, hogy egy befektetés mekkora nyereséget hozott egy adott időszak alatt."
    },
    {
        "Szó":  "hozzáférhetőségi heurisztika",
        "Definíció":  "Az elme azokat az eseményeket tudja könnyebben előhívni, amelyek nagyobb, sokkolóbb hatást gyakorolnak az emberre, és nem azokat, amelyek gyakrabban, de kisebb kárt okozva fordultak elő. Ha a közvetlen környezetedben történik egy negatív esemény, valószínűbbnek tartod, hogy az veled is megtörténhet."
    },
    {
        "Szó":  "IBAN-számlaszám",
        "Definíció":  "A nemzetközi utaláshoz használható számlaszám. Annyiban különbözik a magyar számlaszámodtól, hogy az elején található két nagybetű, amely az országot jelzi, utána pedig két számjegy, ami egy ellenőrző szám. Ezt követi a magyar számlaszámod 16 vagy 24 számjegye."
    },
    {
        "Szó":  "illeték",
        "Definíció":  "Amikor egy állami szerv eljárását igénybe veszed, azért fizetned kell. Az illeték befizetésekor (az adóval ellentétben) közvetlen ellenszolgáltatást kapsz. Az illetékekről szóló törvény kimondja, hogy az illetékfizetés célja \"az állami és társadalmi feladatokhoz való arányos hozzájárulás, valamint az önkormányzatok saját bevételi forrásainak gyarapítása\"."
    },
    {
        "Szó":  "impulzív",
        "Definíció":  "Olyan személyekre használjuk ezt a kifejezést, akik gyorsan, ösztönösen, alapos átgondolás nélkül döntenek."
    },
    {
        "Szó":  "impulzusvásárlás",
        "Definíció":  "Előre nem eltervezett, érzelmi alapú vásárlás. Amikor a vásárlási döntésedet nem gondolod végig, hanem az aktuális érzelmeid alapján döntesz."
    },
    {
        "Szó":  "infláció",
        "Definíció":  "Az infláció tartós árszínvonal-emelkedést jelent, a pénz vásárlóértéke csökken. Infláció esetén nemcsak egy termék vagy szolgáltatás ára emelkedik, hanem ezek jelentős része drágább lesz. Mértékét a fogyasztóiár-index fejezi ki. Kiszámításához figyelembe veszik a háztartások által megvásárolt termékeket és szolgáltatásokat, amelyekből egy ún. fogyasztói kosarat állít össze a KSH."
    },
    {
        "Szó":  "infrastruktúra",
        "Definíció":  "Az infrastruktúra különféle szolgáltatások és létesítmények összességét jelenti, amelyek megkönnyítik a mindennapi életet. Az infrastruktúra elemei (közlekedés, úthálózat, közművek stb.) a termelési folyamatokban nem vesznek részt közvetlenül, azonban azok minőségét befolyásolják."
    },
    {
        "Szó":  "innováció",
        "Definíció":  "Ez az a folyamat, amelynek során egy ötletből megszületik egy újdonság. Az innováció elsősorban a vállalkozásokat segíti abban, hogy növekedjenek és helytálljanak a versenytársaikkal szemben a fogyasztói igények kiszolgálásával, hatékonyabb munkafolyamatok kialakításával és az üzleti modell megújításával. Az innováció előnyei az egész társadalomra kihatással vannak."
    },
    {
        "Szó":  "insurtech vállalat",
        "Definíció":  "A fintech cégekhez hasonlóan modern, olcsóbb, gyorsabb, digitális biztosítási megoldásokat kínáló vállalkozás."
    },
    {
        "Szó":  "iskolaszövetkezet",
        "Definíció":  "Az iskolaszövetkezet vagy más néven diákszövetkezet olyan speciális szabályok alapján működő gazdálkodó szervezet, amely nappali tagozatos diákok és hallgatók részvételével működik. Számukra az időbeosztásukhoz igazodó munkalehetőségek felkutatásával és lebonyolításával foglalkozik. A diákok, hallgatók ebben az esetben nem munkavállalók, hanem szövetkezeti tagok, és a munkát harmadik félnek (tehát nem az iskolaszövetkezetnek) végzik."
    },
    {
        "Szó":  "járulék",
        "Definíció":  "Olyan fizetési kötelezettség, amelyet az állam felé fizetünk meg. Az adóval szemben a járulékot az állam meghatározott feladata teljesítésére használja fel. Ilyen példa lehet a nyugdíjjárulék, amit az állam a nyugdíjak kifizetésére használ fel. Tehát a nyugdíjjárulékért cserébe ellenszolgáltatást kapsz, de nem akkor, amikor befizeted, hanem később."
    },
    {
        "Szó":  "jegybank",
        "Definíció":  "A jegybank egy ország központi bankja, hazánkban ez a Magyar Nemzeti Bank."
    },
    {
        "Szó":  "jelenérték",
        "Definíció":  "Egy jövőbeli összeg mai értékének meghatározása, a kamat figyelembevételével. Tehát, ha arra kapsz ígéretet, hogy a jövőben kapsz egy bizonyos összeget, de szeretnéd tudni, hogy az most mennyit ér, akkor azt a jelenérték mutatja meg neked. A jelenérték számítás fontos eszköz a befektetési döntésekben, mivel lehetővé teszi, hogy különböző jövőbeli pénzáramokat a jelenben hasonlítsd össze és értékeld."
    },
    {
        "Szó":  "jelzáloghitel",
        "Definíció":  "Olyan hosszú lejáratú hitel, amelynek fedezetéül az adós rendszerint egy ingatlant (vagy más befektetési eszközt) ajánl fel a bank számára, amire a bank jelzálogjogot jegyez be. Ha az adós nem tudja visszafizetni a hitelt, a bank jogosult az ingatlan (vagy más befektetési eszköz) értékesítésére a tartozás kiegyenlítése érdekében. Ide tartozik például a lakáshitel vagy a szabad felhasználású jelzáloghitel."
    },
    {
        "Szó":  "jogi személy",
        "Definíció":  "Olyan jogalanyok, akik nem természetes személyek (tehát nem hús-vér emberek.) Jogi személyek azok a szervezetek, akiknek jogai és kötelezettségei vannak. (Pl. gazdasági társaságok, egyesületek.) A jogi személyek képviselője természetes személy vagy ezek egy csoportja."
    },
    {
        "Szó":  "jólét",
        "Definíció":  "Az anyagi jólét azt jelenti, hogy valaki gazdag, drága ingatlana és ingóságai vannak. Nincsenek anyagi gondjai, fizetési nehézségei. Olvasd el a jóllét szócikket is!"
    },
    {
        "Szó":  "jóllét",
        "Definíció":  "Más néven well-being. Azt jelenti, hogy jól érzed magad, boldog és egészséges vagy, vannak kapcsolataid. Pénzügyi szempontból a jóllét azt is jelenti, hogy a jelenlegi és a jövőbeli pénzügyeid egyensúlyban vannak, van döntési szabadságod. Olvasd el a jólét szócikket is!"
    },
    {
        "Szó":  "jótállás",
        "Definíció":  "A jótállás, amit a köznyelv garanciának is nevez, a 10 ezer forint feletti tartós fogyasztási termékekre vonatkozik. A kötelező jótállás időtartama az eladási ártól függően 2 vagy 3 év. Ha ezen időn belül a terméket vagy annak egy részét javítani vagy cserélni kellett, akkor az adott alkatrészére a jótállási idő újraindul. 2024. május 8-tól 10 ezer és 250 ezer forint között 2 év, 250 ezer forint felett 3 év a kötelező jótállási idő. Nézd meg a fogyasztói jogok, a jótállási jegy és a szavatoság szócikket is!"
    },
    {
        "Szó":  "jótállási jegy",
        "Definíció":  "Ha tartós fogyasztási terméket vásárolsz, akkor a vásárláskor jótállási jegyet is kell kapnod, amelyen szerepel többek között a termék megnevezése, valamint az, hogy meghibásodás esetén hova kell fordulnod. Ennek hiányában a számla vagy a nyugta bemutatása is elegendő a jótállás érvényesítéséhez. Jótállási jegy elektronikus formában is átadható, és 50 ezer forint alatt nem kötelező, ekkor elegendő csak a számla. Olvasd el a fogyasztói jogok és a jótállás szócikket is!"
    },
    {
        "Szó":  "jóváírás",
        "Definíció":  "Amikor a bankszámlád egyenlege egy pénzügyi művelet következtében növekszik. Tehát, ha valaki pénz utal neked, akkor a bank azt a számládon jóváírja, tehát az egyenleged növekszik."
    },
    {
        "Szó":  "jövedéki adó",
        "Definíció":  "A jövedéki adó egy közvetett adó, amelyet bizonyos termékek értékesítése után fizetünk. Ilyenek az alkohol, a dohány és az energia. Mértéke termékenként változó, de az uniós törvények szerint nem lehet alacsonyabb egy meghatározott mértéknél. Nézd meg az adó szócikket is!"
    },
    {
        "Szó":  "jövedelem",
        "Definíció":  "Háztartások esetében a különböző csatornákon keresztül beérkező pénzbeli forrásokat jövedelemnek nevezzük."
    },
    {
        "Szó":  "jövedelemforrás",
        "Definíció":  "Az a munka vagy tulajdon, amelyből valakinek bevétele származik. Ilyen például a munkabér, a befektetések hozama, de ide tartozik a diákmunkáért kapott fizetésed is."
    },
    {
        "Szó":  "jövedelemvizsgálat",
        "Definíció":  "Hiteligénylés esetén a banknak vizsgálnia kell többek között azt, hogy vissza tudod-e majd fizetni a felvett hitelt. Ehhez ismernie kell a rendszeres, igazolt jövedelmed nagyságát. Ennek megállapítása a jövedelemvizsgálat."
    },
    {
        "Szó":  "jövőérték",
        "Definíció":  "Egy mai összeg jövőbeli értékének meghatározása, a kamat figyelembevételével. Tehát, ha tudni akarod, hogy a most rendelkezésedre álló összeg mekkora lesz majd a jövőben, akkor azt a jövőérték mutatja meg neked. A jövőérték számítás fontos eszköz a befektetési döntésekben, mivel lehetővé teszi, hogy különböző befektetési lehetőségeket összehasonlítsd, és értékeld a jövőbeli várható eredményeket."
    },
    {
        "Szó":  "JTM",
        "Definíció":  "Jövedelemarányos törlesztési mutató. Ez egy olyan szabályozás, amely meghatározza, hogy a hitelfelvevő havi nettó jövedelmének legfeljebb mekkora hányadát fordíthatja hiteltörlesztésre. Ez a mutató maximalizálja a vállalható törlesztőrészletet, így elősegíti, hogy a lakosság ne vállaljon túlzott adósságot. A JTM kiszámításakor minden meglévő hitel törlesztőrészletét figyelembe veszik, így az új hiteligénylés is ennek a limitnek megfelelően történik. Nézd meg a következő linket a JTM-korlátról! https://www.mnb.hu/penzugyi-stabilitas/makroprudencialis-politika/makroprudencialis-eszkoztar/adossagfek-szabalyok-hfm-jtm"
    },
    {
        "Szó":  "jutalom",
        "Definíció":  "Olyan pénzbeli vagy természetbeni ellenszolgáltatás, amelyet a munkáltató a munkavállaló kimagasló teljesítményének vagy eredményeinek elismeréseként adhat. A jutalom általában nem kötelező."
    },
    {
        "Szó":  "kakeibo",
        "Definíció":  "Japán eredetű pénzügyi tervezési módszer. Lényege, hogy kézzel kell rögzítened a bevételeidet és a kiadásaidat, mert ez segít abban, hogy jobban megmaradjanak az emlékezetedben. Négy alapvető kategóriát határoz meg: bevételek, rögzített kiadások, megtakarítások és változó kiadások."
    },
    {
        "Szó":  "kamat",
        "Definíció":  "A kamat röviden a hitel ára, a befektetésen elért haszon. A kamatot a tőkén felül az fizeti meg, aki a pénzt használja. Ha hitelt veszel fel, akkor a kamatot (és egyéb költségeket!) te fizeted meg a bank felé. Ha pedig befekteted a pénzedet, akkor a kamatot te kapod. (Befektetésből származó jövedelem egy része a kamat.)"
    },
    {
        "Szó":  "kamatláb",
        "Definíció":  "A kamatláb az egy évre járó kamat százalékos formában kifejezve. Olvasd el a kamat szócikket is!"
    },
    {
        "Szó":  "kamatos kamat",
        "Definíció":  "Lényege, hogy a befektetésre kapott kamat is kamatozik. Ha a befektetésed után kapott kamatot nem veszed ki, hanem azt újra befekteted, akkor arra már a kamatos kamatot kapod meg. Előnye, hogy a befektetés hozama idővel növekszik, mivel a kamatokat újra befektetjük, és azok is kamatoznak."
    },
    {
        "Szó":  "kedvezményezett",
        "Definíció":  "Banki utalás esetén az, aki a pénzt kapja."
    },
    {
        "Szó":  "kereslet",
        "Definíció":  "A kereslet vásárlási szándékot jelent. Azt az árumennyiséget, amit a vevő még hajlandó és képes kifizetni adott áron. Tehát az árupiacon a kereslet a vevők vásárlási szándéka: azt jelenti, hogy például az almából mennyit hajlandóak megvenni a kereskedők által kínált áron. A munkaerőpiacon a kereslet a munkaadók oldaláról jelentkezik."
    },
    {
        "Szó":  "keretezési hatás",
        "Definíció":  "Döntéseidet az is befolyásolja, hogy a következményeket pozitív vagy negatív módon fogalmazod meg. A pozitív eredmények hangsúlyozásakor nő a kockázatvállalási hajlandóság, a negatív kimenetelek hangsúlyozása azonban kockázatkerülővé tesz."
    },
    {
        "Szó":  "készpénz",
        "Definíció":  "A készpénz bankjegyet vagy pénzérmét jelent. Tehát ezek kézzelfoghatóak, \"készek\" arra, hogy fizessünk velük."
    },
    {
        "Szó":  "kétfaktoros azonosítás",
        "Definíció":  "Kétlépcsős azonosításnak is nevezik. Lényege, hogy a felhasználónak nem elég egyféleképpen azonosítania magát, hanem szükséges egy második lépés is a tranzakció elindításához. Az első lépés a felhasználónév és a jelszó megadása. A második lépés lehet egy banktól SMS-ben érkező vagy a banki alkalmazásból elérhető kód, token vagy biometrikus azonosítás."
    },
    {
        "Szó":  "kétlépcsős azonosítás",
        "Definíció":  "Kétfaktoros azonosításnak is nevezik. Lényege, hogy a felhasználónak nem elég egyféleképpen azonosítania magát, hanem szükséges egy második lépés is a tranzakció elindításához. Az első lépés a felhasználónév és a jelszó megadása. A második lépés lehet egy banktól SMS-ben érkező vagy a banki alkalmazásból elérhető kód, token vagy biometrikus azonosítás."
    },
    {
        "Szó":  "kétszintű bankrendszer",
        "Definíció":  "Az első szinten a jegybank, a másodikon pedig a kereskedelmi bankok és egyéb pénzügyi intézmények találhatóak. A jegybank közvetlen piaci banki tevékenységet nem végez, a lakossággal és a gazdaság többi szereplőjével a kereskedelmi bankok és az egyéb pénzügyi intézmények állnak kapcsolatban."
    },
    {
        "Szó":  "kezes",
        "Definíció":  "Az a személy, aki felelősséget vállal valaki más tartozásáért. Két típusa van: az egyszerű és a készfizető. Az előbbinél csak azután követelhetik tőle a tartozást, ha az adósnál már sikertelen volt a végrehajtás. Azonban a készfizető esetében, ha az adós nem fizet, a bank azonnal jelentkezhet nála. Olvasd el az adós szócikket is"
    },
    {
        "Szó":  "KGFB",
        "Definíció":  "Kötelező gépjármű felelősségbiztosítás. A felelősségbiztosítás egyik legismertebb formája. Ezt nem azért kötöd, hogy a biztosító a saját autódban vagy a testi épségedben keletkezett kárt térítse meg, hanem azért, hogy az általad okozott kár után fizessen. Tehát, ha a kocsiddal koccansz, és így kár keletkezik a másik autóban, akkor a te biztosítód fogja megfizetni a másik autós kárát. Ez a biztosítás azért kötelező, mert így a vétlen félnek a kára biztosan meg lesz fizetve. Ha ezt a kárt okozó autósnak kellene megtennie, akkor előfordulhat, hogy neki nincs annyi pénze, hogy ezt megtegye."
    },
    {
        "Szó":  "KHR",
        "Definíció":  "Központi Hitelinformációs Rendszer. Ez egy adatbázis, amely az ügyfelek (magánszemélyek és vállalkozások) hitel- és hiteljellegű szerződéseiről, valamint egyéb fizetési késedelmekről, mulasztásokról, csalásokról és visszaélésekről tart nyilván információkat. A KHR lehetővé teszi, hogy a pénzügyi intézmények megbízhatóan felmérjék a hitelt igénylők hitelképességét, és így csökkentsék a hitelpiaci kockázatokat."
    },
    {
        "Szó":  "kiadás",
        "Definíció":  "Olyan összeg, amit elköltünk valamire. A kiadásokat többféle szempont szerint csoportosíthatjuk. Megkülönböztetünk pl. állandó, alkalmi és váratlan kiadásokat. De csoportosíthatjuk aszerint is, hogy az összege fix vagy változó."
    },
    {
        "Szó":  "kibertámadás",
        "Definíció":  "A virtuális térben történő támadás. Célja lehet például az adathalászat vagy a számítógépes rendszer megbénítása. Olvasd el az adathalászat szócikket is!"
    },
    {
        "Szó":  "KID",
        "Definíció":  "Kiemelt információkat tartalmazó dokumentum. Rövid, maximum 3 oldalas áttekintés, amelyet a befektetési alapok, biztosítási alapú befektetések és más, nem tőzsdén jegyzett befektetési termékek szolgáltatói kötelesek a lakossági befektetők rendelkezésére bocsátani. Összefoglalja a termék legfontosabb jellemzőit, például a kockázati profilt, a várható hozamokat, a költségeket és az ajánlott tartási időt. A célja, hogy világos, érthető és összehasonlítható információt nyújtson az adott befektetési termékről. Segít eldönteni, hogy az megfelel-e céljaidnak és kockázatvállalási hajlandóságodnak."
    },
    {
        "Szó":  "kínálat",
        "Definíció":  "A kínálat eladási szándékot jelent. Azt az árumennyiséget, amit az eladók hajlandóak és képesek eladni adott áron. Tehát az árupiacon a kínálat a kereskedők eladási szándéka: azt jelenti, hogy például almából mennyit hajlandóak eladni adott áron. A munkaerőpiacon a kínálat a munkavállalók oldaláról jelentkezik."
    },
    {
        "Szó":  "kockázat",
        "Definíció":  "Egy jövőbeni kedvezőtlen esemény bekövetkeztének lehetőségét kockázatnak nevezzük. A pénzügyekben is fontos tudnunk azt, hogy mennyire vagyunk kockázatvállalók, és ezzel párhuzamosan mekkora hasznot remélünk egy-egy befektetéstől. Nagyon leegyszerűsítve az alacsony kockázatú befektetésektől alacsony, a magas kockázatúaktól magas hozamot remélhetünk, de ezt az összefüggést azért más tényezők is árnyalják."
    },
    {
        "Szó":  "kockázati életbiztosítás",
        "Definíció":  "A biztosító akkor fizet a kedvezményezetteknek, vagy ennek hiányában a törvényes örökösöknek, ha a biztosított a biztosítás időtartama alatt meghal. A biztosítás díja függ a biztosított személy életkorától, egészségügyi állapotától vagy például dohányzási szokásaitól. Nézd meg az elérési életbiztosítás szócikket is!"
    },
    {
        "Szó":  "kockázatvállalási hajlandóság",
        "Definíció":  "Azt mutatja meg, hogy pénzügyi döntéseid során mennyi kockázatot szeretnél vállalni."
    },
    {
        "Szó":  "kockázatvállalási képesség",
        "Definíció":  "Azt mutatja meg, hogy pénzügyi döntéseid során mekkora kockázatot vagy képes eltűrni és menedzselni. Függ attól, hogy mikor és milyen célokra lesz szükséged a befektetendő tőkére, mekkora vagyonod van, mennyire értesz a befektetésekhez, milyen biztosítékaid vannak a jóléted fenntartásához, valamint attól, hogy tűröd a befektetésekkel járó stresszt."
    },
    {
        "Szó":  "komfortzóna",
        "Definíció":  "Azoknak az életkörülményeknek az összessége, amelyben kényelmesen, biztonságosan érzi magát valaki. A pénzügyi komfortzóna ezen belül azt az anyagi körülményt, azt az életszínvonalat jelenti, ahol jól érzed magad, ahol úgy gondolod, hogy a rendelkezésedre álló pénz mennyisége nem túl kevés, de nem is túl sok számodra."
    },
    {
        "Szó":  "kondíciós lista",
        "Definíció":  "Ez egy hivatalos dokumentum, amely tartalmazza a mindenkor érvényes díjakat. Segít abban, hogy átlásd, melyik tranzakciód mennyibe fog kerülni, és segít a különböző bankok összehasonlításában is. Minden pénzügyi intézmény honlapján elérhető, jellemzően PDF-formátumban."
    },
    {
        "Szó":  "kölcsön",
        "Definíció":  "Hétköznapi értelemben a hitel és a kölcsön szavakat szinonimaként is használjuk. Közgazdasági értelemben azonban, míg a hitel egy keret, amiből annyit használsz fel, amennyire szükséged van, a kölcsön esetében megkapod a kölcsön összegét. A kapott kölcsön kamatait, valamint a kapcsolódó költségeket és díjakat megadott határidőre vissza kell fizetned. Olvasd el a hitel szócikket is!"
    },
    {
        "Szó":  "költségvetés",
        "Definíció":  "A költségvetés egy adott időszakra szóló pénzügyi terv. Beszélhetünk személyes vagy családi költségvetésről, amikor a háztartások tagjai tervezik meg a várható bevételeiket és kiadásaikat pl. egy hónapra. Az állami költségvetést egy évre készítik. Azt a kormány nyújtja be, majd az országgyűlés (a megfelelő viták és véleményezések után) fogadja el, a köztársasági elnök írja alá, a Magyar Közlönyben pedig kihirdetésre kerül."
    },
    {
        "Szó":  "költségvetési politika",
        "Definíció":  "A költségvetési vagy más néven fiskális politika a kormányzatok gazdaságpolitikai döntéseinek összessége. A fiskális politika fontos eszköze az adók meghatározása, valamint a kormányzati kiadások tervezése."
    },
    {
        "Szó":  "költségvetési szerv",
        "Definíció":  "Közfeladat ellátására létrehozott jogi személy. Ilyenek például az Országgyűlés és az önkormányzatok. Nézd meg a jogi személy szócikket is!)"
    },
    {
        "Szó":  "kötvény",
        "Definíció":  "Befektetési szolgáltatón keresztül megvásárolható, hitelviszonyt megtestesítő értékpapír. Megvásárlásával egy cég vagy az állam működéséhez adsz kölcsön. A részvénnyel szemben a kötvénynek van lejárati ideje, és nem testesít meg tulajdonjogot, azaz nem szerzel részesedést az adott vállalatban. A befektetett pénzt a futamidő végén kapod vissza. A kamatok kifizetésére az államkötvény esetében előre meghatározott időpontban kerül sor, jellemzően évente, a vállalati kötvény esetében a kamatok kifizetése jellemzően a futamidő végén történik."
    },
    {
        "Szó":  "követeléskezelési szakasz",
        "Definíció":  "Ha az adós nem tudja fizetni a hitelét, akkor a késedelmet három szakaszra bonthatjuk. A második szakasz, amely a fizetés elmaradásától számított 90-180 napot jelenti a követeléskezelési szakasz. Ha 89 napig nem történik hiteltörlesztés, és nem sikerült közös megegyezésre jutni, akkor a bank a 90. nap után továbbadja a hitelszerződést egy követelésekkel foglalkozó faktoring cégnek. Az adós ezt követően felkerül a KHR-be, mint „rossz” adós. A faktoring cégnek az az érdeke, hogy meg tudjanak állapodni egymással. Ha ez nem sikerül, akkor az utolsó szakasz következik. Nézd meg a fizetési késedelem szakasza és a végrehajtási szakasz szócikkeket is!"
    },
    {
        "Szó":  "középtáv",
        "Definíció":  "Pénzügyi értelemben a 3-5 év számít középtávnak."
    },
    {
        "Szó":  "TESZT1",
        "Definíció":  "A közteherviselés elve az Alaptörvényben azt mondja ki, hogy mindenkinek \"teherbíró képességének, illetve a gazdaságban való részvételének megfelelően\" hozzá kell járulnia az állami kiadásokhoz."
    },
    {
        "Szó":  "közvetett adó",
        "Definíció":  "Ebben az esetben az adófizető és az adóalany nem ugyanaz. Nézd meg az adófizető és az adóalany szócikket is!"
    },
    {
        "Szó":  "közvetlen adó",
        "Definíció":  "Ebben az esetben az adófizető és az adóalany ugyanaz. Nézd meg az adófizető és az adóalany szócikket is!"
    },
    {
        "Szó":  "kriptopénz",
        "Definíció":  "Virtuális pénz. Fizikai formája nincs."
    },
    {
        "Szó":  "lakásbiztosítás",
        "Definíció":  "Épületre és az abban található vagyontárgyakra köthető. A biztosítás díja függ az ingatlan nagyságától, elhelyezkedésétől, a benne található értékektől, valamint attól, hogy milyen esetekre szeretnéd, hogy kiterjedjen a biztosítás. Az ingatlan és a benne található ingóságok értéke akár egy év alatt is nagyot változhat. Ezért érdemes minden évben megnézned azt, hogy a valós, aktuális értékén van-e biztosítva. Tegyük fel például, hogy 2 éve vettél egy ingatlant 40 millió forintért, megkötötted rá a biztosítást, de azóta nem vizsgáltad felül. Ha azóta az ingatlan értéke 50 millióra emelkedett, akkor az jelenleg alul van biztosítva. Egy esetleges nagyobb kár esetén a biztosító az eredeti, 40 milliós értékre számítva fizet kártérítést."
    },
    {
        "Szó":  "lakáshitel",
        "Definíció":  "A jelzáloghitelek közé tartozik. Igényelhető új vagy használt ingatlan vásárlására, építésére vagy bővítésére, valamint felújításra és korszerűsítésre is. A piaci kamatozású lakáshiteleken kívül érdemes tájékozódnod a kedvezőbb kamatozású támogatott hitelekről is. Nézd meg a jelzáloghitel szócikket is!"
    },
    {
        "Szó":  "lakástakarék",
        "Definíció":  "Egy lakástakarékpénztár által vezetett számla. A havi rendszeres befizetések után kamatot és kamatprémiumot adnak, valamint egy kedvezményes lakáshitel lehetőségét is. Ennek összege a befizetett összeg nagyságától függ, azt szerződésben rögzítik."
    },
    {
        "Szó":  "látra szóló",
        "Definíció":  "A látra szóló betéthez bármikor hozzáférhetsz, ellentétben a lekötött betéttel, amely kamatát csak akkor kapod meg, ha az összeg a lekötési idő végéig a számlán marad."
    },
    {
        "Szó":  "lekötés",
        "Definíció":  "A lekötéssel azt vállalod, hogy a bankbetéthez a lekötés ideje alatt nem nyúlsz hozzá, tehát azt nem fogod a bankból kivenni. Ha mégis \"fel kell törnöd\" a lekötést, akkor általában a kamatot elveszíted. A lekötés lehet egyszeri vagy folyamatos. Az egyszeri lekötés esetében a betétet a meghatározott időre lekötöd, utána a lekötés nem folytatódik. A folyamatos lekötés azt jelenti, hogy a lekötési idő végén a lekötés újraindul."
    },
    {
        "Szó":  "lekötési időszak (TBSZ)",
        "Definíció":  "Ez legfeljebb öt év lehet, kezdete a gyűjtőévet követő év első napja. Minél tovább tartod ebben a befektetési formában a pénzedet, annál kevesebb adót kell fizetned. Az öt év letelte után a TBSZ adómentes. Nézd meg a a gyűjtőév (TBSZ) és a Tartós Befektetési Számla (TBSZ) szócikket is!"
    },
    {
        "Szó":  "likviditás",
        "Definíció":  "Más néven hozzáférhetőség. Azt mutatja meg, hogy az adott befektetés milyen gyorsan váltható készpénzre nagyobb veszteség nélkül."
    },
    {
        "Szó":  "magáncsőd",
        "Definíció":  "Speciális adósságrendezési lehetőség. Célja, hogy a fizetési nehézségekkel küzdő természetes személyek adóssága szabályozott keretek között rendeződjön úgy, hogy közben fizetőképességük helyreálljon. Ezalatt az adós csődvédelemben részesül, vele szemben végrehajtási eljárásokat, például ingatlanárverést nem indíthatnak. Az eljárás kizárólag az adós kezdeményezésére indulhat. A kérelmet írásban a Családi Csődvédelmi Szolgálat illetékes területi szervénél vagy a főhitelezőnél lehet kérni. Az eljárásban részt vevő adósok évente akár 300 ezer forint összegű állami törlesztési támogatást kaphatnak jelzáloghitelük törlesztéséhez. Ha nem sikerül teljesíteni a törvényben és a megállapodásban foglalt kötelezettségeket, az eljárást a bíróság megszüntetheti és elindulhat, vagy folytatódhat a végrehajtás."
    },
    {
        "Szó":  "magán-egészségbiztosítás",
        "Definíció":  "Lényege, hogy a biztosított bizonyos, előre meghatározott egészségügyi szolgáltatások igénybevételére jogosult. Ehhez szerződés és a biztosítási díj megfizetése szükséges. A biztosítási díjat fizetheti a biztosított vagy például a munkáltatója, cafetéria részeként. Az elérhető szolgáltatások a választott csomagtól függenek. Előnye, hogy jellemzően hamarabb juthatsz el olyan vizsgálatokra, amelyekre az állami rendszerben hosszabb ideig várakoznod kellene. Nagyon fontos azonban, hogy a magán-egészségbiztosítás az állami egészségbiztosítás nélkül nem tudna működni, vannak olyan ellátások, amelyeket a magán egészségbiztosítás nem tud lefedni."
    },
    {
        "Szó":  "másodlagos azonosító",
        "Definíció":  "Banki átutalás esetén lehet a kedvezményezett mobiltelefonszáma, e-mail címe, adószáma vagy adóazonosító jele."
    },
    {
        "Szó":  "megtakarítás",
        "Definíció":  "Azt a pénzt nevezzük megtakarításnak, amit nem költesz el, hanem félreteszed későbbi felhasználásra."
    },
    {
        "Szó":  "megtakarítási számla",
        "Definíció":  "Más néven betétszámla a fel nem használt pénzed kamatoztatására szolgál. Bankban nyitható számla, az itt elhelyezett pénzre a bank kamatot fizet neked. Lehetnek fizetési számlák is. Olvasd el azt a szócikket is!"
    },
    {
        "Szó":  "mentális könyvelés",
        "Definíció":  "Ennek során az emberek a valódi költségvetéshez hasonló mentális kategóriákat hoznak létre a fejükben, és ezeken belül gondolkodnak. Sokkal könnyebben kockáztatod azt a pénzt, ami esetében még nem döntötted el, hogy mire szeretnéd költeni, azaz még egyetlen mentális számlán sem helyeztél el."
    },
    {
        "Szó":  "minimálbér",
        "Definíció":  "Az a jogszabályban rögzített legkisebb munkabér, amit minden teljes állásban dolgozónak meg kell kapnia végzettségtől függetlenül. Részmunkaidő esetén ennek az arányos részét."
    },
    {
        "Szó":  "monetáris politika",
        "Definíció":  "A monetáris politika a jegybank feladata, amelynek célja, hogy biztosítsa a pénzügyi stabilitást, az infláció alacsony és kiszámítható szinten tartását."
    },
    {
        "Szó":  "munkabér",
        "Definíció":  "Anyagi ellenszolgáltatás, amelyet a munkavállaló kap a munkáltatójától az elvégzett munkája ellenértékeként."
    },
    {
        "Szó":  "munkaerőpiac",
        "Definíció":  "A munkaerőpiac a (leendő) munkavállalók és a munkáltatók összességét jelenti. Tulajdonképpen ez is egy piac, ami a kereslet-kínálat törvénye szerint működik. A munkaadók munkaerőt keresnek, a munkavállalók pedig a saját munkaerejüket kínálják. Ha túlkereslet van, azaz több munkaerőre van szükség, mint amennyi rendelkezésre áll, az a bérek emelkedését okozhatja az adott területen. Ellenkező esetben, tehát amikor nagyobb a munkaerő-kínálat, mint amennyit a munkáltatók keresnek, a bérek csökkenése és munkanélküliség várható."
    },
    {
        "Szó":  "munkaerőpiac",
        "Definíció":  "Az a (fizikai és virtuális) tér, ahol a munkaadók és a munkavállalók kapcsolatba kerülhetnek egymással."
    },
    {
        "Szó":  "munkáltatói kölcsön",
        "Definíció":  "Ezt a hitelt a munkáltató biztosítja a munkavállalóknak. Általában kedvező feltételekkel kapható, például alacsony kamattal, hosszabb törlesztési időszakkal vagy akár kamatmentesen. Nem lakáshitel esetében a munkáltató közvetlenül nyújt kölcsönt a dolgozónak, és a törlesztőrészletet általában a dolgozó béréből vonják le. Lakáscélú munkáltatói kölcsön esetén az államkincstáron vagy egy bankon keresztül történik a szerződéskötés."
    },
    {
        "Szó":  "munkáshitel",
        "Definíció":  "Célja a fiatal pályakezdők támogatása. Ez a kamatmentes hitel segítheti a fiatalokat abban, hogy elkezdjék önálló életüket. A munkáshitel szabadfelhasználású hitel, a bankoknál igényelhető olyan 17 és 25 év közötti fiatalok számára, akik nem jogosultak Diákhitelre. Az igényelhető összeg maximum 4 millió forint lehet."
    },
    {
        "Szó":  "NAV",
        "Definíció":  "Nemzeti Adó- és Vámhivatal. Feladata többek között az adók, a vámok és az illetékek beszedése, az adózással kapcsolatos jogszabályok betartatása. Jogosult gazdasági szabálysértések, bűncselekmények felderítésére és büntetésére."
    },
    {
        "Szó":  "nettó",
        "Definíció":  "A levonások után maradó összeg. Munkabér esetén a bruttó bérből levonásra kerül(het) a személyi jövedelemadó és a társadalombiztosítási járulék, valamint más jogcímen is lehetnek levonások (pl. gyerektartás). Az az összeg, amit ténylegesen megkapsz, a nettó béred."
    },
    {
        "Szó":  "NFC",
        "Definíció":  "Near Field Communication rövidítése. Ez egy olyan technológia, amely segítségével gyorsan és biztonságosan lehet adatokat eljuttatni egyik eszközről a másikra pár centiméteres távolságból."
    },
    {
        "Szó":  "nominális hozam",
        "Definíció":  "Ld. Hozam"
    },
    {
        "Szó":  "nyeremény",
        "Definíció":  "Olyan pénzbeli vagy természetbeni juttatás, amelyet valaki versenyen, sorsoláson vagy más eseményen nyer el. A nyeremény lehet pénzösszeg, tárgy vagy szolgáltatás, és nem számít rendszeres jövedelemnek. A nyeremény után adót kell fizetni. Nézd meg a természetbeni juttatás szócikket is!"
    },
    {
        "Szó":  "nyereménybetét",
        "Definíció":  "Az itt elhelyezett összegre nem kamatot kapsz, hanem esélyed van nyereményre, ami általában tárgynyeremény. A bank az elhelyezett összeg kamatait nem a betéteseknek fizeti ki, hanem abból általában tárgynyereményt vásárol és azt kisorsolja. Ilyen lehet például a gépkocsi-nyereménybetét."
    },
    {
        "Szó":  "nyugdíj",
        "Definíció":  "Rendszeres pénzbeli juttatás azok számára, akik elérték a törvényben meghatározott nyugdíjkorhatárt, vagy egyéb jogcímen jogosultak rá."
    },
    {
        "Szó":  "nyugdíjbiztosítás",
        "Definíció":  "Olyan életbiztosítás, amely alapesetben a szerződéskori nyugdíjkorhatár elérése esetén fizeti ki a biztosítás összegét. Ettől eltérő eset a korengedményes nyugdíjba vonulás, a 40%-ot meghaladó rokkanttá nyilvánítás, valamint a biztosított halála. A nyugdíjbiztosítás lehet hagyományos életbiztosítás, amikor a biztosító garantált hozamot ígér, vagy befektetési egységhez kötött biztosítás. A nyugdíjbiztosítás nagy előnye, hogy a nyugdíjkorhatár emelése nem befolyásolja az eredetileg a szerződésben rögzített fizetési időt, pár év után rugalmasan változtatható, szüneteltethető. Hátránya, hogy az idő előtti felbontásnak magasak a költségei. Nézd meg a unit-linked biztosítás szócikket is!"
    },
    {
        "Szó":  "nyugdíjcélú megtakarítások",
        "Definíció":  "Kifejezetten a nyugdíjas évek biztonságát elősegítő befektetések. Ezek a nyugdíjbiztosítás, az önkéntes nyugdíjpénztár és a nyugdíj-előtakarékossági számla. Nézd meg az említett befektetésekhez tartozó szócikkeket is!"
    },
    {
        "Szó":  "nyugdíj-előtakarékossági számla (NYESZ)",
        "Definíció":  "A Tartós Befektetési Számlához hasonló, azzal a különbséggel, hogy hozzáférni csak a mindenkori nyugdíjkorhatár elérésekor lehet. Nincs előre meghatározott kötelező befizetés, az előtakarékossági számla tulajdonosa saját maga kezeli a befektetéseit. Éppen ezért hozzáértést igényel, hiszen nincs mellette egy tanácsadó, aki a portfóliót szakértő módon kezelné helyette. Előnye lehet, hogy a befizetések nagyon rugalmasak, ezért a mindenkori élethelyzethez igazíthatók. Hátrányaként említhető, hogy szakértelmet és folyamatos törődést igényel, ezért nem mindenkinek ajánlott, és a nyugdíjkorhatár emelése esetén az előre tervezettnél később juthatsz csak a pénzedhez. Olvasd el a Tartós Befektetés Számla (TBSZ) szócikket is!"
    },
    {
        "Szó":  "Országos Betétbiztosítási Alap (OBA)",
        "Definíció":  "Abban az esetben, ha egy hitelintézet nem tudja teljesíteni a betétesek felé a kötelezettségeit, akkor az OBA hitelintézetenként és betétesenként 100 ezer eurónak megfelelő összegig kártalanítja őket. Ez a gyakorlatban annyit jelent, hogy ha neked egy magyarországi hitelintézetnél vezetett számlán kevesebb, mint 100 ezer eurónyi összeged van, és ez a hitelintézet csődbe megy, vagy bármilyen más okból nem tudja a nála elhelyezett összeget a részedre visszafizetni, akkor az OBA 10 munkanapon belül kifizeti azt neked helyette. Minden Magyarországon székhellyel rendelkező hitelintézet köteles az OBA-hoz csatlakozni."
    },
    {
        "Szó":  "osztalék",
        "Definíció":  "Egy részvénytársaság által a részvényeseinek kifizetett nyereségrészesedés, amelyet a vállalat az adott időszakban elért profitjából oszt ki, ha a közgyűlés megszavazza. Az osztalék mértékét a társaság közgyűlése határozza meg, és azt pénzben vagy további részvények formájában fizetik ki."
    },
    {
        "Szó":  "önerő",
        "Definíció":  "A vételár és a felvenni kívánt hitelösszeg közötti különbség, amelyet a vásárló biztosít. Az önerő gyakran előfeltétele a hitel megítélésének, és megmutatja, hogy a hitelfelvevő mennyire tud részt vállalni a pénzügyi kockázatból."
    },
    {
        "Szó":  "önkéntes nyugdíjpénztár",
        "Definíció":  "A tagok egyéni számlájukon gyűjtik megtakarításukat, amelyet ők vagy akár a munkáltatójuk fizet béren kívüli juttatásként. Ennek van egy előírt minimális mértéke. A befizetéseket a nyugdíjpénztár befekteti a tag által kiválasztott portfólióba. A rendszeresen befizetett összeg növelhető, eseti befizetések is engedélyezettek. A befizetéseket szüneteltetni is lehet, de a költségek ekkor is terhelik az ügyfelet. A hozammal növelt összeget a mindenkori nyugdíjkorhatár elérésekor fizetik ki. Ez alól kivétel a tag korábbi halála. Ez esetben az általa a szerződésben megnevezett kedvezményezettnek, ennek hiányában pedig a törvényes örököseinek fizet a nyugdíjpénztár. A tag dönthet úgy is, hogy a nyugdíjkorhatár elérésekor továbbra is nyugdíjpénztári tag marad. Ekkor lehetősége van a tagdíjat továbbra is fizetni, de dönthet úgy is, hogy nem fizeti tovább. Az önkéntes nyugdíjpénztár előnye, hogy a portfóliót szakember kezeli, alacsony havidíj fizetésével is elindítható és biztonságos. A szerződéskötés után 10 évvel a tag dönthet úgy is, hogy kilép a pénztárból, ebben az esetben azonban a mindenkori adózási szabályok szerint adót kell fizetnie."
    },
    {
        "Szó":  "önrész",
        "Definíció":  "Az önrész a biztosításnál használt fogalom. Azt mutatja meg, hogy a javítás összegének mekkora részét kell neked fizetni. A biztosító az önrészen felüli összeget vállalja át tőled. Így adott esetben előfordulhat az is, hogy ha a kár nagyon kicsi, akkor a biztosítónak nem is kell fizetnie, mert az önrész összege magasabb, mint a teljes kár összege."
    },
    {
        "Szó":  "örökség",
        "Definíció":  "Azoknak a vagyontárgyaknak, jogoknak és kötelezettségeknek az összessége, amelyeket egy elhunyt személy hagyatéka örökösére vagy örököseire átruház. Magában foglalja az elhunyt ingatlanait, ingóságait, pénzeszközeit, értékpapírjait, szerzői jogait, tartozásait. Az átadás végrendelet vagy törvényes öröklési rend alapján történik. Az örökség után az örökösödési törvény szabályai szerint illetéket kell fizetni. Az örökséget nem kötelező elfogadni, az vissza lehet utasítani."
    },
    {
        "Szó":  "P2P hitelezés",
        "Definíció":  "Magánszemélyek közötti hitelezés. A hitelezés közvetítő intézmények nélkül történik. A felek sokszor online platformon keresztül találnak egymásra."
    },
    {
        "Szó":  "panasz esetén",
        "Definíció":  "Ha pénzügyi panaszod van, akkor a Magyar Nemzeti Bankhoz, postai, hírközlési és médiaszolgáltatásokkal kapcsolatban pedig a Nemzeti Média- és Hírközlési Hatósághoz fordulhatsz. Tisztességtelen vagy megtévesztő kereskedelmi gyakorlattal kapcsolatos bejelentéseidet a Gazdasági Versenyhivatalnál, a közszolgáltatásokkal kapcsolatos panaszaidat pedig a Magyar Energetikai és Közmű-szabályozási Hivatalnál teheted meg."
    },
    {
        "Szó":  "passzív jövedelemforrás",
        "Definíció":  "Olyan bevételi forrás, amely kezdetben időbeli vagy pénzbeli befektetést igényel, de később stabil bevételt biztosít különösebb energiaráfordítás nélkül. Ilyen lehet például az ingatlan-bérbeadás, az osztalék, a jogdíjak vagy az ETF-ek."
    },
    {
        "Szó":  "pénzbeli állami támogatás",
        "Definíció":  "Az állam a háztartásoknak és a vállalkozásoknak támogatásokat ad a társadalmi jóllét növelése, illetve az egyenlőtlenségek csökkentése érdekében. Ezek lehetnek pénzbeli támogatások, amikor a kedvezményezett konkrétan pénzt kap, illetve egy bizonyos pénzösszeget nem kell befizetnie. De lehetnek nem pénzbeli támogatások is, amikor az állam jogosultságot ad egy szolgáltatás ingyenes vagy kedvezményes igénybevételére. (Ilyen pl. az oktatás vagy az egészségügyi ellátás.)"
    },
    {
        "Szó":  "pénzérme",
        "Definíció":  "A jegybank által kibocsátott törvényes fémpénzt (aprópénzt) nevezzük pénzérmének."
    },
    {
        "Szó":  "pénzügyi döntés",
        "Definíció":  "Nemcsak számadatok és tények alapján történik. Függ a személyes tapasztalataidtól, előítéleteidtől, a környezeted döntéseitől, a téged érő szociális és érzelmi hatásoktól. Nézd meg a hozzáférhetőségi heurisztika, a keretezési hatás, a kockázatvállalási hajlandóság, a kockázatvállalási képesség és a mentális könyvelés szócikket is!"
    },
    {
        "Szó":  "pénzügyi fenntarthatóság",
        "Definíció":  "Olyan pénzügyi döntés vagy döntések sorozata, amely hosszú távon is teljesíthető. Ha a döntéseddel nemcsak rövid, hanem hosszú távra is tervezel, végiggondolod azt, hogy az a jövőben is gond és szorongás nélkül teljesíthető-e, akkor az pénzügyileg fenntarthatónak mondható. Ha például lakáshitelt veszel fel, nem elég azt figyelembe venned, hogy most tudod-e fizetni a törlesztőrészletet, hanem arra is gondolnod kell, hogy ezt a jövőben is probléma nélkül meg tudod-e tenni. És arra is gondolnod kell, hogy a lakás akkora legyen, hogy annak rezsijét is tudd fizetni."
    },
    {
        "Szó":  "Pénzügyi Navigátor Tanácsadó Irodahálózat",
        "Definíció":  "A Pénzügyi Navigátor Tanácsadó Irodahálózat független, személyre szabott tanácsokat ad. Szakértőik díjmentes pénzügyi, fogyasztóvédelmi tanácsadást nyújtanak a hozzájuk fordulóknak, legyen szó akár egy alapos pénzügyi döntés meghozataláról, vagy akár egy már fennálló helyzetben, szituációban történő eligazodásról."
    },
    {
        "Szó":  "pénzügyi tervezés",
        "Definíció":  "Az a folyamat, amely során a céljaid, a rendelkezésedre álló pénzügyi eszközök és a gazdasági környezet figyelembe vételével hozol a jövődet is érintő pénzügyi döntéseket."
    },
    {
        "Szó":  "pénzügyi tudatosság",
        "Definíció":  "Egy készség, amely többek között magába foglalja pénzügyek tervezését és nyomon követését, a megtakarításokra való törekvést, a felelős pénzügyi döntések meghozatalát, a gazdasági környezet ismeretét."
    },
    {
        "Szó":  "phishing",
        "Definíció":  "Ld. az adathalászat szócikket!"
    },
    {
        "Szó":  "PIN-kód",
        "Definíció":  "A bankkártyádhoz (vagy a telefonod SIM-kártyájához) tartozó négyjegyű kód. Ezt soha senkinek nem kell megmondanod! PIN-kód beírásával azonosítod azt, hogy a kártya valóban a te tulajdonod az ATM-es ügyintézésnél vagy a bolti vásárlások során. Internetes vásárláskor vagy például telefonbankos ügyintézés során a PIN-kódodat soha nem kérhetik tőled."
    },
    {
        "Szó":  "portfólió",
        "Definíció":  "Ez egy olyan pénzügyi termékeket tartalmazó csomag, amely különböző befektetési eszközöket tartalmaz. A portfólió mindenkinél eltérő lehet, az egyén igényei szerint kerül kialakításra. Segítségével több termékbe is befektethetsz, diverzifikálhatsz. Olvasd el a diverzifikáció szócikket is!"
    },
    {
        "Szó":  "POS terminál",
        "Definíció":  "Segítségével készpénz használata nélkül fizethetünk. A bankkártyát vagy az azt helyettesítő eszközt csak közel kell helyezned a terminálhoz ahhoz, hogy megtörténjen a kommunikáció."
    },
    {
        "Szó":  "prémium",
        "Definíció":  "Olyan pénzbeli juttatás, amelyet a munkavállaló a meghatározott teljesítménycélok elérése vagy az előre meghatározott feltételek teljesítése esetén kaphat. Célja a motiváció fenntartása, gyakran százalékos formában kerül meghatározásra."
    },
    {
        "Szó":  "profit",
        "Definíció":  "A gazdasági tevékenység során elért haszon, nyereség, amely a bevételek és költségek különbségének az eredménye."
    },
    {
        "Szó":  "quishing",
        "Definíció":  "QR-kódos adathalászat. Az áldozatot arra veszik rá, hogy egy QR-kódban tárolt üzenetre reagáljon, például felkeressen egy weboldalt."
    },
    {
        "Szó":  "Qvik",
        "Definíció":  "Ez az azonnali fizetésen alapuló szolgáltatás ingyenes, biztonságos, de még nem minden kereskedőnél és szolgáltatónál érhető el. A qvik bármelyik formáját is használod, az átutalás csak a jóváhagyásod után történik meg, tehát minden esetben neked kell ellenőrizned és engedélyezned azt. Olvasd el a qvik-QR, a qvik-NFC, a qvik-kérelem és a qvik-link szócikkeket is!"
    },
    {
        "Szó":  "Qvik-kérelem",
        "Definíció":  "Ebben az esetben értesítést kapsz arról, hogy a kedvezményezett kéri tőled az átutalást. Ha rákattintasz, megjelenik a saját bankod átutalási felülete, ahol az átutalás adatai már szerepelnek. Ellenőrzés és a jóváhagyásod után ingyenesen átutalhatod a kért összeget."
    },
    {
        "Szó":  "Qvik-link",
        "Definíció":  "Ebben az esetben a kereskedőtől egy linket kapsz, amelyre rákattintva a saját bankod átutalási felületére jutsz, ahol az átutalás adatai már szerepelnek. Ellenőrzés és a jóváhagyásod után ingyenesen átutalhatod számára a kért összeget."
    },
    {
        "Szó":  "Qvik-NFC",
        "Definíció":  "Ez a már ismert és eddig is használt mobilfizetést jelenti. Ebben az esetben a telefonodat, amelyre előzetesen regisztráltad a bankkártyádat, a terminálhoz közelíted, majd ellenőrzés és jóváhagyás után ingyenesen átutalod az összeget."
    },
    {
        "Szó":  "Qvik-QR",
        "Definíció":  "Ebben az esetben egy QR-kódot kell beolvasnod, ami a webshop felületén, a pénztárgépen vagy a POS-terminálon jelenik meg. Ezt beolvasva a saját bankod átutalási felületére jutsz, ahol az átutalás adatai már szerepelnek. Ellenőrzés és a jóváhagyásod után ingyenesen átutalhatod a kért összeget."
    },
    {
        "Szó":  "reál hozam",
        "Definíció":  "A valódi, a pénz vásárlóerejére vonatkozó nyereséget mutatja meg. A nominális hozammal szemben a reál hozam az infláció hatását is figyelembe veszi. Ha például a nominális hozam 5%, az infláció pedig 4%, akkor valójában csak 1%-os a valódi nyereség, azaz a reál hozam."
    },
    {
        "Szó":  "részvény",
        "Definíció":  "Magas kockázatú, magasabb hozamot ígérő, könnyen készpénzzé tehető, tulajdonjogot megtestesítő értékpapír. Megvásárlásával egy cég résztulajdonosává válsz a megvásárolt rész mértékében. Vannak olyan részvények, amelyeket a lehetséges árfolyamemelkedés, másokat pedig az osztalék miatt érdemes megvásárolnod. És persze vannak olyan részvények, amelyekbe mindkét ok miatt érdemes lehet befektetned."
    },
    {
        "Szó":  "rövid táv",
        "Definíció":  "Pénzügyi értelemben a 0-3 év számít rövid távnak."
    },
    {
        "Szó":  "smishing",
        "Definíció":  "SMS-adathalászat. A csalók szöveges üzenet küldése útján támadnak. Olvasd el az adathalászat szócikket is!"
    },
    {
        "Szó":  "spoofing",
        "Definíció":  "A telefonon keresztül végrehajtott adathalászat során az elkövetők meghamisítják a hívószámot, ez a spoofing. Olvasd el a vishing és az adathalászat szócikkeket is!"
    },
    {
        "Szó":  "stop-loss",
        "Definíció":  "Ez egy automatikus megbízás: ha az árfolyam egy előre meghatározott szint alá esik, a rendszer automatikusan eladja az adott eszközt. Így időben kiléphetsz a veszteséges helyzetből, mielőtt az még nagyobb lenne."
    },
    {
        "Szó":  "SWIFT-kód",
        "Definíció":  "A bankok nemzetközi azonosítására szolgáló azonosító. A pénz küldő vagy fogadó bank egyedi kódja."
    },
    {
        "Szó":  "szabad felhasználású jelzáloghitel",
        "Definíció":  "Ez a hitel bármire felhasználható. A hitel fedezetéül egy olyan ingatlan szolgál, amelyet a bank elfogad. Ennél a hitelnél a kamat és a THM jellemzően magasabb, mint a lakáshitel esetében. Nézd meg a THM szócikket is!"
    },
    {
        "Szó":  "szakmai gyakorlat",
        "Definíció":  "A felsőoktatásban tanulókkal a munkáltató hallgatói munkaszerződést köt, amely szerint a hallgató munkát végezhet. A munkaszerződésben foglaltak alapján történik a hallgató bérezése, de törvényi előírás, hogy havonta legalább a minimálbér 65 százalékát meg kell kapnia. Ha a gyakorlati hely költségvetési szerv, akkor ott a munkára díjazás nélkül is sor kerülhet. A hallgatót ez esetben is megilletik mindazon jogok, amelyeket a munka törvénykönyve biztosít a munkavállalók részére. A gyakorlati képzésben részt vevő hallgatóval a Kormány által meghatározott feltételekkel megállapodást kell kötni."
    },
    {
        "Szó":  "számla",
        "Definíció":  "A nyugtával ellentétben a számla egy hivatalos dokumentum, amelyen több adat (pl. a eladó és a vevő adatai, a termék vagy a szolgáltatás pontos megnevezése) szerepel."
    },
    {
        "Szó":  "szavatosság",
        "Definíció":  "A szavatosság minden termékre érvényes. Új termék esetében 2 éven belül élhetsz a szavatossági jogaiddal. Nagyon fontos tudnod, hogy ehhez szükséged van a vásárláskor kapott nyugtára vagy számlára. Ha a hiba 1 éven túl jelentkezik, akkor neked kell bizonyítanod, hogy az már a vásárláskor fennállt, 1 éven belül azonban nem kell bizonyítanod semmit. Használt termékek esetében a szavatosság 1 év. Nézd meg a fogyasztói jogok és a jótállás szócikket is!"
    },
    {
        "Szó":  "személyi biztosíték",
        "Definíció":  "Hitelfelvétel esetén a biztosíték a bank kockázatának csökkentésére szolgál. Ennek egyik csoportja a személyi biztosíték, ami lehet a kezes, az adóstárs és a bankgarancia. Nézd meg az említett szócikkeket is!"
    },
    {
        "Szó":  "személyi jövedelemadó (szja)",
        "Definíció":  "Mértéke 15%. A természetes személyek fizetik a jövedelmük után. Az szja csökkenthető bizonyos adókedvezmények igénybevétele esetén. Nézd meg az adókedvekmények szócikket is!"
    },
    {
        "Szó":  "személyi kedvezmény",
        "Definíció":  "Ez bizonyos súlyos, tartós betegség vagy fogyatékosság esetén, orvosi igazolás vagy határozat alapján vehető igénybe a törvényben meghatározott mértékben. Olvasd el az adókedvezmény szócikket is!"
    },
    {
        "Szó":  "személyi kölcsön",
        "Definíció":  "Bármilyen célra felhasználható, a bankok nem vizsgálják, hogy mire költöd a pénzed. Az igényelt összeg jellemzően pár százezer forint szokott lenni, a hitel minimum és maximum nagysága a piaci változásokat követi. Mivel a személyi kölcsön kockázata az átlagosnál magasabb, ezért a hitel is drágább. A futamidő jellemzően 12-84 hónap szokott lenni. A THM nem lehet magasabb az adott félévet megelőző hónap első napján (tehát januártól júniusig az előző év december 1-én, júliustól decemberig az adott év junius 1-én) érvényes jegybanki alapkamat 24 százalékponttal növelt mértékénél. Nézd meg a THM szócikket is!"
    },
    {
        "Szó":  "SZÉP-kártya",
        "Definíció":  "Széchenyi Pihenőkártya. Egy béren kívüli juttatás, amelyet szállásfoglalásra, vendéglátásra, szabadidős tevékenységre vagy lakásfelújításra lehet felhasználni. A mindenkori felhasználható összeg, valamint a felhasználás köre a Magyar Közlönyben kerül kihírdetésre."
    },
    {
        "Szó":  "szerződéses jótállás",
        "Definíció":  "Más néven önkéntes jótállás. A gyártó vagy a kereskedő vállalhat, akár ingyenesen is, a kötelezőnél hosszabb jótállási időt. De az is gyakori, hogy vásárolhatsz plusz garanciát. Lényeges különbség azonban, hogy a szerződéses jótállásra a szerződésben rögzített feltételek vonatkoznak, amik eltérhetnek a kötelező jótállás feltételeiről. Nézd meg a jótállás és a jótállási jegy szócikket is!"
    },
    {
        "Szó":  "szolgáltatás",
        "Definíció":  "Olyan kézzel nem megfogható \"dolog\", ami a szükségletek kielégítését szolgálja. Amikor fodrászhoz mész és új frizurát csináltatsz magadnak, akkor egy szolgáltatást veszel igénybe. (Akkor azonban, amikor megveszed a boltban a sampont, hogy azzal otthon hajat mossál, egy terméket vásárolsz meg.)"
    },
    {
        "Szó":  "szponzor",
        "Definíció":  "Az a vállalkozás vagy magánszemély, aki anyagi vagy más jellegű támogatást nyújt. A támogatásért cserébe reklámot kérhet, például azt, hogy a neve és/vagy logója a támogatott eseményen, projekten megjelenjen."
    },
    {
        "Szó":  "tárgyi biztosíték",
        "Definíció":  "Hitelfelvétel esetén a biztosíték a bank kockázatának csökkentésére szolgál. Ennek egyik csoportja a tárgyi biztosíték, ami lehet ingatlan fedezet, ingóság és zálogjog. Nézd meg a személyi biztosíték szócikket is!"
    },
    {
        "Szó":  "társadalmi jövedelem",
        "Definíció":  "Ld. transzfer."
    },
    {
        "Szó":  "társasági adó (tao)",
        "Definíció":  "Mértéke 9%. A vállalkozások fizetik a nyereségük után. Nézd meg az adó szócikket is!"
    },
    {
        "Szó":  "Tartós Befektetési Számla (TBSZ)",
        "Definíció":  "Hosszú távú befektetésre szolgáló megtakarítás speciális értékpapírszámlán. A gyűjtőévben folyamatosan fizethetsz be a számládra, ezután következik a lekötési időszak, ami legfeljebb öt év lehet. A számládon elhelyezett összeget különféle eszközökbe fektetheted, és ezek összetételét a futamidő alatt szabadon változtathatod. Ha a számlát 3 éven belül feltöröd, akkor 15% szja-t és 13% szocho-t kell fizetned, 3-5 év közötti feltörés esetén 10% szja-t és 8% szocho-t, 5 év elteltével viszont ez a befektetési forma adómentes. Olvasd el a gyűjtőév (TBSZ) és a lekötési időszak (TBSZ) szócikkeket is!"
    },
    {
        "Szó":  "termék",
        "Definíció":  "Olyan kézzelfogható dolog (vagy ennek virtuális megfelelője), amit a szükségletek kielégítése céljából hoztak létre. Tehát egy valódi, papírból készült könyv vagy annak e-book változata termék. (Ha azonban egy könyvtárba ülsz be és olvasod el ezt a könyvet, akkor egy szolgáltatást vettél igénybe.)"
    },
    {
        "Szó":  "természetbeni juttatás",
        "Definíció":  "Olyan nem pénzbeli ellenszolgáltatás, amelyet a munkaviszony keretében a munkáltató nyújt a munkavállalónak. Ilyen például a SZÉP-kártya, a céges autó magánhasználatra vagy a lakhatási támogatás."
    },
    {
        "Szó":  "természetes személy",
        "Definíció":  "Ők tulajdonképpen az emberek."
    },
    {
        "Szó":  "THM",
        "Definíció":  "Teljes hiteldíjmutató. Ez egy százalékos érték, amit minden hitelintézet egységesen számol ki, és éves alapon megmutatja a hitel összes költségének arányát a hitel teljes összegéhez viszonyítva. Minél alacsonyabb a THM, annál olcsóbb a hitel, tehát alacsonyabb a teljes visszafizetendő összeg. A THM felső határáról az MNB honlapján tájékozódhatsz. (Hasznos tanácsok hitelfelvétel előtt)"
    },
    {
        "Szó":  "TKM",
        "Definíció":  "Teljes költségmutató. Megmutatja a biztosítás költségeit. Azt láthatod a segítségével, hogy a befektetéssel kombinált biztosításba befizetett pénzedből mennyi lesz a kezelési költségekre, díjakra és egyéb költségekre kifizetett összeg, vagyis a levonás. Egy biztosítási terméknél a TKM-kalkuláció nemcsak 1 évet mutat be, hanem különböző időtartamokra történik. Így látható, hogyan befolyásolják a különböző időtartamok a termék költségterhelését. Azt is kiolvashatod belőle, ha egy megtakarítás rövid távra nem éri meg, mert a költségek rövid távon nagyobbak, mint a várható hozam."
    },
    {
        "Szó":  "többes ügynök",
        "Definíció":  "Ha például biztosítást akarsz kötni, akkor számos mód áll a rendelkezésedre, hogy megtaláld a számodra legmegfelelőbbet. Az egyik lehetőség az, hogy egy többes ügynök segítségét kéred. Ő több biztosító ajánlatával is megismertet téged annak érdekében, hogy a számodra legkedvezőbbet tudd kiválasztani. Banki termékek értékesítését többes ügynök ehhez hasonlóan végzi. Nézd meg a biztosítás és a biztosító szócikket is!"
    },
    {
        "Szó":  "tőke",
        "Definíció":  "Elsődleges jelentése a pénz, de ezenkívül érthetjük alatta azokat az anyagi javakat, amelyeket hasznosítva, befektetve haszonra számíthatunk. Ilyen lehet egy gép, egy épület, egy szerszám, az infrastruktúra, amelyeket használva termékeket vagy szolgáltatásokat állíthatsz elő. Ez a reáltőke. De a te munkaerőd is lehet tőke, ezt humán tőkének nevezzük."
    },
    {
        "Szó":  "törlesztőrészlet",
        "Definíció":  "A kölcsönt jellemzően nem egy összegben, hanem hónapok vagy évek alatt, több részben kell visszafizetni. A törlesztőrészlet tartalmazza a kölcsön összegét, a kamatot, a kezelési költséget és egyéb díjakat."
    },
    {
        "Szó":  "transzfer",
        "Definíció":  "Ellenszolgáltatás nélküli jövedelem. Ezeket az állam adja a gazdaság többi szereplőjének annak érdekében, hogy a társadalmi jóllétet növelje, illetve az egyenlőtlenségeket csökkentse. Nézd meg a pénzbeli juttatás szócikket is!"
    },
    {
        "Szó":  "unit-linked biztosítás",
        "Definíció":  "Más néven befektetési egységhez kötött életbiztosítás. A befizetéseket a biztosító a befektetési alapokhoz hasonló eszközalapokba fekteti. Hozama attól függ, hogy a lejáratkor vagy az esetleges haláleset bekövetkeztekor az eszközalap hozama mekkora. A unit-linked biztosításba inkább hosszabb távra éri meg befektetni, mert a költségei magasak lehetnek."
    },
    {
        "Szó":  "utasbiztosítás",
        "Definíció":  "Ez a biztosítás az utazás megkezdése előtt köthető, a megkötésekor egy összegben kell kifizetni. A biztosítás díja többek között függ az utazás időtartamától, az utazás módjától, a célországtól, de attól is, hogy mekkora összeget fizet a biztosító a káresemény bekövetkeztekor. A poggyászkár sok esetben limitálva van, és nem minden tárgyra terjed ki. Tehát, ha például nagy értékű mobiltelefont vagy laptopot viszel magaddal, nézd meg figyelmesen a szerződésben, hogy ezek ellopása esetén is fizet-e a biztosító!"
    },
    {
        "Szó":  "ügyféltudakozvány",
        "Definíció":  "Ebben a tananyagban a hitelekkel kapcsolatban használt kifejezés. Segítségével megtudhatod, hogy mit tartanak nyilván rólad a KHR-ben. Az ügyfélkapun keresztül elektronikusan is lekérhető."
    },
    {
        "Szó":  "vagyonszerzési illeték",
        "Definíció":  "Bizonyos vagyontárgyak tulajdonjoga megszerzése esetén, akkor, amikor azt a nevünkre átírják, vagyonszerzési illetéket kell fizetnünk. Ilyen például az, amikor ingatlant vagy autót vásárolunk. Nézd meg az illeték szócikket is!"
    },
    {
        "Szó":  "vállalkozói kivét",
        "Definíció":  "Ez az egyéni vállalkozó saját magának kiutalt fizetése, amelyet a vállalkozás bevételeiből személyes jövedelemként vesz ki, és amely után adót és járulékot kell fizetnie."
    },
    {
        "Szó":  "változó összegű kiadás",
        "Definíció":  "Azok a kiadások, amelyek összege nem mindig ugyanaz. Azt tudod ugyan, hogy élelmiszerre költeni fogsz (ezért állandó kiadás is), de hogy pontosan mennyit, azt több tényező is befolyásolja."
    },
    {
        "Szó":  "valuta",
        "Definíció":  "Valutának a kézzel fogható külföldi bankjegyet és érmét nevezik."
    },
    {
        "Szó":  "váratlan kiadás",
        "Definíció":  "Azok a kiadások tartoznak ide, amelyekre előzetesen nem számítottunk, minden előjel nélkül jelentkeznek. Ha elromlik otthon a hűtőd vagy a biciklidet kell megjavíttatnod, az ebbe a kategóriába tartozik. A váratlan kiadás nem mindig negatív eseményhez köthető. Ha meghívnak egy esküvőre, amire nem számítottál és ajándékot kell vinned, az váratlan kiadás, mégis valószínűleg örülni fogsz neki."
    },
    {
        "Szó":  "végrehajtási szakasz",
        "Definíció":  "Ha az adós nem tudja fizetni a hitelét, akkor a késedelmet három szakaszra bonthatjuk. A harmadik szakasz a végrehajtási szakasz. Ha már több, mint 180 napja nem történt hiteltörlesztés-fizetés, a hitelszerződés felmondásra kerül, és egy végrehajtó próbál megállapodni az adóssal. Ha ez sem sikerül, akkor a végrehajtás keretén belül akár kilakoltatás is megtörténhet. Nézd meg a fizetési késedelem szakasza és a követeléskezelési szakasz szócikkeket is!"
    },
    {
        "Szó":  "végtörlesztés",
        "Definíció":  "A hitel előtörlesztés lehet részleges vagy teljes. Ez utóbbit nevezzük végtörlesztésnek, ekkor tehát az egész fennálló tartozást egy összegben kifizeted. Ennek költsége lehet, amiről a bankod tud felvilágosítást adni. Az is előfordulhat, hogy ilyen esetben elvesznek a hiteledhez kapcsolódó kedvezmények. Érdemes már a hitel felvételekor erre odafigyelned! Olvasd el az előtörlesztés szócikket is!"
    },
    {
        "Szó":  "vételi árfolyam - deviza",
        "Definíció":  "Általános esetben ezt az árfolyamot alkalmazza a bank, amikor a számládon lévő devizát forintra váltod. Olvasd el a deviza szócikket is!"
    },
    {
        "Szó":  "vételi árfolyam - valuta",
        "Definíció":  "Ezen az árfolyamon veszi meg tőled a bank/pénzváltó a valutát, tehát ennyit kapsz érte, amikor beváltod. Olvasd el a valuta szócikket is!"
    },
    {
        "Szó":  "vishing",
        "Definíció":  "Csaló telefonos hívások útján történő átverés, adathalászat. Olvasd el az adathalászat szócikket is!"
    },
    {
        "Szó":  "webkártya",
        "Definíció":  "Az online vásárlások biztonságának növelésére szolgál. Egy elkülönített alszámla tartozik hozzá, amelyre csak annyi pénzt érdemes rátenni, amekkora az aktuális vásárlás összege. Ha a webkártyád adatait adod meg, akkor az esetleges csalók csak annak az adataihoz és az azon lévő összeghez férhetnek hozzá, a többi adatod és pénzed biztonságban marad."
    },
    {
        "Szó":  "zöldhitel",
        "Definíció":  "Környezetbarát, energiahatékony beruházásokra (pl. napelemek, hőszivattyú, energiatakarékos házépítés) elérhető, gyakran támogatott hitel."
    },
    {
        "Szó":  "zöldítés",
        "Definíció":  "Azt jelenti, hogy a fenntarthatóság, a környezetvédelem és a klímavédelmi szempontok beépülnek a pénzügyi rendszerbe. Például olyan pénzügyi termékek jönnek létre, mint a bevételüket környezetbarát projektekre fordító zöld kötvények. Emellett maguk a pénzügyi intézmények is igyekeznek úgy alakítani a működésüket és befektetési portfóliójukat, hogy azok kevésbé terheljék a környezetet. Például a nyomtatott számlakivonatokat felváltja a digitális verzió."
    },
    {
        "Szó":  "zöldre festés",
        "Definíció":  "Ld. greenwashing"
    },
    {
        "Szó":  "TESZT – pénzügyi tudástár",
        "Definíció":  "Ez egy teszt-szócikk a Tudástár adatfrissítő folyamatának ellenőrzésére."
    }
];
