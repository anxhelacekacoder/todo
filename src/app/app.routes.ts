import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TitleComponent } from './title/title.component';
import { PricesComponent } from './prices/prices.component';
import { DetailsComponent } from './details/details.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { TodoComponent } from './todo/todo.component';
import { AnxhiComponent } from './anxhi/anxhi.component';
import { BcardComponent } from './bcard/bcard.component';



export const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        component: ContactComponent,
        path: 'contact'
    },
    {
        component: TitleComponent,
        path: 'title'
    },
    {
        component: PricesComponent,
        path: 'prices'
    },
    {
        component: DetailsComponent,
        path: 'details'
    },
    {
        component: YoutubeComponent,
        path: 'youtube'
    },
    {
        component: ExperimentComponent,
        path: 'experiment'
    },
    {
        component: TodoComponent,
        path: 'todo'
    },
    {
        component: AnxhiComponent,
        path: 'anxhi'
    },
    {
        component: BcardComponent,
        path: 'bcard'
    },

];
