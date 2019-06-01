import { NgModule } from "@angular/core";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { TrainingComponent } from "./training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports: [AngularFirestoreModule, SharedModule],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class ExerciseModule {}
