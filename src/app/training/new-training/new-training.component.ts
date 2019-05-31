import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Exercise } from "../exercise.model";
import { ExerciseService } from "../exercise.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.css"]
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseSubscription = this.exerciseService.exercisesChanged.subscribe(
      exercises => (this.exercises = exercises)
    );
    this.exerciseService.fetchAvailableExercises();
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }

  onStartTraining(form: NgForm) {
    this.exerciseService.startExercise(form.value.exercise);
  }
}
