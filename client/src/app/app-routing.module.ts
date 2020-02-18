import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'algorithm',
    loadChildren: './modules/algo-runner/algo-runner.module#AlgoRunnerModule'
  },
  {
    path: '',
    loadChildren: './modules/dashboard-v2/dashboard-v2.module#DashboardModule'
  },
  {
    path: 'batchmates/:name',
    loadChildren: './modules/dashboard-v2-copy/dashboard-v2.module#DashboardModule#MainComponent'
  },
  {
    path: 'batchmates',
    loadChildren: './modules/dashboard-v2-copy/dashboard-v2.module#DashboardModule#MainComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
