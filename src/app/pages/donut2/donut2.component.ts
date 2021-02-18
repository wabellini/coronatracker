import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut2',
  templateUrl: './donut2.component.html',
  styleUrls: ['./donut2.component.css']
})
export class Donut2Component implements OnInit {

  @Input() datosGrafico2: string;

  chart = [];

  constructor() { }

  ngOnInit() {
    this.dona();
  }

  private dona() {

    console.log('numeros');
    console.log(this.datosGrafico2);
    console.log((100 - parseFloat(this.datosGrafico2)));

    this.chart = new Chart('tasaRecuperacion', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [ parseFloat(this.datosGrafico2).toFixed(2), (100 - parseFloat(this.datosGrafico2)).toFixed(2)],
            // borderColor: '#3cba9f',
            backgroundColor: [
              'green',
              '#f0f0f0'
            ],
            label: 'Dataset 1',
            fill: true
          }/* ,
        {
          data: [50, 50],
          borderColor: '#3cba9f',
          backgroundColor: [
            'red',
            'blue'
          ],
          label: 'Dataset 2',
          fill: true
        } */
        ],
        labels: [
          'Green',
          'Gris',
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        /*       title: {
                  display: true,
                  text: 'Chart.js Doughnut Chart'
                }, */
        /*       animation: {
                  animateScale: true,
                  animateRotate: true
                }, */
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });

    Chart.pluginService.register({
      beforeDraw: function (chart) {
        const width = chart.chart.width;
        const height = chart.chart.height;
        const ctx = chart.chart.ctx;

        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';

        const text = chart.data.datasets[0].data[0] + '%';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;



        this.textNumero = chart.data.datasets[0].data[0] + '%';

        console.log('datos');
        console.log(chart.data.datasets[0].data[0] + '%');
        console.log(this.textNumero);

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });

  }


}
