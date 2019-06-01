import { NgModule } from "@angular/core";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { TrainingComponent } from "./training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { AngularFirestoreModule } from "angularfire2/firestore";

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports: [CommonModule, FormsModule, MaterialModule, AngularFirestoreModule],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class ExerciseModule {}
