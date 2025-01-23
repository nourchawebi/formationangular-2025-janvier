import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Get the token from localStorage or wherever you store it
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['login']);
    return false;
  }

  const user = authService.getLogedUser()
  var loggedUser= 'USER'
  // Decode the token to get the user role

  // Check if the user role is "USER"
  if (loggedUser === 'USER') {
    return true;
  } else {
    // Redirect to unauthorized page or do something else
    router.navigate(['unauthorized']);
    return false;
  }
};


export const authGuardadmin: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Get the token from localStorage or wherever you store it
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['login']);
    return false;
  }

  const user = authService.getLogedUser()
  var loggedUser= 'USER'
  // Decode the token to get the user role

  // Check if the user role is "USER"
  if (loggedUser === 'ADMIN') {
    return true;
  } else {
    // Redirect to unauthorized page or do something else
    router.navigate(['unauthorized']);
    return false;
  }
};
