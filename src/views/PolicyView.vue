<template>
  <h1 class="pl-4 lg:pl-[2rem]">Política de privacidad y cookies</h1>
  <br />
  <aside class="aside-nav flex flex-col">
    <label for="sectionSelect">Ir a sección:</label>

    <select id="sectionSelect" v-model="selectedSection" @change="scrollToSection">
      <option value="">— Seleccione una sección —</option>

      <option v-for="section in sections" :key="section.id" :value="section.id">
        {{ section.title }}
      </option>
    </select>
  </aside>
  <main class="flex flex-col gap-4 p-4 lg:p-8">
    <br />
    <h2>1. Identidad del Responsable del Tratamiento</h2>
    <p>
      De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se
      informa a los usuarios de que:
    </p>
    <ul>
      <li>Responsable: Animales Inanimados</li>
      <li>Sitio web: www.animales-inanimados.onrender.com</li>
      <li>
        Contacto:
        <a href="https://www.linkedin.com/in/katerina-gorbacheva-93717324a/"
          >LinkedIn Ekaterina Gorbacheva</a
        >
      </li>
    </ul>
    <br />
    <h2>2. Ámbito de aplicación</h2>
    <p>
      La presente Política de Privacidad es aplicable a los usuarios que acceden y utilizan el sitio
      web Animales Inanimados, destinado principalmente a personas que residen o visitan España.
    </p>
    <br />
    <h2>3. Datos personales que se recogen</h2>
    <p>Actualmente, Animales Inanimados recoge únicamente los siguientes tipos de datos:</p>
    <h3>3.1. Datos facilitados directamente por el usuario</h3>
    <ul>
      <li>Nombre (si se facilita)</li>
      <li>Dirección de correo electrónico (si se facilita)</li>
      <li>Datos introducidos en formularios de contacto o registro</li>
      <li>Credenciales de acceso (usuario y contraseña, en su caso)</li>
    </ul>
    <h3>3.2. Datos tratados de forma técnica</h3>
    <ul>
      <li>Preferencias del usuario almacenadas en localStorage o cookies técnicas</li>
      <li>Información necesaria para la gestión de sesiones</li>
      <li>
        Datos técnicos mínimos (dirección IP, tipo de navegador, registros de error), tratados
        exclusivamente con fines de seguridad y funcionamiento del sitio
      </li>
    </ul>
    <span
      ><strong
        >No se tratan datos especialmente protegidos (salud, ideología, religión, etc.).</strong
      ></span
    >
    <br />
    <h2>4. Uso de geolocalización (funcionalidad futura)</h2>
    <p>
      En caso de que en el futuro se implemente la funcionalidad de geolocalización, se aplicarán
      estrictamente las siguientes condiciones:
    </p>
    <ul>
      <li>La geolocalización será opcional y desactivada por defecto</li>
      <li>Solo se activará mediante el consentimiento expreso del usuario</li>
      <li>El navegador solicitará autorización específica en cada dispositivo</li>
      <li>
        La ubicación se utilizará exclusivamente para mostrar la posición del usuario en el mapa
      </li>
      <li>No se almacenarán historiales de ubicación ni se realizará seguimiento continuo</li>
      <li>
        El usuario podrá retirar el consentimiento en cualquier momento desde la configuración de su
        navegador
      </li>
    </ul>
    <p><strong>Base legal: </strong>consentimiento explícito (art. 6.1.a RGPD)</p>
    <br />
    <h2>5. Finalidades del tratamiento</h2>
    <p>Los datos personales se utilizan para:</p>
    <ul>
      <li>
        Proporcionar el servicio principal del sitio web (mapa interactivo y rutas turisticas)
      </li>
      <li>Gestionar registros de usuarios, si existieran</li>
      <li>Responder a consultas o solicitudes</li>
      <li>Mejorar la experiencia de navegación y la funcionalidad del sitio</li>
      <li>Garantizar la seguridad del sitio web</li>
      <li>Cumplir obligaciones legales</li>
    </ul>
    <br />
    <h2>6. Base jurídica del tratamiento</h2>
    <p>El tratamiento de los datos se fundamenta en:</p>
    <ul>
      <li>Ejecución de un contrato (art. 6.1.b RGPD): uso del sitio web</li>
      <li>Consentimiento del usuario (art. 6.1.a RGPD), cuando sea requerido</li>
      <li>Interés legítimo (art. 6.1.f RGPD) para mejoras técnicas y seguridad</li>
      <li>Cumplimiento de obligaciones legales (art. 6.1.c RGPD)</li>
    </ul>
    <br />
    <h2>7. Conservación de los datos</h2>
    <p>Los datos personales se conservarán:</p>
    <ul>
      <li>Mientras exista una relación activa con el usuario (sessión)</li>
      <li>Mientras sean necesarios para la finalidad para la que fueron recabados</li>
      <li>Durante los plazos exigidos por la normativa aplicable</li>
    </ul>
    <p>Posteriormente, serán eliminados de forma segura.</p>
    <br />
    <h2>8. Destinatarios y cesión de datos</h2>
    <p>No se cederán datos personales a terceros salvo:</p>
    <ul>
      <li>Obligación legal</li>
      <li>Requerimiento judicial o administrativo</li>
      <li>
        Proveedores tecnológicos estrictamente necesarios (hosting), bajo contratos de encargo de
        tratamiento. El sitio web está alojado en Render, que puede tratar datos técnicos con fines
        de seguridad y mantenimiento, sin acceder al contenido funcional del usuario.
      </li>
    </ul>
    <br />
    <h2>9. Menores de edad</h2>
    <p>Este sitio web no está destinado exclusivamente a menores.</p>
    <ul>
      <li>
        El uso por menores de 14 años debe realizarse bajo la supervisión y consentimiento de padres
        o tutores legales. Cumplimiento del artículo 7 LOPDGDD(Ley Orgánica de Protección de Datos y
        Garantía de los Derechos Digitales).
      </li>
      <li>No se recaban conscientemente datos personales de menores sin dicho consentimiento</li>
      <li>
        Si se detecta la recogida accidental de datos de menores, estos serán eliminados
        inmediatamente
      </li>
    </ul>
    <br />
    <h2>10. Derechos de los usuarios</h2>
    <p>El usuario puede ejercer los siguientes derechos:</p>
    <ul>
      <li>Acceso</li>
      <li>Rectificación</li>
      <li>Supresión (derecho al olvido)</li>
      <li>Oposición</li>
      <li>Limitación del tratamiento</li>
      <li>Portabilidad</li>
      <li>No ser objeto de decisiones automatizadas</li>
    </ul>
    <p>
      Para ejercerlos, deberá enviar una solicitud a través del contacto, indicando el derecho que
      desea ejercer y acreditando su identidad.
    </p>
    <br />
    <h2>11. Cambios en la política de privacidad</h2>
    <p>
      El Responsable se reserva el derecho a modificar la presente Política para adaptarla a cambios
      normativos o técnicos. Las modificaciones se publicarán en el sitio web y serán efectivas
      desde su publicación.
    </p>
    <br />
    <h2>POLÍTICA DE COOKIES</h2>
    <h2>12. Uso de cookies y tecnologías similares</h2>
    <p>
      Este sitio web utiliza cookies técnicas y de funcionamiento, necesarias para su correcto uso.
    </p>
    <h3>Tipos de cookies utilizadas:</h3>
    <ul>
      <li>Cookies de sesión</li>
      <li>Almacenamiento local del navegador</li>
      <li>Cookies de preferencias de idioma y visualización</li>
    </ul>
    <h3>Duración:</h3>
    <ul>
      <li>Cookies de sesión: se eliminan al cerrar el navegador</li>
      <li>Cookies técnicas: hasta 13 meses</li>
      <li>LocalStorage: hasta que el usuario las elimine manualmente</li>
    </ul>
    <br />
    <h2>13. Gestión de cookies</h2>
    <p>El usuario puede configurar su navegador para:</p>
    <ul>
      <li>Bloquear o eliminar cookies</li>
      <li>Recibir avisos antes de su instalación</li>
    </ul>
    <p>La desactivación de cookies técnicas puede afectar al funcionamiento del sitio.</p>
    <br />
    <h2>14. Contacto</h2>
    <p>
      Para cualquier consulta relacionada con esta Política de Privacidad y Cookies, el usuario
      puede contactar a través de los contactos indicados.
    </p>
    <br />
    <span><strong>Ultima versión del documento:</strong> 22/12/2025</span>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const sections = ref([])
