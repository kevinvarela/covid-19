const countriesKeys = ["China", "Italy", "Spain", "USA", "Germany", "Iran", "France", "S. Korea", "Switzerland", "UK", "Netherlands", "Austria", "Belgium", "Norway", "Sweden", "Canada", "Denmark", "Portugal", "Malaysia", "Brazil", "Australia", "Japan", "Czechia", "Turkey", "Israel", "Ireland", "Diamond Princess", "Luxembourg", "Pakistan", "Chile", "Poland", "Ecuador", "Greece", "Finland", "Qatar", "Iceland", "Indonesia", "Singapore", "Thailand", "Saudi Arabia", "Slovenia", "Romania", "India", "Peru", "Bahrain", "Philippines", "Russia", "Estonia", "Egypt", "Hong Kong", "South Africa", "Lebanon", "Iraq", "Croatia", "Mexico", "Panama", "Colombia", "Slovakia", "Kuwait", "Serbia", "Bulgaria", "San Marino", "Armenia", "Argentina", "Taiwan", "UAE", "Algeria", "Latvia", "Costa Rica", "Dominican Republic", "Uruguay", "Hungary", "Jordan", "Lithuania", "Morocco", "Vietnam", "Bosnia and Herzegovina", "Faeroe Islands", "Andorra", "North Macedonia", "Cyprus", "Brunei", "Moldova", "Sri Lanka", "Albania", "Belarus", "Malta", "Venezuela", "Burkina Faso", "Tunisia", "Guadeloupe", "Senegal", "Kazakhstan", "Azerbaijan", "Cambodia", "Palestine", "New Zealand", "Oman", "Georgia", "Trinidad and Tobago", "Ukraine", "Réunion", "Uzbekistan", "Cameroon", "Martinique", "Liechtenstein", "Channel Islands", "Bangladesh", "Afghanistan", "Honduras", "DRC", "Nigeria", "Cuba", "Ghana", "Puerto Rico", "Jamaica", "Bolivia", "Guyana", "Paraguay", "Macao", "Monaco", "French Guiana", "Guatemala", "Rwanda", "Montenegro", "Togo", "French Polynesia", "Guam", "Mauritius", "Barbados", "Ivory Coast", "Kyrgyzstan", "Maldives", "Mayotte", "Gibraltar", "Mongolia", "Ethiopia", "Kenya", "Seychelles", "Equatorial Guinea", "Tanzania", "U.S. Virgin Islands", "Gabon", "Aruba", "Saint Martin", "Suriname", "Bahamas", "New Caledonia", "Cayman Islands", "Curaçao", "Cabo Verde", "CAR", "Congo", "El Salvador", "Liberia", "Madagascar", "Namibia", "St. Barth", "Zimbabwe", "Sudan", "Angola", "Benin", "Bermuda", "Bhutan", "Fiji", "Greenland", "Guinea", "Haiti", "Isle of Man", "Mauritania", "Nicaragua", "Saint Lucia", "Zambia", "Nepal", "Antigua and Barbuda", "Chad", "Djibouti", "Eritrea", "Gambia", "Vatican City", "Montserrat", "Niger", "Papua New Guinea", "St. Vincent Grenadines", "Sint Maarten", "Somalia", "Eswatini", "Timor-Leste", "Uganda"]
var urlBase = "https://corona.lmao.ninja/v2/countries/{{country}}";
var globalGetCountry;
var translatedCountries;
var globalLanguage;
var autocomplete;

function getCountryKeyByCountryName(country) {
    return countriesTranslates.filter(c => c[globalLanguage] == country)[0].key
}

document.addEventListener('DOMContentLoaded', function () {
    initAutocomplete()
});

function initAutocomplete() {
    var option = {
        data: translatedCountries,
        limit: 4,
        onAutocomplete: function (country) {
            var countryKey = getCountryKeyByCountryName(country)
            globalGetCountry(countryKey);
        }
    };
    var elems = document.querySelectorAll('.autocomplete');
    autocomplete = M.Autocomplete.init(elems, option);
}

var app = new Vue({
    el: '#app',
    data: {
        loading: false,
        countryInfo: {},
        infoKeys: [],
        language: "es"
    },
    methods: {
        getCountryData: function (country) {
            this.loading = true;
            this.infoKeys = []
            axios.get(urlBase.replace("{{country}}", country))
                .then(
                    response => {
                        this.countryInfo = this.mapResponse(response.data);
                        this.infoKeys = Object.keys(this.countryInfo);
                        this.loading = false;
                    })
        },
        mapResponse: function (data) {
            return {
                cases: data.cases,
                actives: data.active,
                today_cases: data.todayCases,
                deaths: data.deaths,
                today_deaths: data.todayDeaths,
                recovered: data.recovered,
                critical: data.critical
            }
        },
        translate: function (key) {
            return i18n[this.getLanguage()][key]
        },
        translateCountries: function () {
            var countriesI18n = {}
            countriesTranslates.forEach(a => countriesI18n["" + a[this.getLanguage()]] = null);
            return countriesI18n;
        },
        getLanguage: function () {
            // localStorage.getItem('language') != undefined ? localStorage.getItem('language') : defaultLanguage;
            return this.language
        }
    },
    computed: {
        selectLanguage: {
            get: function () {
                return this.language;
            },
            set: function (newLanguage) {
                this.language = newLanguage;
                globalLanguage = this.language;
                autocomplete[0].updateData(this.translateCountries())
                // localStorage.setItem('language', lang);
            }
        }
    },
    mounted: function () {
        globalGetCountry = this.getCountryData;
        globalLanguage = this.language;
        translatedCountries = this.translateCountries();
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
