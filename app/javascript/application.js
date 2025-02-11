import "@hotwired/turbo-rails";
import "controllers";
import "bootstrap";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

document.addEventListener('turbo:load', () => {
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      events: '/tasks.json'
    });
    calendar.render();
  }
});