const selectedSection = ref('')

function scrollToSection() {
  if (!selectedSection.value) return

  const target = document.getElementById(selectedSection.value)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

onMounted(async () => {
  // Wait until DOM is fully rendered (important for SSR & dynamic content)
  await nextTick()

  const headings = document.querySelectorAll('h2')

  sections.value = Array.from(headings).map((h2, index) => {
    if (!h2.id) {
      h2.id = `section-${index + 1}`
    }

    return {
      id: h2.id,
      title: h2.textContent.trim(),
    }
  })
})
</script>

<style lang="sass" scoped>



.aside-nav
  position: sticky
  top: 10vh
  padding: 1rem
  border: 2.5px solid #000
  background: #fff
  width: 100%

  @media only screen and (min-width: 800px)
      width: 30%
      left: 2rem


  select
    width: 80%
    margin-top: 0.5rem
    cursor: pointer



h2, p
  font-family: "Space Mono", monospace

h2
  font-size: 1.75rem
  scroll-margin: 20vh

a
  font-size: 0.85rem
  color: #5C0880
  text-decoration: underline
  cursor: pointer
  transition: background 0.2s ease, color 0.2s ease

  &:hover
    color: #A32100

ul
  list-style-type: disc
  padding-left: 1rem
  li
    font-family: 'Space Mono'
    font-size: 0.85rem
</style>
