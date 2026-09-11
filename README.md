# Planer korków 🥑 — wersja pod Netlify

## Co jest w paczce
- `index.html` — sam planer (plan zajęć + rozliczenia)
- `netlify/functions/store.js` — funkcja serwerowa zapisująca dane w Netlify Blobs
- `netlify.toml` — konfiguracja Netlify
- `package.json` — zależność `@netlify/blobs`

## Jak wdrożyć — instrukcja krok po kroku

### Krok 1: Konto na GitHub
1. Wejdź na [github.com](https://github.com)
2. Kliknij "Sign up", podaj e-mail, hasło, nazwę użytkownika
3. Potwierdź e-mail, jeśli GitHub o to poprosi

### Krok 2: Nowe repozytorium
1. Po zalogowaniu kliknij zielony przycisk "New" (albo "+" w prawym górnym rogu → "New repository")
2. W polu "Repository name" wpisz np. `planer-korki`
3. Zostaw "Public" zaznaczone
4. NIE zaznaczaj "Add a README file"
5. Kliknij "Create repository"

### Krok 3: Wgranie plików
1. Rozpakuj plik `planer-korki-netlify.zip` na swoim komputerze/telefonie
2. Na stronie repozytorium kliknij "uploading an existing file" (albo "Add file" → "Upload files")
3. Przeciągnij WSZYSTKIE pliki i foldery z rozpakowanej paczki (`index.html`, `netlify.toml`, `package.json`, `README.md`, cały folder `netlify`)
4. Na dole strony kliknij zielony przycisk "Commit changes"

### Krok 4: Konto na Netlify
1. Wejdź na [netlify.com](https://netlify.com)
2. Kliknij "Sign up"
3. Wybierz "Sign up with GitHub" — to najprostsza opcja, połączy oba konta automatycznie
4. Zatwierdź dostęp Netlify do GitHuba, jeśli zapyta

### Krok 5: Wdrożenie strony
1. Na pulpicie Netlify kliknij "Add new site" → "Import an existing project"
2. Wybierz "Deploy with GitHub"
3. Znajdź na liście swoje repozytorium `planer-korki` i kliknij je
4. Netlify samo wykryje ustawienia z pliku `netlify.toml` — nic nie zmieniaj
5. Kliknij "Deploy [nazwa]"
6. Poczekaj 1-2 minuty, aż status zmieni się na "Published"

### Krok 6: Gotowe
1. Na górze strony zobaczysz adres typu `nazwa-losowa-123.netlify.app` — to jest Twój planer
2. Możesz go otworzyć na telefonie i komputerze — dane będą wspólne
3. (Opcjonalnie) w Netlify → "Site settings" → "Change site name" możesz nadać ładniejszy adres, np. `planer-korki-kasia.netlify.app`
4. (Opcjonalnie) warto dodać stronę do ekranu głównego telefonu: w przeglądarce → menu → "Dodaj do ekranu głównego" — będzie wyglądać jak zwykła aplikacja

### Jeśli coś nie zadziała
- Strona się wyświetla, ale zapisywanie nie działa → sprawdź w Netlify zakładkę "Functions" - powinna tam być widoczna funkcja `store`. Jeśli jej nie ma, sprawdź czy folder `netlify/functions/store.js` na pewno trafił na GitHub w tej samej strukturze.
- Deploy kończy się błędem → sprawdź zakładkę "Deploys" → kliknij nieudany deploy → "Deploy log", tam będzie napisane co poszło nie tak (najczęściej brakujący plik).



## Aktualizacje w przyszłości
Jeśli zechcesz coś zmienić w planerze, wystarczy podmienić `index.html` w repozytorium (np. wgrać nowszą wersję) — Netlify samo przebuduje i zaktualizuje stronę.

## Uwaga
Ten plik `index.html` **nie zadziała już jako samodzielny artefakt w Claude** (zapis danych korzysta teraz z adresu `/api/store`, który istnieje tylko po wdrożeniu na Netlify). Jeśli chcesz mieć obie wersje, zachowaj osobno kopię z `window.storage` do testowania w Claude.
