import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
        children: [
            {
                path: 'contact-person',
                component: ContactPersonComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
