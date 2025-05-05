# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
pin "chart.js", to: "https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"
pin "@fullcalendar/core", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/core@5.10.1/main.min.js"
pin "@fullcalendar/daygrid", to: "https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@5.10.1/main.min.js"