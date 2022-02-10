<template>
<section class="hero is-danger">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
            Perfil
        </h1>
        <h2 class="subtitle">
          Configura tus datos
        </h2>
      </div>
    </div>
  </section>
<!--  -->
<section class="section">

<div class="columns">
<div class="column is-one-fifth">
        <!-- options -->
        <button id="option-profile" class="button is-dark is-outlined">
            <span>
                <i class="fas fa-cog"></i>
            </span>
        </button>
        <!-- options -->
    <div id="profile" class="box">
        <figure class="image is-square avatar-img">
            <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        <br>

        <div class="content is-small">
            <!-- -->
            <aside class="menu">
                <p class="menu-label">
                General
                </p>
                <ul class="menu-list">
                <li><a>Pedidos</a></li>
                <li><a>Cupones</a></li>
                </ul>
                <p class="menu-label">
                Transactions
                </p>
                <ul class="menu-list">
                <li><a>Pagos</a></li>
                <li><a>Transacciones</a></li>
                <li><a>Balance</a></li>
                </ul>
            </aside>
            <!-- -->
            <br>
        </div>
    </div>
</div>
<div class="column is-half">
        <div class="section">
        <!-- -->
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
                <p class="help">Debemos validar tu numero ingresado</p>
              </div>
            </div>
          </div>
          
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Distrito</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
                        <option>Seleccionar </option>
                        <option>Lince</option>
                        <option>Miraflores</option>
                        <option>San Borja</option>
                        <option>La Molina</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Metodo de pago ?</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="member">
                    Efectivo
                  </label>
                  <label class="radio">
                    <input type="radio" name="member">
                    Tarjeta
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Token</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-light" type="text" placeholder="f43f4kok43g3t4234d3443go4t" disabled>
                </div>
              </div>
            </div>
          </div>
          
          
          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-danger">
                    Guardar
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

</template>

<!-- tu compra segura  -->
/*   <script src="assets/js/bootstrap.js"></script>
  <script src="assets/js/modals.js"></script>
  <script src="assets/js/main.js"></script> */

