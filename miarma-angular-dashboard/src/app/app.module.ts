import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { PostTableComponent } from './pages/post-table/post-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DialogGiveAdminComponent } from './dialogs/dialog-give-admin/dialog-give-admin.component';
import { DialogDeletePostComponent } from './dialog-delete-post/dialog-delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    RegisterComponent,
    PostListComponent,
    PostItemComponent,
    TablasComponent,
    PostTableComponent,
    UserTableComponent,
    DialogGiveAdminComponent,
    DialogDeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
