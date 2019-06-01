import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Exercise } from "../exercise.model";
import { ExerciseService } from "../exercise.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-past-training",
  templateUrl: "./past-training.component.html",
  styleUrls: ["./past-training.component.css"]
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {
  displayColumns: string[] = ["date", "name", "duration", "calories", "state"];
  dataSource = new MatTableDataSource<Exercise>();
  private exChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exChangedSubscription = this.exerciseService.finishedExercisesChanged.subscribe(
      (exercises: Exercise[]) => {
        this.dataSource.data = exercises;
        console.log(exercises);
      }
    );
    this.exerciseService.fetchCompletedOrCancelledExercises();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    {
      this.exChangedSubscription && this.exChangedSubscription.unsubscribe();
    }
  }
}
