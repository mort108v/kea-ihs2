const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        footer {
            padding: 20px 0 20px 0;
        }

        .footer-flex-container {
            display: flex;
            flex-direction: row;
            padding: 15px;
        }

        .footer-headline {
            text-align: center;
            margin-bottom: 15px;
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            color: #000;
            font-size: 24px;
        }

        .footer-left {
            flex-grow: 1;
            text-align: center;
            align-content: center;
        }

        .footer-logo-container {
            display: block;
        }

        .footer-mid {
            flex-grow: 2;
        }

        .footer-mid img {
            width: 50px;
        }

        .footer-some-container {
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0 50px 0 50px;
        }

        .footer-some-container ul {
            list-style-type: none;
            margin: 0;
            padding: 0 50px 0 50px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
        }

        .footer-some-container li {
            display: inline;
        }

        .footer-right {
            flex-grow: 1;
        }

        .footer-bottom {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 20px 40px;
        }

        .footer-copy {
            display: flex;
            justify-content: center;
        }

        @media screen and (max-width:700px) {
            .footer-headline {
                margin-bottom: 10px;
                font-size: 15px;
            }

            .footer p {
                font-size: 10px;
            }

            .footer-flex-container {
                flex-direction: column;
                padding: 15px;
            }

            .footer-mid {
                margin: 15px 0 15px 0;
            }

            .footer-some-container {
                padding: 0;
            }

            .footer-mid a img {
                width: 40px;
            }

            .footer-bottom p {
                font-size: 10px;
                padding: 0 10px 20px 10px;
            }
        }

        @media screen and (max-width:900px) {
            .footer-headline {
                margin-bottom: 10px;
                font-size: 15px;
            }

            .footer p {
                font-size: 10px;
            }

            .footer-flex-container {
                flex-direction: column;
                padding: 15px;
            }

            .footer-mid {
                margin: 15px 0 15px 0;
            }

            .footer-some-container {
                padding: 0;
            }

            .footer-mid img {
                width: 40px;
            }

            .footer-bottom p {
                font-size: 10px;
                padding: 0 10px 20px 10px;
            }
        }
    </style>

    <footer>
        <div class="footer-flex-container">
            <div class="footer-left">
                <!--<h3 class="footer-headline">Adresse</h3>-->
                <div class="footer-logo-container">
                    <img class="footer-logo" src="assets/logo/ihs_logo.webp" alt="Mønt logo">
                </div>
            </div>
            <div class="footer-mid">
                <h3 class="footer-headline">Følg med i livet på højskolen</h3>
                <div class="footer-some-container">
                    <ul>
                        <li class="footer-item">
                            <a href="https://www.facebook.com/IdraetshojskolenSonderborg">
                                <img src="assets/some/facebook.png" alt="Facebook link">
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="https://www.instagram.com/ihsdk/">
                                <img src="assets/some/instagram.png" alt="Instagram link">
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="https://vimeo.com/channels/1306783">
                                <img src="assets/some/vimeo-social-logo.png" alt="Vimeo link">
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="https://www.youtube.com/channel/UC3_GXsm6rzkw2L8Ni9p5Vlw?view_as=subscriber">
                                <img src="assets/some/youtube.png" alt="Youtube link">
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="https://www.linkedin.com/company/1663871/">
                                <img src="assets/some/linkedin.png" alt="LinkedIn link">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-right">
                <h3 class="footer-headline">Samarbejde</h3>
            </div>
        </div>

        <div class="footer-bottom">
            <p>Idrætshøjskolen Sønderborg</p>
            <br>
            <p>Friheds allé 42, 6400 Sønderborg</p>
            <br>
            <p>(+45) 7442 1848</p>
            <br>
            <p>info@ihs.dk</p>
        </div>

        <div class="footer-copy">
            <p class="footer-text">© 2020 KEA MMD</p>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'closed'
        });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
