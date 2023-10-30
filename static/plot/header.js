class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav:where(.astro-3EF6KSR2) {
            position: fixed;
            top: 0;
            left: 0;
            background-color: #000;
            line-height: 30px;
            width: 100%;
            text-align: center;
            box-sizing: border-box
        }

        .menu:where(.astro-3EF6KSR2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center
        }

        .menu:where(.astro-3EF6KSR2) li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2) {
            display: block;
            padding: 15px 5px
        }

        .menu:where(.astro-3EF6KSR2) li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2):hover {
            color: #000;
            text-decoration: underline
        }

        .item:where(.astro-3EF6KSR2):hover {
            background-color: #cdcdcd
        }

        .menu:where(.astro-3EF6KSR2) li:where(.astro-3EF6KSR2).subitem a:where(.astro-3EF6KSR2) {
            padding: 15px
        }

        .menu:where(.astro-3EF6KSR2) li:where(.astro-3EF6KSR2).subitem a:where(.astro-3EF6KSR2):hover {
            background-color: #ddd;
            color: #000
        }

        .compressed_menu:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2) {
            font-size: 18px;
            color: #fff;
            text-decoration: none
        }

        ul:where(.astro-3EF6KSR2) {
            margin: 0%
        }

        .menu:where(.astro-3EF6KSR2),.submenu:where(.astro-3EF6KSR2) {
            list-style-type: none
        }

        a:where(.astro-3EF6KSR2) {
            color: #fff;
            text-decoration: none
        }

        .item:where(.astro-3EF6KSR2) {
            text-align: center;
            order: 3;
            width: 100%;
            display: none
        }

        .active:where(.astro-3EF6KSR2) .item:where(.astro-3EF6KSR2) {
            display: block
        }

        .active:where(.astro-3EF6KSR2) .compressed_menu:where(.astro-3EF6KSR2) {
            display: none
        }

        .compressed_menu:where(.astro-3EF6KSR2) {
            order: 1;
            float: right
        }

        .submenu:where(.astro-3EF6KSR2) {
            display: none
        }

        .subitem:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2) {
            color: #fff;
            text-decoration: none;
            padding: 14px 16px 16px;
            text-align: center
        }

        @media (max-width: 960px) {
            .submenu-active:where(.astro-3EF6KSR2) .submenu:where(.astro-3EF6KSR2) {
                display:block
            }

            .submenu-active:where(.astro-3EF6KSR2) .subitem:where(.astro-3EF6KSR2) {
                background-color: #3b3939
            }
        }

        @media (min-width: 960px) {
            .menu:where(.astro-3EF6KSR2) {
                align-items:flex-start;
                flex-wrap: nowrap;
                justify-content: center;
                background: none
            }

            .logo:where(.astro-3EF6KSR2) {
                order: 0;
                flex: 1
            }

            .item:where(.astro-3EF6KSR2) {
                display: block;
                order: 1;
                width: auto;
                position: relative;
                padding-left: 15px;
                padding-right: 15px
            }

            .compressed_menu:where(.astro-3EF6KSR2) {
                display: none
            }

            .has-submenu:where(.astro-3EF6KSR2):hover .submenu:where(.astro-3EF6KSR2) {
                display: block;
                position: absolute;
                top: 60px;
                min-width: 180px;
                left: 0;
                background-color: #ccc
            }

            .has-submenu:where(.astro-3EF6KSR2) {
                border-radius: 0
            }
        }
      </style>
      <header class="astro-3EF6KSR2">
        <nav class="astro-3EF6KSR2">
            <ul class="menu astro-3EF6KSR2">
                <li class="logo astro-3EF6KSR2"><a href="{% url 'plot:index'%}" target="_self" style="padding:0" class="astro-3EF6KSR2"><img src="{% static 'plot/images/fudan.png' %}" alt="Logo" style="height: 60px; width: auto; float:left" class="astro-3EF6KSR2"></a></li>
                <li class="item has-submenu astro-3EF6KSR2"><a href="{% url 'plot:index'%}" class="astro-3EF6KSR2">About</a>
                <li class="item has-submenu astro-3EF6KSR2" id="about"><a target="_self" href="{% url 'plot:lab'%}" class="astro-3EF6KSR2">Team</a>
                    <!-- <ul class="submenu astro-3EF6KSR2"> -->
                        <!-- <li class="subitem astro-3EF6KSR2"><a target="_self" href="lab.html" class="astro-3EF6KSR2">Lab</a></li> -->
                        <!-- <li class="subitem astro-3EF6KSR2"><a target="_self" href="/overview/" class="astro-3EF6KSR2">Funding</a></li> -->
                        <!-- <li class="subitem astro-3EF6KSR2"><a target="_self" href="/advisory/" class="astro-3EF6KSR2">Advisory</a></li> -->
                        <!-- <li class="subitem astro-3EF6KSR2"><a target="_self" href="team_.html" class="astro-3EF6KSR2">Team</a></li> -->
                        <!-- <li class="subitem astro-3EF6KSR2"><a target="_self" href="/ga4gh/" class="astro-3EF6KSR2">GA4GH</a></li> -->
                    <!-- </ul> -->
                </li>
                <!-- <li class="item astro-3EF6KSR2"><a target="_self" href="/news/" class="astro-3EF6KSR2">News</a></li> -->
                <!-- <li class="item has-submenu astro-3EF6KSR2" id="about"><a target="_self" href="#" class="astro-3EF6KSR2">About</a> -->
                <li class="item has-submenu astro-3EF6KSR2"><a href="#" class="astro-3EF6KSR2">Data</a>
                  <ul class="submenu astro-3EF6KSR2">
                        <li class="subitem astro-3EF6KSR2"><a target="_self" href="#" class="astro-3EF6KSR2">Github</a></li>
                        <li class="subitem astro-3EF6KSR2"><a target="_self" href="https://hgdownload.soe.ucsc.edu/downloads.html" class="astro-3EF6KSR2">UCSC</a></li>
                        <li class="subitem astro-3EF6KSR2"><a target="_self" href="https://www.internationalgenome.org/data" class="astro-3EF6KSR2">1K Genome</a></li>
                    </ul>
                </li>
                <!-- <li class="item astro-3EF6KSR2"><a target="_self" href="/technology/" class="astro-3EF6KSR2">Technology</a></li> -->
                <!-- <li class="item astro-3EF6KSR2"><a target="_self" href="/samples/" class="astro-3EF6KSR2">Samples</a></li> -->
                <li class="item astro-3EF6KSR2"><a target="_self" href="{% url 'plot:publication'%}" class="astro-3EF6KSR2">Publication</a></li>
                <li class="item has-submenu astro-3EF6KSR2"><a href="{% url 'plot:plot'%}" class="astro-3EF6KSR2">Query</a>
                <li class="item astro-3EF6KSR2"><a target="_self" href="{% url 'plot:contact'%}" class="astro-3EF6KSR2">Contact</a></li>
                <!-- <li class="item button astro-3EF6KSR2"><a target="_blank" href="https://wiki.humanpangenome.org/" class="astro-3EF6KSR2">Wiki Login</a></li> -->
                <li class="compressed_menu astro-3EF6KSR2"><a href="#" class="astro-3EF6KSR2"><i class="fa-solid fa-bars astro-3EF6KSR2"></i></a></li>
                <li class="close_compressed_menu"><a href="#"><i class="fa-solid fa-xmark"></i></a></li>
            </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);