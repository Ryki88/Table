/*
Enrico van der List
Tabel je kunt hem overal inladen en eventueel uitlezen of iets aanpassen zodat je het uit een json file kunt halen.
*/
$(document).ready(function ()
{
        // de Data
            var data = new Array();
            var firstNames = // voornaam
            [
                "Enrico", "Tommy", "Frans", "Arno", "Krijn", "Noortje", "Kim", "John" , "Kevin", "Anniek", "Merel" // namen is aanvulbaar
            ];
            var lastNames = // achternaam
            [
                "van der List", "Gijsberts", "Heesakker", "Borgers", "van Grinsven", "Simons", "Vrolijk", "Dils", "Vlems", "Smams" // achternaam aanvulbaar
            ];
            var productNames = // biersoortnamen bijvoorbeeld
            [
                "Imperial Doppelbock", "D'n Ossebock", "Hommeles Bokkepruik", "Zure van Tildonk", "Smaragd" // biersoorten aanvulbaar
            ];
            var priceValues = // prijs per bier
            [
                "2.25", "2.35", "2.20", "2.00", "2.25" // verschillende prijzen aanvulbaar
            ];
            for (var i = 0; i < 20; i++) { // tabel wordt niet groter dan 10 waarde kun je altijd zelf aanpassen zodat de tabel uiteindelijk gevuld wordt
                var row = {};
                var productindex = Math.floor(Math.random() * productNames.length);
                var price = parseFloat(priceValues[productindex]); // waarde van een biertje
                var quantity = 1 + Math.round(Math.random() * 2); // Random getal tussen de 0-3 
                
                row["Voornaam"] = firstNames[Math.floor(Math.random() * firstNames.length)]; // Naam wordt random geladen
                row["Achternaam"] = lastNames[Math.floor(Math.random() * lastNames.length)]; // Achternaam wordt random geladen
                row["productname"] = productNames[productindex]; // biersoortnaam
                row["price"] = price; // prijs per bier
                row["quantity"] = quantity; // het aantal
                row["total"] = price * quantity; // totaal prijs berekend: prijs * aantal = totaal prijs
                
                data[i] = row;
            }
            var source =
            {
                localdata: data,
                datatype: "array",
                datafields:
                [
                    { name: 'Voornaam', type: 'string' }, // voornaam
                    { name: 'Achternaam', type: 'string' }, // achternaam
                    { name: 'productname', type: 'string' }, // productnaam
                    { name: 'quantity', type: 'number' },   // het aantal stuks
                    { name: 'price', type: 'number' }, // prijs
                    { name: 'total', type: 'number' } // totaal
                ]
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
       
            $("#jqxgrid").jqxGrid(
            {
                width: 850,
                source: dataAdapter,
                columnsresize: true,
                columns: [
                  { text: 'Voornaam', datafield: 'Voornaam', width: 120 },
                  { text: 'Achternaam', datafield: 'Achternaam', width: 120 },
                  { text: 'Biersoort', datafield: 'productname', width: 240 },
                  { text: 'Aantal', datafield: 'quantity', width: 80, cellsalign: 'right' },
                  { text: 'Prijs per bier', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            });
});