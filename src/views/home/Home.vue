<template>

<!-- tu compra segura -->

<section class="hero">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image is-128x128">
          <img src="assets/img/yocomprobanner.png">
          </figure>
        </div>
        <div class="column">
          <h1 class="title has-text-danger">
            Compra desde casa!
          </h1>
          <h2 class="subtitle">
            Utilizando la tecnologia para fomentar trabajo.
          </h2>
          <button class="button is-danger is-outlined" @click="buyer = !buyer">Comprador</button>
          <button class="button is-danger is-outlined" @click="provider = !provider">Proveedor</button>
          <button class="button is-danger is-outlined" @click="dispatch = !dispatch">Despachador</button>
        </div>

      </div>


    </div>
  </div>
</section>

<!-- -->

<!-- fila 1-->
<section class="section animated fadeIn" v-if="buyer">
  <!-- actions -->
  <button class="button is-danger">
    <span class="icon is-small">
      <i class="fas fa-shopping-basket"></i>
    </span>
    <span>Ver canasta</span>
  </button>
    <!-- actions -->
    <br><br>
<div class="columns">
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Pollo</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Tomate</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Zanahoria</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Lechuga</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
</div>
<!-- fila 2 -->
<div class="columns">
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Pollo</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Tomate</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Zanahoria</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Lechuga</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
</div>
<!-- -->
<div class="columns">
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Pollo</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Tomate</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Zanahoria</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
  <div class="column">
    <!-- -->
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>
              <strong class="has-text-danger">Lechuga</strong> <br> <small>s/2.00 x kg</small>
            </p>
          </div>
            <div class="column">
                <button class="button is-danger is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-shopping-basket"></i>
                  </span>
                </button>
                <button class="button is-dark is-outlined level-ite">
                  <span class="icon is-medium">
                    <i class="fas fa-heart"></i>
                  </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  </article>
</div>
    <!-- -->
  </div>
</div>
<!-- -->
    </section>

    


<!-- Provider -->
<section class="section is-danger animated fadeIn">
  <div class="container">
    <h1 class="title has-text-danger">Registro de Proveedor</h1>
    <h2 class="subtitle">
      completa tus datos para que puedas, mover tus productos lo mas pronto posible.
    </h2>
    <section class="hero">
    <!-- steps-->
    <ul class="steps is-narrow is-medium is-centered has-content-centered">
      <li class="steps-segment is-active has-gaps">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-user"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Tus Datos</p>
          </div>
        </a>
      </li>
      <li class="steps-segment">
        <a href="#" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Tus Productos</p>
          </div>
        </a>
      </li>
      <li class="steps-segment">
        <span class="steps-marker">
          <span class="icon">
            <i class="fa fa-dollar-sign"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">METODO DE PAGO</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker is-hollow">
          <span class="icon">
            <i class="fa fa-check"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Confirmacion</p>
        </div>
      </li>
    </ul>
    <!-- end steps-->
  
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <!-- content-->
        <div class="section is-half" style="width: 600px;">
            <!-- form -->
          <div class="field is-horizontal">
    
              <div class="field-label is-normal">
                <label class="label">Nombre</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Tu nombre">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field has-addons">
                  <p class="control">
                    <input class="input" type="text" placeholder="tucorreo">
                  </p>
                  <p class="control">
                    <a class="button is-static">
                      @gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div class="field is-horizontal">
              <div class="field-label"></div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static">
                        +51
                      </a>
                    </p>
                    <p class="control is-expanded">
                      <input class="input" type="tel" placeholder="Tu Celular">
                    </p>
                  </div>
                  <p class="help">* Requisito principal para el registro.</p>
                </div>
              </div>
            </div>
            
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Distrito</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control has-icons-left">
                    <div class="select is-rounded">
                      <select>
                          <option>Seleccionar </option>
                          <option>Lince</option>
                          <option>Miraflores</option>
                          <option>San Borja</option>
                          <option>La Molina</option>
                      </select>
                    </div>
                    <div class="icon is-small is-left">
                      <i class="fas fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <div class="field is-horizontal">
              <div class="field-label">
                <!-- Left empty for spacing -->
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-success is-left">
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          <!-- -->
    
      </div>

      </div>
    </div>



  </section>




</section>



<!-- -->
<!-- -->
<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Envios</p>
      <p class="title has-text-danger">244</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Clientes</p>
      <p class="title has-text-danger">31</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Compradores</p>
      <p class="title has-text-danger">89</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Distritos</p>
      <p class="title has-text-danger">5</p>
    </div>
  </div>
</nav>


<footer class="footer has-text-weight-ligh">
  <div class="columns">
    <div class="column">
      <div class="content">
        <ul class="">
          <li><a href="">Noticias</a></li>
          <li><a href="">Nuestro Equipo</a></li>
          <li><a href="">Patrocinadores</a></li>
          <li><a href="">Colaboradores</a></li>
        </ul>
      </div>
    </div>
    <div class="column">
      <div class="content">
      <ul class="">
        <li><a href="">Soy Proveedor</a></li>
        <li><a href="">Trabaja con Nosotros</a></li>
      </ul>
      </div>
    </div>
    <div class="column">
      <div class="content social">
        <a href="#" class="social-icon">
          <span class="icon has-text-dark">
            <i class="fab fa-google-plus-g has-text-danger"></i>
          </span>
        </a>
        <a href="#" class="social-icon">
          <span class="icon has-text-dark">
            <i class="fab fa-facebook-f has-text-danger"></i>
          </span>
        </a>
        <a href="#" class="social-icon">
          <span class="icon has-text-dark">
            <i class="fab fa-instagram has-text-danger"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="column">
      <div class="content">
        <ul class="menu-list">
          <li><a href="">Apoyo al usuario</a></li>
          <li><a href="">Prensa</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="content has-text-centered">
    <br><br>
    <p class="has-text-weight-light">
      © Copyright 2020. All Rights Reserved to <img style="position:relative;top:8px;" src="assets/img/isologo.png" width="112" height="28">. | Developer <a href="#">josecrack</a>.
    </p>
  </div>
</footer>
</template>
~~~~