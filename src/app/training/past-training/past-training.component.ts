import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { Exercise } from "../exercise.model";
import { ExerciseService } from "../exercise.service";

@Component({
  selector: "app-past-training",
  templateUrl: "./past-training.component.html",
  styleUrls: ["./past-training.component.css"]
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayColumns: string[] = ["date", "name", "duration", "calories", "state"];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.dataSource.data = this.exerciseService.getCompletedOrCancelledExercises();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
