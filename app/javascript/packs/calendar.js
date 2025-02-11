import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

document.addEventListener("turbo:load", () => {
  console.log("Calendar.js loaded");

  const calendarEl = document.getElementById("calendar");
  if (!calendarEl) {
    console.error("Calendar element not found");
    return;
  }

  console.log("Initializing FullCalendar");

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    events: "/tasks.json", // タスクデータを取得
    editable: true,
    selectable: true,
    dateClick: function (info) {
      console.log("Clicked on date:", info.dateStr);
    },
  });

  calendar.render();
});
