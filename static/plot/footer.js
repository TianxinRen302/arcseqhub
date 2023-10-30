class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer:where(.astro-SZ7XMLTE) {
            height: 140px;
            overflow: hidden;
            background-color: #373b3d;
            margin-top: 50px;
            margin-bottom: 0;
        }

        .footer-left:where(.astro-SZ7XMLTE) a:where(.astro-SZ7XMLTE) {
            float: left;
            color: #ffffff;
            text-align: left;
            padding: 10px;
            text-decoration: none
        }

        .footer-right:where(.astro-SZ7XMLTE) {
            float: right;
            margin-right: 10%;
            padding: 15px
        }

        .footer-left:where(.astro-SZ7XMLTE) {
            float: left;
            margin-left: 10%;
            line-height: 25px
        }

        #division:where(.astro-SZ7XMLTE) {
            position: absolute;
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            height: 1px;
            background-color: #cdd1d4
        }

        @media (max-width: 960px) {
            #division:where(.astro-SZ7XMLTE) {
                width:90%;
                margin-left: 5%;
                margin-right: 5%
            }

            .footer-left:where(.astro-SZ7XMLTE) {
                margin-left: 5%
            }

            .footer-right:where(.astro-SZ7XMLTE) {
                margin-right: 5%
            }
        }
      </style>
      <footer class="astro-SZ7XMLTE">
        <div class="footer astro-SZ7XMLTE">
          <div style="color: #ffffff;font-weight: lighter;font-size: x-small; margin-top:15px; margin-left:10%" class="astro-SZ7XMLTE">
              ©2023 FuDan University
          </div>
          <div id="hprc" style="text-align: center; font-weight:bold; color: #ffffff; margin-bottom: 10px; line-height: 45px;" class="astro-SZ7XMLTE">
              Arcseqhub
          </div>
          <div id="division" class="astro-SZ7XMLTE">
          </div>
          <div class="footer-left astro-SZ7XMLTE">
              <!-- <a target="_self" href="/" class="astro-SZ7XMLTE">Home</a> -->
              <a target="_self" href="{% url 'plot:index'%}" class="astro-SZ7XMLTE">About</a>
              <a target="_self" href="{% url 'plot:contact'%}" class="astro-SZ7XMLTE">Contact</a>
          </div>
          <!-- <div class="footer-right astro-SZ7XMLTE">
              <a target="_blank" href="https://twitter.com/HumanPangenome" class="astro-SZ7XMLTE"><i class="fab fa-twitter astro-SZ7XMLTE" style="font-size:25px;color:#B0B8BC;"></i></a>
          </div> -->
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);