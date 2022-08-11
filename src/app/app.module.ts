import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { HeaderComponent } from './my-container/header/header.component';
import { LeftTextComponent } from './my-container/left-text/left-text.component';
import { RightTextComponent } from './my-container/right-text/right-text.component';
// import { DatabindComponent } from './databind/databind.component';
// import { EventbindComponent } from './databind/eventbind/eventbind.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ParentComponent } from './databind/parent/parent.component';
// import { ChildComponent } from './databind/child/child.component';
// import { CardComponent } from './app-shared-module/card/card/card.component';
// import { Card1Component } from './card1/card1.component';
// import { Card2Component } from './card2/card2.component';
import { DesignUtilityService } from './appServices/design-utility.service';
// import { SubjectComponent } from './databind/subject/subject.component';
// import { Comp1Component } from './comp1/comp1.component';
// import { Comp2Component } from './comp2/comp2.component';
// import { Comp3Component } from './comp3/comp3.component';
// import { Comp4Component } from './comp4/comp4.component';
// import { Comp5Component } from './comp5/comp5.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
// import { ViewchildComponent } from './databind/viewchild/viewchild.component';
// import { Comp6Component } from './comp6/comp6.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomDirDirective } from './app-directives/custom-dir.directive';
import { UxPipePipe } from './app-Pipes/ux-pipe.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';

import { FilterPipePipe } from './app-Pipes/filter-pipe.pipe';
// import { ProductsModule } from './products/products.module';
import { ServiceModule } from './services/service.module';
import { CardModule } from './app-shared-module/card/card.module';
// import { MyFormsModule } from './forms/my-forms.module';
import { CompModule } from './app-shared-module/comp/comp.module';
import { DatabindModule } from './databind/databind.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    HeaderComponent,
    LeftTextComponent,
    RightTextComponent,
    // DatabindComponent,
    // EventbindComponent,
    // NgifComponent,
    NgforComponent,
    HomeComponent,
    TopnavComponent,
    AboutUsComponent,
    LoginComponent,
    // PageNotFoundComponent,
    // ParentComponent,
    // ChildComponent,
    // CardComponent,
    // Card1Component,
    // Card2Component,
    // SubjectComponent,
    // Comp1Component,
    // Comp2Component,
    // Comp3Component,
    // Comp4Component,
    // Comp5Component,
    LifecycleComponent,
    // ViewchildComponent,
    // Comp6Component,
    CustomPipeComponent,
    CustomDirDirective,
    UxPipePipe,
    FilterPipeComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ProductsModule,
    ServiceModule,
    CardModule,
    CompModule,
    DatabindModule,
    // NgxSkeletonLoaderModule
    // MyFormsModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App module loaded');
    
  }
 }
