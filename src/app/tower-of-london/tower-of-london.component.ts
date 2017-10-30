import { Component, OnInit } from '@angular/core';
import { tol } from './tol/tol';

@Component({
  selector: 'app-tower-of-london',
  templateUrl: './tower-of-london.component.html',
  styleUrls: ['./tower-of-london.component.css']
})
export class TowerOfLondonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const gameSettings = {
      TestName: 'TestName',
      Instructions: 'Instructions',
      InstructionsFinish: 'InstructionsFinish',
      TxtButton: 'TxtButton',
      Feedback: 'Feedback',
      CountDownFrom: 5,
      TextOverMoves: 'TextOverMoves',
      TextOverTime: 'TextOverTime',
      DisplayResults: 'DisplayResults',
      TxtToSpeech: 'TxtToSpeech',
      PrctRounds: 0,
      TestRounds: 4,
      CalcResFrom: 'CalcResFrom',
      TimeOut: 30,
      MaxMoves: 'MaxMoves',
      ShowFeedback: 'ShowFeedback',
      WorkTag: 'WorkTag',
      GoalTag: 'GoalTag',
      CountDownText: 'CountDownText',
      Language: 'Language'
    };

    tol.initGame(gameSettings);
  }
}
