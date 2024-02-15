import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export function adminGuard(redirectRoute: string): CanActivateFn {
  return () => {

    const auth: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const isFlagEnabled = auth.isAdminEnabled();

    return isFlagEnabled || router.createUrlTree(['/', redirectRoute]);
  }
};
