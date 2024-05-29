import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { CentreComponent } from "./components/centre/centre.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, ProfileComponent, CentreComponent]
})
export class AppComponent {
  title = 'demo-Angular';
}
