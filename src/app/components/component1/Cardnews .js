class Cardnews extends HTMLElement {

  shadow = this.attachShadow({ mode: "open" }); // Cria uma virtual DOM e define que pode receber alterações de fora(atributos como href,src e dentre outros)
  currentIndex = 0;
  totalItems = this.shadowRoot.querySelectorAll('.section_team_cards_employee').length;
  constructor() {

    super();// construtor pai(HTMLElement)

    this.connectedCallback()

    this.shadow.appendChild(this.build())// adiciona um nó na árvore
    this.shadow.appendChild(this.styles())// adiciona um nó na árvore


    // EVENT LISTENER CLICK
    const cardRight = this.shadowRoot.querySelector('.prev-btn');
    cardRight.addEventListener('click', () => {
      this.prevSlide();
    });
    const next = this.shadowRoot.querySelector('.next-btn');
    next.addEventListener('click', () => {
      this.nextSlide();
    });


    // EVENT LISTENER WIDTH SCREEN
    window.addEventListener('resize', () => {
      var width = window.innerWidth;
      if (width >= 1000) {
        console.log("maior")
      }
    });
  }

  build() {


    const template = `
    <div class="carousel-container">
            
    <div class="carousel" id="as">
    <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Edina Schimitz</h3>
        <p class="section_team_cards_employee_position">Psicóloga Clínica</p>
        <p class="section_team_cards_employee_crp">CRP 12/18818</p>
        <p class="section_team_cards_employee_specialty">Terapia Cognitivo Comportamental</p>
    </div>
        <div class="section_team_cards_employee">
        <h2 class="section_team_cards_employee_name">Huli Alves</h2>
        <p class="section_team_cards_employee_position">Apoio Administrativo</p>
        <p class="section_team_cards_employee_specialty">Estudante de Psicologia</p>
    </div>
        <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Gabriela Morandim</h3>
        <p class="section_team_cards_employee_position">Psicóloga</p>
        <p class="section_team_cards_employee_crp">CRPSP 167460</p>
        <p class="section_team_cards_employee_specialty">Orientação Psicanalítica</p>
    </div>
        <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Jacks Bezerra</h3>
        <p class="section_team_cards_employee_position">Psicólogo e Neuropsicólogo</p>
        <p class="section_team_cards_employee_crp">CRP 05/30293</p>
    </div>
        <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Lorena Felippe</h3>
        <p class="section_team_cards_employee_position">Psicóloga</p>
        <p class="section_team_cards_employee_crp">CRP 06/168609</p>
        <p class="section_team_cards_employee_specialty">Orientação Psicanalítica</p>
    </div>
        <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Guilherme Pavanelli</h3>
        <p class="section_team_cards_employee_position">Psicólogo</p>
        <p class="section_team_cards_employee_crp">CRP 06/170101</p>
        <p class="section_team_cards_employee_specialty">Fenomenologia</p>
    </div>
        <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Aline Pereira</h3>
        <p class="section_team_cards_employee_position">Psicóloga</p>
        <p class="section_team_cards_employee_crp">CRP 05/67705</p>
        <p class="section_team_cards_employee_specialty">Gestalt - Terapia</p>
    </div>
        <div class="section_team_cards_employee">
        <h3 class="section_team_cards_employee_name">Lucia Sousa</h3>
        <p class="section_team_cards_employee_position">Psicóloga</p>
        <p class="section_team_cards_employee_crp">CRP 11/01201</p>
        <p class="section_team_cards_employee_specialty">Gestalt - Terapia</p>
    </div>
    <div class="section_team_cards_employee" id="modifyImage">

    </div>
    
</div>
<button  class="carousel-btn prev-btn"  >&laquo;</button>
<button  class="carousel-btn next-btn"  >&raquo;</button>
</div>
</div>`;


    const componentRoot = document.createElement("div");//Cria um nó
    componentRoot.setAttribute("class", "card");
    componentRoot.innerHTML = template;//insere um dado no nó
    return componentRoot // retorna o nó
  }
  connectedCallback() {
    this.totalItems = this.shadowRoot.querySelectorAll('.section_team_cards_employee').length;
  }


  styles() {
    const link = document.createElement("link");// cria uma tag link
    link.setAttribute("rel", "stylesheet");//define css
    link.setAttribute("href", "app/components/component1/estilos.css"); //especifica o caminho do css

    return link;
  }


  updateCarousel() {
    this.shadowRoot.querySelector('.carousel').style.transform = `translateX(${-this.currentIndex * 100}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
    this.updateCarousel();
  }

}


customElements.define("card-news", Cardnews);// Cria um componente com o nome card-news