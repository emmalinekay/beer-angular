import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myBeers: any[] = []
  highBeers: any[] = [
    {
    name: "Arrogant Brewing Double Bastard Ale",
    location: "Escondido, CA",
    style: 'Dark Ale',
    ibu: '',
    abv: 11,
    description: "Originally brewed to celebrate the one-year anniversary of Arrogant Bastard Ale, Double Bastard Ale debuted in November 1998 as an amped-up version of that already aggressive beer. A huge malt bill and an unreasonable amount of hops make this ale one that will be appreciated by only a few, and that’s just fine with us. We didn’t brew this dark amber monster to please anyone other than ourselves.",
    image: '../assets/highbeer/Arrogant-Brewing.png'
  },
  {
    name: "Flying Dog Double Dog Double Pale Ale",
    location: "Frederick, MA",
    style: "Pale Ale",
    ibu: '',
    abv: 11.5,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/Flying-Dog-Double.png'
  },
  {
    name: "Rogue XS Old Crustacean",
    location: "Newport, OR",
    style: "American barleywine",
    ibu: '',
    abv: 11.5,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/Rogue-XS.png'
  },
  {
    name: "Dogfish Head Palo Santo Marron",
    location: "Milton, DE",
    style: "Brown Ale",
    ibu: '',
    abv: 12,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/Dogfish-Head.png'
  },
  {
    name: "Evil Twin Even More Jesus",
    location: "Gypsy/Westbrook, SC",
    style: "Stout",
    ibu: '',
    abv: 12,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/Evil-Twin.png'
  },
  {
    name: "Founders Devil Dancer",
    location: "Grand Rapids, MI",
    style: "Pale Ale",
    ibu: '',
    abv: 12,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/Founders-Devil-Dancer.jpg'
  },
  {
    name: "Avery The Czar",
    location: "Boulder, CO",
    style: "Stout",
    ibu: '',
    abv: 11,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/avery-the-czar.jpg'
  },
  {
    name: "Founders Imperial Stout",
    location: "Grand Rapids, MI",
    style: "Stout",
    ibu: '',
    abv: 10.5,
    description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
    image: '../assets/highbeer/Founders-Imperial-Stout.png'
  },
  ];

  octBeers: any[] = [
    {
      name: "Samuel Adams Oktoberfest",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/Sam-Adams.png'
    },
    {
      name: "Spaten Oktoberfestbier Ur-Märzen",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/Spaten.png'
    },
    {
      name: "Great Lakes Oktoberfest",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/Great-lakes.png'
    },
    {
      name: "Weihenstephaner Oktoberfestbier",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/Weihenstephaner-Oktoberfestbier.png'
    },
    {
      name: "Paulaner Oktoberfest-Märzen",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/paulaner-oktoberfest.png'
    },
    {
      name: "Hofbräu Oktoberfestbier",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/hb-oktoberfest-bier.png'
    },
    {
      name: "Beck’s Oktoberfest",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/Becks-Oktoberfest.png'
    },
    {
      name: "Brooklyn Oktoberfest",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/BrooklynOktoberfest.png'
    },
    {
      name: "Shiner Oktoberfest",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/octbeers/ShinerOctoberfest.png'
    },
  ]

  usaBeers: any[] = [
    {
      name: "Budweiser Light",
      location: "",
      style: "",
      ibu: '',
      abv: 10.5,
      description: '',
      image: '../assets/usabeers/bud-light.png'
    },
    {
      name: "Coors Light",
      location: "",
      style: "",
      ibu: '',
      abv: '',
      description: '',
      image: '../assets/usabeers/coors-light.png'
    },
    {
      name: "Miller Lite",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: { type: String }
    },
    {
      name: "Budweiser",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/usabeers/miller-lite.png'
    },
    {
      name: "Natural Light",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/usabeers/Natural-Light.png'
    },
    {
      name: "Busch Lights",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/usabeers/buschlight.png'
    },
    {
      name: "Blue Moon Belgian Ale",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/usabeers/bluemoonbelgianwhite.png'
    },
    {
      name: "Yuengling Lager",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/usabeers/Yuengling-Lager.png'
    },
    {
      name: "Sam Adams Seasonal",
      location: "Grand Rapids, MI",
      style: "Stout",
      ibu: '',
      abv: 10.5,
      description: "Double Dog was originally released to celebrate the brewery's 10th birthday. It has an aggressive tropical hop aroma and flavor,\" says Brandon. \"The alcohol is well-integrated, the body is rich, and the artwork on the bottle is always a bit disturbing.",
      image: '../assets/usabeers/Sam-Adams.png'
    },
  ]

  errorMessage: string;

  constructor(
    private beerList: BeerService,
  ) { }


  ngOnInit() {
    this.beerList.getMyBeers()
      .subscribe(
        (listOfBeers: any[]) => {
            this.myBeers = listOfBeers;
        },

        (errInfo) => {
            if (errInfo.status === 401) {
                this.errorMessage = 'You need to be logged in.';
            }
            else {
                this.errorMessage = 'Something went wrong. Try again later.';
            }
        }
      );

  }

  }
