/**
 * Napisz skrypt wykona walidację formularza w pliku `form.html` wg założeń:
 * - nie ma połączenia między Krakowem a Gdańskiem i między Gdańskiem a Poznaniem
 * - data w polu "start-date" nie może być wcześniejsza od bieżącej daty
 * - data w polu "end-date" musi być późniejsza od daty w "start-date"
 * Rozwiązanie proste polega na zablokowaniu wysłania formularza dla niepoprawnych danych np. gdy wybrano Kraków i Gdańsk lub 1.02.2023 i 1.02.2023,
 * po próbie wysłania z błędami należy użytkownikowi wysłwietlić błędy w odbpowiednich elementach <span> pod polami formularza.
 * Rozwiązanie zawansowane polega na dynamicznych zmianach w formularzu (zmian atrybutów pól), aby użytkownik nie mógł wybrać
 * niepoprawnych danych.
 * Uwaga!
 * Nie można zmieniać pliku form.html!
 * Wskazówki
 * zdarzenie 'input' wywoływane jest, gdy użytkownik wybierze lub wpisze dane w polu formularza
 * zdarzenie 'change' wywoływane jest, gdy użytkownik tylko zmieni wartość w polu
 * funkcja obiektu zdarzenia blokująca dalszą propagację zdarzenia to preventDefault()
 */
