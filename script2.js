function akt() {
    dzieci.value = dzieci.value * 1
    dorosli.value = dorosli.value * 1
}
function r1() {
    location.hash = "#"
    location.hash = "#dane"
    gapi.auth2.getAuthInstance().signOut()
    opis.style.display = "none"
    rezerwuj.style.display = "none"
    liczba.style.display = "unset"
    zew.style.display = "block"
    progress.style.width = "20%"
}
function r2() {
    if (dzieci.value < 0 || dorosli.value < 0) {
        alert("Podaj liczby nieujemne")
        return;
    }
    if (dzieci.value % 1 != 0 || dorosli.value % 1 != 0) {
        alert("Nie krój ludzi na pół.")
        return;
    }
    if (dzieci.value == 0 && dorosli.value == 0) {
        alert("Wybierz co najmniej 1 osobę.")
        return;
    }
    location.hash = "#"
    location.hash = "#dane"
    liczba.style.display = "none"
    termin.style.display = "unset"
    progress.style.width = "40%"
    data = new Date();
    while (data.getDay() != 6) {
        data.setDate(data.getDate() + 1)
    }
    mies = "stycznia lutego marca kwietnia maja czerwca lipca sierpnia września października listopada grudnia".split(" ")
    for (i = 1; i <= 5; i++) {
        data2 = new Date(data.getTime() + dni[iw] * 1000 * 3600 * 24)
        termin.children[i].innerText = data.getDate() + " " + mies[data.getMonth()] + " - " + data2.getDate() + " " + mies[data2.getMonth()]
        data.setDate(data.getDate() + 7)
    }
}
let termin_data = ""
function r3(wej) {
    termin_data = wej
    location.hash = "#"
    setTimeout(function () { location.hash = "#zaplata" }, 100)
    progress.style.width = "60%"
    termin.style.display = "none"
    podsumowanie.style.display = "unset"
    ld.innerText = dzieci.value
    ldr.innerText = dorosli.value
    cd.innerText = dzieci.value * ceny[iw] + " zł"
    cdr.innerText = dorosli.value * ceny[iw] + " zł"
    s.innerText = (dzieci.value * 1 + (dorosli.value * 1)) * ceny[iw] + " zł"
    rabat.innerText = (dzieci.value * 1 + (dorosli.value * 1)) * (-rabaty[iw]) + " zł"
    zaplata.innerText = (dzieci.value * 1 + (dorosli.value * 1)) * (ceny[iw] - rabaty[iw]) + " zł"
}
function r4() {
    location.hash = "#"
    location.hash = "#dane"
    progress.style.width = "80%"
    podsumowanie.style.display = "none"
    autoryzacja.style.display = "unset"
}
function r5(wej) {
    if (autoryzacja.style.display != "unset") {
       return
    }
    location.hash = "#"
    location.hash = "#dane"
    dane = wej.getBasicProfile();
    console.log(dane);
    location.href = "confirm.html?NEW" + tytuly[i] + "=" + JSON.stringify(dane) + "-" + dzieci.value + "---" + dorosli.value + "-" + termin_data
}
let iw = location.hash.substr(1) * 1
function start() {
    tytul.innerText = tytuly[iw]
    tytul2.innerText = tytuly[iw]
    cena_stara.innerText = ceny[iw] + " zł"
    cena.innerText = (ceny[iw] - rabaty[iw]) + " zł"
    opis.innerText = opisy[iw]
    for (j = 0; j < obrazy[iw].length; j++) {
        nw = document.createElement("img")
        nw.src = obrazy[iw][j]
        wew.appendChild(nw)
        nw = document.createElement("input")
        nw.name = "kropka"
        nw.classList = "kropka"
        nw.type = "radio"
        nw.id = j
        jt = j
        nw.onclick = function () { wew.style.marginLeft = ("-" + (this.id * 100) + "%") }
        if (j == 0) {
            nw.checked = "true"
        }
        kropki.appendChild(nw)
    }
    x()
}
ceny = [2199, 3499, 2899, 3299, 2099, 2499, 3499, 3599, 2399, 2199, 2899]
rabaty = [800, 800, 800, 800, 600, 800, 800, 800, 800, 600, 800]
opisy = [
    "Położona w samym środku Bałkanów Bułgaria jest krajem bardzo zróżnicowanym geograficznie - znajdują się tam zarówno piękne plaże dla miłośników pływania, za to na fanów górskich wędrówek czeka wiele malowniczych szczytów. To kraj bezkresnej Niziny Naddunajskiej, położonych na południu pięknych wyżyn i gór (najwyższych na Bałkanach). Ale główną atrakcją kraju jest czyste i piękne wybrzeże Morza Czarnego, przyciągające turystów z całego świata. Bułgaria to kraj niezwykle lubiany przez turystów z całego świata – w dobie tanich lotów lotniczych, kraj ten nigdy nie był tak dostępny jak dzisiaj. To zasługa przystępnych cen, czystych plaż, miłych ludzi i szybkiego rozwoju kraju.",
    "Dla niektórych idealnie wakacje to te przeleżane na plaży, a dla innych czas wolny po prostu musi być aktywny. Z myślą o tych kamperowiczach, którzy podczas urlopu chcą cieszyć się życiem w 100%, przygotowaliśmy plan aktywnego wypoczynku w Chorwacji. Sprawdź, jakie aktywności możesz wypróbować w tym pięknym kraju i dzie warto się zatrzymać!",
    "Egipt znany jest z szerokich, piaszczystych plaż z łagodnym zejściem od morza. Plaże ciągną się kilometrami i sprzyjają uprawianiu sportów wodnych oraz długim, wieczornym spacerom. Wysokie temperatury w nadmorskich miejscowościach łagodzi chłodny wiatr wiejący od morza, dlatego przez cały rok panują tu wprost idealne warunki do wypoczynku i morskich kąpieli. Miłośnicy dobrego jedzenia mogą zasmakować także lokalnej kuchni, a żądni przygód podróżnicy mogą spróbować jeżdżenia na wielbłądach!",
    "Wycieczki do Grecji od lat ciesza sie duza popularnoscia wsród turystów. Sródziemnomorski klimat, antyczne zabytki, przepyszna kuchnia i róznorodne atrakcje to tylko wybrane atuty urlopu w ojczyznie mitycznych bogów. W Grecji nie warto jednak tylko twardo stąpać po ziemi, bo to co najciekawsze, często kryje się pod krystalicznie czystą wodą mórz. Do Grecji ściągają się więc amatorzy windsurfingu, nurkowania, snorkelingu i wielu innych. Jeśli nam nie wierzysz, to poleć tam i przekonaj się sam!", 
    "Rumunia – kraj nieodłącznie kojarzony z Transylwanią i słynnym Vladem Palownikiem, zwanym Draculą, ma naprawdę wiele do zaoferowania - między innymi liczne owiane legendą malownicze zamki czy przepiękne widoki rumuńskich Karpat. Uroki Rumunii, bogactwo kultur, tradycji i różnorodność krajobrazu wprost zachęcają do wyjechania na wycieczkę do tego zjawiskowego kraju.", 
    "Turcja jest znana z plaż pokrytych złotym piaskiem, błękitnego morza, z bogactwa zabytków, egzotycznej roślinności, a także nocnych klubów i głośnych barów, wszystko to sprawia, że jest to idealne miejsce na spędzenie urlopu. Turcja jest prawdziwym rajem dla zwolenników aktywnego wypoczynku, pociągające miejsce dla ludzi interesujących się zwiedzaniem i kulturą islamu. Turcja oferuje dla każdego mnóstwo atrakcji niezależnie, czy pragniemy urlop spędzić na wylegiwaniu się na plaży, czy też mamy ambicję zobaczyć wspaniałe zabytki i poznać bogatą kulturę, albo chcemy zaznać szalonej nocnej rozrywki.", 
    "Na nasze obozy językowe zapraszamy dzieci i młodzież w wieku 6-18 lat. Obóz odbywa się na Mazurach. Wszyscy nasi nauczyciele są native speakerami, wierzymy, że najlepiej się uczyć języka poprzez rozmowę. Podczas obozu będziemy się uczyć angielskiego poprzez gry i zabawy, jednocześnie oferując inne atrakcje, takie jak wycieczki rowerowe, strzelanie z łuku, kajaki czy żagle.", 
    "Nasze obozy skupiają się na nauce i doskonaleniu dzieci w sztuce jeździeckiej, a także uczą je podstaw dotyczących pielęgnacji koni. Obozy dla dzieci z udziałem zwierząt (a wraz z końmi posiadamy także wspaniałem psiaki i kociaki!) to idealne rozwiązanie, ponieważ dzięki nim nigdy nie jest nudno! Podczas obozu oferujemy także inne atrakcje takie jak strzelanie z łuku i wiatrówki, szermierkę czy podchody, więc jeżeli uwielbiasz jeździectwo lub chcesz nauczyć się czegoś nowego, wypróbuj nasz obóz, a nie pożałujesz!", 
    "Zapraszamy nad nasze urokliwe Morze Bałtyckie. Podczas naszej wycieczki po drodze odwiedzimy Toruń i Gdańsk. W trakcie wyjazdu każdy z uczestników znajdzie coś dla siebie: osoby preferujące wypoczynek pozostały wolny czas mogą spędzić na nadmorskich spacerach, plażowaniu i kąpielach, a tych, którzy cenią aktywne formy wypoczynku zapraszamy na dodatkowe, fakultatywne wycieczki: rejs statkiem Gdynia-Hel i zwiedzanie zamku krzyżackiego w Malborku.", 
    "Góry kuszą, magnetyzują, przyciągają. Warto skorzystać z gościnności górskich szlaków i zamienić jednodniowe wyjścia w góry z noclegiem w dolinie na wyprawę z noclegiem w schronisku. Każdy miłośnik i pasjonat aktywności górskich takich jak turystyka piesza, rowerowa czy wycieczki krajoznawcze znajdzie u nas coś dla siebie. Sprawdź naszą propozycją wycieczki po jednym z najważniejszych polskich pasmach górskich - Bieszczadach i przekonaj się czy nocowanie w ostojach dla strudzonych wędrowców, to opcja dla Ciebie!", 
    "Rzym to stolica i turystyczny skarb Włoch. Pełen starożytnych zabytków, barokowych fontann i urokliwych zakątków, sprzyja romantycznym wakacjom we dwoje, rodzinnym wypadom, ale też doskonale sprawdzi się jako miejsce aktywnego wypoczynku dla singli. Słynne Koloseum, Panteon i Campo de’ Fiori sprawiają, że miasto przez cały rok cieszy się ogromną popularnością. Mimo tego zawsze znajdzie się ciche, ocienione miejsce, w którym możesz odpocząć od tego osobliwego, ale nadal szczególnie interesującego miasta o wielkiej tradycji."
];
obrazy = [
    ["./obrazy/bul1.png", "./obrazy/bul2.png", "./obrazy/bul3.png", "./obrazy/bul4.png"],
    ["./obrazy/cho1.png", "./obrazy/cho2.png", "./obrazy/cho3.png", "./obrazy/cho4.png"],
    ["./obrazy/egipt1.png", "./obrazy/egipt2.png", "./obrazy/egipt3.png", "./obrazy/egipt4.png"],
    ["./obrazy/grecja1.png", "./obrazy/grecja2.png", "./obrazy/grecja3.png", "./obrazy/grecja4.png"],
    ["./obrazy/rum1.png", "./obrazy/rum2.png", "./obrazy/rum3.png", "./obrazy/rum4.png"],
    ["./obrazy/turcja1.png", "./obrazy/turcja2.png", "./obrazy/turcja3.png", "./obrazy/turcja4.png"],
    ["./obrazy/jez1.png", "./obrazy/jez2.png", "./obrazy/jez3.png", "./obrazy/jez4.png"],
    ["./obrazy/kon1.png", "./obrazy/kon2.png", "./obrazy/kon3.png", "./obrazy/kon4.png"],
    ["./obrazy/morze1.png", "./obrazy/morze2.png", "./obrazy/morze3.png", "./obrazy/morze4.png"],
    ["./obrazy/gory1.png", "./obrazy/gory2.png", "./obrazy/gory3.png", "./obrazy/gory4.png"],
    ["./obrazy/rzym1.png", "./obrazy/rzym2.png", "./obrazy/rzym3.png", "./obrazy/rzym4.png"]
];
dni = [7, 7, 7, 7, 7, 7, 14, 14, 10, 10, 10]
tytuly = ["Wczasy w Bułgarii", "Wczasy w Chorwacji", "Wczasy w Egipcie", "Wczasy w Grecji", "Wczasy w Rumunii", "Wczasy w Turcji", "Krajowy obóz językowy", "Krajowy obóz jeździecki", "Krajowa wycieczka nad morze", "Krajowa wycieczka w góry", "Wycieczka do Rzymu"]
function x(){
    dzieci.value=dzieci.value*1
    dorosli.value=dorosli.value*1
    setTimeout(x,10)   
}
setTimeout(start, 100)
