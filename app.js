const countries = ["China", "Italy", "Spain", "USA", "Germany", "Iran", "France", "S. Korea", "Switzerland", "UK", "Netherlands", "Austria", "Belgium", "Norway", "Sweden", "Canada", "Denmark", "Portugal", "Malaysia", "Brazil", "Australia", "Japan", "Czechia", "Turkey", "Israel", "Ireland", "Diamond Princess", "Luxembourg", "Pakistan", "Chile", "Poland", "Ecuador", "Greece", "Finland", "Qatar", "Iceland", "Indonesia", "Singapore", "Thailand", "Saudi Arabia", "Slovenia", "Romania", "India", "Peru", "Bahrain", "Philippines", "Russia", "Estonia", "Egypt", "Hong Kong", "South Africa", "Lebanon", "Iraq", "Croatia", "Mexico", "Panama", "Colombia", "Slovakia", "Kuwait", "Serbia", "Bulgaria", "San Marino", "Armenia", "Argentina", "Taiwan", "UAE", "Algeria", "Latvia", "Costa Rica", "Dominican Republic", "Uruguay", "Hungary", "Jordan", "Lithuania", "Morocco", "Vietnam", "Bosnia and Herzegovina", "Faeroe Islands", "Andorra", "North Macedonia", "Cyprus", "Brunei", "Moldova", "Sri Lanka", "Albania", "Belarus", "Malta", "Venezuela", "Burkina Faso", "Tunisia", "Guadeloupe", "Senegal", "Kazakhstan", "Azerbaijan", "Cambodia", "Palestine", "New Zealand", "Oman", "Georgia", "Trinidad and Tobago", "Ukraine", "Réunion", "Uzbekistan", "Cameroon", "Martinique", "Liechtenstein", "Channel Islands", "Bangladesh", "Afghanistan", "Honduras", "DRC", "Nigeria", "Cuba", "Ghana", "Puerto Rico", "Jamaica", "Bolivia", "Guyana", "Paraguay", "Macao", "Monaco", "French Guiana", "Guatemala", "Rwanda", "Montenegro", "Togo", "French Polynesia", "Guam", "Mauritius", "Barbados", "Ivory Coast", "Kyrgyzstan", "Maldives", "Mayotte", "Gibraltar", "Mongolia", "Ethiopia", "Kenya", "Seychelles", "Equatorial Guinea", "Tanzania", "U.S. Virgin Islands", "Gabon", "Aruba", "Saint Martin", "Suriname", "Bahamas", "New Caledonia", "Cayman Islands", "Curaçao", "Cabo Verde", "CAR", "Congo", "El Salvador", "Liberia", "Madagascar", "Namibia", "St. Barth", "Zimbabwe", "Sudan", "Angola", "Benin", "Bermuda", "Bhutan", "Fiji", "Greenland", "Guinea", "Haiti", "Isle of Man", "Mauritania", "Nicaragua", "Saint Lucia", "Zambia", "Nepal", "Antigua and Barbuda", "Chad", "Djibouti", "Eritrea", "Gambia", "Vatican City", "Montserrat", "Niger", "Papua New Guinea", "St. Vincent Grenadines", "Sint Maarten", "Somalia", "Eswatini", "Timor-Leste", "Uganda"]
const countriesAutocomplete = { "China": null, "Italy": null, "Spain": null, "USA": null, "Germany": null, "Iran": null, "France": null, "S. Korea": null, "Switzerland": null, "UK": null, "Netherlands": null, "Austria": null, "Belgium": null, "Norway": null, "Sweden": null, "Canada": null, "Denmark": null, "Portugal": null, "Malaysia": null, "Brazil": null, "Australia": null, "Japan": null, "Czechia": null, "Turkey": null, "Israel": null, "Ireland": null, "Diamond Princess": null, "Luxembourg": null, "Pakistan": null, "Chile": null, "Poland": null, "Ecuador": null, "Greece": null, "Finland": null, "Qatar": null, "Iceland": null, "Indonesia": null, "Singapore": null, "Thailand": null, "Saudi Arabia": null, "Slovenia": null, "Romania": null, "India": null, "Peru": null, "Bahrain": null, "Philippines": null, "Russia": null, "Estonia": null, "Egypt": null, "Hong Kong": null, "South Africa": null, "Lebanon": null, "Iraq": null, "Croatia": null, "Mexico": null, "Panama": null, "Colombia": null, "Slovakia": null, "Kuwait": null, "Serbia": null, "Bulgaria": null, "San Marino": null, "Armenia": null, "Argentina": null, "Taiwan": null, "UAE": null, "Algeria": null, "Latvia": null, "Costa Rica": null, "Dominican Republic": null, "Uruguay": null, "Hungary": null, "Jordan": null, "Lithuania": null, "Morocco": null, "Vietnam": null, "Bosnia and Herzegovina": null, "Faeroe Islands": null, "Andorra": null, "North Macedonia": null, "Cyprus": null, "Brunei": null, "Moldova": null, "Sri Lanka": null, "Albania": null, "Belarus": null, "Malta": null, "Venezuela": null, "Burkina Faso": null, "Tunisia": null, "Guadeloupe": null, "Senegal": null, "Kazakhstan": null, "Azerbaijan": null, "Cambodia": null, "Palestine": null, "New Zealand": null, "Oman": null, "Georgia": null, "Trinidad and Tobago": null, "Ukraine": null, "Réunion": null, "Uzbekistan": null, "Cameroon": null, "Martinique": null, "Liechtenstein": null, "Channel Islands": null, "Bangladesh": null, "Afghanistan": null, "Honduras": null, "DRC": null, "Nigeria": null, "Cuba": null, "Ghana": null, "Puerto Rico": null, "Jamaica": null, "Bolivia": null, "Guyana": null, "Paraguay": null, "Macao": null, "Monaco": null, "French Guiana": null, "Guatemala": null, "Rwanda": null, "Montenegro": null, "Togo": null, "French Polynesia": null, "Guam": null, "Mauritius": null, "Barbados": null, "Ivory Coast": null, "Kyrgyzstan": null, "Maldives": null, "Mayotte": null, "Gibraltar": null, "Mongolia": null, "Ethiopia": null, "Kenya": null, "Seychelles": null, "Equatorial Guinea": null, "Tanzania": null, "U.S. Virgin Islands": null, "Gabon": null, "Aruba": null, "Saint Martin": null, "Suriname": null, "Bahamas": null, "New Caledonia": null, "Cayman Islands": null, "Curaçao": null, "Cabo Verde": null, "CAR": null, "Congo": null, "El Salvador": null, "Liberia": null, "Madagascar": null, "Namibia": null, "St. Barth": null, "Zimbabwe": null, "Sudan": null, "Angola": null, "Benin": null, "Bermuda": null, "Bhutan": null, "Fiji": null, "Greenland": null, "Guinea": null, "Haiti": null, "Isle of Man": null, "Mauritania": null, "Nicaragua": null, "Saint Lucia": null, "Zambia": null, "Nepal": null, "Antigua and Barbuda": null, "Chad": null, "Djibouti": null, "Eritrea": null, "Gambia": null, "Vatican City": null, "Montserrat": null, "Niger": null, "Papua New Guinea": null, "St. Vincent Grenadines": null, "Sint Maarten": null, "Somalia": null, "Eswatini": null, "Timor-Leste": null, "Uganda": null }
var urlBase = "https://corona.lmao.ninja/countries/{{country}}";
var funcionloca;

