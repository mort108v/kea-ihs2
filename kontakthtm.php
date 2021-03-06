<!DOCTYPE html>
<html lang="dk">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sønderborg Idrætshøjskole</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/kontakt.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Quicksand:wght@500&display=swap" rel="style">

    <script src="components/footer.js" type="text/javascript" defer></script>
</head>

<body>
    <header>
        <nav>
            <div class="logo">
                <a href="index.html"><img src="assets/logo/ihs_logo.webp" class="logo" alt="logo"></a>
            </div>
            <ul class="nav-links">
                <li>
                    <a class="cta" href="tilmelding.html"><button>Tilmelding</button></a>
                </li>
                <div class="hoejskole">
                    <li>
                        <a href="hoejskole.html">Højskole</a>
                    </li>
                    <div class="hoejskole-drop">
                        <li>
                            <a href="fag.html">Fag & Sport</a>
                        </li>
                        <li>
                            <a href="rejser.html">Rejser</a>
                        </li>
                        <li>
                            <a href="oekonomi.html">Din økonomi</a>
                        </li>
                    </div>
                </div>
                <div class="korte-kurser">
                    <li>
                        <a href="korte_kurser.html">Korte kurser</a>
                    </li>
                    <div class="korte-drop">
                        <li>
                            <a href="ugekurser.html">Ugekurser</a>
                        </li>
                        <li>
                            <a href="gymnasier.html">For gymnasier</a>
                        </li>
                        <li>
                            <a href="teambuilding.html">Teambuilding på arbejdspladsen</a>
                        </li>
                        <li>
                            <a href="udlejning.html">Lokaleudlejning</a>
                        </li>
                    </div>
                </div>
                <div class="om-ihs">
                    <li>
                        <a href="om_ihs.html">Om IHS</a>
                    </li>
                    <div class="om-ihs-drop">
                        <li>
                            <a href="ihs_livet.html">Livet på IHS</a>
                        </li>
                        <li>
                            <a href="personale.html">Personale</a>
                        </li>
                        <li>
                            <a href="bestyrelse.html">Bestyrelse</a>
                        </li>
                        <li>
                            <a href="værdier.html">Værdier</a>
                        </li>
                        <li>
                            <a href="elevforening.html">Elevforening</a>
                        </li>
                        <li>
                            <a href="faciliteter .html">Faciliteter</a>
                        </li>
                        <li>
                            <a href="faq.html">FAQ</a>
                        </li>
                    </div>
                </div>
                <div class="kontakt">
                    <li>
                        <a href="kontakthtm.php">Kontakt</a>
                    </li>
                    <div class="kontakt-drop">
                        <li>
                            <a href="kontakthtm.php">Kontakt os</a>
                        </li>
                        <li>
                            <a href="find_os.html">Find os</a>
                        </li>
                        <li>
                            <a href="rundvisning.html">Book en rundvisning</a>
                        </li>
                    </div>
                </div>
                <div id="lang">
                    <div class="langUK">
                        <img class="langUKimg" src="assets/icons/united-kingdom-flag-transparent.png" alt="language UK">
                    </div>
                    <div class="langDK">
                        <img class="langDKimg" src="assets/icons/flag-denmark-2.png" alt="language DK">
                    </div>
                </div>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>

    <section id="splash">
        <div class="splash_media"></div>
    </section>

    <section id="breadcrum"> </section>

    <section id="main">
        <div class="main-top">
            <h1 style="text-align: center">KONTAKT</h1>
            <p>Udfyld nedenstående formular, så vender vi tilbage hurtigst muligt.</p>
        </div>

        <div class="main-form">
            <div class="container">
                <form action="http://nobisnet.dk/cgi-bin/FormMail.pl" method="POST" accept-charset="ISO-8859-1" onsubmit="var originalCharset = document.charset; document.charset = 'ISO-8859-1'; window.onbeforeunload = function () {document.charset=originalCharset;};">

                    <label for="name">* Dit fulde navn</label>
                    <input type="text" id="name" name="name" placeholder="Dit navn her...">

                    <label for="email">* e-mail</label>
                    <input type="text" id="email" name="email" placeholder="Skriv din e-mail her...">

                    <label for="country">* Land</label>
                    <select id="country" name="country">
                        <option value="danmark">Danmark</option>
                        <option value="norge">Norge</option>
                        <option value="sverige">Sverige</option>
                        <option value="tyskland">Tyskland</option>
                        <option value="england">England</option>
                    </select>

                    <label for="message">* Besked</label>
                    <textarea id="message" name="message" placeholder="Skriv noget fedt her..." style="height:180px"></textarea>

                    <input type="submit" value="Afsend">
                    <input type="reset" value="Slet indhold">

                    <input type="hidden" name="recipient" value="morten@nobisnet.dk" />

                </form>
            </div>
        </div>
    </section>

    <footer-component></footer-component>

    <script src="script/javascript.js"></script>
</body>

</html>
