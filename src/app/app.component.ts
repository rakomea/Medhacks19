import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'K.H.A.R.E MedHacks 2019';
  currentSection: string = "";
  name: string;//name of drug
  country: string;//
  fromCountry:string;
  toCountry:string;
  searchResults;
  dose:string;//dosage
  side_effects:string;//side effect of drug
  foundDrug;
  

  getTitle(): string {
    return this.title;
  }

  navigateHome(): void {
    this.currentSection = "home";
  }

  navigateAbout(): void {
    this.currentSection = "about";
  }
  toStringname(): string {
    return this.foundDrug.name;
  }
  toStringcountry(): string {
    return this.foundDrug.country;
  }
  toStringdosage(): string {
    return this.foundDrug.dosage;
  }
  
  searchFunction(): void {
    var key;
    this.medData.forEach(x => {
      if (x.name == this.name && x.country == this.fromCountry) {
        key = x.seq;
      }
    });

    this.searchResults = this.medData.filter(x => {
        x.seq = key;
      this.foundDrug = x;
    });
  }

  searchFunction1(): void {
    this.searchResults = "test";
    console.log(this.fromCountry);
    console.log(this.name);
  }

  medData = [
    {  
      "name":"Advil",
      "country":"USA",
      "sideeffect":"Abdominal pain, acid or sour stomach, belching bloating",
      "dosage":"200 to 400 mg orally every 4 to 6 hours as needed, 1200mg/day max",
      "seq":1
   },
 
   {  
      "name":"Aleve",
      "country":"USA",
      "sideeffect":"Belching, bruising, labored breathing, headache",
      "dosage":"250 mg to 500 mg twice a day",
      "seq":2
   },
   {  
      "name":"Allegra",
      "country":"USA",
      "sideeffect":"Vomiting, back pain, chills, coughing",
      "dosage":"60 mg twice daily or 180 mg once daily with water",
      "seq":3
   },

   {  
      "name":"Alfam, Bren, Brufen, Febrilix",
      "country":"India",
      "sideeffect":"Upset stomach, mild heartburn, nausea, vomiting",
      "dosage":"An initial dose of 10 mg is followed by two doses of 5 mg each, after 24 and 48 hours.",
      "seq":1
   },
 
   {  
      "name":"Naprosyn, Napryn, Xenar-Cz",
      "country":"India",
      "sideeffect":"60 mg twice daily or 180 mg once daily with water ",
      "dosage":"Airway-FX (10mg/120mg), Montemac-FX, Allegra (30 mg)",
      "seq":2
   },
   {  
      "name":"Airway-FX, Montemac-FX, Allegra",
      "country":"India",
      "sideeffect":"Nausea, diarrhea, upset stomach, drowsiness, tired feeling. ",
      "dosage":"Airway-FX (10mg/120mg), Montemac-FX, Allegra (30 mg)",
      "seq":3
   },

   {  
      "name":"Nurofen",
      "country":"South_Africa",
      "sideeffect":"Abdominal pain, excessive gas, and bloating.",
      "dosage":"200 to 400 mg orally, approximately 2 tablets every 8 hours.",
      "seq":1
   },
 
   {  
      "name":"Napflam, Nafasol",
      "country":"South_Africa",
      "sideeffect":"Blood in urine, constipation, migraine, suicidal thoughts. ",
      "dosage":"250 mg to 500 mg twice a day every 6 hours.",
      "seq":2
   },
   {  
      "name":"Telfast 120, Fexofenadine, Biotech",
      "country":"South_Africa",
      "sideeffect":"Headache, drowsiness, nausea.",
      "dosage":"1 pill every 2 hours. Max 6 pills per day.",
      "seq":3
   },
   {  
      "name":"Aktren, Dolormin, Dolgit",
      "country":"Germany",
      "sideeffect":"Chest pain, weakness, swelling, nausea, fever, bruising.",
      "dosage":"200-400 mg every 4-6 hours.",
      "seq":1
   },
 
   {  
      "name":"Aleve, Dolormin-mit, Naproxen",
      "country":"Germany",
      "sideeffect":"Belching, bruising, labored breathing, headache",
      "dosage":"250 mg to 500 mg twice a day",
      "seq":2
   },
   {  
      "name":"Fexofenaderm, Telfast",
      "country":"Germany",
      "sideeffect":"Belching, bruising, labored breathing, headache.",
      "dosage":"60 mg twice daily.",
      "seq":3
   }


 ]
}
