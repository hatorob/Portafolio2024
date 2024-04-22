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
        "Desarrollo de nuevas funcionalidades",
        "Actualizar funcionalidades existentes",
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
        "Capatiaciones a ingenieros de soporte nivel 1",
        "Mantener el correcto funcionamiento del monitoreo",
        "Desarrollo de nuevas funcionalidades",
        "Manipulación de base de datos por terminal",
      ],
      skills: [
        "BASH",
        "SERVIDORES LINUX",
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
        "Escalamiento de fallas por energía",
        "Registro de nuevos equipos semaforicos",
        "Manipulación base de datos MYSQL"
      ],
      skills: [
        "SNMP",
        "ICMP",
        "REDES",
        "BASH",
        "SERVIDORES LINUX",
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
        "Antenas y líneas de transmisión",
        "REDES",
        "GNSS",
        "Geolocalizaión",
      ]
    },
  ]

}
