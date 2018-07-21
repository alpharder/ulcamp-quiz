import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {QuestionInfluenceType, QuizResultImmutable} from '../../models/question';
import {AmChart, AmChartsService} from '@amcharts/amcharts3-angular';
import {ChartBullet, Quadrant, QuadrantFields, SubQuadrantDefinition} from '../../models/result-graph';
import {QUADRANT_LIST, SUBQUADRANT_LIST} from '../../data';

@Component({
  selector: 'app-quiz-result-chart',
  templateUrl: './quiz-result-chart.component.html',
  styleUrls: ['./quiz-result-chart.component.css'],
})
export class QuizResultChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() quiz_result: QuizResultImmutable;
  private chart: AmChart;
  private readonly chart_quadrants: Quadrant[];
  private chart_bullets: ChartBullet[];

  constructor(private AmCharts: AmChartsService) {
    this.chart_quadrants = this.generateChartQuadrants();

    this.AmCharts.addInitHandler((chart) => {
      if (typeof chart.quadrants === 'undefined') {
        return;
      }

      for (let i = 0; i < chart.quadrants.length; i++) {
        const quadrant: Quadrant = chart.quadrants[i];
        const qid = 'q' + i;

        let dp = {};
        dp[qid + 'x'] = quadrant.coords.x1;
        dp[qid + 'y'] = quadrant.coords.y1;
        chart.dataProvider.push(dp);

        dp = {};
        dp[qid + 'x'] = quadrant.coords.x1;
        dp[qid + 'y'] = quadrant.coords.y2;
        chart.dataProvider.push(dp);

        dp = {};
        dp[qid + 'x'] = quadrant.coords.x2;
        dp[qid + 'y'] = quadrant.coords.y2;
        chart.dataProvider.push(dp);

        dp = {};
        dp[qid + 'x'] = quadrant.coords.x2;
        dp[qid + 'y'] = quadrant.coords.y1;
        chart.dataProvider.push(dp);

        // create a graph
        chart.graphs.push({
          xField: qid + 'x',
          yField: qid + 'y',
          fillColors: quadrant.color,
          fillAlphas: 1,
          lineColor: '#000',
          includeInMinMax: false,
          showInLegend: false
        });

        // create data point for label
        if (quadrant.labelText) {
          chart.dataProvider.push({
            label: quadrant.labelText,
            labelColor: quadrant.labelColor,
            labelx: quadrant.coords.x1 + (quadrant.coords.x2 - quadrant.coords.x1) / 2,
            labely: quadrant.coords.y1 + (quadrant.coords.y2 - quadrant.coords.y1) / 2
          });
        }

        // create graph for all label
        chart.graphs.push({
          xField: 'labelx',
          yField: 'labely',
          labelColorField: 'labelColor',
          labelText: '[[label]]',
          labelPosition: 'middle',
          fontSize: 20,
          fillAlphas: 0,
          lineAlpha: 0,
          includeInMinMax: false,
          showInLegend: false
        });
      }
    });
  }

  ngOnInit(): void {
    this.chart_bullets = this.generateChartBullets();
  }

  ngAfterViewInit(): void {
    this.chart = this.AmCharts.makeChart('quiz-result-chart', {
      type: 'xy',
      dataProvider: this.chart_bullets,
      quadrants: this.chart_quadrants,
      valueAxes: [
        {
          position: 'bottom',
          integersOnly: true,
          strictMinMax: true,
          autoGridCount: false,
          gridCount: 20, minimum: -10, maximum: 10,
          labelsEnabled: false,
        },
        {
          position: 'left',
          integersOnly: true,
          strictMinMax: true,
          autoGridCount: false,
          gridCount: 20, minimum: -10, maximum: 10,
          labelsEnabled: false,
        }
      ],
      graphs: [{
        bullet: 'round',
        bulletBorderAlpha: 1,
        bulletBorderThickness: 2,
        bulletBorderColor: '#000',
        bulletColor: '#fff',
        bulletAlpha: 1,
        bulletSize: 20,
        lineAlpha: 0,
        xField: 'x',
        yField: 'y'
      }],
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

  private generateChartQuadrants(): Quadrant[] {
    const quadrantFieldsList: QuadrantFields[] = QUADRANT_LIST;
    const subQuadrantDefinitions: SubQuadrantDefinition[] = SUBQUADRANT_LIST;

    const quadrantList: Quadrant[] = [];
    const subQuadrantList: Quadrant[] = [];

    quadrantFieldsList.forEach((quadrantFields: QuadrantFields) => {
      const quadrant = new Quadrant(quadrantFields);
      quadrantList.push(quadrant);

      subQuadrantDefinitions.forEach((subQuadrantDefinition: SubQuadrantDefinition) => {
        subQuadrantList.push(quadrant.createSubQuadrant(subQuadrantDefinition));
      });
    });

    return [...quadrantList, ...subQuadrantList];
  }

  private generateChartBullets(): ChartBullet[] {
    return [{
      x: this.quiz_result[QuestionInfluenceType.R] - this.quiz_result[QuestionInfluenceType.L],
      y: this.quiz_result[QuestionInfluenceType.A] - this.quiz_result[QuestionInfluenceType.B],
    }];
  }
}
