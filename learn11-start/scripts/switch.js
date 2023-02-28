function calculate() {
    let chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    switch (year) {
        case 1924:
            chi = "Rat"
            break;
        case 1925:
            chi = "Ox"
            break;
        case 1926:
            chi = "Tiger";
            break;
        case 1927:
            chi = "Hare";
            break;
        case 1928:
            chi = "Dragon";
            break;
        case 1929:
            chi = "Snake";
            break;
        case 1930:
            chi = "Horse";
            break;
        case 1931:
            chi = "Goat";
            break;
        case 1932:
            chi = "Monkey";
            break;
        case 1933:
            chi = "Rooster";
            break;
        case 1934:
            chi = "Dog";
            break;
        case 1935:
            chi = "Pig";
            break;    
        case 1936:
            chi = "Rat"
            break;    
        case 1937:
            chi = "Ox"
            break;
        case 1938:
            chi = "Tiger";
            break;
        case 1939:
            chi = "Hare";
            break;
        case 1940:
            chi = "Dragon";
            break;
        case 1941:
            chi = "Snake";
            break;
        case 1942:
            chi = "Horse";
            break;
        case 1943:
            chi = "Goat";
            break;
        case 1944:
            chi = "Horse";
            break;
        case 1945:
            chi = "Rooster";
            break;
        case 1946:
            chi = "Dog";
            break;
        case 1947:
            chi = "Pig";
            break;
        case 1948:
            chi = "Rat"
            break;
        case 1949:
            chi = "Ox"
            break;
        case 1950:
            chi = "Tiger";
            break;
        case 1951:
            chi = "Hare";
            break;
        case 1952:
            chi = "Dragon";
            break;
        case 1953:
            chi = "Snake";
            break;
        case 1954:
            chi = "Horse";
            break;
        case 1955:
            chi = "Goat";
            break;
        case 1956:
            chi = "Horse";
            break;
        case 1957:
            chi = "Rooster";
            break;
        case 1958:
            chi = "Dog";
            break;
        case 1959:
            chi = "Pig";
            break;
        case 1960:
            chi = "Rat"
            break;
        case 1961:
            chi = "Ox"
            break;
        case 1962:
            chi = "Tiger";
            break;
        case 1963:
            chi = "Hare";
            break;
        case 1964:
            chi = "Dragon";
            break;
        case 1965:
            chi = "Snake";
            break;
        case 1966:
            chi = "Horse";
            break;
        case 1967:
            chi = "Goat";
            break;
        case 1968:
            chi = "Monkey";
            break;
        case 1969:
            chi = "Rooster";
            break;
        case 1970:
            chi = "Dog";
            break;
        case 1971:
            chi = "Pig";
            break;
        case 1972:
            chi = "Rat"
            break;
        case 1973:
            chi = "Ox"
            break;
        case 1974:
            chi = "Tiger";
            break;
        case 1975:
            chi = "Hare";
            break;
        case 1976:
            chi = "Dragon";
            break;
        case 1977:
            chi = "Snake";
            break;
        case 1978:
            chi = "Horse";
            break;
        case 1979:
            chi = "Goat";
            break;
        case 1980:
            chi = "Monkey";
            break;
        case 1981:
            chi = "Rooster";
            break;
        case 1982:
            chi = "Dog";
            break;
        case 1983:
            chi = "Pig";
            break;
        case 1984:
            chi = "Rat"
            break;
        case 1985:
            chi = "Ox"
            break;
        case 1986:
            chi = "Tiger";
            break;
        case 1987:
            chi = "Hare";
            break;
        case 1988:
            chi = "Dragon";
            break;
        case 1989:
            chi = "Snake";
            break;
        case 1990:
            chi = "Horse";
            break;
        case 1991:
            chi = "Goat";
            break;
        case 1992:
            chi = "Monkey";
            break;
        case 1993:
            chi = "Rooster";
            break;
        case 1994:
            chi = "Dog";
            break;
        case 1995:
            chi = "Pig";
            break;
        case 1996:
            chi = "Rat"
            break;
        case 1997:
            chi = "Ox"
            break;
        case 1998:
            chi = "Tiger";
            break;
        case 1999:
            chi = "Hare";
            break;
        case 2000:
            chi = "Dragon";
            break;
        case 2001:
            chi = "Snake";
            break;
        case 2002:
            chi = "Horse";
            break;
        case 2003:
            chi = "Goat";
            break;
        case 2004:
            chi = "Monkey";
            break;
        case 2005:
            chi = "Rooster";
            break;
        case 2006:
            chi = "Dog";
            break;
        case 2007:
            chi = "Pig";
            break;
        case 2008:
            chi = "Rat"
            break;
        case 2009:
            chi = "Ox"
            break;
        case 2010:
            chi = "Tiger";
            break;
        case 2011:
            chi = "Hare";
            break;
        case 2012:
            chi = "Dragon";
            break;
        case 2013:
            chi = "Snake";
            break;
        case 2014:
            chi = "Horse";
            break;
        case 2015:
            chi = "Goat";
            break;
        case 2016:
            chi = "Monkey";
            break;
        case 2017:
            chi = "Rooster";
            break;
        case 2018:
            chi = "Dog";
            break;
        case 2019:
            chi = "Pig";
            break;
        case 2020:
            chi = "Rat"
            break;
        case 2021:
            chi = "Ox"
            break;
        case 2022:
            chi = "Tiger";
            break;
        case 2023:
            chi = "Hare";
            break;
        default:
            chi = "That year is not included in my list";
// impractical way of using a switch statement
// if else would've been better code management

/*

var rat = [1924, ..., 2020];
for (let i = 0; i < rat.length; i++) {
    if (rat[i] == year) {
        chi = "Rat"
        break;
    }
}

or

if (year == 1924 || ... || year == 2020) {
    chi = "Rat"
}

*/
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}