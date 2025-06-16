import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ bắt buộc

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ví dụ nếu bạn tách routes ra riêng

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations() // ✅ Đây là cái bạn thiếu
  ]
});
