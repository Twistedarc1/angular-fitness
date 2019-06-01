import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Exercise } from "../exercise.model";
import { ExerciseService } from "../exercise.service";
import { Subscription } from "rxjs";
import { UiService } from "src/app/shared/ui.service";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.css"]
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  private exerciseSubscription: Subscription;
  private loadingSubscription: Subscription;
  isLoading = true;

  constructor(
    private exerciseService: ExerciseService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
      isLoading => {
        this.isLoading = isLoading;
      }
    );
    this.exerciseSubscription = this.exerciseService.exercisesChanged.subscribe(
      exercises => {
        this.exercises = exercises;
      }
    );
    this.fetchExercises();
  }

  ngOnDestroy() {
    {
      this.exerciseSubscription && this.exerciseSubscription.unsubscribe();
    }
    {
      this.loadingSubscription && this.loadingSubscription.unsubscribe();
    }
  }

  onStartTraining(form: NgForm) {
    this.exerciseService.startExercise(form.value.exercise);
  }

  fetchExercises() {
    this.exerciseService.fetchAvailableExercises();
  }
}
