import { Component, OnInit } from '@angular/core';
import Assignment from 'src/app/model/Assignment';
import GameRepository from 'src/app/services/GameRepository';
import { PubsubService, PubsubSubscription } from '@fsms/angular-pubsub';
import { NextTurnMessage } from 'src/app/services/NextTurnMessage';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] | undefined;
  subscriptions: PubsubSubscription[] = [];

  constructor(private gameRepository: GameRepository, private pubsubService: PubsubService) { 
  }

  ReloadAssignments(){
    this.assignments = this.gameRepository.GetGame()?.Assignments;
  }

  ngOnInit(): void {
    this.ReloadAssignments();
    this.subscriptions.push(
      this.pubsubService.subscribe({ 
        messageType: NextTurnMessage.messageType,
        callback: (msg) => this.ReloadAssignments(),
      })
    );
  }



}