document.addEventListener('DOMContentLoaded', function (fun) {
    var getCountryData = fun;
    var option = {
        data: countriesAutocomplete,
        limit: 3,
        onAutocomplete: function (country) {
            funcionloca(country);
        }
    };
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, option);
});

var app = new Vue({
    el: '#app',
    data: {
        loading: false,
        countryInfo: {},
        infoKeys: []
    },
    methods: {
        getCountryData: function (country) {
            this.loading = true;
            axios.get(urlBase.replace("{{country}}", country))
                .then(
                    response => {
                        this.countryInfo = null;
                        this.countryInfo = this.mapResponse(response.data);
                        this.infoKeys = Object.keys(this.countryInfo);
                        this.loading = false;
                    })
        },
        mapResponse: function (data) {
            return {
                cases: data.cases,
                actives: data.active,
                //today_cases: data.todayCases,
                deaths: data.deaths,
                //today_deaths: data.todayDeaths,
                recovered: data.recovered,
                critical: data.critical
            }
        }
    },
    mounted: function () {
        funcionloca = this.getCountryData;
    },
    filters: {
        upper: function (value) {
            return value.toUpperCase()
        },
        separateKey: function (key) {
            var separatedKey = "";
            var splitedKey = key.split("_")
            splitedKey.forEach(aa => separatedKey += (" " + aa))
            return separatedKey.trim();
        }
    }
})
