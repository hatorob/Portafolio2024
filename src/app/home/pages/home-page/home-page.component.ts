import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public workExperienceDevelop = [
    {
      company: "E-SOLUTIONS",
      description: "Empresa de desarrollo de software para telecomunicaciones",
      area: "Desarrollo",
      workDate: {
        start: "Agos 2023",
        end: "Feb 2024"
      },
      position: "Ingeniero de desarrollo",
      responsabilities: [
        "Correción de bugs",
        "Desarrollar funcionalidades",
        "Actualizar funcionalidades",
        "Unificación de código"
      ],
      skills: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "JQUERY",
        "AJAX",
        "PHP",
        "MYSQL"
      ]
    },
    {
      company: "E-SOLUTIONS",
      description: "Empresa de desarrollo de software para telecomunicaciones",
      area: "Redes - Desarrollo",
      workDate: {
        start: "Sept 2022",
        end: "Mar 2023"
      },
      position: "Ingeniero de redes",
      responsabilities: [
        "Capacitaciones a ingenieros de soporte",
        "Garantizar el monitoreo de los equipos",
        "Desarrollar funcionalidades",
        "Manipulación base de datos",
      ],
      skills: [
        "BASH",
        "LINUX",
        "SNMP",
        "ICMP",
        "REDES",
        "MYSQL",
        "PHP",
        "POWERSHELL"
      ]
    },
    {
      company: "E-SOLUTIONS",
      description: "Empresa de desarrollo de software para telecomunicaciones",
      area: "Redes",
      workDate: {
        start: "Nov 2020",
        end: "Sept 2022"
      },
      position: "Ingeniero de soporte nivel 1 - Proyecto SDM (Secretaria Distrital de Movilidad - Bogotá)",
      responsabilities: [
        "Monitoreo semafórico SDM",
        "Escalamiento de fallas",
        "Registro de nuevos equipos semaforicos",
        "Manipulación base de datos"
      ],
      skills: [
        "SNMP",
        "ICMP",
        "REDES",
        "BASH",
        "LINUX",
        "MYSQL"
      ]
    },
    {
      company: "Acueducto y Alcantarillado de Bogotá",
      description: "Empresa pública que administra y regula el agua potable de la ciudad de Bogotá.",
      area: "DITG-EAAB",
      workDate: {
        start: "Sept 2019",
        end: "Mar 2020"
      },
      position: "Pasante Ingeniería de Telecomunicaciones",
      responsabilities: [
        "Diagnotisco de fallas",
        "Antenas y lineas de transmisión",
        "Arreglo antenas GNSS",
      ],
      skills: [
        "REDES",
        "GNSS",
        "Geolocalizaión",
      ]
    },
  ]

  public projects = [
    {
      image: "../../../../assets/projects/no-image.jpg",
      url: "",
      company: "E-SOLUTIONS",
      title: "E-FAULTS",
      description: ` Este módulo consiste en el monitoreo de fallas de equipos e interfaces de E-SOLUTIONS.
        Mi rol consistió en cambiar el filtrado para incluir todo un arbol de equipos e interfaces a diferentes niveles del árbol jerárquico, anteriomente solo tenía grupos y subgrupos.
        Esta tarea desafiante implicó modificar gran parte de las funcionalidades existentes, representando un importante avance para el sistema.`,
      skills: [
        {
          title: "JAVASCRIPT",
          icon: "fa-brands fa-js fa-beat"
        },
        {
          title: "PHP",
          icon: "fa-brands fa-php fa-beat"
        },
        {
          title: "MYSQL",
          icon: "fa-solid fa-database fa-beat"
        },
      ]
    },
    {
      image: "../../../../assets/projects/no-image.jpg",
      url: "",
      company: "E-SOLUTIONS",
      title: "E-MAP",
      description: `Este proyecto de E-SOLUTIONS se centra en visualizar las fallas de conexión de los equipos del cliente en un mapa interactivo de Colombia.
        Mi labor fue integrar el filtrado jerárquico del módulo E-FAULTS, permitiendo filtrar por grupos de equipos, subgrupos, hijos y nietos.
        Esta mejora supuso un desafío adicional al modificar el comportamiento previo del módulo, que mostraba todas las fallas de manera general.
        Ahora, con el filtrado por diferentes niveles, el sistema proporciona una visión detallada y jerárquica de las fallas.`,
      skills: [
        {
          title: "JAVASCRIPT",
          icon: "fa-brands fa-js fa-beat"
        },
        {
          title: "PHP",
          icon: "fa-brands fa-php fa-beat"
        },
        {
          title: "MYSQL",
          icon: "fa-solid fa-database fa-beat"
        },
      ]
    },
    {
      image: "../../../../assets/projects/ChillingTime.png",
      url: "https://chillingtime.co/",
      company: "Proyecto real y academico para una stand up",
      title: "Chilling Time",
      description: `Esta página web es un proyecto final de grado que se realizo en conjunto con 6 estudiantes más del bootcamp de desarrollo web en Henry.
        es una página web que permite el alquiler de salas vip en aeroupuertos, cuenta con su propia pagina administradora, e-commerce para el alquiler de las salas,
        registro e inicio de sección para usuarios.`,
      skills: [
        {
          title: "REACT",
          icon: "fa-brands fa-react fa-beat"
        },
        {
          title: "NODE.JS",
          icon: "fa-brands fa-node fa-beat"
        },
        {
          title: "POSTGRESQL",
          icon: "fa-solid fa-database fa-beat"
        },
      ]
    },
    {
      image: "../../../../assets/projects/countryApp.png",
      url: "https://hatorob.github.io/countryApp",
      company: "Proyecto Academico",
      title: "Países App",
      description: `Esta aplicación fue desarrollada como parte de un curso de Angular.
        Su principal funcionalidad consiste en consumir la API de REST Countries.
        La aplicación ofrece diversas opciones de búsqueda, incluyendo por capital, país y región.
        Además, permite acceder a detalles específicos de cada país y permanencia de datos con localStorage.`,
      skills: [
        {
          title: "ANGULAR",
          icon: "fa-brands fa-angular fa-beat"
        },
        {
          title: "BOOTSTRAP",
          icon: "fa-brands fa-bootstrap fa-beat"
        },
        {
          title: "JAVASCRIPT",
          icon: "fa-brands fa-js fa-beat"
        },
      ]
    },
  ]

}
