
// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('4JH5qqVftGiW32fG15InBagfbY4ttwSV', 'offworld.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}





// import { Injectable } from '@angular/core';
// import { tokenNotExpired } from 'angular2-jwt';
// import { Router } from '@angular/router';

// declare var Auth0Lock: any;

// @Injectable()
// export class AuthService {
//   // Set our Auth0 credentials
//   lock = new Auth0Lock('4JH5qqVftGiW32fG15InBagfbY4ttwSV', 'offworld.eu.auth0.com');

//   constructor(private router: Router) {
//     // Capture the user credentials when the user has succesfully logged in
//     this.lock.on('authenticated', (authResult: any) => {
//       localStorage.setItem('id_token', authResult.idToken);

//       this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
//         if (error) {
//           console.log(error);
//         }

//         localStorage.setItem('profile', JSON.stringify(profile));
//         this.router.navigateByUrl('/dataentry');
//       });

//       this.lock.hide();
//     });
//   }

//   // Display the lock login box
//   public login() {
//     this.lock.show();
//   }

//   // Logout the user
//   public logout() {
//     // To log out, just remove the token and profile
//     // from local storage
//     localStorage.removeItem('profile');
//     localStorage.removeItem('id_token');

//     // Send the user back to the dashboard after logout
//     this.router.navigateByUrl('/login');
//   }

//   // Check whether the user is logged in or not
//   public loggedIn() {
//     return tokenNotExpired();
//  }
//}